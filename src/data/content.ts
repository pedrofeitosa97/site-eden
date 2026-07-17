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

A cidade está diferente. Algo te chamou até aqui. E em Los Santos… nada chama sem cobrar um preço.

Éden: O Desabrochar.`,
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
        title: "Ordem e Caos",
        content: `Durante muito tempo, a noite em Los Santos obedeceu a uma ordem que os mortais jamais perceberam. Enquanto a cidade crescia, mudava de governo e acumulava novas cicatrizes, outra sociedade permanecia oculta sob sua superfície. Seus representantes ocupavam salões privados, empresas, instituições culturais e propriedades antigas, conduzindo interesses que atravessavam gerações sem despertar suspeitas.

A Camarilla compreendeu cedo que a sobrevivência não dependia apenas da força. Era necessário controlar impulsos, restringir conflitos e preservar a aparência de normalidade. A Máscara tornou-se a base dessa convivência: um compromisso sustentado não pela confiança, mas pelo medo compartilhado do que aconteceria caso a verdade alcançasse os olhos humanos.

Durante décadas, qualquer ameaça à estabilidade foi tratada antes que pudesse adquirir um nome. Testemunhas eram desacreditadas, registros desapareciam e os responsáveis por excessos recebiam punições discretas. A cidade continuava acreditando em crimes comuns, acidentes e desaparecimentos sem relação entre si. Para os vampiros, isso bastava.

A ordem começou a mudar quando um corpo foi encontrado em uma região movimentada, pouco antes do amanhecer. A vítima não havia sido escondida, e os sinais deixados em sua pele eram evidentes demais para serem ignorados. Antes que as autoridades recolhessem todas as imagens, fotografias já circulavam em grupos privados e páginas independentes. Nenhuma explicação oficial conseguiu apagar completamente o que centenas de pessoas haviam visto.

O incidente poderia ter sido tratado como imprudência. Contudo, nos dias seguintes, outras violações ocorreram em diferentes pontos da cidade. Nenhuma parecia acidental. Os responsáveis conheciam os procedimentos da Camarilla, antecipavam seus movimentos e deixavam mensagens cuidadosamente construídas para provocar aqueles que ainda acreditavam possuir controle absoluto sobre Los Santos.

Os anarquistas observaram cada falha com atenção. Durante anos, foram considerados inquietos, indisciplinados ou incapazes de compreender a importância da Máscara. Agora, enxergavam na instabilidade a confirmação de tudo aquilo que sempre afirmaram: a ordem não protegia todos igualmente. Protegia apenas aqueles que ocupavam posições suficientes para defini-la.

Antigas insatisfações voltaram a circular. Territórios começaram a ser questionados, alianças perderam solidez e reuniões antes restritas passaram a terminar sem consenso. Alguns defendiam medidas mais severas. Outros compreendiam que qualquer demonstração excessiva de autoridade poderia fortalecer ainda mais a oposição.

A Camarilla continuava governando, mas já não governava sem resistência.

Em salões fechados, seus representantes tentavam reconstruir a segurança que antes pareciam possuir. Nas ruas, grupos até então dispersos começaram a reconhecer interesses em comum. E, entre ambos, alguém permanecia desconhecido, provocando cada lado com a precisão de quem não desejava apenas derrubar uma liderança.

Desejava descobrir o que surgiria depois dela.

Em Los Santos, a Máscara ainda estava de pé. A diferença era que todos haviam começado a perceber suas fissuras.`,
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
        title: "Territorialidade",
        content: `Os limites mais importantes de Los Santos nunca foram registrados em mapas públicos. Eles atravessavam reservas, estradas isoladas, propriedades abandonadas e regiões onde a cidade gradualmente cedia espaço à vegetação. Para os humanos, eram apenas áreas pouco desenvolvidas. Para os Norvark, constituíam territórios definidos muito antes de qualquer escritura ou decreto.

As alcateias mantinham essas fronteiras com rigor. Cada passagem era observada, cada mudança na paisagem era percebida e toda presença desconhecida precisava ser avaliada. A proteção oferecida pelos lobos, porém, nunca foi universal. Sua lealdade pertencia à própria espécie, aos membros reconhecidos da alcateia e à terra que haviam jurado preservar.

Aqueles que não faziam parte desse vínculo eram tratados como estrangeiros. Alguns recebiam uma advertência. Outros descobriam tarde demais que os Norvark não consideravam todas as vidas igualmente importantes. Quando a segurança da alcateia estava em risco, o destino dos demais tornava-se uma preocupação secundária.

Durante anos, essa postura manteve os territórios afastados das disputas centrais da cidade. A situação mudou quando uma empresa adquiriu uma extensa área próxima às montanhas. O projeto previa estradas, residências e a remoção de parte da vegetação. Os documentos estavam regulares, as licenças haviam sido aprovadas e os responsáveis políticos demonstravam um interesse incomum em acelerar o início das obras.

Nenhum deles sabia que a negociação havia começado meses antes, em encontros privados conduzidos por uma mulher que raramente utilizava o mesmo nome duas vezes.

Ela pertencera a diferentes círculos sociais em poucas semanas. Aproximara-se de empresários, assessores e homens influentes, oferecendo a cada um exatamente aquilo que desejavam encontrar nela. Para alguns, era uma oportunidade. Para outros, uma confidência. Para os mais vulneráveis, tornou-se uma obsessão.

Os Kojin não precisavam ocupar um território para exercer domínio sobre ele. Preferiam aproximar-se das pessoas que decidiam onde as fronteiras seriam traçadas.

Quando as primeiras máquinas chegaram à região, os Norvark destruíram parte do equipamento durante a madrugada. A empresa respondeu contratando segurança armada. Pouco depois, surgiram relatos de ataques, desaparecimentos e animais de grande porte observados entre as árvores. A imprensa tratou os acontecimentos como ações criminosas associadas à disputa fundiária.

A mulher que havia iniciado tudo acompanhava as notícias de um apartamento no centro da cidade. O conflito crescera exatamente como esperava. Empresários culpavam ambientalistas. Autoridades exigiam intervenção. Homens armados avançavam sobre uma área que jamais deveriam ter alcançado.

Para os Norvark, não existia negociação possível. A terra havia sido violada, e todos os envolvidos passaram a ser considerados parte da ameaça. Para os Kojin, o confronto era apenas mais uma oportunidade. O medo tornava as pessoas influenciáveis; a raiva, previsíveis.

Os lobos defendiam suas fronteiras acreditando que o perigo vinha do exterior.

As raposas já haviam compreendido que as fronteiras mais frágeis estavam dentro das pessoas.

Desde então, a região permanece oficialmente interditada. Os documentos mencionam riscos ambientais e investigações em andamento. Ainda assim, luzes continuam sendo vistas entre as árvores, veículos desaparecem nas estradas próximas e alguns dos responsáveis pelo projeto recusam-se a explicar por que abandonaram a cidade.

Os Norvark consideram que venceram.

Os Kojin ainda não terminaram.`,
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
        title: "O Sonhar",
        content: `Houve um tempo em que o Sonhar se aproximava do mundo sem encontrar resistência. Seus caminhos atravessavam florestas, espelhos, rios e histórias contadas antes do sono. As pessoas reconheciam suas presenças mesmo sem compreendê-las e deixavam espaço para que o impossível existisse ao lado da realidade.

Com o passar dos anos, esses caminhos tornaram-se mais estreitos.

A descrença, o esquecimento e a necessidade humana de explicar tudo reduziram antigas passagens a breves instantes de estranheza. Mesmo assim, o Sonhar não desapareceu. Recuou para lugares onde ainda pudesse ser preservado e reuniu suas diferentes naturezas sob uma única coroa.

A rainha governava uma corte que nunca fora verdadeiramente uniforme. Sob sua autoridade, os Rarx preservavam antigas tradições e carregavam a dignidade de uma linhagem associada à imponência dos dragões. Sua presença sustentava a solenidade da corte, mas também trazia consigo um orgulho difícil de conter.

Os Papilos circulavam entre cerimônias e compromissos como se nenhuma formalidade fosse inteiramente séria. Por trás de suas máscaras, transformavam comentários em provocações, segredos em jogos e constrangimentos em espetáculos. Muitos os consideravam imprudentes. A rainha sabia que, em certas ocasiões, eram os únicos capazes de dizer a verdade sem provocar uma guerra imediata.

As Neríades permaneciam próximas às fontes, aos jardins alagados e aos caminhos que conduziam às águas profundas. Suas vozes acalmavam disputas, despertavam afetos e faziam com que promessas impulsivas parecessem decisões inevitáveis. A corte admirava sua beleza, embora poucos ignorassem o perigo de confundir encantamento com confiança.

A rainha mantinha essas três naturezas unidas porque compreendia o que aconteceria se cada uma tentasse preservar o Sonhar sozinha.

O equilíbrio começou a se romper quando uma jovem mortal atravessou uma passagem que deveria estar fechada. Ela foi encontrada nos jardins da corte, adormecida sob uma árvore que não florescia havia séculos. Em suas mãos havia três objetos: uma escama verde, uma máscara quebrada e uma concha branca.

Nenhum dos clãs admitiu ter conduzido a jovem até ali.

Os Rarx interpretaram sua presença como uma violação e exigiram que os portões fossem selados. Os Papilos suspeitaram que alguém estivesse construindo uma narrativa conveniente demais e começaram a investigar os corredores da corte à sua própria maneira. As Neríades perceberam que a jovem sonhava com uma cidade coberta por água, embora Los Santos permanecesse seca sob o sol.

Quando despertou, ela não demonstrou medo. Reconheceu a rainha antes que alguém lhe dissesse quem estava diante dela e afirmou ter sido chamada por uma voz que vinha de dentro de um espelho.

A partir daquele momento, pequenas alterações começaram a surgir no Sonhar. Algumas portas conduziam a lugares diferentes. Reflexos demoravam a acompanhar seus donos. Canções antigas eram ouvidas em regiões onde nenhuma Neríade estivera. Os Papilos encontraram máscaras que não pertenciam a nenhum deles, enquanto os Rarx descobriram marcas de garras em pedras consideradas indestrutíveis.

A rainha ordenou que a jovem permanecesse sob proteção da corte. Publicamente, declarou que sua presença não representava ameaça. Em particular, passou a investigar cada passagem entre o Sonhar e Los Santos.

Ela compreendia que alguém havia enviado uma mensagem.

O problema era não saber se a jovem representava um pedido de ajuda, uma advertência ou o primeiro movimento de uma força que acreditavam ter desaparecido.

Enquanto a corte discutia responsabilidades, o Sonhar continuava mudando.

E, todas as noites, a mortal repetia durante o sono a mesma frase:

A rainha não foi a única a despertar.`,
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
        title: "Estado de Vigília",
        content: `A operação foi apresentada como uma resposta administrativa a uma cidade em processo de descontrole. Os documentos enviados aos comandantes mencionavam aumento da criminalidade, fragilidade institucional e necessidade de intervenção coordenada. Los Santos exigia experiência, disciplina e uma presença governamental capaz de recuperar estruturas que já não respondiam como deveriam.

Os militares chegaram preparados para enfrentar organizações criminosas, crises civis e resistência armada. Instalaram postos de controle, reorganizaram comunicações e ocuparam instalações estratégicas. Nas primeiras semanas, tudo pareceu corresponder ao que havia sido informado.

A cidade era violenta, mas não excepcional.

As dúvidas começaram com acontecimentos pequenos demais para justificar uma investigação própria. Câmeras que falhavam sempre nos mesmos horários. Chamados encerrados antes da chegada das equipes. Moradores que se recusavam a atravessar determinadas ruas durante a noite, embora não soubessem explicar o motivo.

Os relatórios atribuíam essas ocorrências a problemas técnicos, medo coletivo e influência de grupos locais. As justificativas eram plausíveis quando avaliadas separadamente. Tornavam-se menos convincentes quando alguém começava a compará-las.

Um capitão foi o primeiro a perceber que certas regiões haviam sido omitidas dos mapas entregues à operação. Estradas apareciam em sistemas civis, mas não nos arquivos militares. Edifícios visíveis em fotografias aéreas não possuíam registro oficial. Toda solicitação de esclarecimento recebia a mesma resposta: informação classificada, sem relevância para a missão.

Pouco depois, uma patrulha desapareceu durante uma inspeção em uma área industrial. O veículo foi encontrado horas mais tarde, estacionado corretamente e sem sinais de confronto. Os equipamentos permaneciam no interior. Não havia sangue, impressões estranhas ou qualquer indício de fuga.

Os quatro agentes retornaram na manhã seguinte caminhando por uma avenida distante.

Nenhum deles sabia explicar onde estivera.

Três foram afastados. O quarto insistia que a equipe havia passado apenas alguns minutos dentro de um edifício abandonado. Segundo ele, o local possuía corredores que não apareciam na planta e uma sala onde alguém aguardava por eles. Quando questionado sobre quem havia encontrado, recusava-se a responder.

Dias depois, foi transferido por ordem superior. Seu nome desapareceu dos registros internos antes que o capitão conseguisse localizá-lo novamente.

A partir desse episódio, alguns oficiais começaram a reunir cópias particulares de documentos. Não buscavam explicações sobrenaturais. Procuravam corrupção, operações clandestinas ou uma segunda cadeia de comando agindo dentro da cidade. Era mais fácil acreditar que alguém escondia informações do que admitir que certas ocorrências talvez não coubessem em nenhuma categoria conhecida.

A população também parecia saber mais do que dizia. Testemunhas mudavam seus depoimentos quando percebiam a presença militar. Médicos alteravam laudos. Policiais locais evitavam determinados casos. Pessoas influentes recebiam autorização para atravessar bloqueios sem identificação e demonstravam uma tranquilidade incompatível com a situação.

Mesmo assim, a missão permanecia inalterada.

Preservar a ordem. Controlar o território. Evitar pânico.

Com o passar dos meses, essas ordens começaram a adquirir outro significado. Os militares já não sabiam se haviam sido enviados para proteger Los Santos de uma ameaça externa ou para impedir que algo dentro dela fosse percebido pelo restante do país.

Alguns preferiam não fazer perguntas. Haviam aprendido que determinados arquivos eram encerrados rapidamente e que a curiosidade podia resultar em transferências inesperadas.

Outros continuavam investigando em silêncio.

Eles ainda não conheciam a verdade sobre a cidade. Não sabiam quem ocupava realmente suas posições de poder, o que se movia além das áreas urbanas ou por que determinadas noites pareciam alterar o comportamento de bairros inteiros.

Sabiam apenas que Los Santos não correspondia aos relatórios recebidos.

E que, em algum nível do governo, alguém sempre soubera disso.`,
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
