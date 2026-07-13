export interface LoreCategory {
  id: string;
  title: string;
  description: string;
  type: "main" | "personal";
  content: LoreSection[];
}

export interface LoreSection {
  id: string;
  title: string;
  content: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  category: string;
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  featured?: boolean;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  description: string;
}

export const loreCategories: LoreCategory[] = [
  {
    id: "prologo",
    title: "Prólogo",
    description: "O despertar de Los Santos",
    type: "main",
    content: [
      {
        id: "prologo-1",
        title: "Prólogo",
        content: `A cidade respira… mas não como antes. Em Los Santos, o cheiro não é mais só de asfalto quente e ambição, há ferro no ar, pesado, quase palpável, como se cada esquina tivesse sido marcada por algo que insiste em não desaparecer. O sangue seca nas rachaduras da calçada, gritos se perdem antes de alcançar a superfície, e promessas são sussurradas por vozes que não pertencem a este mundo.

Alguns dizem que tudo começou com o controle, com olhos demais observando e mãos demais interferindo. Outros juram que foi a fome, antiga, primordial, inevitável. Mas a verdade… é que algo foi acordado, e desde então, nada voltou a dormir.

Entre postes piscando e vielas esquecidas, criaturas caminham sem precisar mais se esconder. Membros da corte disputam território como reis decadentes, afogados em intrigas e sangue, enquanto matilhas rasgam a noite em busca de propósito, deixando para trás corpos, pedaços, ecos de violência. E nos cantos onde a realidade falha, onde a lógica se desfaz como um sonho febril… o mundo feérico observa, distorcido, belo e cruel, como se aguardasse o momento certo para atravessar de vez.

No meio disso tudo, humanos ainda fingem que vivem, agarrados a rotinas frágeis, ignorando o que se esconde logo além da luz dos postes. Mas você… você sentiu, não sentiu? Aquela sensação incômoda, como se algo te observasse antes mesmo de você chegar.

A cidade está diferente. Algo te chamou até aqui. E em Los Santos… nada chama sem cobrar um preço.`,
      },
    ],
  },
  {
    id: "corte",
    title: "A Corte Vampírica",
    description: "Reis decadentes e intrigas sangrentas",
    type: "main",
    content: [
      {
        id: "corte-1",
        title: "Origens da Corte",
        content: `A Corte Vampírica de Los Santos não nasceu de um único evento, mas de séculos de manipulação silenciosa. Quando o Despertar ocorreu, os vampiros que antes se escondiam nas sombras das elites emergiram com uma nova ousadia. Territórios foram divididos como um tabuleiro de xadrez sangrento, cada clã disputando influência sobre bairros inteiros.

Os anciões governam a partir de mansões escondidas em Vinewood Hills, enquanto os recém-criados patrulham as ruas como sentinelas famintas. A hierarquia é rígida: desafiar um superior não significa apenas morte — significa uma existência eterna de tormento.`,
      },
      {
        id: "corte-2",
        title: "Territórios",
        content: `Cada distrito de Los Santos possui um senhor vampírico que responde diretamente ao Conselho das Sombras. Downtown é neutro — um território de negociação onde nenhum clã pode agir abertamente. Vinewood pertence à Casa Nocturna, enquanto Davis e Strawberry são dominados pela Matilha Carmesim, vampiros de rua que rejeitam as tradições da corte.`,
      },
    ],
  },
  {
    id: "matilhas",
    title: "As Matilhas",
    description: "Lobisomens e a fome primordial",
    type: "main",
    content: [
      {
        id: "matilhas-1",
        title: "O Chamado da Lua",
        content: `As matilhas de Los Santos não escolheram esta vida — ela os escolheu. A fome primordial que despertou na cidade amplificou o instinto de cada lobisomem, tornando o controle uma batalha diária. Alguns matilhas abraçaram a selvageria, transformando zonas industriais em territórios de caça. Outros tentam manter uma fachada de normalidade, trabalhando empregos comuns enquanto a lua os chama.

A Matilha do Crepúsculo, liderada por um alfa misterioso conhecido apenas como "O Último", controla as áreas ao redor do porto. Suas regras são simples: não caçar humanos sem necessidade, proteger os próprios, e nunca — jamais — trair a matilha.`,
      },
    ],
  },
  {
    id: "feerico",
    title: "O Mundo Feérico",
    description: "Onde a realidade se desfaz",
    type: "main",
    content: [
      {
        id: "feerico-1",
        title: "A Ruptura do Véu",
        content: `Nos cantos de Los Santos onde a lógica falha, o mundo feérico observa. Espelhos que mostram realidades diferentes, becos que levam a lugares impossíveis, flores que cantam ao amanhecer — estes são os sinais da presença feérica.

O Despertar não afetou apenas vampiros e lobisomens. Criaturas do Outro Lado encontraram brechas na realidade, e algumas escolheram permanecer. Os feéricos não seguem as mesmas regras dos outros sobrenaturais — suas motivações são alienígenas, seus acordos perigosos, e sua beleza… mortal.`,
      },
    ],
  },
  {
    id: "forcas-armadas",
    title: "Forças Armadas",
    description: "Ordem e equilíbrio em Los Santos",
    type: "main",
    content: [
      {
        id: "fa-1",
        title: "O Papel das Forças Armadas",
        content: `As Forças Armadas de Los Santos são essenciais para a organização e equilíbrio do ambiente. Elas atuam como a linha entre o caos sobrenatural e a ordem humana, mantendo uma vigilância constante sobre atividades que ameaçam a estabilidade da cidade.

Membros das Forças Armadas possuem treinamento especial para lidar com ameaças sobrenaturais, embora a maioria da população desconheça a verdadeira natureza de seus inimigos. A hierarquia militar é respeitada tanto por humanos quanto por criaturas que entendem que o equilíbrio depende desta força.`,
      },
      {
        id: "fa-2",
        title: "Protocolos",
        content: `Todo membro das Forças Armadas deve seguir protocolos rígidos de engajamento. A prioridade é sempre a proteção dos civis, seguida pela contenção de ameaças sobrenaturais. O uso de força letal requer autorização do comando, exceto em situações de defesa imediata.`,
      },
    ],
  },
  {
    id: "regras",
    title: "Regras do Servidor",
    description: "Diretrizes essenciais para todos os jogadores",
    type: "main",
    content: [
      {
        id: "regras-1",
        title: "Regras Gerais",
        content: `1. Respeite todos os jogadores e membros da staff.
2. Roleplay de qualidade é obrigatório — mantenha seu personagem consistente.
3. Proibido metagaming (usar informações que seu personagem não saberia).
4. Proibido powergaming (forçar ações sobre outros jogadores).
5. RDM (Random Deathmatch) e VDM (Vehicle Deathmatch) são estritamente proibidos.
6. Value of Life (VoL) — seu personagem deve valorizar sua vida.
7. New Life Rule (NLR) — após morrer, esqueça os eventos que levaram à sua morte.`,
      },
      {
        id: "regras-2",
        title: "Regras Sobrenaturais",
        content: `1. Cada raça sobrenatural possui habilidades e limitações específicas — respeite-as.
2. Transformações devem ser roleplayadas adequadamente.
3. O uso de poderes em áreas públicas deve ser discreto (Masquerade).
4. Conflitos entre raças devem seguir a hierarquia e políticas estabelecidas.
5. Criaturas novas devem passar por um processo de integração na lore.`,
      },
    ],
  },
  {
    id: "lore-pessoal",
    title: "Lores Pessoais",
    description: "Histórias de personagens da comunidade",
    type: "personal",
    content: [
      {
        id: "personal-1",
        title: "Como criar sua Lore Pessoal",
        content: `Sua lore pessoal é a história do seu personagem dentro do universo de Éden. Ela deve ser coerente com a lore principal e respeitar as regras estabelecidas. Ao criar sua história, considere:

- Qual raça ou facção seu personagem pertence
- Como o Despertar afetou sua vida
- Relações com outras facções e personagens
- Objetivos e motivações pessoais
- Traumas e conquistas que moldaram quem ele é hoje

Lores pessoais aprovadas pela staff serão exibidas nesta seção para inspirar novos jogadores.`,
      },
    ],
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "O que aconteceu com Los Santos que mudou tudo?",
    options: [
      "Uma guerra civil entre gangues",
      "Algo foi acordado — o Despertar",
      "Um terremoto destruiu a cidade",
      "O governo declarou lei marcial",
    ],
    correctIndex: 1,
    category: "Lore",
  },
  {
    id: "q2",
    question: "Qual é o papel das Forças Armadas no servidor?",
    options: [
      "Apenas decoração para o roleplay",
      "Essenciais para organização e equilíbrio do ambiente",
      "Controlar apenas o tráfego da cidade",
      "Servir exclusivamente aos vampiros",
    ],
    correctIndex: 1,
    category: "Regras",
  },
  {
    id: "q3",
    question: "O que é proibido durante o processo de ALLOWLIST?",
    options: [
      "Responder em inglês",
      "Enviar links, imagens ou vídeos",
      "Pedir ajuda a amigos",
      "Usar mais de uma conta",
    ],
    correctIndex: 1,
    category: "Allowlist",
  },
  {
    id: "q4",
    question: "Quantas tentativas você possui para ser aprovado na ALLOWLIST?",
    options: ["1 tentativa", "2 tentativas", "3 tentativas", "Tentativas ilimitadas"],
    correctIndex: 2,
    category: "Allowlist",
  },
  {
    id: "q5",
    question: "Qual o tempo máximo para responder cada pergunta do quiz?",
    options: ["2 minutos", "4 minutos", "10 minutos", "Sem limite de tempo"],
    correctIndex: 1,
    category: "Allowlist",
  },
  {
    id: "q6",
    question: "O que é RDM (Random Deathmatch)?",
    options: [
      "Matar alguém sem motivo de roleplay",
      "Usar veículos como arma",
      "Revelar informações secretas",
      "Criar um personagem overpowered",
    ],
    correctIndex: 0,
    category: "Regras",
  },
  {
    id: "q7",
    question: "O que significa 'Masquerade' no contexto sobrenatural?",
    options: [
      "Usar máscaras em eventos",
      "Manter discrição sobre poderes em áreas públicas",
      "Um tipo de vampiro ancião",
      "A regra de não falar durante combate",
    ],
    correctIndex: 1,
    category: "Regras",
  },
  {
    id: "q8",
    question: "Quem disputa território como 'reis decadentes' na lore?",
    options: [
      "As matilhas de lobisomens",
      "Membros da corte vampírica",
      "As Forças Armadas",
      "Criaturas feéricas",
    ],
    correctIndex: 1,
    category: "Lore",
  },
  {
    id: "q9",
    question: "O que acontece se você ultrapassar o tempo limite de uma pergunta?",
    options: [
      "Perde apenas aquela pergunta",
      "Ganha tempo extra automaticamente",
      "Precisa reiniciar todo o processo",
      "Nada, o quiz continua normalmente",
    ],
    correctIndex: 2,
    category: "Allowlist",
  },
  {
    id: "q10",
    question: "O que é a New Life Rule (NLR)?",
    options: [
      "Criar um novo personagem após ban",
      "Esquecer eventos que levaram à sua morte",
      "Renascer como outra raça sobrenatural",
      "Recomeçar o quiz do zero",
    ],
    correctIndex: 1,
    category: "Regras",
  },
];

export const shopItems: ShopItem[] = [
  {
    id: "vip-basico",
    name: "VIP Básico",
    description: "Acesso a benefícios exclusivos por 30 dias. Inclui tag VIP, prioridade na fila e bônus de XP.",
    price: 29.9,
    category: "VIP",
    featured: true,
  },
  {
    id: "vip-premium",
    name: "VIP Premium",
    description: "O pacote completo por 30 dias. Tag Premium, fila prioritária, bônus de XP duplo e veículo exclusivo.",
    price: 59.9,
    category: "VIP",
    featured: true,
  },
  {
    id: "veiculo-sport",
    name: "Veículo Sport Exclusivo",
    description: "Um veículo esportivo exclusivo do servidor. Entrega imediata após compra.",
    price: 45.0,
    category: "Veículos",
  },
  {
    id: "casa-vinewood",
    name: "Casa em Vinewood",
    description: "Propriedade exclusiva na hills de Vinewood. Personalização completa do interior.",
    price: 89.9,
    category: "Propriedades",
    featured: true,
  },
  {
    id: "skin-exclusiva",
    name: "Skin Exclusiva",
    description: "Aparência única para seu personagem. Disponível apenas na loja.",
    price: 19.9,
    category: "Cosméticos",
  },
  {
    id: "moedas-1000",
    name: "1.000 Moedas Éden",
    description: "Pacote de 1.000 moedas para usar dentro do servidor.",
    price: 15.0,
    category: "Moedas",
  },
  {
    id: "moedas-5000",
    name: "5.000 Moedas Éden",
    description: "Pacote de 5.000 moedas com 10% de bônus.",
    price: 65.0,
    category: "Moedas",
  },
  {
    id: "reset-personagem",
    name: "Reset de Personagem",
    description: "Recomece seu personagem mantendo itens VIP. Ideal para novas histórias.",
    price: 25.0,
    category: "Serviços",
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: "discord",
    name: "Discord",
    url: "https://discord.gg/eden",
    icon: "discord",
    description: "Entre na nossa comunidade. Allowlist, suporte e novidades.",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com/edenrp",
    icon: "instagram",
    description: "Screenshots, bastidores e atualizações visuais do servidor.",
  },
  {
    id: "tiktok",
    name: "TikTok",
    url: "https://tiktok.com/@edenrp",
    icon: "tiktok",
    description: "Momentos épicos e highlights da comunidade.",
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "https://youtube.com/@edenrp",
    icon: "youtube",
    description: "Vídeos oficiais, trailers e tutoriais do servidor.",
  },
  {
    id: "twitter",
    name: "Twitter / X",
    url: "https://twitter.com/edenrp",
    icon: "twitter",
    description: "Anúncios em tempo real e interação com a comunidade.",
  },
];

export const allowlistInfo = {
  maxAttempts: 3,
  timePerQuestion: 240,
  rules: [
    "Leia todas as abas de lore e regras antes de iniciar",
    "Cada resposta deve refletir seu entendimento sobre o universo da cidade",
    "Não envie links, imagens ou vídeos — sua allowlist será cancelada",
    "Você possui 3 tentativas para ser aprovado",
    "Cada pergunta deve ser respondida em até 4 minutos",
    "Caso o limite de tempo seja ultrapassado, reinicie todo o processo",
  ],
};
