"""
=============================================================================
TATUCAR VEÍCULOS - ROBÔ DE AUTO-RESPOSTA WHATSAPP (WILLIAN AI)
=============================================================================
SYSTEM PROMPT OFICIAL: willian | tatuCAR
- Endereço: R. Enette Dubard, 1111 — Tatuquara, Curitiba/PR
- Horário: Seg a Sáb, 08h30 às 18h30. Domingo fechado.
- Entregas: PR, SC e SP
- Aceita na troca: carro ou moto (quitado ou financiado)
- Segmento: Apenas carros. Não vende caminhões. Não vende projetos de kitnet.
- Roteiro oficial de 8 passos para Ficha de Triagem (Simulação de Crédito)
- Regra Inegociável: Uma pergunta por turno, mensagens curtas humanizadas
- Direcionamento humano imediato para Avalista
=============================================================================
"""

import os
import sys
import json
import time
import re
from http.server import HTTPServer, BaseHTTPRequestHandler

PORT = 8000
STOCK_FILE = os.path.join(os.path.dirname(__file__), 'assets', 'tatucar_cars.json')
LEADS_FILE = os.path.join(os.path.dirname(__file__), 'leads_whatsapp_capturados.json')
STATE_FILE = os.path.join(os.path.dirname(__file__), 'chat_states.json')

def load_states():
    if os.path.exists(STATE_FILE):
        try:
            with open(STATE_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            return {}
    return {}

def save_states(states):
    try:
        with open(STATE_FILE, 'w', encoding='utf-8') as f:
            json.dump(states, f, ensure_ascii=False, indent=2)
    except Exception:
        pass

def load_stock():
    if os.path.exists(STOCK_FILE):
        try:
            with open(STOCK_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            pass
    return []

def save_lead(lead_data):
    leads = []
    if os.path.exists(LEADS_FILE):
        try:
            with open(LEADS_FILE, 'r', encoding='utf-8') as f:
                leads = json.load(f)
        except Exception:
            leads = []
    leads.insert(0, lead_data)
    with open(LEADS_FILE, 'w', encoding='utf-8') as f:
        json.dump(leads, f, ensure_ascii=False, indent=2)
    print(f"[NOVO LEAD] {lead_data.get('name')} salvo no arquivo {LEADS_FILE}")

def generate_willian_reply(sender_phone, raw_text):
    text = raw_text.lower().strip()
    states = load_states()
    user_state = states.get(sender_phone, {"step": 1, "data": {}})

    # 1. Checa se o cliente enviou CPF (Validação de 11 dígitos)
    cpf_digits = re.sub(r'\D', '', raw_text)
    if len(cpf_digits) == 11 or re.search(r'\d{3}\.?\d{3}\.?\d{3}-?\d{2}', raw_text):
        cpf = raw_text.strip()
        user_state["data"]["cpf"] = cpf
        user_state["step"] = 7
        states[sender_phone] = user_state
        save_states(states)
        save_lead({
            "id": f"wa-{int(time.time())}",
            "phone": sender_phone,
            "cpf": cpf,
            "name": user_state["data"].get("name", f"Cliente ({sender_phone})"),
            "notes": f"Triagem Willian: CPF {cpf} coletado. CNH e Entrada em análise.",
            "stage": "simulacao",
            "date": time.strftime("%Y-%m-%d %H:%M:%S")
        })
        return "Ah, e só pra completar sua simulação 😉 você possui CNH (Habilitação)? 🚗"

    # 2. Regra Avalista / Escalação Humana Imediata
    if any(k in text for k in ['avalista', 'reprovado', 'nome sujo', 'restricao', 'score baixo']):
        return "🎤 [Mensagem de Áudio 0:15]\n\"Fica tranquilo, isso acontece bastante! A gente consegue colocar um avalista da sua confiança para liberar seu crédito na hora. Já estou acionando o Alejandro aqui na loja e ele vai dar continuidade direta com você agora mesmo!\""

    # 3. Regra Estoque / Catálogo -> Proibido lista solta! OBRIGATORIAMENTE ÁUDIO
    if any(k in text for k in ['estoque', 'catalogo', 'lista', 'o que tem', 'quais carros']):
        return "🎤 [Mensagem de Áudio 0:14]\n\"Fala meu amigo, tudo bem? Olha só, aqui na TatuCar a gente tem mais de 70 opções no nosso estoque hoje, com muita variedade! Me conta uma coisa: você já tem algum modelo ou perfil em mente para o seu dia a dia?\""

    # 3. Regra Preço antes da triagem
    if any(k in text for k in ['quanto custa', 'qual o valor', 'qual preco', 'tá quanto', 'ta quanto']) and user_state["step"] < 3:
        return "Me conta uma coisa antes: você pretende financiar ou comprar à vista?"

    # 4. Regra Troca
    if any(k in text for k in ['troca', 'meu carro', 'minha moto', 'pega usado', 'foto']):
        user_state["data"]["troca"] = True
        states[sender_phone] = user_state
        save_states(states)
        return "Ele está quitado e com a documentação em dia?"

    if user_state.get("data", {}).get("troca") and any(k in text for k in ['quitado', 'em dia', 'financiado', 'sim', 'nao', 'não']):
        user_state["data"]["troca"] = False
        states[sender_phone] = user_state
        save_states(states)
        return "🎤 [Mensagem de Áudio 0:12]\n\"E quanto você pede nele para eu mandar para o gerente? Vamos dar continuidade na sua nova aquisição!\""

    # 5. Regra Objeção de Distância
    if any(k in text for k in ['longe', 'distante', 'moro em', 'outra cidade', 'sc', 'sp']):
        return "Nós entregamos na sua casa sem custo nenhum ou pagamos para você vir até a loja! Vendemos muitos carros na sua região porque os carros aí costumam ser muito caros, e aqui nós garantimos o melhor preço com a mesma qualidade!"

    # 6. Regra Avalista / Escalação Humana Imediata
    if any(k in text for k in ['avalista', 'reprovado', 'nome sujo', 'restricao', 'score baixo']):
        return "🎤 [Mensagem de Áudio 0:15]\n\"Fica tranquilo, isso acontece bastante! A gente consegue colocar um avalista da sua confiança para liberar seu crédito na hora. Já estou acionando o Alejandro aqui na loja e ele vai dar continuidade direta com você agora mesmo!\""

    # 7. Fluxo Passo a Passo do Roteiro Oficial
    step = user_state.get("step", 1)

    if step == 1:
        user_state["step"] = 2
        states[sender_phone] = user_state
        save_states(states)
        return "Olá, tudo bem? 😊 Prazer, sou o willian, consultor da tatu Car! Qual carro você está procurando? 🚗"

    elif step == 2:
        user_state["data"]["carro_procurado"] = raw_text
        user_state["step"] = 3
        states[sender_phone] = user_state
        save_states(states)
        return "Opa! Ótima escolha, muito prazer sou Willian consultor da TatuCar estou pronto para fazer o melhor negócio! Vi que Gostou do carro que temos em estoque! Qual é seu nome?"

    elif step == 3:
        user_state["data"]["name"] = raw_text.strip()
        user_state["step"] = 4
        states[sender_phone] = user_state
        save_states(states)
        return "Pretende comprar à vista ou financiado? Temos taxas especiais no financiamento!"

    elif step == 4:
        user_state["data"]["forma_pagamento"] = raw_text.strip()
        user_state["step"] = 5
        states[sender_phone] = user_state
        save_states(states)
        return "Pretende pagar uma PARCELA até quanto por mês?? Vamos fazer o melhor negócio! 🤝"

    elif step == 5:
        user_state["data"]["parcela"] = raw_text.strip()
        user_state["step"] = 6
        states[sender_phone] = user_state
        save_states(states)
        return "Tem algum valor para dar de entrada?? -Caso nao tenha entrada tenho muita facilidade sem entrada -Se tiver facilita?!😉"

    elif step == 6:
        user_state["data"]["entrada"] = raw_text.strip()
        user_state["step"] = 7
        states[sender_phone] = user_state
        save_states(states)
        return "Vamos ver como está seu cpf para financiamento, preciso somente do seu CPF e DATA DE NASCIMENTO para simulação!"

    elif step == 7:
        user_state["data"]["dados_cpf"] = raw_text.strip()
        user_state["step"] = 8
        states[sender_phone] = user_state
        save_states(states)
        return "Ah, e só pra completar sua simulação 😉 você possui CNH (Habilitação)? 🚗"

    else:
        user_state["data"]["cnh"] = raw_text.strip()
        user_state["step"] = 1
        states[sender_phone] = user_state
        save_states(states)
        return "Fechou! 🤝 Já encaminhei todos os seus dados para o nosso consultor especialista na loja. Ele vai dar continuidade ao seu atendimento por aqui mesmo em instantes!"

class WebhookHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        res = {
            "status": "online",
            "bot": "WILLIAN AI",
            "store": "TatuCar Veículos",
            "system_prompt": "willian | tatuCAR (v43)"
        }
        self.wfile.write(json.dumps(res, ensure_ascii=False).encode('utf-8'))

    def do_POST(self):
        content_len = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_len).decode('utf-8')
        
        try:
            data = json.loads(body)
        except Exception:
            data = {"message": body}

        sender = data.get('sender') or data.get('phone') or data.get('from') or 'Cliente'
        text = data.get('text') or data.get('message') or data.get('body') or ''

        if 'data' in data and isinstance(data['data'], dict):
            msg_obj = data['data'].get('message', {})
            text = msg_obj.get('conversation') or msg_obj.get('extendedTextMessage', {}).get('text') or text
            sender = data['data'].get('key', {}).get('remoteJid', sender)

        print(f"\n[MENSAGEM RECEBIDA] De: {sender} | Texto: {text}")
        reply = generate_willian_reply(sender, text)
        print(f"[RESPOSTA AUTOMÁTICA ENVIADA]:\n{reply}\n" + "-"*50)

        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        
        response_payload = {
            "success": True,
            "reply": reply,
            "sender": sender
        }
        self.wfile.write(json.dumps(response_payload, ensure_ascii=False).encode('utf-8'))

if __name__ == '__main__':
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, WebhookHandler)
    print("="*65)
    print("🚀 SERVIDOR WILLIAN AI (TATUCAR VEÍCULOS) ATIVO NA PORTA 8000")
    print("• Roteiro Oficial de 8 passos ativo com falas padronizadas")
    print("• Validação de 11 dígitos do CPF & Escalação Humana no Avalista")
    print("="*65)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor encerrado.")
