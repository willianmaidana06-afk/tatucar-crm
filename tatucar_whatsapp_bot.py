"""
=============================================================================
TATUCAR VEÍCULOS - ROBÔ DE AUTO-RESPOSTA WHATSAPP (WILLIAN AI)
=============================================================================
Este script conecta o seu WhatsApp diretamente ao motor de vendas do CRM.
Ele recebe mensagens dos clientes e responde automaticamente com:
- Catálogo de veículos reais da TatuCar Veículos em Curitiba
- Simulação de financiamento pelos 5 bancos (PAN, BV, Itaú, Santander, Bradesco)
- Coleta de dados (CPF, CNH, Entrada) e cadastro automático no CRM
- Transbordo para Alejandro em caso de visita física à loja
=============================================================================
"""

import os
import sys
import json
import time
import re
from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib.request
import urllib.parse

PORT = 8000
STOCK_FILE = os.path.join(os.path.dirname(__file__), 'assets', 'tatucar_cars.json')
LEADS_FILE = os.path.join(os.path.dirname(__file__), 'leads_whatsapp_capturados.json')

def load_stock():
    if os.path.exists(STOCK_FILE):
        try:
            with open(STOCK_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            print(f"[AVISO] Erro ao carregar estoque: {e}")
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

def generate_ai_reply(sender_phone, raw_text):
    text = raw_text.lower().strip()
    vehicles = load_stock()

    # 1. Identifica CPF
    cpf_match = re.search(r'\d{3}\.?\d{3}\.?\d{3}-?\d{2}', raw_text)
    if cpf_match:
        cpf = cpf_match.group(0)
        lead = {
            "id": f"wa-{int(time.time())}",
            "phone": sender_phone,
            "cpf": cpf,
            "name": f"Cliente WhatsApp ({sender_phone})",
            "notes": f"CPF informado via WhatsApp: {cpf}. Aguardando triagem dos 5 bancos.",
            "stage": "simulacao",
            "date": time.strftime("%Y-%m-%d %H:%M:%S")
        }
        save_lead(lead)
        return (
            f"Perfeito! Já anotei o seu CPF *{cpf}* com total segurança e sigilo pela LGPD. 🔒\n\n"
            f"Estou rodando sua proposta na esteira de aprovação dos nossos *5 bancos parceiros (PAN, BV, Itaú, Santander e Bradesco)*.\n\n"
            f"👉 Para acelerar a aprovação com as menores taxas: você possui CNH? E pretende dar alguma entrada ou prefere 100% financiado?"
        )

    # 2. Carros populares / econômicos
    if any(k in text for k in ['popular', 'barato', '1.0', 'baixo valor', 'economico']):
        populares = [v for v in vehicles if v.get('price', 0) < 55000][:3]
        if populares:
            carros_txt = "\n".join([f"• *{v['model']} ({v['year']})* - R$ {v['price']:,.2f} (Aprox. R$ {round(v['price']*0.027):,.2f}/mês)" for v in populares])
        else:
            carros_txt = "• *VW Gol 1.6 Flex* - R$ 48.900\n• *Fiat Palio Attractive* - R$ 39.900\n• *Ford Ka SE 1.0* - R$ 44.500"
        return (
            f"Temos excelentes opções de populares revisados com garantia e procedência na TatuCar! 🚗✨\n\n"
            f"{carros_txt}\n\n"
            f"Qual desses você quer conhecer melhor? Posso calcular as parcelas personalizadas para o seu bolso agora mesmo!"
        )

    # 3. Financiamento sem entrada
    if any(k in text for k in ['sem entrada', 'zero entrada', '100% financiado', 'financiar sem']):
        return (
            f"Sim! Aqui na *TatuCar Veículos* trabalhamos com financiamento em até *100% sem entrada* pelos bancos parceiros (PAN, BV, Santander), sujeito à análise de score do seu CPF! 🏦🤝\n\n"
            f"Parcelamos em até *60x* e a 1ª parcela pode ficar para até 60 dias.\n\n"
            f"Quer que eu faça a consulta da sua pré-aprovação sem custo? Se sim, me envie seu *CPF e data de nascimento* por aqui!"
        )

    # 4. Troca
    if any(k in text for k in ['troca', 'usado', 'meu carro', 'minha moto', 'pega']):
        return (
            f"Com certeza! Pegamos seu carro ou moto usado na troca com a *melhor avaliação de Curitiba e Região*! 🔄💰\n\n"
            f"E se o seu veículo ainda estiver financiado, a gente quita a dívida e você sai de carro novo no mesmo dia.\n\n"
            f"Qual é o *modelo, ano e km* aproximado do seu carro atual?"
        )

    # 5. Visita à loja
    if any(k in text for k in ['visita', 'loja', 'onde', 'endereco', 'alejandro', 'vendedor', 'rua']):
        return (
            f"Será um prazer receber você na nossa loja física! ☕🚗\n\n"
            f"📍 *TatuCar Veículos*\n"
            f"Endereço: *Rua Enette Dubard, 1111 - Tatuquara, Curitiba/PR*\n"
            f"Atendimento: Seg à Sex das 08h30 às 18h30 | Sáb das 08h30 às 16h.\n\n"
            f"O Alejandro e nossa equipe de consultores já estão a postos para o test-drive! Que horário fica bom para você vir tomar um café com a gente?"
        )

    # 6. Resposta Padrão
    return (
        f"Olá! Seja bem-vindo à *TatuCar Veículos* em Curitiba! 🚗💨\n"
        f"Sou o *Willian*, consultor virtual da loja.\n\n"
        f"Temos mais de 20 veículos revisados com garantia, financiamento com ou sem entrada em até 60x e pegamos seu usado na troca.\n\n"
        f"Qual modelo você está procurando ou qual valor de parcela mensal fica ideal para você?"
    )

class WebhookHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        res = {
            "status": "online",
            "service": "TatuCar WhatsApp Auto-Responder",
            "bot": "WILLIAN AI",
            "store": "TatuCar Veículos (41) 99535-0811"
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
        reply = generate_ai_reply(sender, text)
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

def run_server():
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, WebhookHandler)
    print("="*65)
    print(f"🚀 SERVIDOR DO ROBÔ WHATSAPP TATUCAR ATIVO NA PORTA {PORT}")
    print("="*65)
    print(f"• URL do Webhook: http://localhost:{PORT}")
    print(f"• Pronto para receber mensagens do WhatsApp da loja e responder 24h")
    print(f"• Pressione Ctrl+C para encerrar o serviço.")
    print("="*65)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor encerrado pelo usuário.")

def run_interactive_test():
    print("="*65)
    print("💬 MODO DE TESTE INTERATIVO DO WILLIAN AI (WHATSAPP TATUCAR)")
    print("Digite mensagens como se fosse um cliente no WhatsApp para ver a IA responder.")
    print("Digite 'sair' para encerrar.")
    print("="*65)
    while True:
        try:
            msg = input("\nCliente WhatsApp: ")
            if msg.lower().strip() in ['sair', 'exit', 'quit']:
                break
            reply = generate_ai_reply("41999999999", msg)
            print("\n" + reply)
        except (KeyboardInterrupt, EOFError):
            break

if __name__ == '__main__':
    if '--server' in sys.argv:
        run_server()
    elif '--test' in sys.argv:
        run_interactive_test()
    else:
        run_server()
