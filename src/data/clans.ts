export type CoreId = "vampiros" | "changelings" | "garou";
export type FactionId = "camarilla" | "saba";

export type SymbolIcon =
  | "harp"
  | "skull"
  | "shadow"
  | "brain"
  | "cross"
  | "crow"
  | "dagger"
  | "dragon"
  | "mask"
  | "shell"
  | "fox"
  | "wolf";

export interface Clan {
  id: string;
  name: string;
  subtitle: string;
  core: CoreId;
  faction?: FactionId;
  colors: {
    from: string;
    to: string;
    glow: string;
  };
  colorName: string;
  flower: string;
  symbol: string;
  icon: SymbolIcon;
  traits: string[];
  shadow: string;
  description: string[];
  phrase: string;
}

export interface QuizOption {
  text: string;
  target: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export const coreLabels: Record<CoreId, string> = {
  vampiros: "Vampiros",
  changelings: "Changelings",
  garou: "Garou",
};

export const factionLabels: Record<FactionId, string> = {
  camarilla: "Camarilla",
  saba: "Sabá",
};

export const coreIntros: Record<CoreId, { title: string; paragraphs: string[] }> = {
  vampiros: {
    title: "Núcleo dos Vampiros",
    paragraphs: [
      "A imortalidade não transforma todos da mesma maneira.",
      "Alguns preservam estruturas, tradições e aparências. Outros enxergam essas mesmas estruturas como correntes que precisam ser rompidas. Entre a Camarilla e o Sabá, a eternidade assume diferentes formas de domínio, devoção, arte, loucura e liberdade.",
    ],
  },
  changelings: {
    title: "Núcleo dos Changelings",
    paragraphs: [
      "Nem toda criatura sobrenatural nasce da morte ou da fúria.",
      "Algumas surgem dos sonhos, dos desejos e das histórias que a humanidade se recusou a esquecer. Os Changelings caminham entre o encantamento e a realidade, carregando consigo a beleza, a estranheza e os perigos do mundo feérico.",
    ],
  },
  garou: {
    title: "Núcleo dos Garou",
    paragraphs: [
      "A natureza não escolhe apenas aqueles que lutam com garras e presas.",
      "Alguns são chamados pela força da alcateia, pelo dever e pela proteção do território. Outros caminham através da astúcia, da transformação e do encanto das raposas. Entre lobos e kitsunes, o instinto revela diferentes formas de poder.",
    ],
  },
};

export const clans: Clan[] = [
  {
    id: "musa",
    name: "Musa",
    subtitle: "A beleza como forma de poder",
    core: "vampiros",
    faction: "camarilla",
    colors: { from: "#ff4d6d", to: "#7a0c1f", glow: "rgba(255, 77, 109, 0.4)" },
    colorName: "Vermelho",
    flower: "Rosa",
    symbol: "Harpa",
    icon: "harp",
    traits: ["Carisma", "Sensibilidade", "Influência", "Criatividade"],
    shadow: "Vaidade, obsessão e necessidade de reconhecimento.",
    description: [
      "Você pertence às Musas, aqueles que compreendem que a beleza nunca é apenas aparência. Ela pode inspirar, manipular, destruir resistências e transformar completamente um ambiente.",
      "Sua sensibilidade permite perceber emoções que os outros tentam esconder. Você valoriza a expressão, o desejo, a arte e a construção cuidadosa de sua própria imagem. Para você, existir sem deixar uma impressão seria uma forma de desaparecer.",
      "Entretanto, sua busca por intensidade pode se transformar em obsessão. A necessidade de ser admirado ou compreendido pode fazer com que você confunda afeto com devoção.",
    ],
    phrase: "Tudo aquilo que é belo possui o poder de ferir.",
  },
  {
    id: "sepulcrum",
    name: "Sepulcrum",
    subtitle: "A memória daqueles que partiram",
    core: "vampiros",
    faction: "camarilla",
    colors: { from: "#f5f3ee", to: "#6b6a63", glow: "rgba(245, 243, 238, 0.35)" },
    colorName: "Branco",
    flower: "Magnólia",
    symbol: "Caveira",
    icon: "skull",
    traits: ["Conhecimento", "Lealdade", "Tradição", "Paciência"],
    shadow: "Apego, isolamento e dificuldade de abandonar antigas feridas.",
    description: [
      "Você pertence aos Sepulcrum, guardiões de conhecimentos que atravessam gerações, linhagens e sepulturas.",
      "Para você, a morte não representa um encerramento absoluto. O passado permanece presente através de nomes, heranças, segredos e consequências. Sua força nasce da capacidade de compreender aquilo que os outros preferem esquecer.",
      "Você tende a ser reservado, observador e profundamente consciente da passagem do tempo. Contudo, sua ligação com o passado pode impedir que novas possibilidades encontrem espaço em sua existência.",
    ],
    phrase: "Nada permanece enterrado para sempre.",
  },
  {
    id: "oblivium",
    name: "Oblivium",
    subtitle: "O poder que permanece nas sombras",
    core: "vampiros",
    faction: "camarilla",
    colors: { from: "#55555f", to: "#08080a", glow: "rgba(120, 120, 140, 0.4)" },
    colorName: "Preto",
    flower: "Dália-negra",
    symbol: "Sombra",
    icon: "shadow",
    traits: ["Estratégia", "Autoridade", "Discrição", "Autocontrole"],
    shadow: "Manipulação, isolamento e necessidade de domínio.",
    description: [
      "Você pertence aos Oblivium, aqueles que compreendem que o verdadeiro domínio raramente precisa ser anunciado.",
      "Enquanto outros buscam reconhecimento, você observa, calcula e constrói influência longe dos olhares. Sua força está na estratégia, na disciplina e na capacidade de perceber quem realmente controla cada situação.",
      "Você não teme a escuridão, pois sabe que ela revela fraquezas que a luz costuma esconder. Entretanto, seu desejo por controle pode afastá-lo das pessoas e fazer com que qualquer vulnerabilidade pareça uma ameaça.",
    ],
    phrase: "Aqueles que controlam as sombras não precisam ocupar o trono.",
  },
  {
    id: "dissonance",
    name: "Dissonance",
    subtitle: "A verdade além da razão",
    core: "vampiros",
    faction: "camarilla",
    colors: { from: "#b990f0", to: "#4c2889", glow: "rgba(185, 144, 240, 0.4)" },
    colorName: "Roxo",
    flower: "Orquídea",
    symbol: "Cérebro",
    icon: "brain",
    traits: ["Intuição", "Criatividade", "Percepção", "Inteligência"],
    shadow: "Obsessão, instabilidade e confusão entre percepção e realidade.",
    description: [
      "Você pertence aos Dissonance, intérpretes de uma realidade fragmentada em infinitas possibilidades.",
      "Sua mente percebe padrões, símbolos e conexões que passam despercebidos pelos demais. Intuições, presságios e ideias surgem como fragmentos de um conhecimento difícil de explicar, mas impossível de ignorar.",
      "Você pode parecer imprevisível, contraditório ou distante. Contudo, muitas vezes é justamente sua maneira incomum de observar o mundo que permite enxergar verdades escondidas. O perigo está em permitir que todas essas vozes e possibilidades se tornem indistinguíveis.",
    ],
    phrase: "A loucura talvez seja apenas uma verdade que chegou cedo demais.",
  },
  {
    id: "sanctum",
    name: "Sanctum",
    subtitle: "A devoção transformada em domínio",
    core: "vampiros",
    faction: "saba",
    colors: { from: "#c7c9d1", to: "#55565f", glow: "rgba(199, 201, 209, 0.35)" },
    colorName: "Cinza",
    flower: "Dália-negra",
    symbol: "Cruz",
    icon: "cross",
    traits: ["Devoção", "Disciplina", "Liderança", "Resistência"],
    shadow: "Fanatismo, rigidez e intolerância.",
    description: [
      "Você pertence aos Sanctum, aqueles que transformam a eternidade em uma causa.",
      "Sua força nasce da convicção. Você acredita que poder sem propósito é apenas desperdício e que uma existência verdadeiramente grandiosa exige disciplina, fé e disposição para sacrificar aquilo que for necessário.",
      "Sua presença tende a ser solene, firme e difícil de ignorar. Entretanto, convicções absolutas podem se transformar em fanatismo, fazendo com que você deixe de reconhecer verdades que não correspondam às suas próprias crenças.",
    ],
    phrase: "A eternidade não é uma dádiva. É um juramento.",
  },
  {
    id: "yoriary",
    name: "Yoriary",
    subtitle: "Nenhuma corrente pode conter sua essência",
    core: "vampiros",
    faction: "saba",
    colors: { from: "#c48a52", to: "#5b3a1e", glow: "rgba(196, 138, 82, 0.4)" },
    colorName: "Marrom",
    flower: "Papoula",
    symbol: "Corvo",
    icon: "crow",
    traits: ["Liberdade", "Astúcia", "Adaptação", "Criatividade"],
    shadow: "Instabilidade, fuga e dificuldade de assumir compromissos.",
    description: [
      "Você pertence aos Yoriary, viajantes, sobreviventes e arquitetos de suas próprias verdades.",
      "Você não aceita facilmente regras que não escolheu. Sua natureza busca movimento, liberdade e experiências capazes de desafiar tudo aquilo que parecia definitivo. Onde outros enxergam perigo, você encontra uma oportunidade de escapar, enganar ou começar novamente.",
      "Sua adaptabilidade torna você difícil de capturar e ainda mais difícil de compreender. Entretanto, o medo de criar raízes pode fazer com que você abandone pessoas e histórias antes de descobrir aquilo que poderiam se tornar.",
    ],
    phrase: "Não existe prisão capaz de conter aquilo que nunca deixou de partir.",
  },
  {
    id: "qisas",
    name: "Qisas",
    subtitle: "O julgamento que caminha na noite",
    core: "vampiros",
    faction: "saba",
    colors: { from: "#f0c419", to: "#8a6a12", glow: "rgba(240, 196, 25, 0.4)" },
    colorName: "Dourado",
    flower: "Ciclame",
    symbol: "Adaga",
    icon: "dagger",
    traits: ["Disciplina", "Precisão", "Honra", "Autocontrole"],
    shadow: "Severidade, inflexibilidade e desejo de punição.",
    description: [
      "Você pertence aos Qisas, aqueles que transformam disciplina, honra e precisão em instrumentos de poder.",
      "Você acredita que toda escolha possui consequências. Não age impulsivamente e raramente esquece uma dívida, uma promessa ou uma injustiça. Sua força não está na brutalidade, mas na capacidade de esperar o momento exato.",
      "Sua presença transmite autoridade e controle. Porém, sua busca por justiça pode se tornar severidade, fazendo com que você julgue o mundo através de padrões impossíveis de alcançar.",
    ],
    phrase: "Toda dívida encontra aquele que deverá pagá-la.",
  },
  {
    id: "rarx",
    name: "Rarx",
    subtitle: "A majestade do mundo feérico",
    core: "changelings",
    colors: { from: "#3fae6a", to: "#0f3d24", glow: "rgba(63, 174, 106, 0.4)" },
    colorName: "Verde-escuro",
    flower: "Oleandro",
    symbol: "Dragão",
    icon: "dragon",
    traits: ["Majestade", "Coragem", "Ambição", "Presença"],
    shadow: "Orgulho, autoritarismo e distanciamento.",
    description: [
      "Você pertence aos Rarx, seres marcados pela imponência, pelo mistério e pela força de antigas histórias.",
      "Existe algo em sua presença que parece pertencer a uma era esquecida. Você valoriza grandeza, dignidade e a sensação de que sua existência possui um propósito maior do que as limitações do mundo comum.",
      "Sua essência está ligada ao poder ancestral, à transformação e à majestade dos dragões. Contudo, o orgulho pode fazer com que você se afaste daqueles que considera incapazes de compreender sua verdadeira natureza.",
    ],
    phrase: "Algumas criaturas não nasceram para se curvar.",
  },
  {
    id: "papilos",
    name: "Papilos",
    subtitle: "Toda máscara esconde uma verdade",
    core: "changelings",
    colors: { from: "#ff9d42", to: "#b6480f", glow: "rgba(255, 157, 66, 0.4)" },
    colorName: "Laranja",
    flower: "Tulipa laranja",
    symbol: "Máscara de palhaço",
    icon: "mask",
    traits: ["Humor", "Curiosidade", "Criatividade", "Espontaneidade"],
    shadow: "Evasão, irresponsabilidade e medo de demonstrar vulnerabilidade.",
    description: [
      "Você pertence aos Papilos, criaturas de curiosidade, irreverência e encantadora imprevisibilidade.",
      "Você percebe o mundo como um palco repleto de histórias, personagens e oportunidades para alterar aquilo que parecia inevitável. O humor, as máscaras e os jogos são formas de desafiar a rigidez da realidade.",
      "Sua presença pode trazer leveza até mesmo aos lugares mais sombrios. Entretanto, esconder-se constantemente atrás da diversão pode impedir que os outros conheçam suas emoções verdadeiras.",
    ],
    phrase: "A verdade é muito mais interessante quando utiliza uma máscara.",
  },
  {
    id: "neriades",
    name: "Neríades",
    subtitle: "O encanto das profundezas",
    core: "changelings",
    colors: { from: "#4f8fd6", to: "#0b2d55", glow: "rgba(79, 143, 214, 0.4)" },
    colorName: "Azul-escuro",
    flower: "Lótus branca",
    symbol: "Concha",
    icon: "shell",
    traits: ["Sensibilidade", "Magnetismo", "Empatia", "Sedução"],
    shadow: "Possessividade, melancolia e manipulação emocional.",
    description: [
      "Você pertence às Neríades, seres ligados à beleza das águas, ao desejo e às emoções que ninguém consegue controlar completamente.",
      "Sua presença desperta curiosidade, fascínio e uma estranha sensação de proximidade. Você compreende sentimentos com profundidade e sabe como transformar palavras, gestos e silêncios em instrumentos de encantamento.",
      "Assim como o oceano, você pode ser delicado em um momento e devastador no seguinte. Seus vínculos são intensos, mas existe o risco de transformar amor em posse e admiração em dependência.",
    ],
    phrase: "Nem todos que escutam o chamado das águas desejam ser salvos.",
  },
  {
    id: "kojin",
    name: "Kojin",
    subtitle: "A raposa por trás do encanto",
    core: "garou",
    colors: { from: "#ff8fc4", to: "#a83d76", glow: "rgba(255, 143, 196, 0.4)" },
    colorName: "Rosa",
    flower: "Flor de cerejeira",
    symbol: "Raposa",
    icon: "fox",
    traits: ["Astúcia", "Sedução", "Adaptação", "Inteligência"],
    shadow: "Manipulação, vaidade e dificuldade de confiar.",
    description: [
      "Você pertence aos Kojin, criaturas de transformação, mistério e fascínio.",
      "Sua força não depende apenas de confrontos diretos. Você observa, adapta-se e utiliza inteligência, aparência e persuasão para conduzir situações sem revelar completamente suas intenções.",
      "Como uma raposa sobrenatural, você pode assumir diferentes formas sem perder sua essência. Sua presença é sedutora, elegante e perigosa. Contudo, o hábito de utilizar máscaras pode tornar difícil reconhecer quando alguém realmente conquistou sua confiança.",
    ],
    phrase: "Aquilo que encanta também pode possuir presas.",
  },
  {
    id: "norvark",
    name: "Norvark",
    subtitle: "O guardião da alcateia",
    core: "garou",
    colors: { from: "#f5d547", to: "#a8790f", glow: "rgba(245, 213, 71, 0.4)" },
    colorName: "Amarelo",
    flower: "Acônito",
    symbol: "Lobo",
    icon: "wolf",
    traits: ["Lealdade", "Coragem", "Proteção", "Resistência"],
    shadow: "Fúria, territorialismo e dificuldade de recuar.",
    description: [
      "Você pertence aos Norvark, aqueles que carregam a força ancestral dos lobos e o dever de proteger seu território.",
      "Para você, lealdade não é apenas uma promessa. É uma responsabilidade. Sua coragem se manifesta quando alguém ameaça aquilo que considera parte de sua alcateia, de sua história ou de sua terra.",
      "Você enfrenta os perigos de maneira direta e dificilmente abandona aqueles que dependem de sua força. Entretanto, sua necessidade de proteger pode se transformar em possessividade, e sua fúria pode destruir exatamente aquilo que desejava preservar.",
    ],
    phrase: "O território pode ser tomado. A alcateia deve ser defendida.",
  },
];

export function getClan(id: string): Clan | undefined {
  return clans.find((c) => c.id === id);
}

export const groupClanIds: Record<"camarilla" | "saba" | "changelings" | "garou", string[]> = {
  camarilla: ["musa", "sepulcrum", "oblivium", "dissonance"],
  saba: ["sanctum", "yoriary", "qisas"],
  changelings: ["rarx", "papilos", "neriades"],
  garou: ["norvark", "kojin"],
};

/* ─────────────────────────── perguntas ─────────────────────────── */

export const rootQuestion: QuizQuestion = {
  id: "root",
  question: "Qual núcleo sobrenatural você deseja explorar?",
  options: [
    {
      text: "Vampiros — quero descobrir qual linhagem representa minha relação com o poder, a eternidade, a ambição e a própria monstruosidade.",
      target: "vampiros",
    },
    {
      text: "Changelings — quero descobrir qual natureza feérica se manifesta através dos meus sonhos, desejos, emoções e contradições.",
      target: "changelings",
    },
    {
      text: "Garou — quero descobrir qual espírito ancestral representa meus instintos, minha forma de proteger e a criatura que desperta dentro de mim.",
      target: "garou",
    },
  ],
};

export const vampireFactionQuestion: QuizQuestion = {
  id: "vampire-faction",
  question: "Qual caminho da sociedade vampírica mais desperta seu interesse?",
  options: [
    {
      text: "Camarilla — acredito que o poder deve ser exercido com inteligência, influência e discrição. A Máscara não representa apenas uma regra, mas a estrutura que impede que a eternidade seja consumida pelo caos.",
      target: "camarilla",
    },
    {
      text: "Sabá — acredito que a natureza vampírica não deve se curvar às convenções dos mortais. A eternidade pertence àqueles que aceitam aquilo que se tornaram e estão dispostos a romper antigas correntes.",
      target: "saba",
    },
    {
      text: "Desejo que o quiz determine meu caminho — não sei se minha essência pertence à preservação ou à ruptura. Quero que minhas escolhas determinem minha facção.",
      target: "undecided",
    },
  ],
};

export const factionTiebreakQuestions: QuizQuestion[] = [
  {
    id: "ft1",
    question: "Para você, a Máscara representa:",
    options: [
      { text: "Uma proteção indispensável. Sem ela, todos seriam colocados em risco.", target: "camarilla" },
      { text: "Uma ferramenta útil, mas também uma corrente criada para controlar os imortais.", target: "saba" },
    ],
  },
  {
    id: "ft2",
    question: "Diante de uma tradição antiga, você prefere:",
    options: [
      { text: "Compreender sua importância e reformá-la sem destruir aquilo que ainda sustenta a sociedade.", target: "camarilla" },
      { text: "Questionar quem se beneficia dela e eliminá-la caso tenha se tornado uma forma de submissão.", target: "saba" },
    ],
  },
  {
    id: "ft3",
    question: "A verdadeira força está:",
    options: [
      { text: "Na influência silenciosa, nas alianças e no controle exercido sem exposição.", target: "camarilla" },
      { text: "Na liberdade de assumir sua natureza e conquistar seu lugar sem pedir permissão.", target: "saba" },
    ],
  },
];

export const camarillaQuestions: QuizQuestion[] = [
  {
    id: "c1",
    question: "De que maneira você costuma exercer influência?",
    options: [
      { text: "Despertando admiração, desejo e emoção nas pessoas ao meu redor.", target: "musa" },
      { text: "Utilizando conhecimento, tradição e informações que poucos possuem.", target: "sepulcrum" },
      { text: "Permanecendo fora do centro das atenções enquanto controlo aquilo que realmente importa.", target: "oblivium" },
      { text: "Percebendo padrões, intenções e possibilidades que normalmente escapam aos outros.", target: "dissonance" },
    ],
  },
  {
    id: "c2",
    question: "Uma crise ameaça tudo o que você construiu. Qual é sua primeira reação?",
    options: [
      { text: "Reunir as pessoas, controlar a narrativa e transformar o medo em admiração.", target: "musa" },
      { text: "Investigar o passado para compreender como situações semelhantes foram enfrentadas.", target: "sepulcrum" },
      { text: "Identificar silenciosamente as ameaças e eliminar cada variável antes que percebam minha presença.", target: "oblivium" },
      { text: "Seguir os sinais e conexões que minha intuição revela, mesmo que ninguém mais os compreenda.", target: "dissonance" },
    ],
  },
  {
    id: "c3",
    question: "Qual dessas características mais se aproxima de sua maior fraqueza?",
    options: [
      { text: "A necessidade de ser admirado, reconhecido ou compreendido.", target: "musa" },
      { text: "A dificuldade de abandonar aquilo que pertence ao passado.", target: "sepulcrum" },
      { text: "A necessidade de controlar pessoas, situações e informações.", target: "oblivium" },
      { text: "A dificuldade de separar intuição, obsessão e realidade.", target: "dissonance" },
    ],
  },
  {
    id: "c4",
    question: "Qual destes ambientes mais desperta sua curiosidade?",
    options: [
      { text: "Um teatro antigo, iluminado apenas pelo palco e por lustres vermelhos.", target: "musa" },
      { text: "Uma biblioteca construída sobre uma necrópole ancestral.", target: "sepulcrum" },
      { text: "Uma sala escura onde decisões são tomadas sem testemunhas.", target: "oblivium" },
      { text: "Um corredor repleto de espelhos, símbolos e mensagens aparentemente desconexas.", target: "dissonance" },
    ],
  },
  {
    id: "c5",
    question: "Que tipo de pessoa você escolheria para permanecer ao seu lado?",
    options: [
      { text: "Alguém carismático, sensível e capaz de transformar qualquer ambiente.", target: "musa" },
      { text: "Alguém leal, reservado e profundamente ligado à própria história.", target: "sepulcrum" },
      { text: "Alguém disciplinado, estratégico e capaz de guardar qualquer segredo.", target: "oblivium" },
      { text: "Alguém imprevisível, brilhante e capaz de enxergar o mundo de uma forma completamente diferente.", target: "dissonance" },
    ],
  },
  {
    id: "c6",
    question: "Qual legado você gostaria de deixar após séculos de existência?",
    options: [
      { text: "Ser lembrado como alguém cuja presença transformou a arte, o desejo e a própria sociedade.", target: "musa" },
      { text: "Preservar conhecimentos, linhagens e segredos que sobreviveriam até mesmo à morte.", target: "sepulcrum" },
      { text: "Moldar acontecimentos históricos sem jamais revelar completamente minha participação.", target: "oblivium" },
      { text: "Revelar verdades ocultas que mudariam para sempre a maneira como os outros compreendem a realidade.", target: "dissonance" },
    ],
  },
];

export const camarillaTiebreak: QuizQuestion = {
  id: "c-tie",
  question: "Qual objeto parece chamar por você?",
  options: [
    { text: "Uma harpa antiga, ainda afinada apesar da passagem dos séculos.", target: "musa" },
    { text: "Uma caveira branca envolvida por flores cuidadosamente preservadas.", target: "sepulcrum" },
    { text: "Uma sombra que continua se movendo mesmo quando seu proprietário permanece imóvel.", target: "oblivium" },
    { text: "Um cérebro desenhado em um manuscrito repleto de anotações incompreensíveis.", target: "dissonance" },
  ],
};

export const sabaQuestions: QuizQuestion[] = [
  {
    id: "s1",
    question: "O que significa aceitar sua natureza vampírica?",
    options: [
      { text: "Reconhecer que a eternidade exige fé, disciplina e propósito.", target: "sanctum" },
      { text: "Recusar qualquer corrente e transformar a existência em uma jornada de liberdade.", target: "yoriary" },
      { text: "Dominar os próprios instintos para que a força jamais se torne descontrole.", target: "qisas" },
    ],
  },
  {
    id: "s2",
    question: "Como você enfrenta aqueles que o desafiam?",
    options: [
      { text: "Mostro que minha convicção é mais forte do que qualquer ameaça.", target: "sanctum" },
      { text: "Confundo, desvio e faço com que o adversário nunca saiba qual será meu próximo movimento.", target: "yoriary" },
      { text: "Observo, aguardo e golpeio apenas quando tenho certeza de que será definitivo.", target: "qisas" },
    ],
  },
  {
    id: "s3",
    question: "Qual virtude você considera indispensável?",
    options: [
      { text: "Devoção.", target: "sanctum" },
      { text: "Liberdade.", target: "yoriary" },
      { text: "Disciplina.", target: "qisas" },
    ],
  },
  {
    id: "s4",
    question: "Qual território parece pertencer a você?",
    options: [
      { text: "Um templo abandonado, marcado por juramentos e antigos rituais.", target: "sanctum" },
      { text: "Uma estrada sem destino, acompanhada apenas pelo som dos corvos.", target: "yoriary" },
      { text: "Um salão dourado onde sentenças são pronunciadas diante de uma lâmina.", target: "qisas" },
    ],
  },
  {
    id: "s5",
    question: "Qual dessas falhas poderia colocar você em perigo?",
    options: [
      { text: "Tornar minhas crenças tão absolutas que deixo de ouvir qualquer outra verdade.", target: "sanctum" },
      { text: "Fugir de compromissos sempre que começo a me sentir preso.", target: "yoriary" },
      { text: "Julgar os outros com uma severidade que raramente aplico a mim mesmo.", target: "qisas" },
    ],
  },
  {
    id: "s6",
    question: "Como você deseja ser lembrado?",
    options: [
      { text: "Como alguém que jamais abandonou sua causa, mesmo diante da destruição.", target: "sanctum" },
      { text: "Como uma lenda impossível de aprisionar ou compreender completamente.", target: "yoriary" },
      { text: "Como o julgamento inevitável daqueles que acreditavam estar acima das consequências.", target: "qisas" },
    ],
  },
];

export const sabaTiebreak: QuizQuestion = {
  id: "s-tie",
  question: "Qual símbolo desperta algo dentro de você?",
  options: [
    { text: "Uma cruz envelhecida, marcada por cinzas e juramentos.", target: "sanctum" },
    { text: "Um corvo carregando uma pétala de papoula em seu bico.", target: "yoriary" },
    { text: "Uma adaga dourada diante de uma flor de ciclame.", target: "qisas" },
  ],
};

export const changelingQuestions: QuizQuestion[] = [
  {
    id: "ch1",
    question: "Ao entrar em um ambiente desconhecido, como sua presença costuma ser percebida?",
    options: [
      { text: "Imponente e misteriosa, como se eu carregasse uma história muito mais antiga do que aparento.", target: "rarx" },
      { text: "Imprevisível e curiosa, como se algo divertido ou caótico pudesse acontecer a qualquer momento.", target: "papilos" },
      { text: "Magnética e delicada, fazendo com que as pessoas queiram se aproximar mesmo sem compreender o motivo.", target: "neriades" },
    ],
  },
  {
    id: "ch2",
    question: "Qual dom feérico você escolheria possuir?",
    options: [
      { text: "Manifestar uma presença majestosa e despertar a força de criaturas ancestrais.", target: "rarx" },
      { text: "Alterar aparências, criar confusão e transformar situações sérias em jogos inesperados.", target: "papilos" },
      { text: "Encantar através da voz, das emoções e da beleza das águas.", target: "neriades" },
    ],
  },
  {
    id: "ch3",
    question: "Em seus sonhos, você encontra:",
    options: [
      { text: "Florestas antigas, palácios esquecidos e dragões adormecidos.", target: "rarx" },
      { text: "Festivais coloridos, máscaras sorridentes e caminhos que mudam de lugar.", target: "papilos" },
      { text: "Oceanos escuros, luas refletidas e melodias vindas das profundezas.", target: "neriades" },
    ],
  },
  {
    id: "ch4",
    question: "Quando se sente ameaçado, você prefere:",
    options: [
      { text: "Demonstrar autoridade e lembrar ao adversário que algumas forças não devem ser provocadas.", target: "rarx" },
      { text: "Enganar, distrair e inverter completamente a situação.", target: "papilos" },
      { text: "Atrair o adversário para perto e utilizar suas próprias emoções contra ele.", target: "neriades" },
    ],
  },
  {
    id: "ch5",
    question: "Qual dessas características mais representa sua sombra?",
    options: [
      { text: "Orgulho e dificuldade de aceitar qualquer posição que pareça inferior àquilo que acredito merecer.", target: "rarx" },
      { text: "Usar o humor e as máscaras para evitar demonstrar aquilo que realmente sinto.", target: "papilos" },
      { text: "Criar vínculos tão intensos que desejo possuir aquilo que amo.", target: "neriades" },
    ],
  },
  {
    id: "ch6",
    question: "O que torna uma história verdadeiramente inesquecível?",
    options: [
      { text: "A grandeza de seus personagens e a sensação de que algo ancestral está despertando.", target: "rarx" },
      { text: "As surpresas, contradições e reviravoltas que ninguém poderia prever.", target: "papilos" },
      { text: "A emoção que permanece mesmo depois que todas as palavras terminam.", target: "neriades" },
    ],
  },
];

export const changelingTiebreak: QuizQuestion = {
  id: "ch-tie",
  question: "Qual imagem você seguiria através do mundo feérico?",
  options: [
    { text: "Um dragão verde desaparecendo entre oleandros.", target: "rarx" },
    { text: "Uma máscara de palhaço cercada por tulipas laranjas.", target: "papilos" },
    { text: "Uma concha repousando sobre uma lótus branca.", target: "neriades" },
  ],
};

export const garouQuestions: QuizQuestion[] = [
  {
    id: "g1",
    question: "O que significa proteger alguém?",
    options: [
      { text: "Permanecer ao seu lado, enfrentar a ameaça e impedir que ela avance.", target: "norvark" },
      { text: "Antecipar o perigo, confundir o inimigo e impedir que ele perceba minhas verdadeiras intenções.", target: "kojin" },
    ],
  },
  {
    id: "g2",
    question: "Diante de um conflito inevitável, você prefere:",
    options: [
      { text: "Confrontar diretamente aquilo que ameaça meu território ou minha alcateia.", target: "norvark" },
      { text: "Utilizar inteligência, aparência e persuasão para controlar o rumo do confronto.", target: "kojin" },
    ],
  },
  {
    id: "g3",
    question: "Qual vínculo possui maior importância para você?",
    options: [
      { text: "A lealdade construída dentro de um grupo que protege seus integrantes como uma única força.", target: "norvark" },
      { text: "A conexão rara entre pessoas capazes de enxergar além das aparências umas das outras.", target: "kojin" },
    ],
  },
  {
    id: "g4",
    question: "Que tipo de transformação mais representa sua essência?",
    options: [
      { text: "Uma criatura poderosa, resistente e guiada pela força ancestral do lobo.", target: "norvark" },
      { text: "Uma raposa elegante e sobrenatural, capaz de transitar entre sedução, mistério e perigo.", target: "kojin" },
    ],
  },
  {
    id: "g5",
    question: "Qual impulso é mais difícil de controlar?",
    options: [
      { text: "Minha fúria quando alguém ameaça aquilo que considero meu dever proteger.", target: "norvark" },
      { text: "Minha necessidade de conduzir as situações e manter minhas verdadeiras intenções escondidas.", target: "kojin" },
    ],
  },
  {
    id: "g6",
    question: "Qual legado combina mais com você?",
    options: [
      { text: "Ser lembrado como um guardião que jamais abandonou sua terra ou sua alcateia.", target: "norvark" },
      { text: "Tornar-me uma lenda cercada por fascínio, histórias contraditórias e aparições impossíveis de explicar.", target: "kojin" },
    ],
  },
];

export const garouTiebreak: QuizQuestion = {
  id: "g-tie",
  question: "Durante uma noite de lua cheia, qual presença você seguiria?",
  options: [
    { text: "Um lobo imóvel diante de um campo de acônitos.", target: "norvark" },
    { text: "Uma raposa caminhando entre flores de cerejeira.", target: "kojin" },
  ],
};
