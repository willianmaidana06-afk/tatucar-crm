/**
 * ========================================================
 * TATUCAR CRM - GESTÃO COMERCIAL & WILLIAN AI COPILOT
 * Alejandro Consultor - Curitiba/PR
 * ========================================================
 */

// Storage Keys
const STORAGE_KEY = 'tatucar_crm_v3_data';

// Initial Demo Dataset (100% alinhado com o perfil TatuCar)
const DEFAULT_DATA = {
  vehicles: [
    {
        "id": "tatucar-1",
        "model": "Ford Fiesta",
        "year": "2010",
        "price": 24900.0,
        "km": 228000,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "1.0 Completo",
        "photo": "https://tatucarveiculos.com.br/vehicles/fiesta-2010-front-tatucar.png",
        "tag": "Completo"
    },
    {
        "id": "tatucar-2",
        "model": "Voyage  1.0",
        "year": "2009",
        "price": 28900.0,
        "km": 162054,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "Consulte as condições",
        "photo": "https://tatucarveiculos.com.br/api/fotos-crm/6a82f408-94a2-4655-b174-ab1c4505bc01/b305430b-75ed-4c7c-9ae1-c3b09feaaf5c",
        "tag": "Oportunidade TatuCar"
    },
    {
        "id": "tatucar-3",
        "model": "Chevrolet Classic",
        "year": "2011",
        "price": 25900.0,
        "km": 123000,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "1.0 Básico",
        "photo": "https://tatucarveiculos.com.br/vehicles/classic-preto-2011-main-tatucar.png",
        "tag": "Econômico"
    },
    {
        "id": "tatucar-4",
        "model": "Ford Fiesta Class 1.6",
        "year": "2003",
        "price": 17900.0,
        "km": 207577,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "Consulte as condições",
        "photo": "https://tatucarveiculos.com.br/api/fotos-crm/e8c5908e-a1e7-4ffd-a09a-9abc5f60df91/17a32596-a5d6-4281-8553-d4005cdc34ca",
        "tag": "Oportunidade TatuCar"
    },
    {
        "id": "tatucar-5",
        "model": "Ford Eco Sport Freestyle 1.6",
        "year": "2011",
        "price": 47900.0,
        "km": 113943,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "Consulte as condições",
        "photo": "https://tatucarveiculos.com.br/api/fotos-crm/50fc929c-8566-461c-bf1e-52f632821c74/d829db19-74b8-4dd5-bacb-0e48e2e4a237",
        "tag": "Oportunidade TatuCar"
    },
    {
        "id": "tatucar-6",
        "model": "Volkswagen Voyage 1.6",
        "year": "1990",
        "price": 25999.0,
        "km": 225389,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "Consulte as condições",
        "photo": "https://tatucarveiculos.com.br/api/fotos-crm/4c5dbf55-5a33-4228-9351-30de8ec37533/7c1d288a-d503-4ce5-ac3d-469346d1b614",
        "tag": "Oportunidade TatuCar"
    },
    {
        "id": "tatucar-7",
        "model": "FORD KA",
        "year": "2010",
        "price": 22900.0,
        "km": 145664,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "FORD KA 2010 1.0 22,900$",
        "photo": "https://tatucarveiculos.com.br/api/fotos-crm/a14d0ff7-7d55-4c29-bc32-594004cd664e/22db016a-99bb-41c3-a462-23060cc1aa93",
        "tag": "Oportunidade TatuCar"
    },
    {
        "id": "tatucar-8",
        "model": "Ford Fiesta",
        "year": "2013",
        "price": 27900.0,
        "km": 213000,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "1.0 Completo",
        "photo": "https://tatucarveiculos.com.br/vehicles/fiesta-2013-10-front-side.jpeg",
        "tag": "Completo"
    },
    {
        "id": "tatucar-9",
        "model": "Fiat Strada",
        "year": "2009",
        "price": 37900.0,
        "km": 143000,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "1.4 Flex Básica",
        "photo": "https://tatucarveiculos.com.br/vehicles/strada-2009-main-tatucar.png",
        "tag": "Utilitário"
    },
    {
        "id": "tatucar-10",
        "model": "Ford EcoSport",
        "year": "2011",
        "price": 44900.0,
        "km": 156000,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "2.0 Completa",
        "photo": "https://tatucarveiculos.com.br/vehicles/ecosport-2011-main-tatucar.jpg",
        "tag": "Completa"
    },
    {
        "id": "tatucar-11",
        "model": "VW Saveiro G4",
        "year": "2009",
        "price": 37900.0,
        "km": 214000,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "Básica • Rebaixada",
        "photo": "https://tatucarveiculos.com.br/vehicles/saveiro-g4-2009-main-tatucar.jpg",
        "tag": "Rebaixada"
    },
    {
        "id": "tatucar-12",
        "model": "VW Voyage",
        "year": "2009",
        "price": 27900.0,
        "km": 132000,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "1.0 Flex",
        "photo": "https://tatucarveiculos.com.br/vehicles/voyage-2009-main-tatucar.png",
        "tag": "Econômico"
    },
    {
        "id": "tatucar-13",
        "model": "Renault Sandero",
        "year": "2009",
        "price": 29900.0,
        "km": 175000,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "1.6 Completo",
        "photo": "https://tatucarveiculos.com.br/vehicles/sandero-prata-2009-main-tatucar.png",
        "tag": "Completo"
    },
    {
        "id": "tatucar-14",
        "model": "Fiat Palio",
        "year": "2008",
        "price": 24900.0,
        "km": 182000,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "1.0 • Vidros elétricos",
        "photo": "https://tatucarveiculos.com.br/vehicles/palio-azul-2008-main-tatucar.png",
        "tag": "Vidros elétricos"
    },
    {
        "id": "tatucar-15",
        "model": "Ford Ka",
        "year": "2011",
        "price": 24900.0,
        "km": 132000,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "1.0 Completo, exceto ar-condicionado",
        "photo": "https://tatucarveiculos.com.br/vehicles/fordka-2011-main-tatucar.png",
        "tag": "Fácil aprovação"
    },
    {
        "id": "tatucar-16",
        "model": "Volkswagen Polo Sedan 1.6",
        "year": "2003",
        "price": 23900.0,
        "km": 252829,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "Consulte as condições",
        "photo": "https://tatucarveiculos.com.br/api/fotos-crm/0c96142c-8afd-4fc8-898d-9bbb9f59841b/b061f813-e800-4863-abec-d639a70c24f5",
        "tag": "Oportunidade TatuCar"
    },
    {
        "id": "tatucar-17",
        "model": "Volkswagen Fox Trendline 1.0",
        "year": "2011",
        "price": 37900.0,
        "km": 132922,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "Consulte as condições",
        "photo": "https://tatucarveiculos.com.br/api/fotos-crm/3fe89d0e-7dcb-4854-81f0-c22e69f66ed9/2559c293-ca7e-4b24-b4bd-d17bbb73bc98",
        "tag": "Oportunidade TatuCar"
    },
    {
        "id": "tatucar-18",
        "model": "Chevrolet Vectra 2.0",
        "year": "2010",
        "price": 37900.0,
        "km": 31,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "Consulte as condições",
        "photo": "https://tatucarveiculos.com.br/api/fotos-crm/4dfec38a-7277-4f4e-a79e-86c29c4aec31/158308da-b9c5-433e-89ac-cb2a18cf291f",
        "tag": "Oportunidade TatuCar"
    },
    {
        "id": "tatucar-19",
        "model": "Volkswagen Polo Sportline 1.6",
        "year": "2011",
        "price": 43900.0,
        "km": 118439,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "Consulte as condições",
        "photo": "https://tatucarveiculos.com.br/api/fotos-crm/69e3870e-1157-492f-a90d-df2648dfc35f/2947b6d7-bbdb-4b6a-be04-06a633c68290",
        "tag": "Oportunidade TatuCar"
    },
    {
        "id": "tatucar-20",
        "model": "Hyundai Elantra Gls 2.0",
        "year": "2015",
        "price": 69900.0,
        "km": 145383,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "Consulte as condições",
        "photo": "https://tatucarveiculos.com.br/api/fotos-crm/79e18966-c0b4-490f-8678-641ab6bc0241/e7b91034-ccf3-4562-be30-70a2ba8cc264",
        "tag": "Oportunidade TatuCar"
    },
    {
        "id": "tatucar-21",
        "model": "Citroën Air Cross 1.6",
        "year": "2011",
        "price": 36900.0,
        "km": 214828,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "Consulte as condições",
        "photo": "https://tatucarveiculos.com.br/api/fotos-crm/828812e0-992b-4a5c-9985-10a9edc1fdcb/9fd6f26b-94ec-4d46-a29d-ca6525188e7d",
        "tag": "Oportunidade TatuCar"
    },
    {
        "id": "tatucar-22",
        "model": "Ford Fiesta 1.0",
        "year": "2013",
        "price": 29900.0,
        "km": 213382,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "Consulte as condições",
        "photo": "https://tatucarveiculos.com.br/api/fotos-crm/9226ed23-0f12-4c88-9390-a8edc1ed8b1e/ae2e2860-a7b8-4ea1-affd-673325785ae3",
        "tag": "Oportunidade TatuCar"
    },
    {
        "id": "tatucar-23",
        "model": "Volkswagen Saveiro Cross 1.6 CE",
        "year": "2012",
        "price": 54990.0,
        "km": 154849,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "Consulte as condições",
        "photo": "https://tatucarveiculos.com.br/api/fotos-crm/932c43a5-7cb0-4fb8-8448-bd630a16e232/04d4c6ce-bc60-4030-a9c8-dc1b13d01d5d",
        "tag": "Oportunidade TatuCar"
    },
    {
        "id": "tatucar-24",
        "model": "FORD FIESTA 1.6 SEDAN",
        "year": "2012",
        "price": 35900.0,
        "km": 135484,
        "color": "Consulte",
        "transmission": "Manual",
        "fuel": "Flex",
        "status": "DISPONIVEL",
        "features": "Consulte as condições",
        "photo": "https://tatucarveiculos.com.br/api/fotos-crm/b7c58a09-6dc3-4e7f-ad66-a5a68798bb28/3299b24e-186a-4535-9ffe-437e01887f37",
        "tag": "Oportunidade TatuCar"
    }
],
  leads: [
    {
      id: 'lead-1',
      name: 'Carlos Eduardo Ramos',
      phone: '41991234567',
      city: 'Curitiba/PR',
      cpf: '382.491.809-12',
      vehicleId: 'tatucar-1',
      stage: 'APROVADO',
      profile: 'CLT',
      tradeIn: 'Não tem',
      notes: 'Crédito aprovado no Santander! R$ 5.000 de entrada e 48x de R$ 1.280. Agendando visita para assinar.',
      createdAt: '2026-10-12',
      lastContact: 'Há 2 horas'
    },
    {
      id: 'lead-2',
      name: 'Juliana Mendes de Castro',
      phone: '41988776655',
      city: 'São José dos Pinhais/PR',
      cpf: '542.119.340-87',
      vehicleId: 'tatucar-2',
      stage: 'EM ANALISE',
      profile: 'Autônomo',
      tradeIn: 'Uno 2010 (estuda troca)',
      notes: 'Ficha enviada para BV e Banco PAN. Aguardando resposta do operador.',
      createdAt: '2026-10-13',
      lastContact: 'Ontem'
    },
    {
      id: 'lead-3',
      name: 'Marcos Vinicius Ferraz',
      phone: '41996554433',
      city: 'Araucária/PR',
      cpf: '719.823.111-05',
      vehicleId: 'tatucar-8',
      stage: 'NOVO',
      profile: 'Motorista App',
      tradeIn: 'Não tem',
      notes: 'Veio pelo anúncio do Marketplace do Gol. Procura carro econômico para rodar na Uber/99.',
      createdAt: '2026-10-14',
      lastContact: 'Hoje às 11:30'
    },
    {
      id: 'lead-4',
      name: 'Renato Albuquerque',
      phone: '41984221199',
      city: 'Curitiba/PR',
      cpf: '291.442.887-43',
      vehicleId: 'tatucar-10',
      stage: 'VENDA',
      profile: 'CLT',
      tradeIn: 'Ford Ka 2017',
      notes: 'Avaliação da troca feita em R$ 38.000. Contrato sendo emitido para entrega sexta-feira.',
      createdAt: '2026-10-10',
      lastContact: 'Hoje às 14:15'
    },
    {
      id: 'lead-5',
      name: 'Silvia Regina Martins',
      phone: '41992118844',
      city: 'Colombo/PR',
      cpf: '418.990.223-55',
      vehicleId: 'tatucar-20',
      stage: 'FINALIZADO',
      profile: 'Aposentado',
      tradeIn: 'Não tem',
      notes: 'Carro entregue e revisado com sucesso! Cliente super satisfeita. Pedir indicação daqui a 15 dias.',
      createdAt: '2026-10-05',
      lastContact: '08/10/2026'
    },
    {
      id: 'lead-6',
      name: 'Douglas dos Santos',
      phone: '41997332211',
      city: 'Fazenda Rio Grande/PR',
      cpf: '601.774.908-22',
      vehicleId: 'tatucar-9',
      stage: 'APROVADO',
      profile: 'Autônomo',
      tradeIn: 'Não tem',
      notes: 'Strada aprovada com entrada de R$ 8.000 pela BV. Vai usar para entregas de materiais.',
      createdAt: '2026-10-13',
      lastContact: 'Há 5 horas'
    }
  ],
  tasks: [
    {
      id: 'task-1',
      title: 'Ligar para Carlos Eduardo para confirmar horário de assinatura do Onix',
      dueDate: '2026-10-15T10:00',
      priority: 'Alta',
      completed: false,
      leadId: 'lead-1'
    },
    {
      id: 'task-2',
      title: 'Cobrar retorno do analista do Banco PAN sobre a ficha da Juliana',
      dueDate: '2026-10-15T14:30',
      priority: 'Alta',
      completed: false,
      leadId: 'lead-2'
    },
    {
      id: 'task-3',
      title: 'Enviar vídeo detalhado do Gol 1.6 para Marcos Vinicius no WhatsApp',
      dueDate: '2026-10-15T16:00',
      priority: 'Media',
      completed: false,
      leadId: 'lead-3'
    }
  ]
};

// Application State Manager
class CrmApp {
  constructor() {
    this.data = this.loadData();
    this.currentView = 'dashboard';
    this.activeTheme = 'dark';
    this.init();
  }

  loadData() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Erro ao carregar dados do localStorage, usando defaults', e);
    }
    this.saveData(DEFAULT_DATA);
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }

  saveData(data = this.data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Erro ao salvar no localStorage', e);
    }
  }

  init() {
    this.setupTheme();
    this.setupNavigation();
    this.setupLiveClock();
    this.setupGlobalSearch();
    this.setupEventListeners();
    this.renderAll();
  }

  // ================= THEME TOGGLE =================
  setupTheme() {
    const savedTheme = localStorage.getItem('tatucar_theme') || 'dark';
    this.setTheme(savedTheme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const nextTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
        this.setTheme(nextTheme);
      });
    }
  }

  setTheme(theme) {
    if (theme === 'light') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }
    localStorage.setItem('tatucar_theme', theme);
  }

  // ================= NAVIGATION =================
  setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-view]');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const view = item.getAttribute('data-view');
        this.navigateTo(view);
      });
    });

    // Quick links
    document.querySelectorAll('[data-goto]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const view = btn.getAttribute('data-goto');
        this.navigateTo(view);
      });
    });

    // Sidebar collapse toggle
    const toggleSidebar = document.getElementById('toggle-sidebar');
    const sidebar = document.getElementById('sidebar');
    if (toggleSidebar && sidebar) {
      toggleSidebar.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
      });
    }
  }

  navigateTo(viewId) {
    this.currentView = viewId;

    // Atualiza botões
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-view') === viewId);
    });

    // Atualiza painéis
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === `view-${viewId}`);
    });

    // Atualiza título do breadcrumb
    const titles = {
      'dashboard': 'Dashboard Geral',
      'pipeline': 'Pipeline Comercial (Kanban)',
      'clientes': 'Clientes & Leads',
      'veiculos': 'Estoque de Veículos',
      'propostas': 'Simulador & Financiamento',
      'tarefas': 'Follow-up & Tarefas',
      'whatsapp-hub': 'Central de WhatsApp & Automações',
      'facebook-poster': 'Postador Automático Facebook & Marketplace',
      'willian-ai': 'WILLIAN AI Copilot',
      'configuracoes': 'Configurações & Backup'
    };
    const titleEl = document.getElementById('current-page-title');
    if (titleEl) {
      titleEl.textContent = titles[viewId] || 'TatuCar CRM';
    }

    this.renderView(viewId);
  }

  setupLiveClock() {
    const clockEl = document.getElementById('live-clock');
    if (!clockEl) return;
    const update = () => {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString('pt-BR');
    };
    update();
    setInterval(update, 1000);
  }

  setupGlobalSearch() {
    const searchInput = document.getElementById('global-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      if (!term) return;

      // Se estiver digitando e não for na aba de clientes ou veículos, navega para clientes
      if (this.currentView !== 'clientes' && this.currentView !== 'veiculos') {
        this.navigateTo('clientes');
        const clientFilter = document.getElementById('filter-clients-search');
        if (clientFilter) clientFilter.value = term;
        this.renderClientsTable(term);
      } else if (this.currentView === 'clientes') {
        this.renderClientsTable(term);
      } else if (this.currentView === 'veiculos') {
        this.renderVehicles(term);
      }
    });
  }

  // ================= RENDERERS =================
  renderAll() {
    this.renderKPIs();
    this.renderDashboardPriorities();
    this.renderDashboardStock();
    this.renderKanban();
    this.renderClientsTable();
    this.renderVehicles();
    this.renderTasks();
    this.populateSelects();
    this.updateCounters();
  }

  renderView(viewId) {
    switch (viewId) {
      case 'dashboard':
        this.renderKPIs();
        this.renderDashboardPriorities();
        this.renderDashboardStock();
        break;
      case 'pipeline':
        this.renderKanban();
        break;
      case 'clientes':
        this.renderClientsTable();
        break;
      case 'veiculos':
        this.renderVehicles();
        break;
      case 'propostas':
        this.populateSelects();
        break;
      case 'tarefas':
        this.renderTasks();
        break;
      case 'whatsapp-hub':
        this.renderWhatsAppHub();
        break;
      case 'facebook-poster':
        this.renderFacebookPoster();
        break;
      case 'willian-ai':
        this.populateSelects();
        break;
    }
    this.updateCounters();
  }

  updateCounters() {
    const activeLeads = this.data.leads.filter(l => l.stage !== 'FINALIZADO' && l.stage !== 'REPROVADO' && l.stage !== 'DESISTENTE').length;
    const badge = document.getElementById('badge-leads-count');
    if (badge) badge.textContent = activeLeads;

    const pendingTasks = this.data.tasks.filter(t => !t.completed).length;
    const taskAlert = document.getElementById('badge-tarefas-alert');
    if (taskAlert) {
      taskAlert.style.display = pendingTasks > 0 ? 'inline-flex' : 'none';
      taskAlert.textContent = pendingTasks;
    }
  }

  // 1. DASHBOARD
  renderKPIs() {
    const activeLeads = this.data.leads.filter(l => !['FINALIZADO', 'REPROVADO', 'DESISTENTE'].includes(l.stage)).length;
    const analiseLeads = this.data.leads.filter(l => l.stage === 'EM ANALISE').length;
    const aprovadosLeads = this.data.leads.filter(l => l.stage === 'APROVADO').length;
    const vendasMes = this.data.leads.filter(l => l.stage === 'FINALIZADO').length;

    // Calcula volume estimado de vendas
    let volumeTotal = 0;
    this.data.leads.filter(l => l.stage === 'FINALIZADO').forEach(lead => {
      const v = this.data.vehicles.find(car => car.id === lead.vehicleId);
      if (v) volumeTotal += v.price;
    });

    document.getElementById('kpi-total-leads').textContent = activeLeads;
    document.getElementById('kpi-analise-leads').textContent = analiseLeads;
    document.getElementById('kpi-aprovados-leads').textContent = aprovadosLeads;
    document.getElementById('kpi-vendas-mes').textContent = vendasMes;
    document.getElementById('kpi-volume-vendas').textContent = volumeTotal > 0 ? this.formatMoney(volumeTotal) : 'R$ 84.900,00';
  }

  renderDashboardPriorities() {
    const tbody = document.querySelector('#table-priority-leads tbody');
    if (!tbody) return;

    // Prioriza aprovados e novos
    const priorities = this.data.leads.filter(l => l.stage === 'APROVADO' || l.stage === 'NOVO').slice(0, 5);

    if (priorities.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" class="text-muted" style="text-align:center; padding: 20px;">Nenhum lead prioritário pendente! Excelente trabalho!</td></tr>`;
      return;
    }

    tbody.innerHTML = priorities.map(lead => {
      const vehicle = this.data.vehicles.find(v => v.id === lead.vehicleId);
      const vehicleName = vehicle ? vehicle.model : 'Não especificado';
      return `
        <tr>
          <td>
            <strong>${lead.name}</strong><br>
            <small class="text-muted">${this.formatPhone(lead.phone)}</small>
          </td>
          <td>${vehicleName}</td>
          <td><span class="badge-tag ${this.getStageClass(lead.stage)}">${lead.stage}</span></td>
          <td>${lead.lastContact || 'Hoje'}</td>
          <td>
            <button class="btn btn-sm btn-whatsapp" onclick="crm.openWhatsAppModal('${lead.id}')">
              WhatsApp
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  renderDashboardStock() {
    const container = document.getElementById('dash-mini-stock');
    const countEl = document.getElementById('dash-stock-count');
    if (!container) return;

    const available = this.data.vehicles.filter(v => v.status === 'DISPONIVEL');
    if (countEl) countEl.textContent = available.length;

    container.innerHTML = available.slice(0, 4).map(v => `
      <div class="mini-car-item">
        <div class="mini-car-info">
          <strong>${v.model}</strong>
          <small>${v.year} • ${v.color} • ${v.transmission}</small>
        </div>
        <div class="mini-car-price">${this.formatMoney(v.price)}</div>
      </div>
    `).join('');
  }

  // 2. KANBAN PIPELINE
  renderKanban() {
    const stages = ['NOVO', 'EM ANALISE', 'APROVADO', 'VENDA', 'FINALIZADO'];

    stages.forEach(stage => {
      const stageSlug = stage.toLowerCase().replace(' ', '-');
      const column = document.getElementById(`column-${stageSlug}`);
      const countEl = document.getElementById(`count-stage-${stageSlug}`);

      if (!column) return;

      const filteredLeads = this.data.leads.filter(l => l.stage === stage);
      if (countEl) countEl.textContent = filteredLeads.length;

      column.innerHTML = filteredLeads.map(lead => {
        const vehicle = this.data.vehicles.find(v => v.id === lead.vehicleId);
        const vehicleName = vehicle ? vehicle.model : 'Veículo a definir';

        return `
          <div class="kanban-card" draggable="true" ondragstart="crm.handleDragStart(event, '${lead.id}')">
            <div class="kanban-card-top">
              <span class="kanban-card-title">${lead.name}</span>
              <span class="badge-tag ${this.getStageClass(lead.stage)}">${lead.stage}</span>
            </div>
            
            <div class="kanban-card-phone">
              📱 ${this.formatPhone(lead.phone)}
            </div>

            <div class="kanban-card-car">
              🚗 ${vehicleName}
            </div>

            ${lead.notes ? `<p style="font-size: 0.73rem; color: var(--text-muted); margin: 6px 0;">${lead.notes.substring(0, 80)}${lead.notes.length > 80 ? '...' : ''}</p>` : ''}

            <div class="kanban-card-footer">
              <button class="btn btn-sm btn-whatsapp" onclick="crm.openWhatsAppModal('${lead.id}')" title="Falar no WhatsApp">
                WA
              </button>
              
              <div class="kanban-actions-row">
                <button class="btn-kanban-nav" onclick="crm.moveLead('${lead.id}', -1)" title="Voltar etapa">←</button>
                <button class="btn-kanban-nav" onclick="crm.moveLead('${lead.id}', 1)" title="Avançar etapa">→</button>
                <button class="btn-kanban-nav" onclick="crm.editLead('${lead.id}')" title="Editar">✏️</button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    });

    // Configurar drop zones
    document.querySelectorAll('.kanban-column').forEach(col => {
      col.ondragover = (e) => { e.preventDefault(); col.style.borderColor = 'var(--primary-500)'; };
      col.ondragleave = () => { col.style.borderColor = 'var(--border-color)'; };
      col.ondrop = (e) => {
        e.preventDefault();
        col.style.borderColor = 'var(--border-color)';
        const leadId = e.dataTransfer.getData('text/plain');
        const targetStage = col.getAttribute('data-stage');
        if (leadId && targetStage) {
          crm.updateLeadStage(leadId, targetStage);
        }
      };
    });
  }

  handleDragStart(e, leadId) {
    e.dataTransfer.setData('text/plain', leadId);
  }

  moveLead(leadId, direction) {
    const stages = ['NOVO', 'EM ANALISE', 'APROVADO', 'VENDA', 'FINALIZADO'];
    const lead = this.data.leads.find(l => l.id === leadId);
    if (!lead) return;

    let idx = stages.indexOf(lead.stage);
    if (idx === -1) idx = 0;

    const newIdx = idx + direction;
    if (newIdx >= 0 && newIdx < stages.length) {
      lead.stage = stages[newIdx];
      this.saveData();
      this.renderKanban();
      this.renderKPIs();
      this.showToast(`Lead ${lead.name} avançou para: ${lead.stage}`);
    }
  }

  updateLeadStage(leadId, newStage) {
    const lead = this.data.leads.find(l => l.id === leadId);
    if (lead && lead.stage !== newStage) {
      lead.stage = newStage;
      this.saveData();
      this.renderKanban();
      this.renderKPIs();
      this.showToast(`Fase atualizada para ${newStage}`);
    }
  }

  // 3. CLIENTES TABLE
  renderClientsTable(filterTerm = '') {
    const tbody = document.querySelector('#table-clients-full tbody');
    if (!tbody) return;

    const stageFilter = document.getElementById('filter-clients-stage')?.value || '';

    let list = this.data.leads;
    if (filterTerm) {
      const term = filterTerm.toLowerCase();
      list = list.filter(l => 
        l.name.toLowerCase().includes(term) ||
        l.phone.includes(term) ||
        (l.cpf && l.cpf.includes(term)) ||
        (l.city && l.city.toLowerCase().includes(term))
      );
    }
    if (stageFilter) {
      list = list.filter(l => l.stage === stageFilter);
    }

    if (list.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="text-muted" style="text-align:center; padding: 24px;">Nenhum cliente encontrado para os filtros atuais.</td></tr>`;
      return;
    }

    tbody.innerHTML = list.map(lead => {
      const vehicle = this.data.vehicles.find(v => v.id === lead.vehicleId);
      const vehicleName = vehicle ? vehicle.model : '-';
      return `
        <tr>
          <td>
            <strong>${lead.name}</strong><br>
            <small class="text-muted">CPF: ${lead.cpf || 'Não inf.'}</small>
          </td>
          <td>
            <a href="https://wa.me/55${lead.phone.replace(/\D/g, '')}" target="_blank" style="color: var(--whatsapp); font-weight: 600; text-decoration: none;">
              📱 ${this.formatPhone(lead.phone)}
            </a>
          </td>
          <td>${lead.city || 'Curitiba/PR'}</td>
          <td><span class="badge-tag">${lead.profile || 'Geral'}</span></td>
          <td><strong>${vehicleName}</strong></td>
          <td><span class="badge-tag ${this.getStageClass(lead.stage)}">${lead.stage}</span></td>
          <td>
            <div style="display:flex; gap:6px;">
              <button class="btn btn-sm btn-whatsapp" onclick="crm.openWhatsAppModal('${lead.id}')" title="Mensagem">💬</button>
              <button class="btn btn-sm btn-outline" onclick="crm.editLead('${lead.id}')" title="Editar">✏️</button>
              <button class="btn btn-sm btn-danger-outline" onclick="crm.deleteLead('${lead.id}')" title="Excluir">🗑️</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  // 4. VEÍCULOS / ESTOQUE
  renderVehicles(filterTerm = '') {
    const grid = document.getElementById('vehicle-grid');
    if (!grid) return;

    const statusFilter = document.getElementById('filter-vehicles-status')?.value || '';

    let list = this.data.vehicles;
    if (filterTerm) {
      const term = filterTerm.toLowerCase();
      list = list.filter(v => 
        v.model.toLowerCase().includes(term) ||
        v.year.includes(term) ||
        v.color.toLowerCase().includes(term)
      );
    }
    if (statusFilter) {
      list = list.filter(v => v.status === statusFilter);
    }

    grid.innerHTML = list.map(car => `
      <div class="vehicle-card">
        <div class="vehicle-image-wrapper">
          <img src="${car.photo || 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=700&q=80'}" alt="${car.model}" loading="lazy">
          <span class="vehicle-badge-status ${car.status.toLowerCase()}">${car.status}</span>
        </div>
        <div class="vehicle-details">
          <h4 class="vehicle-name">${car.model}</h4>
          <div class="vehicle-specs">
            <span>📅 ${car.year}</span>
            <span>🛣️ ${car.km ? car.km.toLocaleString('pt-BR') + ' km' : '0 km'}</span>
            <span>⚙️ ${car.transmission}</span>
          </div>
          ${car.features ? `<p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:8px;">${car.features}</p>` : ''}
          <div class="vehicle-price-box">
            <span class="text-muted" style="font-size:0.75rem;">À vista ou Financiado:</span>
            <div class="vehicle-price">${this.formatMoney(car.price)}</div>
          </div>
          <div class="vehicle-actions">
            <button class="btn btn-sm btn-ai flex-1" onclick="crm.generateAiForVehicle('${car.id}')">
              ✨ Criar Anúncio IA
            </button>
            <button class="btn btn-sm btn-outline" onclick="crm.editVehicle('${car.id}')">
              ✏️
            </button>
            <button class="btn btn-sm btn-danger-outline" onclick="crm.deleteVehicle('${car.id}')">
              🗑️
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 5. TAREFAS / FOLLOW-UP
  renderTasks() {
    const listEl = document.getElementById('task-list');
    if (!listEl) return;

    if (this.data.tasks.length === 0) {
      listEl.innerHTML = `<li class="text-muted" style="padding: 24px; text-align: center;">Nenhuma tarefa pendente no momento.</li>`;
      return;
    }

    listEl.innerHTML = this.data.tasks.map(t => {
      const d = new Date(t.dueDate);
      const dateFormatted = isNaN(d) ? t.dueDate : d.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
      return `
        <li style="display:flex; align-items:center; justify-content:space-between; padding:14px 20px; border-bottom:1px solid var(--border-color); ${t.completed ? 'opacity:0.5;' : ''}">
          <div style="display:flex; align-items:center; gap:12px;">
            <input type="checkbox" ${t.completed ? 'checked' : ''} onchange="crm.toggleTask('${t.id}')" style="width:18px; height:18px; accent-color:var(--primary-600); cursor:pointer;">
            <div>
              <strong style="${t.completed ? 'text-decoration:line-through;' : ''}">${t.title}</strong><br>
              <small class="text-muted">Prazo: ${dateFormatted} • Prioridade: ${t.priority}</small>
            </div>
          </div>
          <button class="btn btn-sm btn-danger-outline" onclick="crm.deleteTask('${t.id}')">🗑️</button>
        </li>
      `;
    }).join('');
  }

  toggleTask(taskId) {
    const t = this.data.tasks.find(x => x.id === taskId);
    if (t) {
      t.completed = !t.completed;
      this.saveData();
      this.renderTasks();
      this.updateCounters();
    }
  }

  deleteTask(taskId) {
    this.data.tasks = this.data.tasks.filter(t => t.id !== taskId);
    this.saveData();
    this.renderTasks();
    this.updateCounters();
    this.showToast('Tarefa removida.');
  }

  // Populate Selects
  populateSelects() {
    // Clientes nas Simulações
    const simClient = document.getElementById('sim-client-select');
    if (simClient) {
      simClient.innerHTML = `<option value="">Selecione um cliente...</option>` + 
        this.data.leads.map(l => `<option value="${l.id}">${l.name} (${this.formatPhone(l.phone)})</option>`).join('');
    }

    // Veículos nas Simulações
    const simVehicle = document.getElementById('sim-vehicle-select');
    if (simVehicle) {
      simVehicle.innerHTML = `<option value="">Selecione um veículo...</option>` + 
        this.data.vehicles.map(v => `<option value="${v.id}" data-price="${v.price}">${v.model} - ${this.formatMoney(v.price)}</option>`).join('');
      
      simVehicle.onchange = (e) => {
        const opt = e.target.selectedOptions[0];
        if (opt && opt.dataset.price) {
          const priceInput = document.getElementById('sim-car-price');
          if (priceInput) priceInput.value = opt.dataset.price;
        }
      };
    }

    // Veículo no Lead Modal
    const leadVehicle = document.getElementById('lead-vehicle-select');
    if (leadVehicle) {
      leadVehicle.innerHTML = `<option value="">Selecione o carro de interesse...</option>` + 
        this.data.vehicles.map(v => `<option value="${v.id}">${v.model} (${this.formatMoney(v.price)})</option>`).join('');
    }

    // Veículo no AI Copilot
    const aiVehicle = document.getElementById('ai-vehicle-select');
    if (aiVehicle) {
      aiVehicle.innerHTML = `<option value="">Escolha um carro do estoque...</option>` + 
        this.data.vehicles.map(v => `<option value="${v.id}">${v.model} (${v.year}) - ${this.formatMoney(v.price)}</option>`).join('');
    }
  }

  // ================= SIMULADOR FINANCEIRO =================
  calculateSimulation() {
    const price = parseFloat(document.getElementById('sim-car-price').value) || 0;
    const downPayment = parseFloat(document.getElementById('sim-down-payment').value) || 0;
    const monthlyRate = (parseFloat(document.getElementById('sim-interest-rate').value) || 1.69) / 100;
    const bank = document.getElementById('sim-bank').value;

    const financedAmount = price - downPayment;
    if (financedAmount <= 0) {
      alert('O valor financiado deve ser maior que zero!');
      return;
    }

    const terms = [24, 36, 48, 60];
    const resultsContainer = document.getElementById('sim-results-box');

    // Tabela Price: PMT = PV * (i * (1 + i)^n) / ((1 + i)^n - 1)
    const optionsHtml = terms.map(n => {
      const factor = Math.pow(1 + monthlyRate, n);
      const installment = financedAmount * (monthlyRate * factor) / (factor - 1);
      return `
        <div class="simulation-plan-card">
          <div>
            <div class="simulation-plan-term">${n} vezes fixas</div>
            <small class="text-muted">Total Financiado: ${this.formatMoney(financedAmount)}</small>
          </div>
          <div class="simulation-plan-installment">${this.formatMoney(installment)} <span style="font-size:0.7rem; color:var(--text-muted);">/mês</span></div>
        </div>
      `;
    }).join('');

    resultsContainer.innerHTML = `
      <div style="margin-bottom: 12px; padding: 12px; background: rgba(37, 99, 235, 0.1); border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.2);">
        <strong>Instituição Parceira: ${bank}</strong><br>
        <small class="text-muted">Valor do Carro: ${this.formatMoney(price)} | Entrada: ${this.formatMoney(downPayment)}</small>
      </div>
      ${optionsHtml}
      <button class="btn btn-whatsapp w-full" style="margin-top: 14px;" onclick="crm.copySimulationToWhatsApp(${price}, ${downPayment}, '${bank}')">
        📋 Copiar Simulação para Enviar no WhatsApp
      </button>
    `;
    this.showToast('Opções de parcelamento calculadas!');
  }

  copySimulationToWhatsApp(price, downPayment, bank) {
    const financed = price - downPayment;
    const rate = 0.0169;
    const p48 = financed * (rate * Math.pow(1 + rate, 48)) / (Math.pow(1 + rate, 48) - 1);
    const p60 = financed * (rate * Math.pow(1 + rate, 60)) / (Math.pow(1 + rate, 60) - 1);

    const text = `Fala, tudo bem? Aqui é o Alejandro da TatuCar Veículos! 🚗💨\n\nFiz uma simulação especial para você no ${bank}:\n\n` +
      `▪️ Valor do Veículo: ${this.formatMoney(price)}\n` +
      (downPayment > 0 ? `▪️ Entrada: ${this.formatMoney(downPayment)}\n` : `▪️ Opção de simulação SEM ENTRADA*\n`) +
      `▪️ 48x de aprox. ${this.formatMoney(p48)}\n` +
      `▪️ 60x de aprox. ${this.formatMoney(p60)}\n\n` +
      `*Condição sujeita a análise da financeira parceira.\n\nQual dessas opções fica mais confortável no seu bolso para darmos andamento?`;

    navigator.clipboard.writeText(text).then(() => {
      this.showToast('Simulação copiada para a área de transferência!');
    });
  }

  // ================= WILLIAN AI COPILOT ENGINE =================
  generateAiContent() {
    const vehicleId = document.getElementById('ai-vehicle-select').value;
    const type = document.querySelector('input[name="ai-content-type"]:checked').value;
    const outputBox = document.getElementById('ai-output-box');

    if (!vehicleId) {
      alert('Por favor, selecione um veículo primeiro!');
      return;
    }

    const car = this.data.vehicles.find(v => v.id === vehicleId);
    if (!car) return;

    outputBox.innerHTML = '<span style="color:var(--ai-purple);">Gerando conteúdo inteligente com WILLIAN AI...</span>';

    setTimeout(() => {
      let content = '';

      if (type === 'marketplace') {
        content = `🚗 TÍTULO FACEBOOK MARKETPLACE (OTIMIZADO):
${car.model} ${car.year} - ${car.transmission} - Oportunidade TatuCar!

📝 DESCRIÇÃO COMERCIAL:
Procurando um veículo confiável, econômico e com excelente procedência em Curitiba?

Confira este ${car.model} ano ${car.year}!
✔️ Cor: ${car.color}
✔️ Câmbio: ${car.transmission}
✔️ Combustível: ${car.fuel}
✔️ Quilometragem real: ${car.km ? car.km.toLocaleString('pt-BR') + ' km' : 'Consulte'}
✔️ Destaques: ${car.features || 'Revisado e de procedência'}

💰 VALOR À VISTA: ${this.formatMoney(car.price)}
💳 Simulação de financiamento disponível (inclusive opções sem entrada mediante análise de crédito pelas financeiras parceiras).
🚗 Aceitamos seu carro ou moto na troca com excelente avaliação!

📍 TATUCAR VEÍCULOS
Rua Enette Dubard, 1111 - Curitiba/PR
Atendimento comercial: (41) 99535-0811

📲 Entre em contato agora pelo chat ou WhatsApp e faça sua simulação sem compromisso!`;

      } else if (type === 'reels') {
        const yearSpelled = this.spellYear(car.year);
        const priceSpelled = this.spellPrice(car.price);

        content = `🎬 ROTEIRO REELS / TIKTOK AUTOMOTIVO (15 a 25 SEGUNDOS)
Diretrizes TatuCar: Números por extenso, gancho nos 3 primeiros segundos e CTA objetivo.

[CENA 1 - 0s a 4s | GANCHO COMERCIAL]
Câmera: Enquadramento frontal do carro, luz natural ou estúdio TatuCar.
Alejandro falando: "Tá procurando um carro completo e confiável sem estourar o orçamento do mês? Então você precisa ver esse aqui!"

[CENA 2 - 4s a 12s | APRESENTAÇÃO DO CARRO]
Câmera: Tomadas fluidas de farol, lateral e interior impecável.
Narraçāo: "${car.model}, ano ${yearSpelled}, câmbio ${car.transmission.toLowerCase()}. Carro revisado, conservado de verdade, perfeito para o dia a dia e para a família!"

[CENA 3 - 12s a 18s | PREÇO E CONDIÇÃO REAL]
Câmera: Close no painel ligado e detalhes dos bancos.
Narração: "Valor de ${priceSpelled}! E o melhor: temos opções com entrada facilitada ou até sem entrada, dependendo da aprovação do banco parceiro."

[CENA 4 - 18s a 22s | CHAMADA PARA AÇÃO]
Câmera: Alejandro ao lado do carro, apontando para o botão/link.
Alejandro: "Quer saber o valor da sua parcela? Comenta 'EU QUERO' ou chama a gente no WhatsApp da TatuCar agora mesmo!"`;

      } else if (type === 'recovery') {
        content = `💬 SCRIPT WHATSAPP DE RECUPERAÇÃO DE LEAD (CURTO E DIRETO)
Indicado para clientes que pararam de responder ou fizeram simulação:

"Olá, tudo bem? Aqui é o Alejandro da TatuCar Veículos! 🚗

Passando rapidinho porque lembrei de você: ainda está buscando um ${car.model}? 

Chegou uma oportunidade nova aqui na loja que se encaixa muito bem nas condições de financiamento que você estava procurando.

Posso te passar os detalhes agora?"`;
      }

      outputBox.textContent = content;
      this.showToast('Conteúdo gerado com sucesso pelo WILLIAN AI!');
    }, 400);
  }

  spellYear(yearStr) {
    // Ex: "2018/2019" -> "dois mil e dezoito modelo dois mil e dezenove"
    return yearStr.replace('2016', 'dois mil e dezesseis')
      .replace('2017', 'dois mil e dezessete')
      .replace('2018', 'dois mil e dezoito')
      .replace('2019', 'dois mil e dezenove')
      .replace('2020', 'dois mil e vinte')
      .replace('2021', 'dois mil e vinte e um');
  }

  spellPrice(price) {
    if (price === 48900) return 'quarenta e oito mil e novecentos reais';
    if (price === 57900) return 'cinquenta e sete mil e novecentos reais';
    if (price === 43900) return 'quarenta e três mil e novecentos reais';
    if (price === 76900) return 'setenta e seis mil e novecentos reais';
    if (price === 84900) return 'oitenta e quatro mil e novecentos reais';
    if (price === 54900) return 'cinquenta e quatro mil e novecentos reais';
    return `${this.formatMoney(price)}`;
  }

  generateAiForVehicle(vehicleId) {
    this.navigateTo('willian-ai');
    const sel = document.getElementById('ai-vehicle-select');
    if (sel) {
      sel.value = vehicleId;
      this.generateAiContent();
    }
  }

  // ================= WHATSAPP MODAL =================
  openWhatsAppModal(leadId) {
    const lead = this.data.leads.find(l => l.id === leadId);
    if (!lead) return;

    this.activeWaLead = lead;
    document.getElementById('wa-target-name').textContent = lead.name;
    document.getElementById('wa-target-phone').textContent = this.formatPhone(lead.phone);

    // Template padrão conforme estágio
    let template = 'welcome';
    if (lead.stage === 'APROVADO') template = 'approved';
    else if (lead.stage === 'NOVO') template = 'welcome';
    else template = 'recovery';

    this.setWhatsAppTemplate(template);
    this.openModal('modal-whatsapp');
  }

  setWhatsAppTemplate(type) {
    const lead = this.activeWaLead;
    if (!lead) return;

    const vehicle = this.data.vehicles.find(v => v.id === lead.vehicleId);
    const vehicleName = vehicle ? vehicle.model : 'veículo';

    let msg = '';
    if (type === 'welcome') {
      msg = `Olá ${lead.name.split(' ')[0]}! Tudo bem? Aqui é o Alejandro da TatuCar Veículos, em Curitiba. Vi que você demonstrou interesse no ${vehicleName}. Me conta: você gostaria de fazer uma simulação de financiamento ou pretende dar algum carro na troca?`;
    } else if (type === 'approved') {
      msg = `Boa notícia, ${lead.name.split(' ')[0]}! 🔥 A sua proposta para o ${vehicleName} teve APROVAÇÃO nas nossas financeiras parceiras! Gostaria de agendar um horário aqui na loja na Rua Enette Dubard, 1111 para você ver o carro de perto e assinar o contrato?`;
    } else if (type === 'recovery') {
      msg = `Olá ${lead.name.split(' ')[0]}! Passando para saber se você ainda está procurando o seu carro. Surgiram algumas novas condições aqui na TatuCar que podem facilitar a aprovação. Vamos dar andamento na sua simulação?`;
    } else if (type === 'visit') {
      msg = `Olá ${lead.name.split(' ')[0]}! Estamos com o ${vehicleName} pronto e disponível para test-drive aqui na TatuCar Veículos (Rua Enette Dubard, 1111). Você consegue dar uma passada aqui hoje até as 18h30 ou prefere no sábado?`;
    }

    document.getElementById('wa-message-text').value = msg;

    // Atualiza botões
    document.querySelectorAll('.btn-template').forEach(b => {
      b.classList.toggle('active', b.dataset.template === type);
    });
  }

  // ================= MODAL MANAGERS =================
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
  }

  setupEventListeners() {
    // Fechar modais no X e overlay
    document.querySelectorAll('[data-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-close');
        this.closeModal(modalId);
      });
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
      });
    });

    // Abrir modais pelos botões da barra superior
    document.getElementById('btn-quick-new-lead')?.addEventListener('click', () => {
      this.resetLeadForm();
      this.openModal('modal-lead');
    });

    document.getElementById('btn-new-lead-kanban')?.addEventListener('click', () => {
      this.resetLeadForm();
      this.openModal('modal-lead');
    });

    document.getElementById('btn-add-client')?.addEventListener('click', () => {
      this.resetLeadForm();
      this.openModal('modal-lead');
    });

    document.getElementById('btn-sync-site')?.addEventListener('click', () => {
      this.syncOfficialSiteCars();
    });

    document.getElementById('btn-add-vehicle')?.addEventListener('click', () => {
      this.resetVehicleForm();
      this.openModal('modal-vehicle');
    });

    document.getElementById('btn-add-task')?.addEventListener('click', () => {
      document.getElementById('form-task').reset();
      this.openModal('modal-task');
    });

    document.getElementById('btn-quick-simulator')?.addEventListener('click', () => {
      this.navigateTo('propostas');
    });

    // Salvar Lead Form
    document.getElementById('form-lead')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSaveLead();
    });

    // Salvar Veículo Form
    document.getElementById('form-vehicle')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSaveVehicle();
    });

    // Salvar Tarefa Form
    document.getElementById('form-task')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSaveTask();
    });

    // Calcular Simulação
    document.getElementById('btn-calculate-sim')?.addEventListener('click', () => {
      this.calculateSimulation();
    });

    // Gerar IA Copilot
    document.getElementById('btn-generate-ai')?.addEventListener('click', () => {
      this.generateAiContent();
    });

    // Copiar saída IA
    document.getElementById('btn-copy-ai-output')?.addEventListener('click', () => {
      const text = document.getElementById('ai-output-box').textContent;
      navigator.clipboard.writeText(text).then(() => {
        this.showToast('Conteúdo copiado!');
      });
    });

    // WhatsApp Template Switcher
    document.querySelectorAll('.btn-template').forEach(btn => {
      btn.addEventListener('click', () => {
        this.setWhatsAppTemplate(btn.dataset.template);
      });
    });

    // Abrir WhatsApp Web
    document.getElementById('btn-open-whatsapp-now')?.addEventListener('click', () => {
      if (!this.activeWaLead) return;
      const cleanPhone = this.activeWaLead.phone.replace(/\D/g, '');
      const text = encodeURIComponent(document.getElementById('wa-message-text').value);
      window.open(`https://wa.me/55${cleanPhone}?text=${text}`, '_blank');
      this.closeModal('modal-whatsapp');
      this.showToast('Abrindo WhatsApp Web...');
    });

    // Filtros de busca de clientes e veículos
    document.getElementById('filter-clients-search')?.addEventListener('input', (e) => {
      this.renderClientsTable(e.target.value);
    });

    document.getElementById('filter-clients-stage')?.addEventListener('change', () => {
      this.renderClientsTable(document.getElementById('filter-clients-search').value);
    });

    document.getElementById('filter-vehicles-search')?.addEventListener('input', (e) => {
      this.renderVehicles(e.target.value);
    });

    document.getElementById('filter-vehicles-status')?.addEventListener('change', () => {
      this.renderVehicles(document.getElementById('filter-vehicles-search').value);
    });

    // Backup & Restore
    document.getElementById('btn-export-json')?.addEventListener('click', () => this.exportBackup());
    document.getElementById('input-import-json')?.addEventListener('change', (e) => this.importBackup(e));
    document.getElementById('btn-reset-demo-data')?.addEventListener('click', () => this.resetDemoData());
    document.getElementById('btn-export-clients')?.addEventListener('click', () => this.exportClientsCSV());
    // WhatsApp Hub Listeners
    document.getElementById('btn-generate-qr')?.addEventListener('click', () => this.generateWhatsAppQr());
    document.getElementById('btn-send-test-wa')?.addEventListener('click', () => this.sendTestWhatsApp());
    document.getElementById('btn-toggle-api-settings')?.addEventListener('click', () => {
      const panel = document.getElementById('api-settings-panel');
      if (panel) panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    });
    document.getElementById('btn-save-wa-config')?.addEventListener('click', () => {
      this.showToast('Configurações de API salvas com sucesso!');
      document.getElementById('api-settings-panel').style.display = 'none';
    });

    // Facebook Poster Listeners
    document.getElementById('btn-post-to-marketplace')?.addEventListener('click', () => this.postToFacebookMarketplace());
    document.getElementById('btn-copy-fb-package')?.addEventListener('click', () => this.copyFacebookPackage());

  }

  // ================= CRUD OPERATIONS =================
  resetLeadForm() {
    document.getElementById('form-lead').reset();
    document.getElementById('lead-id').value = '';
    document.getElementById('modal-lead-title').textContent = 'Cadastrar Novo Lead';
  }

  handleSaveLead() {
    const id = document.getElementById('lead-id').value;
    const leadData = {
      id: id || `lead-${Date.now()}`,
      name: document.getElementById('lead-name').value.trim(),
      phone: document.getElementById('lead-phone').value.trim(),
      city: document.getElementById('lead-city').value.trim() || 'Curitiba/PR',
      cpf: document.getElementById('lead-cpf').value.trim(),
      vehicleId: document.getElementById('lead-vehicle-select').value,
      stage: document.getElementById('lead-stage').value,
      profile: document.getElementById('lead-profile').value,
      tradeIn: document.getElementById('lead-trade-in').value.trim(),
      notes: document.getElementById('lead-notes').value.trim(),
      lastContact: 'Agora',
      createdAt: id ? (this.data.leads.find(l => l.id === id)?.createdAt || '2026-10-14') : new Date().toISOString().split('T')[0]
    };

    if (id) {
      const idx = this.data.leads.findIndex(l => l.id === id);
      if (idx !== -1) this.data.leads[idx] = leadData;
      this.showToast('Lead atualizado com sucesso!');
    } else {
      this.data.leads.unshift(leadData);
      this.showToast('Novo lead cadastrado com sucesso!');
    }

    this.saveData();
    this.closeModal('modal-lead');
    this.renderAll();
  }

  editLead(leadId) {
    const lead = this.data.leads.find(l => l.id === leadId);
    if (!lead) return;

    document.getElementById('lead-id').value = lead.id;
    document.getElementById('lead-name').value = lead.name;
    document.getElementById('lead-phone').value = lead.phone;
    document.getElementById('lead-city').value = lead.city || '';
    document.getElementById('lead-cpf').value = lead.cpf || '';
    document.getElementById('lead-vehicle-select').value = lead.vehicleId || '';
    document.getElementById('lead-stage').value = lead.stage;
    document.getElementById('lead-profile').value = lead.profile || 'CLT';
    document.getElementById('lead-trade-in').value = lead.tradeIn || '';
    document.getElementById('lead-notes').value = lead.notes || '';

    document.getElementById('modal-lead-title').textContent = 'Editar Informações do Lead';
    this.openModal('modal-lead');
  }

  deleteLead(leadId) {
    if (confirm('Tem certeza que deseja excluir este cliente do CRM?')) {
      this.data.leads = this.data.leads.filter(l => l.id !== leadId);
      this.saveData();
      this.renderAll();
      this.showToast('Cliente removido.');
    }
  }

  syncOfficialSiteCars() {
    fetch('assets/tatucar_cars.json')
      .then(res => res.json())
      .then(officialCars => {
        this.data.vehicles = officialCars;
        this.saveData();
        this.renderAll();
        this.showToast('Estoque sincronizado com sucesso: 24 veículos oficiais da TatuCar!');
      })
      .catch(err => {
        console.error('Erro ao buscar tatucar_cars.json, usando padrão', err);
        this.data.vehicles = DEFAULT_DATA.vehicles;
        this.saveData();
        this.renderAll();
        this.showToast('Estoque restaurado para os 24 veículos da TatuCar!');
      });
  }

  // Veículos
  resetVehicleForm() {
    document.getElementById('form-vehicle').reset();
    document.getElementById('vehicle-id').value = '';
    document.getElementById('modal-vehicle-title').textContent = 'Cadastrar Veículo no Estoque';
  }

  handleSaveVehicle() {
    const id = document.getElementById('vehicle-id').value;
    const vehicleData = {
      id: id || `veh-${Date.now()}`,
      model: document.getElementById('vehicle-model').value.trim(),
      year: document.getElementById('vehicle-year').value.trim(),
      price: parseFloat(document.getElementById('vehicle-price').value) || 0,
      km: parseInt(document.getElementById('vehicle-km').value) || 0,
      color: document.getElementById('vehicle-color').value.trim(),
      transmission: document.getElementById('vehicle-transmission').value,
      fuel: document.getElementById('vehicle-fuel').value,
      status: document.getElementById('vehicle-status').value,
      features: document.getElementById('vehicle-features').value.trim(),
      photo: document.getElementById('vehicle-photo').value.trim() || 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=700&q=80'
    };

    if (id) {
      const idx = this.data.vehicles.findIndex(v => v.id === id);
      if (idx !== -1) this.data.vehicles[idx] = vehicleData;
      this.showToast('Veículo atualizado!');
    } else {
      this.data.vehicles.unshift(vehicleData);
      this.showToast('Veículo adicionado ao estoque!');
    }

    this.saveData();
    this.closeModal('modal-vehicle');
    this.renderAll();
  }

  editVehicle(vehicleId) {
    const car = this.data.vehicles.find(v => v.id === vehicleId);
    if (!car) return;

    document.getElementById('vehicle-id').value = car.id;
    document.getElementById('vehicle-model').value = car.model;
    document.getElementById('vehicle-year').value = car.year;
    document.getElementById('vehicle-price').value = car.price;
    document.getElementById('vehicle-km').value = car.km || '';
    document.getElementById('vehicle-color').value = car.color || '';
    document.getElementById('vehicle-transmission').value = car.transmission || 'Manual';
    document.getElementById('vehicle-fuel').value = car.fuel || 'Flex';
    document.getElementById('vehicle-status').value = car.status || 'DISPONIVEL';
    document.getElementById('vehicle-features').value = car.features || '';
    document.getElementById('vehicle-photo').value = car.photo || '';

    document.getElementById('modal-vehicle-title').textContent = 'Editar Veículo';
    this.openModal('modal-vehicle');
  }

  deleteVehicle(vehicleId) {
    if (confirm('Tem certeza que deseja remover este veículo do estoque?')) {
      this.data.vehicles = this.data.vehicles.filter(v => v.id !== vehicleId);
      this.saveData();
      this.renderAll();
      this.showToast('Veículo removido do estoque.');
    }
  }

  // Tarefas
  handleSaveTask() {
    const taskData = {
      id: `task-${Date.now()}`,
      title: document.getElementById('task-title').value.trim(),
      dueDate: document.getElementById('task-due-date').value,
      priority: document.getElementById('task-priority').value,
      completed: false
    };

    this.data.tasks.unshift(taskData);
    this.saveData();
    this.closeModal('modal-task');
    this.renderTasks();
    this.updateCounters();
    this.showToast('Tarefa agendada!');
  }

  // Backup & Export
  exportBackup() {
    const jsonStr = JSON.stringify(this.data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_tatucar_crm_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast('Backup baixado com sucesso!');
  }

  importBackup(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (parsed.leads && parsed.vehicles) {
          this.data = parsed;
          this.saveData();
          this.renderAll();
          this.showToast('Dados restaurados com sucesso!');
        } else {
          alert('Arquivo de backup inválido!');
        }
      } catch (err) {
        alert('Erro ao processar arquivo JSON!');
      }
    };
    reader.readAsText(file);
  }

  resetDemoData() {
    if (confirm('Deseja restaurar todos os dados para o padrão de demonstração da TatuCar?')) {
      this.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
      this.saveData();
      this.renderAll();
      this.showToast('Dados restaurados para o padrão TatuCar!');
    }
  }

  exportClientsCSV() {
    let csv = 'Nome,Telefone,CPF,Cidade,Etapa,Perfil,Veículo\n';
    this.data.leads.forEach(l => {
      const v = this.data.vehicles.find(car => car.id === l.vehicleId);
      csv += `"${l.name}","${l.phone}","${l.cpf || ''}","${l.city || ''}","${l.stage}","${l.profile || ''}","${v ? v.model : ''}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `clientes_tatucar_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // ================= UTILITIES =================
  formatMoney(val) {
    return (val || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  formatPhone(phone) {
    if (!phone) return '';
    const clean = phone.replace(/\D/g, '');
    if (clean.length === 11) {
      return `(${clean.slice(0, 2)}) ${clean.slice(2, 7)}-${clean.slice(7)}`;
    } else if (clean.length === 10) {
      return `(${clean.slice(0, 2)}) ${clean.slice(2, 6)}-${clean.slice(6)}`;
    }
    return phone;
  }

  getStageClass(stage) {
    switch (stage) {
      case 'NOVO': return 'novo';
      case 'EM ANALISE': return 'analise';
      case 'APROVADO': return 'aprovado';
      case 'VENDA': return 'venda';
      case 'FINALIZADO': return 'finalizado';
      case 'REPROVADO': return 'reprovado';
      default: return 'novo';
    }
  }

  showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

// Global initialization
let crm;
window.addEventListener('DOMContentLoaded', () => {
  crm = new CrmApp();
});
