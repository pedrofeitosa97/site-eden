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
    title: "Ordem e Caos",
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
    title: "Territorialidade",
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
    title: "O Sonhar",
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
    title: "Estado de Vigília",
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
        id: "regras-termos",
        title: "Termos de Usuário",
        content: `Bem-vindo (a) ao Éden! Você já se perguntou o que há além dos portões do jardim? A sua jornada é descobrir e se encontrar em um mundo repleto de fantasias únicas. Para seu embarque nessa ilha, é necessário que esteja ciente dos termos e diretrizes para que tenha uma boa estadia, afinal, uma vez que entrar, a saída não se torna uma opção.

Éden é um servidor de FiveM, que permite a modificação de conteúdo do jogo Grand Theft Auto V. Ao ingressar na cidade, você reconhece e concorda com os seguintes termos:

Licença Legal do GTA: para acessar e jogar na cidade, você deve possuir uma cópia original e licenciada do Grand Theft Auto V adquirida de forma legítima. O uso de cópias piratas ou modificadas do jogo é estritamente proibido, e qualquer jogador encontrado utilizando software não licenciado será banido do servidor.

Uso do FiveM: operamos na plataforma FiveM, que é um cliente de modificação afiliado oficialmente pela Rockstar Games. O uso é de responsabilidade do jogador, e não nos responsabilizamos por quaisquer sanções ou restrições que possam ser aplicadas por terceiros, incluindo a Rockstar Games.

Conformidade com a Lei: ao jogar no Éden, você concorda em seguir todas as leis aplicáveis de direitos autorais, propriedade intelectual e termos de uso do GTA V e FiveM. A violação dessas leis poderá resultar em remoção imediata da cidade e em outras ações legais, conforme aplicável.

Doações de Arquivos
2.1 Doações — o servidor aceita doações voluntárias para a manutenção e desenvolvimento da cidade. Todas as doações são definitivas e não reembolsáveis. Essas contribuições não garantem vantagens especiais, itens in-game ou outros fatores que afetam a jogabilidade.
2.2 Doações de Arquivos e Conteúdos — jogadores e membros da comunidade que quiserem doar arquivos, como scripts, veículos, roupas, mapas ou qualquer outro conteúdo de modificação, devem seguir os seguintes termos: todos os arquivos doados devem ser de propriedade ou ter os direitos de uso concedidos por seu criador original. Ao doar arquivos, você concede à administração da cidade uma licença perpétua, irrevogável e livre para usar, modificar e distribuir o conteúdo dentro do servidor e para seus fins relacionados. Não há garantia de que os arquivos doados serão implementados ou usados. Arquivos com conteúdo inadequado ou que infrinjam direitos autorais serão recusados, e o doador pode ser punido se violar leis de propriedade intelectual.

Uso de Imagens de Streamers e Criadores de Conteúdo
3.1 Autorização de Uso de Imagens — ao participar de eventos na cidade e ao fazer lives ou gravações de conteúdo relacionados ao servidor, os jogadores/streamers autorizam a administração da cidade a usar suas imagens, vídeos, clipes, capturas de tela e outros conteúdos relacionados à cidade para fins de divulgação e marketing.
3.2 Finalidade e Uso das Imagens — as imagens, vídeos e clipes dos streamers poderão e SERÃO utilizados em campanhas promocionais, anúncios, eventos especiais e publicações do Éden, tanto em plataformas digitais quanto em redes sociais, sem a necessidade de remuneração ao streamer.
3.3 Consentimento para Fins Comerciais — ao concordar com estes termos, os streamers autorizam o uso de sua imagem para fins comerciais, incluindo mas não se limitando a vídeos de divulgação, banners, trailers de eventos e campanhas publicitárias que promovam a cidade.
3.4 Revogação de Autorização — streamers que desejarem revogar o consentimento para o uso de suas imagens devem notificar a administração por escrito. A partir da notificação, o uso de novos materiais será interrompido, mas a cidade poderá continuar utilizando conteúdos anteriores já em circulação.

Consequências por Quebra de Regras
A administração se reserva o direito de aplicar sanções aos jogadores que violarem estes Termos e Condições. As penalidades incluem, mas não se limitam a: advertências; banimentos temporários; banimentos permanentes.

Propriedade Intelectual
Todo o conteúdo criado e fornecido pelo Éden, incluindo mas não se limitando a textos, imagens, scripts, narrativas e design de mapas, é de propriedade exclusiva da cidade e não pode ser reproduzido ou distribuído sem permissão por escrito. Conteúdos personalizados como roupas, acessórios, cabelos e cosméticos são para uso próprio do servidor. Não há venda/comercialização ou NFT envolvido a esses itens.

Atualizações nos Termos
Nos reservamos o direito de atualizar estes Termos e Condições a qualquer momento. Os jogadores serão notificados sobre quaisquer alterações, e o uso contínuo do serviço implica na aceitação dessas mudanças.

Aceitação dos Termos
Ao utilizar o nosso serviço acessando o nosso servidor, você reconhece que leu e compreendeu estes Termos e Condições, e concorda em segui-los durante todo o tempo em que permanecer jogando em Éden.`,
      },
      {
        id: "regras-discord",
        title: "Regras Discord",
        content: `1. Trate todos os membros com respeito. Ofensas, discriminação, preconceito, bullying, assédio ou qualquer outro comportamento tóxico não serão tolerados.
2. Discussões saudáveis são permitidas, mas ataques pessoais ou incitação a conflitos/ódio são proibidos.
3. Não compartilhe conteúdo ofensivo, ilegal, pornográfico ou excessivamente violento.
4. Links para sites duvidosos, golpes ou spam são estritamente proibidos.
5. Cada canal tem um propósito específico. Poste apenas no canal adequado. Exemplo: sugestões no canal de sugestões, etc.
6. Evite flood e spam. Valorize a organização do servidor.
7. É proibida qualquer divulgação de outros servidores, canais ou redes sociais sem autorização da equipe. Para divulgar algo, consulte algum membro da equipe.
8. Denúncias ou reportes de bugs devem ser feitos com vídeo e explicação, na área de tickets do Discord.
9. Contato com membros da staff via DM não será atendido. Utilize o sistema de tickets.`,
      },
      {
        id: "regras-gerais",
        title: "Regras Gerais",
        content: `1. Discriminação é proibida, conforme art. 3º, IV da Constituição Federal.
2. Não é permitido sair do roleplay em nenhuma circunstância.
3. É proibido chamar serviços apenas para sequestrar, roubar ou emboscar quem está em serviço.
4. Toda ação relevante (com ou sem PvP) deve ser gravada e apresentada à staff se solicitada. Inclui: ações de rua, guerras, sequestros, etc.
4.1. Gravação deve ser completa, sem cortes e com áudio.
4.2. Gravações devem ser guardadas por pelo menos 48 horas.
5. Militares sequestrados podem ter somente celular e rádio retirados.
6. É proibido pegar um player nocauteado e forçá-lo a falar, entregar itens e outras ações sem RP prévio.
7. Proibido qualquer RP envolvendo: assédio, importunação sexual, racismo, homofobia, xenofobia, suicídio, etc.
8. Se estiver em serviço (ponto batido), é proibido praticar atos ilegais.
9. Existem dois estados ao desmaiar: no primeiro, o player fica consciente, porém rastejando e agonizando no chão, mas consegue ver e ouvir tudo ao seu redor. Caso não seja socorrido a tempo, ele desmaia, não ouvindo ou vendo mais nada. Porém, caso socorrido, o player se lembra até o momento em que estava consciente no chão.
10. Proibido comercializar itens VIP.
11. Proibido: metagaming, RDM, VDM, combat logging, power RP, falta de amor à vida, anti RP, cheating e abuso de bugs.
12. Proibido mods que deem vantagem. Exemplos: remover noite/água/confete; remover itens/props; alterar cor/modelo de armas; alterar som dos passos. Mod gráfico para melhoria visual é permitido.
13. Mortos em ação de rua e reanimados fora dela não podem retornar à ação, seja para buscar corpos ou veículos. Inclui ações sobrenaturais.

Safe Zone
Não há Safe Zone em Éden. Entretanto, deve ser mantido o bom senso em não realizar ações repentinamente em qualquer lugar ou momento.

Power Gaming
É expressamente proibido utilizar veículos para causar danos, como colidir, rodar ou capotar intencionalmente em outros veículos. O famoso "bate-bate" está vetado e essa prática passa a ser considerada VDM e Power Gaming, podendo resultar em punições severas. Se você está perseguindo alguém e bate intencionalmente no carro da outra pessoa com o objetivo de capotá-lo ou quebrá-lo para obter vantagem, sua ação estará resultando na quebra dessa regra e será punido. Casos com problemas de conexão serão avaliados.

Fica permitido apenas o uso de caminhonetes, SUVs e motos de trilha específicas para subir montanhas e terrenos irregulares (alguns modelos permitidos incluem Sanchez, Manches, entre outras). Outros veículos não estão autorizados a serem conduzidos "off-road" e serão enquadrados como Power Gaming sem ressalvas.

Trash RP
A prática de Trash RP, ou seja, interpretações de papéis sombrios/indesejados, muitos considerados criminosos, é inaceitável no servidor e culmina em BANIMENTO PERMANENTE. Exemplos: assédio, LGBTQIAP+fobia, terrorismo, suicídio, tortura, racismo, entre outros.

Adendo: por se tratar de um universo com temática mais madura, o servidor permite certas situações de Trash RP. No entanto, é fundamental ter bom senso — essa liberdade não é um passe livre para abusos. Existem limites que não devem ser excedidos, e ao entrar, você concorda em participar dessa dinâmica de forma consciente.

Tortura ou Mutilação
Permitido apenas em contexto sobrenatural. Quem sofrer o RP deve interpretar as consequências por pelo menos 1 dia. As demais regras de RP estão listadas diretamente em nossa entrevista — princípios básicos como Anti RP, Flaming, VDM e Cop Bait estão terminantemente proibidos.`,
      },
      {
        id: "regras-denuncias",
        title: "Regras Denúncias",
        content: `Denúncias têm um prazo de até 48 horas após o ocorrido para serem efetuadas, com as provas anexadas em vídeo ou prints.

Denúncias que não envolvam diretamente o denunciante não serão aceitas.

A ferramenta de denúncias deve ser usada de forma coerente e condizente com o seu propósito. Caso o staff responsável entenda que a denúncia foi feita de má intenção ou para rebater uma situação específica, ele poderá invalidá-la.

Sistema de punição
Alinhamento: não é considerada a primeira advertência formal — usado apenas para casos leves.
ADV 1: tempban de 24 horas.
ADV 2: tempban de 72 horas.
ADV 3: banimento permanente.`,
      },
      {
        id: "regras-doacoes",
        title: "Termos de Doações",
        content: `Propósito da Doação: as doações feitas ao Éden são destinadas exclusivamente para a manutenção e desenvolvimento contínuo do servidor.

Condições de Doação: as doações são inteiramente voluntárias e não garantem benefícios ou vantagens pay-to-win (P2W) no jogo. Elas são contribuições para o crescimento do servidor e não representam compra de VIPs ou produtos — para contribuir, o doador deve concordar com os termos de doação.

Política de Reembolso: uma vez realizada, a doação é irrevogável e não reembolsável. Em caso de erro, trocas poderão ser analisadas pela administração até 48 horas após a doação.

Conduta e Responsabilidade: valorizamos a contribuição de cada jogador e pedimos que todos respeitem as regras do servidor para manter um ambiente saudável, divertido e acolhedor para toda a comunidade. Caso não concorde com os termos apresentados, evite proceder com a doação.`,
      },
      {
        id: "regras-venda-itens",
        title: "Venda de Itens",
        content: `Esta regra tem como objetivo manter a integridade e a equidade no ambiente de jogo para todos os nossos jogadores. Para garantir uma experiência justa e equilibrada, a venda de quaisquer itens do jogo — incluindo, mas não se limitando a casas, dinheiro, veículos e itens (consumíveis ou não) — por dinheiro real é estritamente proibida neste servidor. Esta medida visa preservar a diversão e a competitividade do jogo, bem como proteger os interesses dos jogadores que buscam uma empreitada legítima.

Itens do Jogo: refere-se a todos os elementos, bens, propriedades ou recursos disponíveis no ambiente de jogo, físicos ou virtuais, que podem ser adquiridos, possuídos ou utilizados pelos jogadores no contexto do jogo.

Venda de Itens do Jogo: qualquer atividade que envolva a troca ou venda de itens do jogo, independentemente do valor ou moeda utilizada, em troca de dinheiro real ou qualquer forma de pagamento externa ao jogo.

Servidor: refere-se ao Éden de maneira geral (servidor no FiveM, Discord, redes sociais, etc.).

É expressamente proibida a venda de quaisquer itens do jogo, incluindo casas, dinheiro, veículos e itens (consumíveis ou não), por dinheiro real ou qualquer forma de pagamento externa ao servidor.

Os jogadores identificados vendendo itens do jogo por dinheiro real, ou que se envolverem em transações dessa natureza, estarão sujeitos a punição. A punição para a violação desta regra será o banimento permanente do servidor, resultando na perda definitiva da allowlist.

Encorajamos nossos jogadores a relatarem qualquer atividade suspeita relacionada à venda de itens do jogo aos administradores da Éden. Qualquer denúncia do gênero será tratada com confidencialidade e utilizada para investigações internas.

A administração da Éden se reserva o direito de alterar ou atualizar esta regra a qualquer momento, a fim de manter a integridade do servidor.`,
      },
      {
        id: "regras-permadeath",
        title: "Permadeath",
        content: `O PD de clã ou de personagem ocorrem de maneira similar. Em casos de PD ocasionado em clã, o jogador perde seu personagem, tendo que criar um novo, com vínculo narrativo distinto do anterior. O mesmo se aplica a PDs de personagem que não foram ocasionados por clã.

Qualquer situação de PD deverá passar por análise da equipe responsável. A falta de valorização pela vida do personagem é a principal razão para a aplicação de PD. Alguns exemplos de situações que podem levar à perda definitiva:

Provocar a própria morte: você não deve dar motivos para que sequestradores decidam matar seu personagem; ao contrário, seu objetivo deve ser convencê-los de que merece viver.
Atuar como herói em desvantagem numérica: enfrentar um grupo claramente superior, especialmente em situação armada, é considerado imprudente.
Usar rádio ou celular diante dos sequestradores sem permissão: qualquer atitude que demonstre descaso com a vida, desafiando diretamente os sequestradores, será punida.

Esses são apenas alguns exemplos — o princípio geral é sempre valorizar a vida do personagem.

Para as aplicações de PD envolvendo clã: o jogador poderá escolher a retirada do clã, ciente de que a única forma de retirada é através do permadeath, perdendo completamente o personagem de forma permanente. Em caso de captura e morte pelo exército da cidade, existe a possibilidade de ser liberado — o permadeath só ocorre quando o jogador é capturado e, posteriormente, morto pelo exército.

Quem agir com Anti-Amor à Vida, quebrar imersão ou desrespeitar o roleplay também poderá levar permadeath.`,
      },
      {
        id: "regras-monitoramento",
        title: "Monitoramento Administrativo",
        content: `Todos os jogadores estão sujeitos à constante análise pela administração do servidor para garantir o cumprimento efetivo das regras.

A administração tem total autonomia para monitorar e suspeitar do uso de softwares terceiros para obter vantagem dentro do servidor, para coletar evidências e para banir ou suspender qualquer jogador do servidor.

Jogadores suspeitos de utilizar tais softwares podem passar por procedimentos de averiguação para que voltem a ser liberados no servidor. A palavra de um administrador é igualmente considerada prova suficiente para suspensão ou banimento.

Jogadores que descumprirem regras ou não contribuírem para um ambiente sadio e justo estão sujeitos a punições administrativas. Capturas de tela, vídeos, prints e arquivos de áudio são considerados meios de prova para punições administrativas.

Averiguação
Embora ninguém seja obrigado a aceitar a telagem, a administração poderá manter permanentemente banido quem a recusar, por suspeita de uso de softwares maliciosos, prezando pelo bom andamento do servidor.

Ao suspeitar de um jogador, a administração poderá suspendê-lo temporariamente. Se logado, o prazo é de 1 hora para iniciar contato; se deslogado, o prazo é de 12 horas.

A suspensão será sempre comunicada ao jogador. O jogador logado poderá ter a tela travada com uma mensagem solicitando o início de contato com a administração e, portanto, não deverá deslogar até que a averiguação seja concluída. Descumprir os prazos estipulados pode resultar em banimento permanente. A partir do momento em que iniciar contato, o jogador não deverá demorar mais do que 15 minutos para responder às exigências da administração, e deve manter contato durante todo o processo.

Após a telagem, as decisões podem incluir: liberação, se não houver observância de arquivos maliciosos; ou banimento permanente, se forem observados softwares desinstalados, rastros de scripts ou programas proibidos, computador reiniciado ou formatado, arquivos suspeitos apagados, ou interrupção de processos nativos (incluindo Windows otimizados/não oficiais que desativam processos suspeitos). Jogadores que recusarem a telagem serão banidos por suspeita de cheat.

O Éden não divulga os resultados das telagens, tampouco armazena dados relativos a elas — isso é uma medida para proteger os interesses da comunidade e preservar um ambiente sadio e justo entre os jogadores. A exceção fica por conta de casos em que um jogador de má-fé tenta difamar o servidor após seu banimento: nessas situações excepcionais, o Éden e seus administradores poderão divulgar por meio de suas redes que determinado jogador foi banido por uso de softwares maliciosos.`,
      },
      {
        id: "regras-regime-militar",
        title: "Regras Regime Militar",
        content: `O Regime Militar constitui a instância máxima de autoridade dentro da cidade, sendo um pilar central para a construção, manutenção e evolução da narrativa do servidor. Sua presença não se limita à atuação ostensiva, mas permeia toda a estrutura social, política e operacional, refletindo-se até nos detalhes mais sutis do cotidiano.

Todos os cidadãos devem reconhecer e respeitar essa autoridade de forma coerente com o contexto de roleplay. Interações com agentes militares devem ser conduzidas com postura compatível à hierarquia estabelecida, prezando pela imersão, verossimilhança e qualidade da narrativa.

É plenamente permitido o desenvolvimento de roleplays ilegais, bem como a existência de grupos que se oponham ao sistema vigente. No entanto, tais condutas implicam consequências diretas dentro do roleplay, proporcionais às ações tomadas. A oposição ao regime deve ser construída com base em desenvolvimento narrativo sólido, evitando ações rasas ou desprovidas de contexto.

Atitudes que desconsiderem a autoridade militar de forma incoerente, desrespeitosa ou sem embasamento narrativo poderão ser interpretadas como quebra de conduta, estando sujeitas a sanções administrativas.

O equilíbrio entre ordem e insurgência é parte essencial da experiência proposta. Dentro desse cenário, o respeito à estrutura militar não é apenas uma regra — é o elemento que sustenta a tensão, o conflito e a profundidade da cidade.`,
      },
      {
        id: "regras-ilegais-1",
        title: "Regras Ilegais",
        content: `O ambiente ilegal é concebido como um espaço livre e dinâmico para os jogadores que desejam trilhar caminhos fora da ordem estabelecida.

Os participantes têm total autonomia para explorar, descobrir e desenvolver atividades ilícitas, seja por meio de enigmas, interações ou investigações conduzidas dentro do próprio roleplay. Esses elementos podem levar à obtenção de recursos, itens e oportunidades estratégicas que fortalecem confrontos e narrativas paralelas.

Não há figuras centrais responsáveis pela distribuição desses recursos. Cada indivíduo ou grupo é responsável por encontrar, produzir, negociar e expandir suas próprias operações de forma independente, valorizando a construção orgânica de histórias e conexões.

A descoberta desses caminhos depende diretamente da imersão e da interação com outros jogadores. O acesso a informações, locais e oportunidades ilegais deve ser construído através de relações, confiança e desenvolvimento consistente do roleplay.

Cada refém dá direito a uma única requisição — ou seja, um único refém não dá direito de pedir tanto a retirada do atirador quanto uma fuga limpa. Exemplo: um refém será trocado para retirar o atirador do helicóptero.

Não é permitida a negociação de refém por armamento ou dinheiro em nenhuma situação.`,
      },
      {
        id: "regras-ilegais-2",
        title: "Regras Ilegais II",
        content: `As ações dentro da cidade são classificadas em dois formatos distintos: Ações de Rua e Ações Fechadas. Cada uma possui regras específicas que devem ser respeitadas para garantir equilíbrio, coerência e qualidade no roleplay.

Ações Fechadas são eventos iniciados por sistemas da cidade (ex.: roubos, invasões, assaltos com mecânica própria) e seguem regras rigorosas: devem ocorrer exclusivamente dentro da área designada, incluindo interiores quando aplicável, e todos os participantes devem permanecer no local durante a ação. É proibida a presença de participantes fora do perímetro da ação — caso identificado apoio externo, a situação será automaticamente convertida em ação de rua, permitindo resposta total das forças policiais.

Possuem limite mínimo e máximo de participantes para ambos os lados (ilegal e forças da lei), e os agentes da lei sempre terão superioridade numérica. Há restrição de armamentos, devendo ser respeitada conforme a ação. Existe limite de veículos: até 3 veículos para o lado ilegal quando o objetivo for fuga, devendo estar posicionados dentro do perímetro da ação. É proibido posicionar veículos de forma a bloquear acessos, entradas ou rotas utilizadas pelas autoridades.

Negociações só são permitidas em caso de refém — na ausência de reféns, a intervenção será direta. Caso a ação ultrapasse os limites da área designada, será automaticamente convertida em ação de rua, exceto em situações onde haja negociação ativa.

Ações de Rua são dinâmicas e não dependem necessariamente de sistemas da cidade: podem ocorrer em qualquer espaço aberto, não possuem limite de participantes, não há limite para agentes da lei e não há restrição de armamento — mas devem sempre partir de um roleplay prévio coerente e válido.

Convertem automaticamente para ação de rua: resgates durante perseguições, troca de veículos durante fuga e qualquer desdobramento fora de uma ação fechada.

Em perseguições, considera-se um tempo médio de até 10 minutos para tentativa de fuga. Caso o suspeito não consiga evadir, os agentes poderão aplicar medidas progressivas para contenção (ex.: PIT, bloqueios, uso de força). Caso o jogador acate a ordem de parada e posteriormente fuja, será considerado quebra de conduta, autorizando resposta imediata com maior rigor por parte das autoridades.

Resgates não são permitidos após o indivíduo estar algemado pelas autoridades. Resgates realizados durante fuga ativa transformam a situação em ação de rua.

Jogadores que conseguirem fugir das autoridades serão incluídos na lista de procurados por até 7 dias. Durante esse período, poderão ser presos a qualquer momento por todos os crimes previamente cometidos, desde que estejam devidamente identificados.

É proibido saquear agentes da lei. Agredir um agente armado sem possuir armamento equivalente (ou utilizando arma branca) poderá resultar em punição administrativa, dependendo do contexto do roleplay. As forças da lei sempre atuarão com força proporcionalmente superior, tanto em contingente quanto em armamento.

O servidor prioriza a construção de narrativas coerentes e imersivas. A quebra de conduta, abuso de mecânicas ou atitudes que comprometam o desenvolvimento do roleplay poderão resultar em penalidades administrativas.`,
      },
      {
        id: "regras-ilegais-3",
        title: "Regras Ilegais III",
        content: `Na cidade de Éden, incentivamos abordagens diversas e criativas para a execução das ações disponíveis. Todo jogador deve atuar com bom senso, respeitando integralmente as regras estabelecidas, visando sempre a construção de um roleplay imersivo, coerente e de alta qualidade.

Ações de Rua são ações dinâmicas que podem ou não depender de mecânicas da cidade, sempre fundamentadas em um roleplay prévio válido: realizadas em espaço aberto, sem limite de participantes, sem limite de agentes da lei e sem restrição de classe de armamento.

Ações Fechadas são iniciadas por mecânicas específicas da cidade, ocorrendo em áreas previamente determinadas: local pré-definido, iniciadas exclusivamente por sistemas da cidade, com limite específico de participantes, contingente policial compatível com a ação e restrição de classe de armamento.

Caso participantes abandonem o perímetro da ação durante sua execução, esta será automaticamente convertida em ação de rua, exceto em casos onde haja negociação ativa.`,
      },
      {
        id: "regras-armamentos",
        title: "Classificação de Armamentos",
        content: `Classe 1: Pistolas.
Classe 2: Submetralhadoras, escopetas calibre 12 e pistolas automáticas.
Classe 3: Rifles e metralhadoras.
Classe 4: Explosivos e dispositivos incendiários.

Assalto a Caixa Eletrônico
Máx. bandidos: 2 · Máx. veículos: 1 · Armamento: Classe 1 ou arma branca

Assalto a Residência
Máx. bandidos: 3 · Máx. veículos: 1 · Máx. policiais: 6 · Armamento: exclusivamente armas brancas no interior
O limite de policiais aplica-se apenas dentro da residência. Qualquer intervenção externa com comportamento agressivo converte a ação em ação de rua.

Assalto a Loja
Máx. bandidos: 4 · Máx. veículos: 2 · Máx. policiais: 6 · Armamento: Classe 1 · Negociação: opcional · Refém: opcional (máx. 1)

Assalto ao Banco Fleeca
Máx. bandidos: 4 · Máx. veículos: 2 · Máx. policiais: 8 · Armamento: Classe 1 · Negociação: opcional · Refém: opcional (máx. 1)

Assalto ao Banco de Paleto
Máx. bandidos: 6 · Máx. veículos: 2 · Máx. policiais: 10 · Armamento: Classe 1 ou 2 · Negociação: obrigatória · Refém: opcional (máx. 2)

Assalto à Joalheria Vangelico
Máx. bandidos: 6 · Máx. veículos: 3 · Máx. policiais: 10 · Armamento: Classe 3 · Negociação: obrigatória · Refém: obrigatório (máx. 2)

Assalto ao Banco Pacific
Máx. bandidos: 8 · Máx. veículos: 3 · Máx. policiais: 12 · Armamento: Classe 3 · Negociação: obrigatória · Refém: obrigatório (máx. 2)

Assalto a Caminhão (Porto de Los Santos)
Máx. bandidos: 8 · Máx. veículos: 3 · Máx. policiais: 12 · Armamento: Classe 1, 2 ou 3 · Negociação: obrigatória · Refém: opcional (máx. 2)

Assalto ao Bobcat Security
Máx. bandidos: 8 · Máx. veículos: 3 · Máx. policiais: 12 · Armamento: Classe 3 · Negociação: obrigatória · Refém: opcional (máx. 2)

Roubo de Veículos (Aeroporto de Sandy Shores)
Máx. bandidos: 8 · Máx. veículos: 3 · Máx. policiais: 12 · Armamento: Classe 1, 2 ou 3

Assalto a Carro-Forte
Máx. bandidos: 6 · Máx. veículos: 3 · Armamento: Classe 1, 2 ou 3

Assalto ao Trem
Máx. bandidos: 12 · Máx. veículos: 4 · Máx. policiais: 18 · Armamento: Classe 1, 2 ou 3

Assalto à Ammu-Nation (Porto de Los Santos)
Máx. bandidos: 8 · Máx. veículos: 3 · Máx. policiais: 12 · Armamento: Classe 1, 2 ou 3

Assalto a Navio de Carga
Máx. bandidos: 12 · Máx. veículos: 4 · Máx. policiais: 18 · Armamento: Classe 1, 2 ou 3

Assalto a Iate
Máx. bandidos: 10 · Máx. veículos: 4 · Máx. policiais: 16 · Armamento: Classe 1, 2 ou 3

Contrabando de Animais
Máx. bandidos: 6 · Máx. veículos: 3 · Máx. policiais: 10 · Armamento: Classe 1`,
      },
      {
        id: "regras-sobrenaturais",
        title: "Regras Sobrenaturais",
        content: `Não crie seu background focando em experiências sobrenaturais passadas, e muito menos saia procurando pelo oculto aleatoriamente sem uma justificativa impecável dentro do RP.

O sobrenatural e o humano coexistem, mas a cidade mantém uma fachada de normalidade absoluta. O que é inexplicável deve permanecer enterrado. Se o seu personagem é humano, ele vive na ignorância total desse mundo sombrio. Forçar a quebra dessa fachada sem uma história sólida por trás resultará em punição.

Ficar forçando interações para "descobrir" o que está oculto (aquela famosa "intuição" que esconde um metagaming) não será tolerado. A staff está sempre de olho: se percebermos forçação de situação, a punição vem direto da gente, sem precisar esperar denúncia de outro jogador.

Iniciados em uma ação
Os jogadores iniciados em clãs não participam de ações ilegais. Em ações generalizadas, deve ser dada preferência ao uso de habilidades, evitando a utilização de armas. A reação do jogador iniciado em algum clã é permitida — entretanto, é ideal ter consciência de que a reação terá uma consequência, que poderá ser uma exposição pessoal ou de raça, e até a iniciação de uma caçada contra si.

Eventos de Lore ou sobrenaturais
Quem agir com Anti-Amor à Vida, quebrar imersão ou desrespeitar o roleplay poderá levar permadeath.`,
      },
      {
        id: "regras-disciplinas",
        title: "Disciplinas",
        content: `Limites do Poder
Se o sistema não permite, você não pode fazer. Habilidades de controle mental (como dominação, presença, demência, etc.) terão mensagens claras na tela sobre o que podem ou não fazer. Na dúvida de como reagir, siga o fluxo da cena e chame um admin depois.

O Abraço e o Despertar
Criar um novo não-vivo ou despertar um ser quimérico exige um tempo mínimo de subserviência (como carniçal ou encantado), e interação real com o jogador após o primeiro contato. Pular etapas não é uma opção.

Rituais Personalizados
Grupos que focam em rituais além do que o sistema oferece precisam de aprovação prévia da staff. Lembre-se que as consequências dos seus rituais podem atingir a cidade inteira.

O Peso do Uso
Usar habilidades constantemente tem um preço, e seu personagem vai sentir isso no jogo. Interprete essa exaustão e, principalmente, interprete a confusão de ser um "recém-abraçado" ou recém-desperto que não entende os próprios limites.`,
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
