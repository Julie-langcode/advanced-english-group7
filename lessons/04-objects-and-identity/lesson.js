/* Lesson 4 · Objects and identity (Outcomes Advanced, Unit 3, SB pp. 27–31; Grammar reference pp. 168–169)
   Final lesson of the topic Culture and Identity. Follows the final lesson plan "Culture and Identity · Lesson 2":
   cleft sentences → household objects → reading "Foreign objects" → lecture on identity → speaking with task repetition
   → topic test → essay. 90-minute online lesson. */
window.LESSON = {
  id: 'l04-objects-and-identity',
  number: 4,
  title: 'Objects and identity',
  titleHtml: 'Objects and <em>identity</em>',
  duration: '90 min · online',
  summary: 'Make your opinions stand out with cleft sentences, talk about the everyday objects that make a home feel “normal”, explore what cultural identity really is — and plan the essay that closes the topic.',
  chips: ['Outcomes Advanced · Unit 3', 'SB pp. 27–31', 'Grammar reference pp. 168–169', 'Essay · written mark'],

  track: [
    ['What … is', '\\bwhat (\\w+ ){1,5}(is|was) '], ['It’s … that', "\\bit(’|')?s (not )?(\\w+ ){1,4}that\\b|\\bit is (not )?(\\w+ ){1,4}that\\b"],
    ['The thing / One thing … is', '\\b(the|one) (main )?thing (that |i )?(\\w+ ){0,5}(is|was)\\b'], ['All … is / was', '\\ball (\\w+ ){1,4}(is|was) '],
    ['the fact that', 'the fact that'], ['take for granted', 'for granted'], ['end up', '\\bend(s|ed)? up\\b'],
    ['get used to', '\\b(get|got|getting) used to'], ['struggle to understand', 'struggle(d)? to understand'],
    ['didn’t seem to bother', 'seem(ed)? to bother'], ['cling on to', '\\bcling(s|ing)? on to|\\bclung on to'],
    ['multi-layered', 'multi-?layered'], ['fixed or static', 'fixed or static|\\bstatic\\b'], ['a very personal thing', 'personal thing'],
    ['revolves around', '\\brevolv\\w* around'], ['lose touch with', '\\b(lose|lost|losing) touch with'], ['conform', '\\bconform'],
    ['wring out', '\\bwr(i|u)ng(ing)? out'], ['thread a needle', 'thread(ed|ing)? a needle'], ['load the dishwasher', 'load(ed|ing)? the dishwasher']
  ],

  sections: [
    { id: 'map', short: 'Plan', title: 'Lesson plan', meta: '90 minutes · online',
      blocks: [
        { type: 'map', items: [
          { t: '0–8 min', n: 'Warm-up: what do you remember?', href: '#s1' },
          { t: '8–20 min', n: 'Cleft sentences', href: '#s2' },
          { t: '20–28 min', n: 'Household objects', href: '#s3' },
          { t: '28–48 min', n: 'Reading: Foreign objects', href: '#s4' },
          { t: '48–60 min', n: 'Listening: a lecture on identity', href: '#s5' },
          { t: '60–80 min', n: 'Speaking: my cultural identity', href: '#s6' },
          { t: '80–90 min', n: 'Topic test, essay and homework', href: '#s7' },
          { t: 'Board', n: 'Our Miro board ↗', href: 'miro' }
        ] },
        { type: 'rule', title: 'Today you will learn to', html: '<ul><li>make your opinions stronger with cleft sentences;</li><li>talk about household objects and everyday jobs at home;</li><li>discuss what is “normal” in different cultures;</li><li>understand the main argument of a lecture on identity;</li><li>talk about what makes up your own cultural identity;</li><li>plan an essay on globalisation and national cultures.</li></ul>' },
        { type: 'note', html: '<p><b>Подготовка:</b> фреймы Miro для стадий 1, 2 и 6; audio 10 (лекция) для демонстрации экрана со звуком; два набора сессионных залов — пары и тройки (два разных состава для стадии 6).</p><p><b>Оценки:</b> аудиторная работа — говорение в стадиях 2 и 6 и тест темы (стадия 7); письменная работа — эссе 250–300 слов.</p>' }
      ] },

    { id: 's1', short: '1 Warm-up', title: 'What do you remember?', meta: 'Lesson 3 chunks · 8 min',
      blocks: [
        { type: 'ex', id: 'race', kind: 'gap', src: 'Chunk race', title: 'Complete the chunks from last lesson', mode: 'Pairs · 3 min',
          instr: 'How many can you and your partner complete in two minutes? The first letters are in brackets.',
          items: [
            { n: 1, t: 'Hospitality is ___ to the culture.', hint: '(c…)', a: [['central']] },
            { n: 2, t: 'Social life ___ ___ the family.', hint: '(r… a…)', a: [['revolves'], ['around']] },
            { n: 3, t: 'People have lost ___ ___ their traditions.', hint: '(t… w…)', a: [['touch'], ['with']] },
            { n: 4, t: 'If you don’t ___, life can be difficult.', hint: '(c…)', a: [['conform']] },
            { n: 5, t: 'It’s very much live and ___ live.', hint: '(l…)', a: [['let']] },
            { n: 6, t: 'There’s not much social ___.', hint: '(m…)', a: [['mobility']] },
            { n: 7, t: 'Women are still ___ ___ on.', hint: '(l… d…)', a: [['looked'], ['down']] },
            { n: 8, t: 'It’s not as ___ everyone’s like that.', hint: '(t…)', a: [['though']] }
          ] },
        { type: 'ex', id: 'lineup', kind: 'open', src: 'Opinion line-up', title: 'Your thesis — and a friendly challenge', mode: 'Pairs · 4 min',
          instr: 'Read your thesis statement to your partner. Partner: push back a little with a phrase from last lesson — <i>I wouldn’t go that far… / That’s a bit harsh… / It’s not as though…</i> — and say why. Then swap.',
          prompts: [{ q: 'My thesis statement', rows: 2, track: true }, { q: 'How my partner challenged it', rows: 2, track: true }] },
        { type: 'note', html: '<p><i>Good evening, everyone! How’s your week been so far? Today we’re wrapping up Culture and Identity…</i></p><p>Во время line-up запишите 2 фразы, где мнение звучит без эмфазы (<i>I don’t like that people judge you by your clothes</i>), — с них начинается стадия 2.</p>' }
      ] },

    { id: 's2', short: '2 Cleft', title: 'Cleft sentences', meta: 'SB p. 27 · ex. 6–7 · Grammar reference p. 168 · 12 min',
      blocks: [
        { type: 'lead', html: '<i>I don’t like that people judge you by your clothes.</i> → <b>What I really don’t like is</b> the way people judge you by your clothes. → <b>It’s</b> the way people judge you by your clothes <b>that</b> I really don’t like. Which sounds stronger — and why?' },
        { type: 'ex', id: 'cl6', kind: 'gap', src: 'SB p. 27 · ex. 6', title: 'What did they actually say?', mode: 'Pairs · use the audio script on p. 199', wide: true,
          instr: 'The plain sentences come from the grammar box. Find what the speakers in audio 7 <i>actually</i> said.',
          items: [
            { n: 1, t: 'He seems to be struggling with the people. → It’s ___ that he seems to be struggling with.', a: ['the people'] },
            { n: 2, t: 'He hates all the bitchy comments and gossip. → What ___ is all the bitchy comments and gossip.', a: ['he hates'] },
            { n: 3, t: 'They only stared at their computer screens. → All ___ was stare at their computer screens or file papers.', a: ['they did'] },
            { n: 4, t: 'It really frustrates me. → The thing that ___ is the fact that they only ever seem to have one person serving you.', a: ['really frustrates me'] }
          ] },
        { type: 'ex', id: 'cl-why', kind: 'pick', src: 'SB p. 27 · ex. 6', title: 'How do cleft sentences work?', mode: 'Pairs · 1 min', opts: ['True', 'False'],
          items: [
            { n: 1, t: 'The important information moves to the start or to the end of the sentence.', a: 'True' },
            { n: 2, t: 'We add words like <i>is / was, that, did, the fact that</i>.', a: 'True' },
            { n: 3, t: 'Cleft sentences change the meaning of the sentence.', a: 'False', note: 'the meaning is the same — only the focus changes' },
            { n: 4, t: 'We use them to focus on how we feel, on the cause of a problem or on what people did.', a: 'True' }
          ] },
        { type: 'rule', title: 'Four patterns', html: '<ul class="frames"><li><b>It’s</b> the bureaucracy <b>that</b> drives me mad.</li><li><b>What</b> concerns me <b>is</b> the lack of social mobility.</li><li><b>All</b> they did <b>was</b> stare at their screens.</li><li><b>The thing / One thing / The main reason</b> I like about Petersburg <b>is the way</b> people talk about books.</li></ul><p>After <i>is</i> we often use <em>the fact that · the way · the number of · the amount of</em>. Feelings work best as verbs: <i>What <b>frustrates</b> me is…</i> (not <s>What I am frustrated about is…</s>).</p><p>Watch out: <s>What found I difficult was…</s> → <i>What I found difficult was…</i> · <s>The thing that me disturbs…</s> → <i>The thing that disturbs me…</i> · <s>All they did was stared…</s> → <i>All they did was stare…</i></p>' },
        { type: 'ex', id: 'cl7', kind: 'gap', src: 'SB p. 27 · ex. 7', title: 'Make cleft sentences', mode: 'First one together, then pairs · 4 min', wide: true,
          instr: 'A is a bit nostalgic, B is a bit irritated. Write the full sentence from the prompts — add words and change verb forms if you need to.',
          items: [
            { n: 1, t: 'B: Yeah, but ___', hint: '(thing / like about our way of life / fact / be yourself)', a: [['the thing i like about our way of life is the fact that you can be yourself', 'the thing that i like about our way of life is the fact that you can be yourself', 'the thing i like about our way of life is that you can be yourself']] },
            { n: 2, t: 'A: Yeah, but ___', hint: '(what / concern / people lose touch with their roots)', a: [['what concerns me is that people are losing touch with their roots', 'what concerns me is that people lose touch with their roots', 'what concerns me is the fact that people are losing touch with their roots']] },
            { n: 3, t: 'B: In fact, ___', hint: '(one / frustrate / lack / social mobility)', a: [['one thing that frustrates me is the lack of social mobility', 'one thing which frustrates me is the lack of social mobility', 'the one thing that frustrates me is the lack of social mobility']] },
            { n: 4, t: 'B: ___', hint: '(it / not the government / do something; people’s attitudes / need to change)', a: [['it is not the government that should do something it is people\'s attitudes that need to change', 'it is not the government that should be doing something it is people\'s attitudes that need to change', 'it is not the government that needs to do something it is people\'s attitudes that need to change']] },
            { n: 5, t: 'B: ___', hint: '(one / give / hope / fact / young people / not seem interested in people’s backgrounds)', a: [['one thing that gives me hope is the fact that young people do not seem all that interested in people\'s backgrounds', 'the one thing that gives me hope is the fact that young people do not seem all that interested in people\'s backgrounds', 'one thing that gives me hope is the fact that young people do not seem interested in people\'s backgrounds', 'one thing that gives me hope is that young people do not seem interested in people\'s backgrounds']] },
            { n: 6, t: 'A: Only because they aren’t interested in anything! ___', hint: '(all / they / want / do / go shopping)', a: [['all they want to do is go shopping', 'all they want to do is to go shopping']] }
          ] },
        { type: 'ex', id: 'cl-stress', kind: 'stress', src: 'Pronunciation', title: 'Where is the strongest stress?', mode: 'Say it aloud together · 30 sec',
          instr: 'Tap the word that carries the main stress — the one the speaker is focusing on.',
          items: [
            { t: 'What concerns me is that people are losing touch with their roots.', a: ['concerns'] },
            { t: 'It’s not the government that should do something.', a: ['government'] },
            { t: 'All they want to do is go shopping.', a: ['shopping'] }
          ] },
        { type: 'note', html: '<p>CCQ: <i>‘It’s the people that he’s struggling with’ — is it the weather that bothers him? The job? So what exactly?</i> It-cleft часто противопоставляет: «именно это, а не другое».</p><p>Ex. 7: первое предложение вместе, остальные в парах. При проверке — 1–2 фразы из чата с ошибками на Miro без имён: <i>Here’s one I saw in the chat — it’s almost there. What could we change?</i></p><p>Ex. 8–9 и GR p. 168–169 — дома.</p>' }
      ] },

    { id: 's3', short: '3 Home', title: 'Household objects', meta: 'SB p. 28 · ex. 2, 4 · 8 min',
      blocks: [
        { type: 'lead', html: 'Is there anything in a typical Russian home that a foreigner might find a bit strange?' },
        { type: 'ex', id: 'hh2', kind: 'gap', select: true, src: 'SB p. 28 · ex. 2', title: 'Which verb goes with the object?', mode: 'Pairs · 3 min',
          instr: 'Choose the verb that goes with each object. Some verbs work with more than one object — all 14 verbs from the book are in the list.',
          bank: ['climb', 'cover', 'cut', 'fill', 'flush', 'heat', 'lay', 'load', 'run', 'spread', 'stick in', 'thread', 'unblock', 'wring out'],
          items: [
            { n: 1, t: '___ a ladder', a: ['climb'] },
            { n: 2, t: '___ a pan with a lid', a: [['cover', 'heat', 'fill']] },
            { n: 3, t: '___ a piece of string', a: ['cut'] },
            { n: 4, t: '___ a bucket with water', a: ['fill'] },
            { n: 5, t: '___ the toilet', a: [['flush', 'unblock']] },
            { n: 6, t: '___ the oven', a: ['heat'] },
            { n: 7, t: '___ a carpet', a: ['lay'] },
            { n: 8, t: '___ the dishwasher', a: [['load', 'run', 'fill', 'unblock']] },
            { n: 9, t: '___ the tap', a: ['run'] },
            { n: 10, t: '___ glue', a: ['spread'] },
            { n: 11, t: '___ a pin', a: [['stick in']] },
            { n: 12, t: '___ a needle', a: [['thread', 'stick in']] },
            { n: 13, t: '___ the sink', a: [['unblock', 'fill']] },
            { n: 14, t: '___ a cloth', a: ['wring out'] }
          ] },
        { type: 'ex', id: 'hh4', kind: 'open', src: 'SB p. 28 · ex. 4', title: 'Little household disasters', mode: 'Whole class · 4 min',
          instr: 'Your friend has a problem. Give advice — and try a cleft sentence: <i>What you need to do is… / All you have to do is… / The first thing you should do is…</i>',
          prompts: [
            { q: 'Oh no, I’ve just spilt water all over the table!', track: true },
            { q: 'I’ve stained my favourite top with coffee.', track: true },
            { q: 'I’ve ripped my trousers — and I’ve got a date tonight!', track: true },
            { q: 'I’ve dropped a glass.', track: true }
          ],
          model: '<p><b>All you need to do is</b> wipe the table. · <b>What you need to do is</b> soak it in cold water. · <b>All you have to do is</b> mend them. · <b>The first thing you should do is</b> sweep the floor.</p>' },
        { type: 'note', html: '<p><i>What else can you run, apart from a tap? (a bath) What else can you fill? (a form, a gap)</i></p><p><i>Wring out</i> — показать жестом на камеру. <i>Thread</i> — /θred/, не /tred/.</p>' }
      ] },

    { id: 's4', short: '4 Reading', title: 'Reading: Foreign objects', meta: 'SB pp. 28–29 · ex. 6–10 · 20 min',
      blocks: [
        { type: 'rule', title: 'A chunk before you read', html: '<p><b>take something for granted</b> — not notice or value something because it’s always there. <i>I take hot water for granted — until it’s switched off for two weeks in summer!</i></p>' },
        { type: 'ex', id: 'rd6', kind: 'pick', src: 'SB p. 28 · ex. 6', title: 'Read the introduction', mode: 'Individually · 2 min', opts: ['1', '2', '3'],
          instr: 'Read only the first paragraph. Which of the three summaries in your book fits it best?',
          items: [{ n: '', t: 'The best summary is…', a: '3', note: 'Definitions of normality vary across time and across different countries.' }] },
        { type: 'ex', id: 'rd7', kind: 'open', src: 'SB p. 28 · ex. 7', title: 'Before you meet the four people', mode: 'Pairs · 3 min',
          prompts: [
            { q: 'Something I take for granted', rows: 2, track: true },
            { q: 'Something abroad that confused me — or made me go “ew”', rows: 2, track: true }
          ],
          model: '<p><b>What really confused me</b> in England <b>was</b> the two separate taps — one freezing, one boiling!</p>' },
        { type: 'ex', id: 'rd9', kind: 'pick', src: 'SB p. 29 · ex. 8–9', title: 'Who…?', mode: 'Read, then compare in pairs · 7 min', opts: ['In-ha', 'Jim', 'Kasia', 'Ed'],
          instr: 'Read the four stories. Who…? Underline the words that give it away.',
          items: [
            { n: 1, t: 'surprises local people with the kind of flat they live in?', a: 'Jim', note: 'a basement flat in Spain' },
            { n: 2, t: 'can’t cook everything they used to?', a: 'Ed', note: 'no oven — “somewhat reduced the scope of my cooking”' },
            { n: 3, t: 'misses a long, relaxing soak?', a: 'Kasia', note: '“used to love soaking in a nice hot bath”' },
            { n: 4, t: 'finds the houses cold because of the air coming in?', a: 'In-ha', note: '“draughty” houses' },
            { n: 5, t: 'loves an object that makes a room warm and cosy?', a: 'Jim', note: 'the brasero — “lovely and cosy when everyone’s sitting round the table”' },
            { n: 6, t: 'saw that people managed without something we think we need?', a: 'Ed', note: 'no fridge — “didn’t seem to bother people”' },
            { n: 7, t: 'has a sink in an unusual place?', a: 'Kasia', note: 'in the utility area' },
            { n: 8, t: 'is driven mad by the taps?', a: 'In-ha', note: '“what drives you really mad… Useless!” — a cleft sentence!' }
          ] },
        { type: 'ex', id: 'rd-chunks', kind: 'gap', src: 'Chunks from the text', title: 'Chunks worth keeping', mode: 'Look back at the text · 3 min', wide: true,
          instr: 'Complete the chunks from the stories. Then choose three you’d like to keep for yourself.',
          items: [
            { n: 1, t: 'We often take it ___ granted.', a: ['for'] },
            { n: 2, t: 'People reacted ___ confusion or disgust.', a: ['with'] },
            { n: 3, t: 'I ended ___ adopting the habit myself.', a: ['up'] },
            { n: 4, t: 'It took me a while, but I’ve got ___ to it.', a: ['used'] },
            { n: 5, t: 'One thing I struggle to ___ is why…', a: ['understand'] },
            { n: 6, t: 'What drives you really ___ is…', a: ['mad'] },
            { n: 7, t: 'It somewhat reduced the ___ of my cooking.', a: ['scope'] },
            { n: 8, t: 'It didn’t seem to ___ people.', a: ['bother'] }
          ] },
        { type: 'ex', id: 'rd10', kind: 'open', src: 'SB p. 29 · ex. 10', title: 'Over to you', mode: 'Groups · 5 min',
          instr: 'Try to use at least one cleft sentence each.',
          prompts: [
            { q: 'Which household objects say the most about Russian culture?', rows: 2, track: true },
            { q: 'What I’d find hardest to live without is…', rows: 2, track: true }
          ],
          model: '<p>the kitchen as the centre of the home · slippers for guests · a dacha · double windows · an electric kettle</p><p><b>What I’d find hardest to live without is</b> an electric kettle — tea is central to our culture.</p>' },
        { type: 'note', html: '<p>Если разговор не идёт: <i>Think about your grandmother’s flat. What’s there that you probably wouldn’t find in a flat in London?</i></p><p>Мостик: <i>Here’s a bigger question — is there really such a thing as a national culture? Let’s hear what a university lecturer thinks.</i></p>' }
      ] },

    { id: 's5', short: '5 Lecture', title: 'Listening: a lecture on identity', meta: 'SB p. 31 · ex. 9–12 · audio 10 · 12 min',
      blocks: [
        { type: 'rule', title: 'How we listen', html: '<p>First time: just the big idea — no need to catch every detail. Second time: how the lecturer connects six things to the argument. Your teacher plays audio 10.</p>' },
        { type: 'audio', src: '../../assets/audio/u03-track09-phrases-with-thing.mp3', src_label: 'Audio 9', title: 'Phrases with thing — listen and repeat',
          marks: [['1 no big thing', 5], ['2 the done thing', 9.3], ['3 a fine thing', 15.3], ['4 the furthest thing', 21.2], ['5 first thing', 27.5], ['6 the sort of thing', 35.1], ['7 one thing and another', 41], ['8 one thing led to another', 46.8]] },
        { type: 'rule', title: 'Audio 9 · eight phrases with thing (SB p. 31 · ex. 7)', html: '<ol><li><b>It’s really no big thing.</b> — it’s not important · <i>ничего особенного</i></li><li><b>It’s just not the done thing.</b> — it isn’t acceptable here · <i>так не принято</i></li><li><b>Chance would be a fine thing!</b> — it’s very unlikely to happen · <i>если бы!</i></li><li><b>It’s the furthest thing from my mind.</b> — I’m not thinking about it at all · <i>мне сейчас совсем не до этого</i></li><li><b>first thing in the morning</b> — very early, before anything else · <i>первым делом утром</i></li><li><b>It’s the sort of thing that makes you glad to be alive.</b> · <i>именно такие вещи радуют жизнь</i></li><li><b>what with one thing and another</b> — for various reasons · <i>то одно, то другое</i></li><li><b>One thing just led to another.</b> — it happened step by step, unplanned · <i>слово за слово, так вышло</i></li></ol><p>Listen and notice the stress, then listen again and repeat. These phrases are for speaking — not for your essay.</p>' },
        { type: 'ex', id: 'lec9', kind: 'open', src: 'SB p. 31 · ex. 9–10', title: 'The main argument in one sentence', mode: 'Individually, then compare in pairs · 5 min',
          prompts: [
            { q: 'The lecturer’s main argument', rows: 2, track: true },
            { q: 'As a cleft sentence: What the lecturer argues is that…', rows: 2, track: true },
            { q: 'How far do I agree?', rows: 2, track: true }
          ],
          model: '<p>Culture and identity is to do with your individual experiences and roles, and national cultures, as far as they exist, are simply an invention of those in power.</p>' },
        { type: 'ex', id: 'lec11', kind: 'match', src: 'SB p. 31 · ex. 11', title: 'Second listening: how does each idea fit in?', mode: 'Notes, then pairs · 4 min',
          items: ['global uncertainty', 'commerce', 'a French TV show and a German car', 'a ballet lover and a marketing manager', 'terrible tensions', 'the ruling elite'],
          opts: [['a', 'people cling on to the idea of a unified national culture'], ['b', 'interaction — and so identity — is increasingly shaped by trade'], ['c', 'examples of the lecturer’s own multi-layered cultural contacts'], ['d', 'two roles that one person can have'], ['e', 'sometimes our different roles clash'], ['f', 'the idea of a national identity is promoted by those in power (Hobsbawm)']],
          key: ['a', 'b', 'c', 'd', 'e', 'f'] },
        { type: 'ex', id: 'lec12', kind: 'pick', src: 'SB p. 31 · ex. 12', title: 'Would the lecturer agree?', mode: 'Pairs · 3 min', opts: ['Yes', 'No'],
          instr: 'Read the six statements in your book. Would the lecturer agree? Back up your answer with what was actually said.',
          items: [
            { n: 1, t: 'Statement 1', a: 'Yes' }, { n: 2, t: 'Statement 2', a: 'No' }, { n: 3, t: 'Statement 3', a: 'Yes' },
            { n: 4, t: 'Statement 4', a: 'No' }, { n: 5, t: 'Statement 5', a: 'No' }, { n: 6, t: 'Statement 6', a: 'Yes' }
          ] },
        { type: 'ex', id: 'lec-essay', kind: 'pick', src: 'For your essay', title: 'Which side of the argument?', mode: 'Whole class · 1 min', opts: ['weakens', 'strengthens', 'my own view'],
          instr: 'Does each idea from the lecture support the view that globalisation <b>weakens</b> national cultures, that it <b>strengthens</b> them — or is it best for <b>your own view</b>?',
          items: [
            { n: 1, t: 'people cling on to the idea of a unified national culture', a: 'strengthens' },
            { n: 2, t: 'complex and multi-layered interactions', a: 'weakens' },
            { n: 3, t: 'our identities aren’t fixed or static', a: ['weakens', 'my own view'] },
            { n: 4, t: 'identity is a very personal thing', a: 'my own view' }
          ] },
        { type: 'note', html: '<p>Хобсбаум, <i>The Invention of Tradition</i> (1983): <i>Has anyone come across the idea of ‘invented traditions’?</i></p><p>Мостик: <i>The lecturer says identity is a very personal thing. Shall we put that to the test?</i></p>' }
      ] },

    { id: 's6', short: '6 Speaking', title: 'My cultural identity', meta: 'SB p. 31 · ex. 13–14 · say it twice · 20 min',
      blocks: [
        { type: 'ex', id: 'id-plan', kind: 'open', src: 'SB p. 31 · ex. 13', title: 'Eight things', mode: 'Individually · 4 min',
          instr: 'Choose: <b>(a)</b> eight people or things that are culturally important for Russia, or <b>(b)</b> eight people or things — from anywhere in the world — that make up your own cultural identity. Notes are fine. Ideas: writers, books, the languages you speak, places in St Petersburg, films, music, food, family traditions.',
          prompts: [{ q: 'My eight (key words)', rows: 4, track: true }],
          model: '<p><b>One thing that’s</b> a huge part of my identity <b>is</b> Russian literature — <b>what I love most about it is the way</b> Chekhov makes you laugh and cry on the same page. But <b>what I’ve come to realise is that</b> my identity is quite multi-layered: I also grew up on British TV series, and <b>all I wanted to do</b> as a teenager <b>was</b> listen to American music.</p>' },
        { type: 'rule', title: 'Round 1 · groups of three · 6 min', html: '<p>Share your list and explain your choices. Listeners ask questions and gently challenge a generalisation: <i>What made you choose…? · I wouldn’t go that far — not everyone in Russia… · It’s not as though everyone reads Pushkin! · That’s a bit harsh, isn’t it?</i></p><p>No need to get through all eight — it’s better to talk properly about three or four.</p>' },
        { type: 'rule', title: 'Round 2 · new groups · 6 min', html: '<p>Same task — you already know what you want to say. This time, weave in everything on the checklist below. Listeners tick what they hear.</p>' },
        { type: 'ex', id: 'id-r2', kind: 'open', src: 'After round 2', title: 'My checklist', mode: 'Individually · 1 min',
          prompts: [{ q: 'The best sentence I said in round 2', rows: 2, track: true }, { q: 'How did the second round feel?', rows: 2 }],
          checklist: ['2 chunks from Lesson 3 (revolves around, lose touch with, conform…)', '2 cleft sentences', '1 chunk from the reading (take for granted, end up adopting…)', '1 idea from the lecture (multi-layered, not fixed or static…)'] },
        { type: 'note', html: '<p>Цикл Goh & Burns: в первом раунде не вмешивайтесь, записывайте по одной фразе из каждой группы. Между раундами — реформуляция на Miro (3 мин): <i>Family is the main thing. → It’s my family that has shaped my identity more than anything else.</i></p>' }
      ] },

    { id: 's7', short: '7 Test', title: 'Topic test', meta: 'Culture and identity · 18 questions · 7 min',
      blocks: [
        { type: 'lead', html: 'Just for you to see where you are — try it without the book or the glossary. Prepositions count: it’s the whole chunk that matters!' },
        { type: 'ex', id: 'test-a', kind: 'gap', src: 'Part A · Lesson 3', title: 'One word in each gap', mode: 'Individually', wide: true,
          items: [
            { n: 1, t: 'Most people’s social life revolves ___ their extended family.', a: ['around'] },
            { n: 2, t: 'It’s a secular society and people have lost ___ with their traditions.', a: ['touch'] },
            { n: 3, t: 'It’s quite conservative, so if you don’t ___, life can be difficult.', a: ['conform'] },
            { n: 4, t: 'People don’t like to interfere — it’s very much live and ___ live.', a: ['let'] },
            { n: 5, t: 'Class is a big thing and there’s not much social ___.', a: ['mobility'] },
            { n: 6, t: 'Hospitality is ___ to the culture — guests are always fed.', a: ['central'] },
            { n: 7, t: 'Oof, that’s a bit ___, isn’t it? It’s not as though everyone’s like that.', a: ['harsh'] }
          ] },
        { type: 'ex', id: 'test-b', kind: 'gap', src: 'Part B · Household objects', title: 'Verb + object', mode: 'Individually', wide: true,
          items: [
            { n: 8, t: 'Can you ___ the needle for me? My eyesight isn’t what it was.', a: ['thread'] },
            { n: 9, t: 'After you’ve wiped up the mess, ___ out the cloth over the sink.', a: ['wring'] },
            { n: 10, t: 'Let the tap ___ for a bit and the water will get warm.', a: ['run'] }
          ] },
        { type: 'ex', id: 'test-c', kind: 'gap', src: 'Part C · Reading and lecture', title: 'Chunks from the text and the lecture', mode: 'Individually', wide: true,
          items: [
            { n: 11, t: 'We often take it for ___ that the things around us are normal.', a: ['granted'] },
            { n: 12, t: 'At first it seemed strange, but I ended ___ adopting the habit myself.', a: ['up'] },
            { n: 13, t: 'Nobody had a fridge, but it didn’t seem to ___ people.', a: ['bother'] },
            { n: 14, t: 'It took me months to get ___ to the separate taps.', a: ['used'] },
            { n: 15, t: 'In times of global uncertainty, people cling ___ to the idea of a unified national culture.', a: ['on'] }
          ] },
        { type: 'ex', id: 'test-d', kind: 'gap', src: 'Part D · Cleft sentences', title: 'Rewrite the sentence', mode: 'Individually', wide: true,
          items: [
            { n: 16, t: 'The lack of social mobility frustrates me. → ___', hint: '(What…)', a: [['what frustrates me is the lack of social mobility']] },
            { n: 17, t: 'They only stared at their screens. → ___', hint: '(All…)', a: [['all they did was stare at their screens', 'all they did was to stare at their screens']] },
            { n: 18, t: 'People’s attitudes need to change, not the government. → ___', hint: '(It’s…)', a: [['it is people\'s attitudes that need to change not the government', 'it is people\'s attitudes that need to change and not the government']] }
          ] },
        { type: 'note', html: '<p>16–18 — отлично; 13–15 — хорошо; 9–12 — повторить глоссарий и GR p. 168; меньше 9 — индивидуальная работа перед контрольной.</p>' }
      ] },

    { id: 's8', short: '8 Essay', title: 'The essay that closes the topic', meta: 'Written mark · 250–300 words · due next lesson',
      blocks: [
        { type: 'rule', title: 'The question', html: '<p><em>Some people believe that globalisation is making national cultures disappear. Others argue that it makes them stronger. Discuss both views and give your own opinion.</em></p><p>You already have your introduction from Lesson 3 — have a look at the comments and polish it.</p>' },
        { type: 'rule', title: 'Essay plan · five paragraphs', html: '<ol><li><b>Introduction</b> (40–50 words): context → both views in your own words → your thesis in one sentence. <i>In an increasingly interconnected world… / While some argue that…, others believe… / This essay will argue that…</i></li><li><b>View 1 — cultures are disappearing</b> (60–70 words): topic sentence → two reasons → an example (global brands, the same objects in every home, young people losing touch with traditions). <i>It is often argued that… / What concerns many people is the fact that…</i></li><li><b>View 2 — cultures are becoming stronger</b> (60–70 words): topic sentence → two reasons → an example (people cling on to a national culture in uncertain times; we adopt foreign things and make them our own — like the people in the reading). <i>On the other hand, … / people end up adopting foreign habits…</i></li><li><b>My view</b> (50–60 words): your position + a counter-argument and why it doesn’t change your mind. <i>It is not globalisation itself that threatens national cultures, but… / This is something of an overgeneralisation.</i></li><li><b>Conclusion</b> (40–50 words): both views in brief → your view in other words → a final thought. <i>Taking everything into account, … / identity is a very personal, multi-layered thing.</i></li></ol><p><b>Linkers:</b> On the one hand… · On the other hand… · Conversely, … · Nevertheless, … · Moreover, … · Taking everything into account, …</p><p><b>Keep for speaking, not for the essay:</b> <s>drives me mad</s>, <s>take the mickey</s>.</p>' },
        { type: 'ex', id: 'essay', kind: 'open', src: 'Written work · essay', title: 'Globalisation and national cultures', mode: '250–300 words · due next lesson',
          prompts: [{ q: 'My essay', rows: 16, track: true, words: [250, 300] }],
          checklist: ['Both views are covered; my position is the same in the introduction and the conclusion (Task Response)', 'Every paragraph has a topic sentence; paragraphs are linked (Coherence and Cohesion)', 'At least 6 chunks from the topic, no informal phrases (Lexical Resource)', '2 cleft sentences and 1 phrase of written disagreement (Grammatical Range and Accuracy)', '250–300 words'] },
        { type: 'rule', title: 'Also for next lesson', html: '<ol><li><em>Grammar:</em> SB p. 27 ex. 8 (read the dialogue aloud) and ex. 9 (finish three sentences about yourself); Grammar reference p. 168 ex. 1, p. 169 ex. 2–3.</li><li><em>Vocabulary:</em> the glossary for Unit 3; add five chunks from today to your notebook, each with your own example.</li></ol>' }
      ] },

    { id: 's9', short: '9 Words', title: 'Lesson words', meta: 'Cleft sentences · household objects · the reading · the lecture', blocks: [{ type: 'words' }] },

    { id: 's10', short: '10 Send', title: 'Reflection', meta: '1 min',
      blocks: [
        { type: 'ex', id: 'reflect', kind: 'open', src: 'Reflection', title: 'Before you go', mode: '1 min',
          prompts: [{ q: 'Three chunks I’d most like to use in my essay', rows: 2 }, { q: 'My favourite cleft sentence starter', rows: 1 }] },
        { type: 'cando' }, { type: 'submit' },
        { type: 'note', html: '<p><i>And that’s Culture and Identity! You can now describe a society, challenge a stereotype, make your point really stand out with cleft sentences, and talk about who you are. I’m really looking forward to reading your essays.</i></p>' }
      ] }
  ],

  cando: ['I can make my opinion stand out with a cleft sentence.', 'I can talk about household objects and everyday jobs at home.', 'I can discuss what is “normal” in different cultures.', 'I can follow the main argument of a lecture.', 'I can plan a “discuss both views” essay.'],

  words: [
    ['What concerns me is (that) …', 'cleft: focus on a feeling', 'меня беспокоит то, что …', 'What concerns me is that people are losing touch with their roots.'],
    ['It’s X that …, not Y', 'cleft: focus on one thing, in contrast', 'именно X …, а не Y', 'It’s people’s attitudes that need to change, not the government.'],
    ['All they did was …', 'cleft: “they only…”', 'всё, что они делали, — …', 'All they did was stare at their screens.'],
    ['The thing I like about … is the fact that …', 'cleft: focus on the reason', 'что мне нравится в …, так это то, что …', 'The thing I like about our way of life is the fact that you can be yourself.'],
    ['climb a ladder', 'go up a ladder', 'залезть по стремянке', 'I had to climb a ladder to change the bulb.'],
    ['cover a pan', 'put a lid on it', 'накрыть кастрюлю крышкой', 'Cover the pan and let it simmer.'],
    ['flush the toilet', 'make water clean the toilet', 'спустить воду', 'Don’t forget to flush the toilet.'],
    ['load / run the dishwasher', 'put dishes in / switch it on', 'загрузить / включить посудомойку', 'Could you load the dishwasher?'],
    ['run the tap', 'let water come out', 'открыть кран', 'Let the tap run for a bit.'],
    ['thread a needle', 'put thread through a needle', 'вдеть нитку в иголку', 'Can you thread the needle for me?'],
    ['unblock the sink', 'clear it so water flows', 'прочистить раковину', 'We had to call a plumber to unblock the sink.'],
    ['wring out a cloth', 'twist it to remove water', 'отжать тряпку', 'Wring out the cloth over the sink.'],
    ['spill / stain / rip', 'small household accidents', 'пролить / посадить пятно / порвать', 'I spilt coffee and stained my top.'],
    ['wipe / soak / mend / sweep', 'ways to fix them', 'вытереть / замочить / зашить / подмести', 'Soak it in cold water.'],
    ['take sth for granted', 'not notice it because it’s always there', 'воспринимать как должное', 'We take hot water for granted.'],
    ['react with confusion or disgust', 'be puzzled or find it horrible', 'реагировать недоумением или отвращением', 'Visitors often react with confusion.'],
    ['end up doing sth', 'finally do it without planning to', 'в итоге (сделать)', 'I ended up adopting the habit myself.'],
    ['get used to sth', 'become familiar with it', 'привыкнуть к', 'I’ve got used to the separate taps.'],
    ['one thing I struggle to understand', 'something I find hard to understand', 'чего я никак не могу понять', 'One thing I struggle to understand is why there’s no oven.'],
    ['didn’t seem to bother people', 'people didn’t mind', 'людей это, кажется, не беспокоило', 'There was no fridge, but it didn’t seem to bother people.'],
    ['cling on to an idea', 'hold on to it tightly', 'цепляться за идею', 'In uncertain times people cling on to the idea of a national culture.'],
    ['multi-layered', 'with many different levels', 'многослойный', 'Our identities are multi-layered.'],
    ['fixed or static', 'never changing', 'неизменный, застывший', 'Identity isn’t fixed or static.'],
    ['a very personal thing', 'something individual', 'дело сугубо личное', 'Identity is a very personal thing.'],
    ['the ruling elite', 'the people in power', 'правящая элита', 'National identity is often promoted by the ruling elite.']
  ]
};
