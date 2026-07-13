export interface God {
  id: string;
  name: string;
  title: string;
  domain: string;
  icon:
    | "zap"
    | "waves"
    | "skull"
    | "shield"
    | "sword"
    | "heart"
    | "wine"
    | "cloud"
    | "sun"
    | "moon";
  colors: {
    from: string;
    to: string;
    glow: string;
  };
  personality: string[];
  weakness: string;
  phrase: string;
  story: string;
  children: string;
}

export interface GodOption {
  text: string;
  weights: Partial<Record<string, number>>;
}

export interface GodQuizQuestion {
  id: string;
  question: string;
  options: GodOption[];
}

export const gods: God[] = [
  {
    id: "zeus",
    name: "Zeus",
    title: "Rei do Olimpo",
    domain: "Céus, trovão e liderança",
    icon: "zap",
    colors: {
      from: "#f7c548",
      to: "#e08c1f",
      glow: "rgba(247, 197, 72, 0.4)",
    },
    personality: [
      "Liderança natural",
      "Carisma magnético",
      "Ambição sem limites",
      "Senso de justiça",
      "Dificuldade em aceitar ordens",
    ],
    weakness: "O orgulho. Filhos de Zeus raramente admitem que erraram — e quando caem, caem como um raio.",
    phrase: "\"O trono não se pede. Se toma.\"",
    story: `Zeus é o senhor do Olimpo, deus dos céus, do trovão e da ordem divina. Após derrotar seu pai, o titã Cronos, dividiu o mundo com seus irmãos e reservou para si o domínio mais alto: o céu. Seu raio é a arma mais temida da mitologia — capaz de rachar montanhas e derrubar impérios.

Mas Zeus não é apenas força. É política, estratégia e presença. Nenhum deus reuniu tantos aliados, e nenhum acumulou tantos inimigos. Ele governa porque nasceu para governar — e porque ninguém teve coragem de dizer o contrário.`,
    children: `Filhos de Zeus nascem para o comando. São aqueles que entram em uma sala e mudam o clima dela, que assumem a frente quando ninguém mais quer, que sentem uma inquietação constante — como se soubessem que nasceram para algo maior. Costumam atrair seguidores sem pedir, e tempestades sem perceber.`,
  },
  {
    id: "poseidon",
    name: "Poseidon",
    title: "Senhor dos Mares",
    domain: "Oceanos, tempestades e terremotos",
    icon: "waves",
    colors: {
      from: "#4fd1c5",
      to: "#2b6cb0",
      glow: "rgba(79, 209, 197, 0.4)",
    },
    personality: [
      "Espírito livre",
      "Intensidade emocional",
      "Lealdade profunda",
      "Instinto afiado",
      "Temperamento imprevisível",
    ],
    weakness: "A tempestade interior. Filhos de Poseidon sentem tudo com força total — a calmaria e a fúria vivem a um passo de distância.",
    phrase: "\"O mar não pede licença. Ele chega.\"",
    story: `Poseidon é o deus dos mares, das tempestades e dos terremotos — o irmão indomável de Zeus. Enquanto o rei do Olimpo governa com política, Poseidon governa com força bruta e instinto. Seu tridente comanda as marés, abre fendas na terra e afunda frotas inteiras quando sua ira desperta.

Os antigos temiam Poseidon mais do que qualquer outro deus, porque o mar é generoso até o dia em que decide não ser. Ele é o protetor dos navegantes corajosos e o pesadelo dos arrogantes.`,
    children: `Filhos de Poseidon são águas profundas: calmos na superfície, indomáveis por dentro. Não suportam gaiolas, regras sem sentido ou pessoas falsas. São leais até o fim com quem amam — e implacáveis com quem trai. Sentem uma atração inexplicável pela água, pela liberdade e pelo horizonte.`,
  },
  {
    id: "hades",
    name: "Hades",
    title: "Senhor do Submundo",
    domain: "Mortos, riquezas ocultas e sombras",
    icon: "skull",
    colors: {
      from: "#9f7aea",
      to: "#44337a",
      glow: "rgba(159, 122, 234, 0.4)",
    },
    personality: [
      "Reservado e misterioso",
      "Mente estratégica",
      "Lealdade rara e absoluta",
      "Frieza calculada",
      "Profundamente incompreendido",
    ],
    weakness: "O isolamento. Filhos de Hades se afastam antes de serem abandonados — e carregam sozinhos o peso que ninguém vê.",
    phrase: "\"Todos descem até mim. É só uma questão de tempo.\"",
    story: `Hades é o senhor do submundo, guardião dos mortos e das riquezas escondidas sob a terra. Ao contrário do que contam, ele não é o vilão do Olimpo — é o irmão que aceitou o reino que ninguém quis e o governa com mais justiça do que qualquer outro deus governa o seu.

Hades raramente sobe à superfície. Não precisa. Tudo que vive, um dia desce até ele. Seu elmo o torna invisível, e sua palavra, uma vez dada, jamais é quebrada — o que o torna o mais confiável e o mais temido dos deuses.`,
    children: `Filhos de Hades são as pessoas que ninguém decifra. Silenciosos, observadores, sempre três passos à frente. Poucos ganham sua confiança, mas quem ganha, ganha para sempre. Sentem-se em casa na noite, nos lugares quietos, nas conversas profundas — e enxergam verdades que os outros fingem não ver.`,
  },
  {
    id: "atena",
    name: "Atena",
    title: "Deusa da Sabedoria",
    domain: "Estratégia, razão e guerra justa",
    icon: "shield",
    colors: {
      from: "#cbd5e0",
      to: "#5a7ba6",
      glow: "rgba(203, 213, 224, 0.35)",
    },
    personality: [
      "Inteligência afiada",
      "Estrategista nata",
      "Autocontrole",
      "Perfeccionismo",
      "Justiça acima de tudo",
    ],
    weakness: "A razão como armadura. Filhos de Atena analisam tanto os próprios sentimentos que às vezes esquecem de senti-los.",
    phrase: "\"A guerra se vence antes da primeira espada ser erguida.\"",
    story: `Atena nasceu adulta e armada, saltando da cabeça de Zeus — a sabedoria em forma de deusa. É a estrategista do Olimpo, padroeira dos heróis inteligentes, dos generais pacientes e das cidades justas. Atenas, a maior cidade da Grécia, escolheu levar seu nome.

Enquanto Ares representa o sangue da guerra, Atena representa a mente dela. Nunca perdeu uma batalha, porque nunca lutou uma que não pudesse vencer. Sua coruja enxerga no escuro o que nenhum outro olhar alcança.`,
    children: `Filhos de Atena vivem com a mente em chamas: planejam, questionam, resolvem. São aqueles a quem todos recorrem quando tudo desmorona, os que mantêm a calma quando o mundo grita. Exigem muito dos outros — e o dobro de si mesmos. Subestimá-los é sempre o primeiro erro do inimigo.`,
  },
  {
    id: "ares",
    name: "Ares",
    title: "Deus da Guerra",
    domain: "Batalha, coragem e fúria",
    icon: "sword",
    colors: {
      from: "#fc8181",
      to: "#9b2c2c",
      glow: "rgba(252, 129, 129, 0.4)",
    },
    personality: [
      "Coragem absoluta",
      "Impulsividade",
      "Espírito competitivo",
      "Proteção feroz dos seus",
      "Energia inesgotável",
    ],
    weakness: "O fogo sem freio. Filhos de Ares agem antes de pensar — e às vezes a batalha que mais precisam vencer é contra si mesmos.",
    phrase: "\"Enquanto eles planejam, eu já venci.\"",
    story: `Ares é o deus da guerra em sua forma mais crua: o grito da batalha, o sangue na areia, a coragem de avançar quando todos recuam. Os outros deuses o temiam e o criticavam — mas era ele quem chamavam quando a diplomacia acabava.

Ares não conhece meio-termo. Ama com violência, luta com paixão e protege os seus como um exército de um homem só. Onde há injustiça e covardia, sua fúria desperta. Onde há uma causa para lutar, ele já está na linha de frente.`,
    children: `Filhos de Ares nasceram com fogo nas veias. São os primeiros a entrar na briga e os últimos a sair, os que defendem os amigos sem pensar duas vezes, os que transformam raiva em combustível. Competitivos até no que não importa, destemidos até quando deviam ter medo — e absolutamente inesquecíveis.`,
  },
  {
    id: "afrodite",
    name: "Afrodite",
    title: "Deusa do Amor",
    domain: "Amor, beleza e desejo",
    icon: "heart",
    colors: {
      from: "#f4a8c8",
      to: "#b83280",
      glow: "rgba(244, 168, 200, 0.4)",
    },
    personality: [
      "Charme irresistível",
      "Empatia profunda",
      "Criatividade",
      "Poder de persuasão",
      "Coração intenso",
    ],
    weakness: "O espelho. Filhos de Afrodite sabem o poder que têm sobre os outros — o difícil é não se perder dentro dele.",
    phrase: "\"Impérios caem por ouro ou por amor. Eu comando o segundo.\"",
    story: `Afrodite nasceu da espuma do mar, e o mundo nunca mais foi o mesmo. Deusa do amor, da beleza e do desejo, ela move guerras sem erguer uma arma — a Guerra de Troia começou por sua causa. Seu poder é o mais subestimado do Olimpo, e talvez o mais perigoso.

Porque exércitos vencem batalhas, mas o amor derruba reis. Afrodite entende o coração das pessoas melhor do que elas mesmas, e quem a considera apenas um rosto bonito descobre tarde demais o estrategista por trás do sorriso.`,
    children: `Filhos de Afrodite iluminam qualquer ambiente que entram. Conquistam sem esforço, leem as emoções dos outros como um livro aberto e têm um talento raro: fazer as pessoas se sentirem especiais. Por trás do charme, existe uma força feroz — nunca subestime alguém que entende o coração humano.`,
  },
  {
    id: "apolo",
    name: "Apolo",
    title: "Deus do Sol",
    domain: "Luz, música, poesia e profecia",
    icon: "sun",
    colors: {
      from: "#ffe08a",
      to: "#d97706",
      glow: "rgba(255, 224, 138, 0.4)",
    },
    personality: [
      "Talento natural",
      "Alma artística",
      "Otimismo radiante",
      "Busca pela perfeição",
      "Necessidade de brilhar",
    ],
    weakness: "A própria luz. Filhos de Apolo precisam ser admirados — e uma sombra de fracasso pode apagá-los por dentro.",
    phrase: "\"Onde eu chego, a escuridão recua.\"",
    story: `Apolo é o deus mais completo do Olimpo: sol, música, poesia, cura e profecia respondem ao seu nome. Sua lira encantava deuses e monstros, suas flechas nunca erravam, e o Oráculo de Delfos — o mais poderoso do mundo antigo — falava por sua voz.

Belo, talentoso e radiante, Apolo é a prova de que luz demais também queima. Amou intensamente e perdeu intensamente, e cada perda virou música. Onde há arte, cura ou verdade sendo dita, ali está sua marca.`,
    children: `Filhos de Apolo nasceram com um brilho que não passa despercebido. São os artistas, os curandeiros, os que transformam sentimento em criação. Aprendem rápido, encantam fácil e sentem uma necessidade quase física de fazer algo bonito com a própria vida. O mundo fica mais claro perto deles — literalmente.`,
  },
  {
    id: "artemis",
    name: "Ártemis",
    title: "Deusa da Lua e da Caça",
    domain: "Natureza selvagem, lua e independência",
    icon: "moon",
    colors: {
      from: "#a8e6cf",
      to: "#2f6b4f",
      glow: "rgba(168, 230, 207, 0.35)",
    },
    personality: [
      "Independência total",
      "Instinto protetor",
      "Amor pela natureza",
      "Poucos e bons laços",
      "Foco de caçadora",
    ],
    weakness: "A solidão escolhida. Filhos de Ártemis se bastam tanto que às vezes esquecem que também merecem companhia.",
    phrase: "\"Eu não me perco na floresta. Eu sou a floresta.\"",
    story: `Ártemis é a deusa da lua, da caça e das terras selvagens — irmã gêmea de Apolo e seu oposto perfeito. Enquanto ele governa o dia, ela reina sobre a noite. Jurou nunca pertencer a ninguém e manteve a palavra: nenhum deus, titã ou herói jamais a domou.

Com seu arco de prata, protege os animais, as florestas e os mais vulneráveis. É a mais implacável dos deuses quando alguém cruza seus limites — e a mais leal com quem corre ao seu lado.`,
    children: `Filhos de Ártemis não precisam de plateia. São os independentes, os que preferem a trilha vazia à multidão, os que protegem os seus com uma ferocidade silenciosa. Difíceis de conquistar, impossíveis de aprisionar. A lua conhece seus segredos — e é o suficiente.`,
  },
  {
    id: "dionisio",
    name: "Dionísio",
    title: "Deus do Êxtase",
    domain: "Vinho, festas e a fuga da realidade",
    icon: "wine",
    colors: {
      from: "#d78ef0",
      to: "#6b21a8",
      glow: "rgba(215, 142, 240, 0.4)",
    },
    personality: [
      "Espírito livre e festivo",
      "Alergia à rotina",
      "Emoções em ebulição",
      "Criatividade caótica",
      "Viver o agora, sempre",
    ],
    weakness: "O escape. Filhos de Dionísio fogem da realidade com tanta elegância que às vezes esquecem o caminho de volta.",
    phrase: "\"A realidade é opcional. A festa, não.\"",
    story: `Dionísio é o deus do vinho, do êxtase e da loucura sagrada — o único olimpiano nascido de uma mãe mortal. Onde ele passa, as regras se dissolvem: reis dançam com mendigos, a razão tira férias e a vida vira celebração ou caos, dependendo de quem conta a história.

Mas subestimá-lo é um erro antigo. Por trás da taça existe um deus que enlouqueceu exércitos e derrubou reinos inteiros sem erguer uma espada. Dionísio entende o que poucos aceitam: às vezes, é preciso sair da realidade para suportá-la.`,
    children: `Filhos de Dionísio são os que fazem a vida ficar suportável. Odeiam rotina, amam intensidade e têm um talento raro para transformar qualquer terça-feira em memória inesquecível. Fogem da realidade porque enxergam demais dela — e no fundo do caos que criam, existe alguém sentindo tudo em dobro.`,
  },
  {
    id: "hipnos",
    name: "Hipnos",
    title: "Deus do Sono",
    domain: "Sono, sonhos e o deixar acontecer",
    icon: "cloud",
    colors: {
      from: "#a5c8ff",
      to: "#3730a3",
      glow: "rgba(165, 200, 255, 0.35)",
    },
    personality: [
      "Calmaria absoluta",
      "Mundo interior gigante",
      "Observador silencioso",
      "Deixa a vida acontecer",
      "Paz acima de tudo",
    ],
    weakness: "A espera. Filhos de Hipnos preferem o sonho à luta — e às vezes a vida inteira passa enquanto eles esperam o momento certo.",
    phrase: "\"Por que lutar, se eu posso sonhar?\"",
    story: `Hipnos é o deus do sono, irmão gêmeo da morte e senhor de um reino que todos visitam e ninguém lembra. Vive numa caverna onde o sol nunca entra, cercado por papoulas, ao lado do rio do Esquecimento. Nem Zeus escapa do seu toque — Hipnos já fez o rei dos deuses dormir duas vezes, e sobreviveu para não contar a história.

Ele não luta, não disputa, não corre. E ainda assim, todos os poderosos do mundo se rendem a ele todas as noites. Hipnos venceu a guerra que nenhum deus venceu: a de não precisar vencer nada.`,
    children: `Filhos de Hipnos são os que assistem o mundo pegar fogo com uma calma que irrita os apressados. Não é preguiça — é outra relação com o tempo. Vivem metade aqui, metade num mundo interior imenso, e deixam a vida acontecer porque descobriram cedo que ela acontece de qualquer jeito. Subestimados por quase todos… menos por quem já precisou da paz que só eles carregam.`,
  },
];

export const godQuizQuestions: GodQuizQuestion[] = [
  {
    id: "g1",
    question: "Quando tudo sai do controle, o que você faz primeiro?",
    options: [
      { text: "Assumo o comando — alguém precisa liderar", weights: { zeus: 3, ares: 1 } },
      { text: "Analiso tudo em silêncio antes de agir", weights: { atena: 3, hades: 1 } },
      { text: "Sigo meu instinto, mesmo que seja arriscado", weights: { poseidon: 3, ares: 1 } },
      { text: "Nada. Espero passar — o tempo resolve quase tudo", weights: { hipnos: 3, hades: 1 } },
      { text: "Alivio o clima com uma piada e sigo em frente", weights: { dionisio: 3, apolo: 1 } },
    ],
  },
  {
    id: "g2",
    question: "O que as pessoas mais notam em você?",
    options: [
      { text: "Minha presença — quando eu chego, todos percebem", weights: { zeus: 3, afrodite: 1 } },
      { text: "Meu charme — conquisto as pessoas sem esforço", weights: { afrodite: 3, apolo: 1 } },
      { text: "Minha intensidade — sou tempestade e calmaria", weights: { poseidon: 3, ares: 1 } },
      { text: "Meu mistério — poucos sabem o que realmente penso", weights: { hades: 3, artemis: 1 } },
      { text: "Meu ar distante — pareço estar sempre em outro mundo", weights: { hipnos: 3, dionisio: 1 } },
    ],
  },
  {
    id: "g3",
    question: "Qual destes lugares te chama?",
    options: [
      { text: "O topo de um prédio, com a cidade aos meus pés", weights: { zeus: 3, afrodite: 1 } },
      { text: "O mar aberto, sem regras e sem fronteiras", weights: { poseidon: 3 } },
      { text: "Uma biblioteca antiga, cheia de segredos", weights: { atena: 3, hades: 1 } },
      { text: "Uma arena, com adrenalina correndo nas veias", weights: { ares: 3, zeus: 1 } },
      { text: "Uma floresta silenciosa, iluminada só pela lua", weights: { artemis: 3, hipnos: 1 } },
    ],
  },
  {
    id: "g4",
    question: "Seja honesto: qual é o seu maior defeito?",
    options: [
      { text: "Orgulho — dificilmente admito que errei", weights: { zeus: 3, apolo: 1 } },
      { text: "Impulsividade — ajo antes de pensar", weights: { ares: 3, poseidon: 1 } },
      { text: "Frieza — me afasto quando me machucam", weights: { hades: 3, atena: 1 } },
      { text: "Vaidade — gosto de ser admirado(a)", weights: { afrodite: 3, apolo: 1 } },
      { text: "Fuga — deixo tudo pra depois e me escondo no meu mundo", weights: { hipnos: 3, dionisio: 1 } },
    ],
  },
  {
    id: "g5",
    question: "Se pudesse escolher um dom divino, qual seria?",
    options: [
      { text: "Comandar os céus e invocar tempestades", weights: { zeus: 2, poseidon: 2 } },
      { text: "Caminhar entre sombras e falar com os mortos", weights: { hades: 3, atena: 1 } },
      { text: "Vencer qualquer batalha, contra qualquer inimigo", weights: { ares: 3 } },
      { text: "Ler corações e nunca ser esquecido(a)", weights: { afrodite: 3, apolo: 1 } },
      { text: "Entrar nos sonhos e viver neles o que eu quiser", weights: { hipnos: 3, dionisio: 1 } },
    ],
  },
  {
    id: "g6",
    question: "O que você mais valoriza em alguém?",
    options: [
      { text: "Inteligência — mentes brilhantes me atraem", weights: { atena: 3, hades: 1 } },
      { text: "Liberdade — ninguém manda em quem eu amo", weights: { poseidon: 2, artemis: 2 } },
      { text: "Coragem — quero alguém que lute ao meu lado", weights: { ares: 3, zeus: 1 } },
      { text: "Lealdade — trair é imperdoável", weights: { hades: 2, artemis: 1, zeus: 1 } },
      { text: "Boa energia — quem faz a vida ficar leve", weights: { dionisio: 3, apolo: 1 } },
    ],
  },
  {
    id: "g7",
    question: "Qual núcleo de Éden você tem mais afinidade?",
    options: [
      { text: "Corte Vampírica — poder, elegância e intrigas eternas", weights: { hades: 2, zeus: 1 } },
      { text: "As Matilhas — instinto, lealdade e liberdade selvagem", weights: { ares: 2, artemis: 1 } },
      { text: "Mundo Feérico — beleza mortal e caos encantador", weights: { afrodite: 2, dionisio: 1 } },
      { text: "Forças Armadas — ordem, disciplina e estratégia", weights: { atena: 2, apolo: 1 } },
      { text: "Nenhum — prefiro assistir tudo de longe, sem me envolver", weights: { hipnos: 2, hades: 1 } },
    ],
  },
  {
    id: "g8",
    question: "Se o Despertar te transformasse, a qual clã você pertenceria?",
    options: [
      { text: "Casa Nocturna — a elite vampírica de Vinewood", weights: { zeus: 2, afrodite: 1 } },
      { text: "Matilha Carmesim — os das ruas, que rejeitam tradições", weights: { ares: 2, poseidon: 1 } },
      { text: "Matilha do Crepúsculo — os lobos do porto, leais até o fim", weights: { poseidon: 2, artemis: 1 } },
      { text: "Conselho das Sombras — os anciões que governam sem serem vistos", weights: { hades: 2, atena: 1 } },
      { text: "Os Errantes — sem clã, sem regras, só a noite e a estrada", weights: { dionisio: 2, artemis: 1 } },
    ],
  },
  {
    id: "g9",
    question: "Como seria sua sexta à noite perfeita?",
    options: [
      { text: "Comandando a mesa — todo mundo ouvindo a minha história", weights: { zeus: 3, dionisio: 1 } },
      { text: "Festa até o sol nascer, sem pensar no amanhã", weights: { dionisio: 3, afrodite: 1 } },
      { text: "Em casa, no meu mundo, longe de todo mundo", weights: { hipnos: 3, hades: 1 } },
      { text: "Treinando ou competindo — descanso é pra depois", weights: { ares: 3, atena: 1 } },
      { text: "Sob o céu aberto, o mais longe possível da cidade", weights: { artemis: 3, poseidon: 1 } },
    ],
  },
  {
    id: "g10",
    question: "E quando o problema não tem solução?",
    options: [
      { text: "Sempre tem solução. Eu crio uma", weights: { atena: 3, zeus: 1 } },
      { text: "Enfrento mesmo assim, nem que seja só pra não me render", weights: { ares: 3, poseidon: 1 } },
      { text: "Aceito. Nem tudo nessa vida é pra ser resolvido", weights: { hipnos: 3, artemis: 1 } },
      { text: "Transformo a dor em arte, música ou história", weights: { apolo: 3, dionisio: 1 } },
      { text: "Afundo de vez… e depois renasço", weights: { poseidon: 3, hades: 1 } },
    ],
  },
  {
    id: "g11",
    question: "Você descobre a verdade sobre o Despertar. O que faz?",
    options: [
      { text: "Uso a informação pra chegar ao topo", weights: { zeus: 3, hades: 1 } },
      { text: "Conto pra todos — a verdade liberta", weights: { apolo: 3, atena: 1 } },
      { text: "Guardo o segredo e observo quem mais sabe", weights: { hades: 3, atena: 1 } },
      { text: "Finjo que nunca vi nada. Menos um problema pra mim", weights: { hipnos: 3, dionisio: 1 } },
      { text: "Protejo quem eu amo antes de qualquer coisa", weights: { artemis: 3, ares: 1 } },
    ],
  },
  {
    id: "g12",
    question: "Qual dessas frases parece que foi escrita por você?",
    options: [
      { text: "\"Eu nasci pra brilhar — e o mundo vai perceber\"", weights: { apolo: 3, zeus: 1 } },
      { text: "\"Prefiro estar só do que mal acompanhado(a)\"", weights: { artemis: 3, hades: 1 } },
      { text: "\"A vida é curta demais pra ser levada a sério\"", weights: { dionisio: 3, hipnos: 1 } },
      { text: "\"Eu sinto tudo — e finjo que não\"", weights: { poseidon: 3, afrodite: 1 } },
      { text: "\"Amar é a coisa mais corajosa que existe\"", weights: { afrodite: 3, apolo: 1 } },
    ],
  },
];
