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
    | "moon"
    | "crown"
    | "wheat"
    | "hammer"
    | "feather";
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
  {
    id: "hera",
    name: "Hera",
    title: "Rainha do Olimpo",
    domain: "Casamento, família e a coroa",
    icon: "crown",
    colors: {
      from: "#34d399",
      to: "#047857",
      glow: "rgba(52, 211, 153, 0.4)",
    },
    personality: [
      "Autoridade natural",
      "Lealdade inegociável",
      "Proteção feroz da família",
      "Memória longa",
      "Dignidade acima de tudo",
    ],
    weakness: "O rancor. Filhos de Hera nunca esquecem uma traição — e às vezes passam mais tempo cobrando o passado do que vivendo o presente.",
    phrase: "\"Reis vêm e vão. A rainha permanece.\"",
    story: `Hera é a rainha do Olimpo, deusa do casamento, da família e dos juramentos. Enquanto Zeus reina pelo trovão, Hera reina pela permanência: é ela quem sustenta a ordem quando o rei falha, quem guarda cada promessa feita diante dos deuses — e quem cobra, uma a uma, as que foram quebradas.

Os antigos a pintaram como ciumenta, mas esqueceram de dizer o motivo: Hera é a única do Olimpo que leva a palavra dada a sério. Seu pavão de mil olhos vê tudo, sua romã guarda o sabor doce e amargo dos laços eternos, e sua paciência é a de quem sabe que, no fim, todos os tronos respondem a ela.`,
    children: `Filhos de Hera são os pilares que ninguém percebe até faltarem. Mantêm a casa de pé, a palavra intacta e o grupo unido — e exigem em troca uma única coisa: lealdade. Perdoam quase tudo, menos traição. Quem tem um filho de Hera ao lado tem um reino inteiro; quem o trai, descobre que a memória de uma rainha não tem prazo de validade.`,
  },
  {
    id: "demeter",
    name: "Deméter",
    title: "Deusa das Colheitas",
    domain: "Colheitas, terra e ciclos",
    icon: "wheat",
    colors: {
      from: "#dcc57e",
      to: "#6b7c2b",
      glow: "rgba(220, 197, 126, 0.35)",
    },
    personality: [
      "Cuidado que alimenta",
      "Paciência de quem planta",
      "Força silenciosa",
      "Pé no chão",
      "Fúria rara e devastadora",
    ],
    weakness: "A entrega sem medida. Filhos de Deméter cuidam de todo mundo — e quase sempre se esquecem de deixar alguma colheita para si.",
    phrase: "\"Tudo que você planta, um dia volta. Escolha bem as sementes.\"",
    story: `Deméter é a deusa das colheitas, da fertilidade da terra e dos ciclos que sustentam toda a vida. Sem raio, sem tridente, sem espada — e ainda assim nenhum deus é mais indispensável: quando Deméter para, o mundo inteiro para junto.

Foi o que ela provou quando Hades levou sua filha Perséfone: Deméter deixou a terra estéril até os próprios deuses implorarem por um acordo. Do luto dela nasceu o inverno; do reencontro, a primavera. Deméter é a prova de que o amor que nutre também é o que pode negar tudo.`,
    children: `Filhos de Deméter são o colo do grupo: os que alimentam, acolhem e fazem qualquer lugar virar lar. Têm uma calma de quem entende os ciclos — sabem que nada floresce fora do tempo. Mas ninguém erre com quem eles amam: a mesma mão que planta sabe exatamente o que arrancar pela raiz.`,
  },
  {
    id: "hefesto",
    name: "Hefesto",
    title: "Deus da Forja",
    domain: "Fogo, engenho e criação",
    icon: "hammer",
    colors: {
      from: "#fb923c",
      to: "#7c2d12",
      glow: "rgba(251, 146, 60, 0.4)",
    },
    personality: [
      "Mãos que resolvem tudo",
      "Criatividade prática",
      "Persistência de ferro",
      "Poucas palavras, muitas obras",
      "Coração maior do que mostra",
    ],
    weakness: "A oficina como esconderijo. Filhos de Hefesto criam maravilhas para os outros — e usam o trabalho como muralha para não serem feridos de novo.",
    phrase: "\"Me jogaram do Olimpo. Eu voltei pela porta que eu mesmo forjei.\"",
    story: `Hefesto é o deus do fogo e da forja, o artesão do Olimpo. Rejeitado e atirado montanha abaixo pela própria mãe por ter nascido imperfeito, caiu, sobreviveu — e respondeu construindo. Suas mãos criaram o raio de Zeus, a armadura de Aquiles, os autômatos de bronze e cada trono do Olimpo.

É o único deus que trabalha. Enquanto os outros disputam glória, Hefesto constrói as ferramentas que tornam a glória possível. Manca, carrega cicatrizes e fala pouco — mas nenhum deus criou tanto, e nenhuma criação divina existe sem passar antes pela sua bigorna.`,
    children: `Filhos de Hefesto são os que consertam o que o mundo quebra — objetos, planos e, às vezes, pessoas. Preferem fazer a falar, criar a aparecer. Já conheceram a rejeição cedo, e por isso constroem com as mãos aquilo que não sabem pedir com palavras. Subestimados até a hora em que tudo desmorona… e só o que eles forjaram continua de pé.`,
  },
  {
    id: "hermes",
    name: "Hermes",
    title: "Mensageiro dos Deuses",
    domain: "Caminhos, mensagens e astúcia",
    icon: "feather",
    colors: {
      from: "#7dd3fc",
      to: "#1e40af",
      glow: "rgba(125, 211, 252, 0.4)",
    },
    personality: [
      "Mente mais rápida que o corpo",
      "Lábia infalível",
      "Curiosidade sem freio",
      "Alergia a ficar parado",
      "Um plano B para cada plano B",
    ],
    weakness: "A pressa. Filhos de Hermes conhecem todos os atalhos — menos o caminho para ficar quando algo finalmente vale a pena.",
    phrase: "\"Enquanto você decidia, eu já fui e voltei.\"",
    story: `Hermes é o mensageiro dos deuses, senhor das estradas, do comércio e da astúcia. Nasceu de manhã e, antes do anoitecer do mesmo dia, já tinha inventado a lira e roubado o gado sagrado de Apolo — e saído da confusão com um acordo e um amigo. É esse o poder de Hermes: não há porta fechada, só porta ainda não negociada.

Com suas sandálias aladas, é o único que transita livre entre o Olimpo, a terra e o submundo. Deus dos viajantes, dos mercadores e dos espertos, Hermes entende o que nenhum outro imortal aceita: o mundo não pertence a quem tem força. Pertence a quem chega primeiro.`,
    children: `Filhos de Hermes falam com todo mundo, dão um jeito em tudo e nunca estão onde você os deixou. São os que descobrem a notícia antes de todo mundo, vendem qualquer ideia e transformam estranhos em contatos. Impossíveis de prender, difíceis de acompanhar — e, quando você mais precisar de uma saída, são eles que já conhecem o caminho.`,
  },
];

export const godQuizQuestions: GodQuizQuestion[] = [
  {
    id: "g1",
    question: "Quando tudo sai do controle, o que você faz primeiro?",
    options: [
      { text: "Assumo o comando — alguém precisa liderar", weights: { zeus: 2, hera: 2, ares: 1 } },
      { text: "Analiso tudo em silêncio antes de agir", weights: { atena: 2, hades: 2, hefesto: 1 } },
      { text: "Sigo meu instinto, mesmo que seja arriscado", weights: { poseidon: 2, ares: 2, artemis: 1 } },
      { text: "Nada. Espero passar — o tempo resolve quase tudo", weights: { hipnos: 3, hades: 1 } },
      { text: "Alivio o clima com uma piada e sigo em frente", weights: { dionisio: 2, hermes: 2, apolo: 1 } },
    ],
  },
  {
    id: "g2",
    question: "O que as pessoas mais notam em você?",
    options: [
      { text: "Minha presença — quando eu chego, todos percebem", weights: { zeus: 2, hera: 2 } },
      { text: "Meu charme — conquisto as pessoas sem esforço", weights: { afrodite: 2, hermes: 2, apolo: 1 } },
      { text: "Minha intensidade — sou tempestade e calmaria", weights: { poseidon: 3, ares: 1 } },
      { text: "Meu mistério — poucos sabem o que realmente penso", weights: { hades: 3, artemis: 1 } },
      { text: "Meu ar distante — pareço estar sempre em outro mundo", weights: { hipnos: 3, dionisio: 1 } },
    ],
  },
  {
    id: "g3",
    question: "Qual destes lugares te chama?",
    options: [
      { text: "O topo de um prédio, com a cidade aos meus pés", weights: { zeus: 2, hera: 1, afrodite: 1 } },
      { text: "O mar aberto, sem regras e sem fronteiras", weights: { poseidon: 3, hermes: 1 } },
      { text: "Um canto quieto e cheio de segredos — biblioteca antiga, oficina, porão", weights: { atena: 2, hefesto: 2, hades: 1 } },
      { text: "Uma arena, com adrenalina correndo nas veias", weights: { ares: 3, zeus: 1 } },
      { text: "Uma floresta silenciosa, iluminada só pela lua", weights: { artemis: 2, demeter: 2, hipnos: 1 } },
    ],
  },
  {
    id: "g4",
    question: "Seja honesto: qual é o seu maior defeito?",
    options: [
      { text: "Orgulho — dificilmente admito que errei", weights: { zeus: 2, hera: 2 } },
      { text: "Impulsividade — ajo antes de pensar", weights: { ares: 3, poseidon: 1 } },
      { text: "Frieza — me afasto quando me machucam", weights: { hades: 2, hefesto: 2 } },
      { text: "Vaidade — gosto de ser admirado(a)", weights: { afrodite: 3, apolo: 1 } },
      { text: "Fuga — deixo tudo pra depois e me escondo no meu mundo", weights: { hipnos: 2, dionisio: 1, hermes: 1 } },
    ],
  },
  {
    id: "g5",
    question: "Se pudesse escolher um dom divino, qual seria?",
    options: [
      { text: "Dominar — o raio, o mar e todo trono obedecendo a um gesto meu", weights: { zeus: 2, poseidon: 2, hera: 1 } },
      { text: "Ver o que ninguém vê — segredos, mentiras e até o futuro", weights: { hades: 2, atena: 2, apolo: 1 } },
      { text: "Nunca perder — na batalha, na caça ou na lábia", weights: { ares: 2, hermes: 2, artemis: 1 } },
      { text: "Criar com as mãos — curar, forjar e fazer a vida florescer", weights: { hefesto: 2, demeter: 2, apolo: 1 } },
      { text: "Encantar — corações, multidões e até os sonhos", weights: { afrodite: 2, dionisio: 2, hipnos: 1 } },
    ],
  },
  {
    id: "g6",
    question: "O que você mais valoriza em alguém?",
    options: [
      { text: "Inteligência — mentes brilhantes me atraem", weights: { atena: 2, hefesto: 1, hades: 1 } },
      { text: "Liberdade — ninguém manda em quem eu amo", weights: { poseidon: 2, artemis: 1, hermes: 1 } },
      { text: "Coragem — quero alguém que lute ao meu lado", weights: { ares: 3, zeus: 1 } },
      { text: "Lealdade — trair é imperdoável", weights: { hera: 2, hades: 1, zeus: 1 } },
      { text: "Cuidado — alguém que rega o que ama todos os dias", weights: { demeter: 2, afrodite: 1, apolo: 1 } },
    ],
  },
  {
    id: "g7",
    question: "Qual núcleo de Éden você tem mais afinidade?",
    options: [
      { text: "Corte Vampírica — poder, elegância e intrigas eternas", weights: { hades: 2, zeus: 1 } },
      { text: "As Matilhas — instinto, lealdade e liberdade selvagem", weights: { ares: 2, artemis: 1 } },
      { text: "Mundo Feérico — beleza mortal e caos encantador", weights: { afrodite: 2, hermes: 1 } },
      { text: "Forças Armadas — ordem, disciplina e estratégia", weights: { atena: 2, hera: 1 } },
      { text: "Nenhum — prefiro assistir tudo de longe, sem me envolver", weights: { hipnos: 2, hades: 1 } },
    ],
  },
  {
    id: "g8",
    question: "Se o Despertar te transformasse, a qual clã você pertenceria?",
    options: [
      { text: "Casa Nocturna — a elite vampírica de Vinewood", weights: { zeus: 2, hera: 1 } },
      { text: "Matilha Carmesim — os das ruas, que rejeitam tradições", weights: { ares: 2, poseidon: 1 } },
      { text: "Matilha do Crepúsculo — os lobos do porto, leais até o fim", weights: { poseidon: 2, artemis: 1 } },
      { text: "Conselho das Sombras — os anciões que governam sem serem vistos", weights: { hades: 2, atena: 1 } },
      { text: "Os Errantes — sem clã, sem regras, só a noite e a estrada", weights: { dionisio: 2, hermes: 1 } },
    ],
  },
  {
    id: "g9",
    question: "Como seria sua sexta à noite perfeita?",
    options: [
      { text: "Recebendo a galera em casa — mesa cheia, todo mundo ouvindo minha história", weights: { hera: 2, demeter: 2, zeus: 1 } },
      { text: "Festa até o sol nascer, sem pensar no amanhã", weights: { dionisio: 2, afrodite: 1, hermes: 1 } },
      { text: "Em casa, no meu mundo, longe de todo mundo", weights: { hipnos: 2, hades: 1, hefesto: 1 } },
      { text: "Treinando ou competindo — descanso é pra depois", weights: { ares: 3, atena: 1 } },
      { text: "Sob o céu aberto, o mais longe possível da cidade", weights: { artemis: 3, poseidon: 1 } },
    ],
  },
  {
    id: "g10",
    question: "E quando o problema não tem solução?",
    options: [
      { text: "Sempre tem solução — eu crio uma, nem que seja um atalho que ninguém viu", weights: { atena: 2, hermes: 2, hefesto: 1 } },
      { text: "Enfrento mesmo assim, nem que seja só pra não me render", weights: { ares: 3, poseidon: 1 } },
      { text: "Aceito. Nem tudo nessa vida é pra ser resolvido", weights: { hipnos: 2, demeter: 1, artemis: 1 } },
      { text: "Transformo a dor em arte, música ou história", weights: { apolo: 3, dionisio: 1 } },
      { text: "Afundo de vez… e depois renasço", weights: { poseidon: 2, hades: 2 } },
    ],
  },
  {
    id: "g11",
    question: "Você descobre a verdade sobre o Despertar. O que faz?",
    options: [
      { text: "Uso a informação pra chegar ao topo", weights: { zeus: 3, hermes: 1 } },
      { text: "Conto pra todos — a verdade liberta", weights: { apolo: 3, atena: 1 } },
      { text: "Guardo o segredo e observo quem mais sabe", weights: { hades: 2, atena: 1, hera: 1 } },
      { text: "Finjo que nunca vi nada. Menos um problema pra mim", weights: { hipnos: 3, dionisio: 1 } },
      { text: "Protejo quem eu amo antes de qualquer coisa", weights: { artemis: 2, demeter: 1, ares: 1 } },
    ],
  },
  {
    id: "g12",
    question: "Qual dessas frases parece que foi escrita por você?",
    options: [
      { text: "\"Eu nasci pra brilhar — e o mundo vai perceber\"", weights: { apolo: 3, zeus: 1 } },
      { text: "\"Prefiro estar só do que mal acompanhado(a)\"", weights: { artemis: 3, hades: 1 } },
      { text: "\"A vida é curta demais pra ser levada a sério\"", weights: { dionisio: 2, hermes: 1, hipnos: 1 } },
      { text: "\"Eu sinto tudo — e finjo que não\"", weights: { poseidon: 3, afrodite: 1 } },
      { text: "\"Amar é a coisa mais corajosa que existe\"", weights: { afrodite: 2, hera: 1, demeter: 1 } },
    ],
  },
  {
    id: "g13",
    question: "Numa discussão acalorada, qual é a sua reação automática?",
    options: [
      { text: "Parto pro embate — levanto a voz se for preciso", weights: { ares: 2, zeus: 1, poseidon: 1 } },
      { text: "Fico frio(a) e desmonto o argumento com lógica", weights: { atena: 2, hades: 1, hera: 1 } },
      { text: "Me fecho na hora — processo tudo por dentro, sozinho(a)", weights: { hefesto: 2, hipnos: 1, artemis: 1 } },
      { text: "Apaziguo — não deixo ninguém sair sangrando", weights: { demeter: 2, afrodite: 1, apolo: 1 } },
      { text: "Solto uma piada e saio de cena antes de explodir", weights: { dionisio: 2, hermes: 2 } },
    ],
  },
  {
    id: "g14",
    question: "Sendo bem sincero(a): qual é o seu medo mais profundo?",
    options: [
      { text: "Ser esquecido(a) — passar pelo mundo sem deixar marca", weights: { apolo: 2, zeus: 1, afrodite: 1 } },
      { text: "Ser traído(a) por quem eu mais confiei", weights: { hera: 2, hades: 1, atena: 1 } },
      { text: "Ficar preso(a) — numa rotina, numa gaiola, numa versão de mim", weights: { poseidon: 1, hermes: 1, dionisio: 1, artemis: 1 } },
      { text: "Ver quem eu amo sofrer sem poder impedir", weights: { demeter: 2, ares: 1, artemis: 1 } },
      { text: "Deixar alguém me conhecer de verdade — e ser rejeitado(a)", weights: { hefesto: 2, hipnos: 2 } },
    ],
  },
];
