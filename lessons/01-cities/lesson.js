/* Lesson 1 · Cities (Outcomes Advanced, Unit 1, SB pp. 6–9)
   Content follows the Teacher's Book plan for this spread. Timings: 80-minute online lesson. */
window.LESSON = {
  id: 'l01-cities',
  number: 1,
  title: 'Cities',
  titleHtml: 'Cities <em>and us</em>',
  duration: '80 min · online',
  summary: 'Describe cities and city life, make a story more vivid by emphasising and exaggerating, and back up what you say with an example.',
  chips: ['Outcomes Advanced · Unit 1', 'SB pp. 6–9', 'WB pp. 4, 6', 'Audio 1.1'],

  track: [
    ['buzz', '\\bbuzz'], ['spring up', '\\bspr(ing|ang|ung)(ing|s)? up'], ['muggings', '\\bmugging'], ['runs smoothly', '\\bsmoothly'],
    ['choke on', '\\bchok(e|ing|ed) on'], ['crawl along', '\\bcrawl'], ['show off', '\\bshow(ing|s|ed)? off'], ['conspicuous', '\\bconspicuous'],
    ['not a trace of', '\\btrace of'], ['condemned', '\\bcondemned'], ['take by surprise', '\\b(took|take|takes|taken) (me |us |him |her |them )?by surprise'],
    ['end up', '\\bend(ed|s)? up'], ['a bit of a pain', '\\bbit of a pain'], ['drawbacks', '\\bdrawback'], ['that sort of place', '\\bsort of place'],
    ['scene', '\\bscene\\b'], ['don’t get me wrong', "get me wrong"], ['settle down', '\\bsettl(e|ed|ing) down'],
    ['Honestly', '\\bhonestly'], ['Seriously', '\\bseriously'], ['Literally', '\\bliterally'], ['really, really', '\\breally,? really'],
    ['loads and loads', '\\bloads and loads'], ['unbearably', '\\bunbearabl'], ['packed', '\\bpacked'], ['spotless', '\\bspotless'],
    ['congested', '\\bcongest'], ['sprawling', '\\bsprawl'], ['run-down', '\\brun[- ]down'], ['affluent', '\\baffluent'],
    ['vibrant', '\\bvibrant'], ['compact', '\\bcompact'], ['well-run', '\\bwell[- ]run'], ['chaotic', '\\bchaotic'], ['posh', '\\bposh'],
    ['it’s like …', "\\b(it'?s|it was|feels|felt) like"]
  ],

  sections: [
    { id: 'map', short: 'Plan', title: 'Lesson plan', meta: '80 minutes · the first 25 minutes run on our Miro board',
      blocks: [
        { type: 'map', items: [
          { t: '0–4 min · Miro', n: 'Welcome and tech check', href: 'miro:3458764686882525816' },
          { t: '4–12 min · Miro', n: 'Two truths and a lie: city edition', href: 'miro:3458764686882525817' },
          { t: '12–18 min · Miro', n: 'Pin your city', href: 'miro:3458764686882525818' },
          { t: '18–25 min · Miro', n: 'Class agreement · our course and grades', href: 'miro:3458764686882525819' },
          { t: '25–33 min', n: 'A place to live', href: '#s1' },
          { t: '33–42 min', n: 'City life vocabulary', href: '#s2' },
          { t: '42–55 min', n: 'Listening: two cities', href: '#s3' },
          { t: '55–63 min', n: 'Emphasising and exaggerating', href: '#s4' },
          { t: '63–75 min', n: 'Back it up · Talk cities', href: '#s5' },
          { t: '75–80 min', n: 'Exit ticket and homework', href: '#s9' }
        ] },
        { type: 'note', html: '<p>Первые 25 минут (вход, Two truths and a lie, Pin your city, class agreement, слайды A1–A6 о курсе) идут на доске Miro группы 7 — карточки плана открывают нужный фрейм. Сайт подключается с 25-й минуты. Студенты держат урок во второй вкладке и вписывают имя: каждая проверка уходит в вашу таблицу результатов (после подключения Apps Script). Заметки видите только вы: откройте урок один раз с адресом, оканчивающимся на <b>#teacher</b>.</p>' }
      ] },

    { id: 's1', short: '1 Warm-up', title: 'A place to live', meta: '25–33 min · SB pp. 6–7 · Speaking ex. 1–3',
      blocks: [
        { type: 'lead', html: '<a href="https://miro.com/app/board/uXjVEbIZLS4=/?moveToWidget=3458764686882525820" target="_blank" rel="noopener">Miro · 04 West Palm Beach ↗</a>' },
        { type: 'lead', html: 'Look at the photo on SB p. 6: a housing development in West Palm Beach, Florida.' },
        { type: 'ex', id: 'warm1', kind: 'open', src: 'SB p. 6 · ex. 1', title: 'Advantages and drawbacks', mode: 'Breakout rooms of 3 · 3 min',
          instr: 'List as many advantages and drawbacks of living in this place as you can.',
          prompts: [{ q: 'Advantages', rows: 3 }, { q: 'Drawbacks', rows: 3 }],
          model: '<p>Advantages: very green, close to the water (good for water sports), small enough for a close-knit community, safe. Drawbacks: potentially very dull, no nightlife or cultural amenities, everything looks the same.</p>' },
        { type: 'ex', id: 'warm2', kind: 'match', src: 'SB p. 7 · ex. 2', title: 'Adjectives for places', mode: 'Pairs · 2 min',
          instr: 'Match each adjective to a simpler meaning. Then discuss: to what degree does each one apply to West Palm Beach?',
          items: ['run-down', 'affluent', 'congested', 'sprawling', 'vibrant', 'spotless'],
          opts: [['a', 'rich'], ['b', 'clean'], ['c', 'crowded, full of traffic'], ['d', 'lively'], ['e', 'in bad repair'], ['f', 'stretched out over a large area']],
          key: ['e', 'a', 'c', 'f', 'd', 'b'] },
        { type: 'ex', id: 'warm3', kind: 'open', src: 'SB p. 7 · ex. 3', title: 'Would you live there?', mode: 'Whole class · 1 min',
          instr: 'Would you like to live in a place like this? Why? Why not?', prompts: [{ q: 'My answer', rows: 2, track: true }] },
        { type: 'note', html: '<p>Фото: West Palm Beach, Флорида, около 100 тыс. жителей, недалеко от Майами. Ex. 1 — в сессионных залах по 3 человека; на обратной связи запишите 3–4 удачные фразы студентов с пропусками в чат.</p><p>Ударение: con<b>GES</b>ted, pol<b>LU</b>ted; sprawling /ˈsprɔːlɪŋ/.</p>' }
      ] },

    { id: 's2', short: '2 City life', title: 'City life', meta: '33–42 min · SB p. 8 · Vocabulary ex. 1–2',
      blocks: [
        { type: 'lead', html: '<a href="https://miro.com/app/board/uXjVEbIZLS4=/?moveToWidget=3458764686882525821" target="_blank" rel="noopener">Miro · 05 City word wall ↗</a>' },
        { type: 'ex', id: 'voc1', kind: 'gap', select: true, src: 'SB p. 8 · ex. 1', title: 'City life', mode: 'Individually, then compare · 4 min',
          instr: 'Check you understand the words in bold. Then put the words from the box into the sentences.',
          bank: ['springing up', 'showing off', 'choke', 'condemned', 'muggings', 'smoothly', 'crawl', 'dropping'],
          example: '1 There are new businesses <u>springing up</u> all over the place. There’s a real <b>buzz</b> about the place.',
          items: [
            { n: 2, t: 'The <b>crime rate</b> is pretty high. There are a lot of ___ and <b>shootings</b>.', a: ['muggings'] },
            { n: 3, t: 'There’s a big <b>network</b> of buses and trams and it all runs very ___.', a: ['smoothly'] },
            { n: 4, t: 'The <b>smog</b> is awful – you have to wear a mask or you’d ___ on the <b>fumes</b>.', a: ['choke'] },
            { n: 5, t: 'The cars just ___ along most of the time – you <b>might as well</b> walk.', a: ['crawl'] },
            { n: 6, t: 'There’s a lot of <b>conspicuous consumption</b> with people ___ their wealth.', a: ['showing off'] },
            { n: 7, t: 'There’s <b>not a trace of</b> litter anywhere. Apparently, you can get fined heavily for ___ it.', a: ['dropping'] },
            { n: 8, t: 'The area is a <b>slum</b>. A lot of buildings should just be ___ and rebuilt.', a: ['condemned'] }
          ] },
        { type: 'ex', id: 'voc2', kind: 'open', src: 'SB p. 8 · ex. 2', title: 'Talk about it', mode: 'Pairs · 3 min',
          instr: 'Answer the questions with your partner. Notes are optional.',
          prompts: [{ q: '1 Which adjectives from p. 7 describe the places in ex. 1? How would you say the opposites?' }, { q: '2 What else might give a place a buzz?' }, { q: '3 What else might you choke on?' }, { q: '4 What are examples of conspicuous consumption?' }],
          model: '<ul><li>1 vibrant, chaotic, well-run, polluted, congested, affluent, spotless, run-down. Opposites: dull · safe and secure · badly run · clean and fresh · hardly any traffic · poor · filthy · gentrified</li><li>2 great clubs and nightlife, a winning local team, new galleries, cafés and boutiques springing up</li><li>3 food, a bone</li><li>4 huge expensive cars, designer brands, luxury watches, gold</li></ul>' },
        { type: 'note', html: '<p>Не давайте словарь сразу — вопросы к контексту (Teacher’s Book): <i>buzz</i> — существительное или глагол? позитивное? описывает атмосферу? Потом студенты задают такие же вопросы к остальным словам.</p><p><i>Conspicuous consumption</i> — термин Т. Веблена («Теория праздного класса», 1899). Фото на с. 8 — вид на Вену.</p>' }
      ] },

    { id: 's3', short: '3 Listening', title: 'Listening: two cities', meta: '42–55 min · SB pp. 8–9 · ex. 3–6',
      blocks: [
        { type: 'audio', src: '../../assets/audio/u01-track01-talking-about-cities.mp3', src_label: 'Audio 1.1', title: 'Two conversations about cities',
          marks: [['Conversation 1', 0], ['Conversation 2', 108]],
          note: 'Listen once for the good and bad things (ex. 3). Listen again for the exact words (ex. 5). Use ↺ 5 s to replay a phrase.' },
        { type: 'ex', id: 'lis3', kind: 'open', src: 'SB p. 8 · ex. 3', title: 'First listening: good and bad', mode: 'Individually',
          instr: 'List the good and bad things you hear about each place.',
          prompts: [{ q: 'Conversation 1 · good' }, { q: 'Conversation 1 · bad' }, { q: 'Conversation 2 · good' }, { q: 'Conversation 2 · bad' }],
          model: '<p><b>Conversation 1.</b> Good: wild nightlife, the city is still buzzing at 4 a.m., a vibrant downtown with skyscrapers and neon lights. Bad: terrible congestion (it’s quicker to walk), unbearably humid, heavy smog, you nearly choke on the fumes.</p><p><b>Conversation 2.</b> Good: affluent, spotless streets, everything runs smoothly, a good place to bring up kids. Bad: very conservative, incredibly dull, nothing going on, no music scene.</p>' },
        { type: 'ex', id: 'lis4', kind: 'open', src: 'SB p. 8 · ex. 4', title: 'Which cities?', mode: 'Pairs · 2 min',
          instr: 'Compare your ideas. Which cities could the speakers be describing? Why? Which place would you rather live in?',
          prompts: [{ q: 'Our guess and why', rows: 2, track: true }] },
        { type: 'ex', id: 'lis5', kind: 'gap', src: 'SB pp. 8–9 · ex. 5', title: 'Second listening: exact words', mode: 'Individually · press Enter to check',
          instr: 'Listen again and type the missing words.',
          items: [{ h: 'Conversation 1' },
            { n: 1, t: 'It’s really wild. It ___, actually.', a: [['took me by surprise']] },
            { n: 2, t: 'We went out with these people and ___ at about four in the morning.', a: [['ended up in a place']] },
            { n: 3, t: 'Actually, that was ___, the congestion.', a: [['a bit of a pain']] },
            { n: 4, t: 'Honestly, you walk out of your hotel and ___ this thick wall of heat.', a: [["it's like hitting", 'it is like hitting']] },
            { n: 5, t: 'It does ___ but, as I say, it just has a real buzz.', a: [['have its drawbacks']] },
            { h: 'Conversation 2' },
            { n: 6, t: 'It is, if you like ___.', a: [['that sort of place']] },
            { n: 7, t: 'It’s more lively. There’s ___, you know.', a: [['more of a music scene']] },
            { n: 8, t: 'So you wouldn’t ___ to live there?', a: [['consider going back']] },
            { n: 9, t: 'Don’t ___, it is a good place to live if you’re bringing up kids.', a: [['get me wrong']] },
            { n: 10, t: 'So if I ___, I might move back. It’s just not what I want right now.', a: [['were to settle down', 'was to settle down']] }
          ] },
        { type: 'ex', id: 'lis6', kind: 'open', src: 'SB p. 9 · ex. 6', title: 'Your turn', mode: 'Breakout rooms · 4 min',
          instr: 'Discuss the questions. Use the new phrases in bold.',
          prompts: [{ q: 'What places, people, etc. have <b>taken you by surprise</b>?' }, { q: 'Have you ever been out till four? Where? When?' }, { q: 'What <b>drawbacks</b> are there to the place you live in?' }, { q: 'What ‘<b>scenes</b>’ are there where you live?' }, { q: 'Where’s a good place to <b>settle down</b> in your country or region? Why?' }] },
        { type: 'note', html: '<p>Первое прослушивание — только хорошее/плохое (ex. 3). Ex. 5: пусть сначала угадают пропуски, затем второе прослушивание; если трудно — третье с паузами после каждой фразы (Teacher’s Book).</p><p>После проверки покажите скрипт (SB p. 198) и попросите найти <i>Honestly / Seriously / Literally</i> — это мост к § 5. Ex. 6 можно провести как «мингл»: смена пар каждые 90 секунд.</p>' }
      ] },

    { id: 's4', short: '4 Emphasis', title: 'Emphasising and exaggerating', meta: '55–63 min · SB p. 9 · Understanding vocabulary ex. 7–8',
      blocks: [
        { type: 'lead', html: '<a href="https://miro.com/app/board/uXjVEbIZLS4=/?moveToWidget=3458764686882525822" target="_blank" rel="noopener">Miro · 06 Turn it up ↗</a>' },
        { type: 'rule', title: 'Four ways to make it sound bigger', html: '<ul><li><em>Repetition:</em> really, really vibrant · loads and loads of people · see for miles and miles</li><li><em>Intensifying adverbs:</em> unbearably humid · incredibly lively</li><li><em>Extreme words</em> that already mean “very”: packed · spotless · crawl · stink</li><li><em>Expressions with like:</em> it’s like hitting this thick wall of heat</li></ul>' },
        { type: 'ex', id: 'emp7', kind: 'open', src: 'SB p. 9 · ex. 7', title: 'Collect more', mode: 'Pairs · 3 min', instr: 'Do the three tasks with your partner.',
          prompts: [{ q: '1 Four other intensifying adverbs' }, { q: '2 Six other ‘extreme’ adjectives or verbs' }, { q: '3 When might people say these? It was like being at a rock concert · It was like living in a war zone · It’s like Buckingham Palace · It was like the Arctic in there · It’s like talking to a brick wall', rows: 4 }],
          model: '<ul><li>1 remarkably, hugely, absolutely, terribly, deeply, utterly</li><li>2 filthy, vast, tiny, enormous, dreadful, fascinating · verbs: devastate, smash, soar, rocket, plummet</li><li>3 rock concert: an audience going wild at a play or a talk · war zone: noisy, arguing flatmates or a high-crime area · Buckingham Palace: a huge, grand house or office · the Arctic: air conditioning turned up too high · brick wall: someone who just won’t listen</li></ul>' },
        { type: 'ex', id: 'emp8', kind: 'open', src: 'SB p. 9 · ex. 8', title: 'Make it more interesting', mode: 'Pairs · 4 min',
          instr: 'Rewrite the sentences using all four patterns. The labels under each answer light up when you use a pattern.',
          example: '1 It’s a big city. → It’s an <u>absolutely enormous</u> city.',
          prompts: [{ q: '2 They’re doing a lot of building work.', meter: true }, { q: '3 The city’s a bit run-down.', meter: true }, { q: '4 It’s not very expensive there.', meter: true }, { q: '5 Some parts of the city are quite dangerous.', meter: true }, { q: '6 It’s quite interesting.', meter: true }],
          model: '<ul><li>2 They’re doing loads and loads of building work – the whole city is covered in clouds of dust!</li><li>3 The city’s really, really run-down. Half the buildings are literally falling to pieces.</li><li>4 It’s so cheap there it’s like you hardly even notice you’re spending money!</li><li>5 Some areas are incredibly rough. It’s like living in a war zone.</li><li>6 It’s absolutely fascinating.</li></ul>' },
        { type: 'note', html: '<p>Здесь <i>like</i> — предлог: после него существительное или герундий. Обратная связь (Teacher’s Book): выпишите в чат 2–3 предложения студентов с ошибками и попросите группу исправить их — так лучше, чем исправлять устно.</p>' }
      ] },

    { id: 's5', short: '5 Back it up', title: 'Reinforcing a point', meta: '63–68 min · SB p. 9 · Developing conversations ex. 9–10',
      blocks: [
        { type: 'lead', html: '<a href="https://miro.com/app/board/uXjVEbIZLS4=/?moveToWidget=3458764686882795688" target="_blank" rel="noopener">Miro · 10 Back it up ↗</a>' },
        { type: 'rule', title: 'When someone says “Really?”, back it up', html: '<p>The listener questions you with <em>Really?</em> or <em>Yeah?</em> You answer with an example and an adverb that insists it’s true: <em>Honestly · Seriously · Literally</em>.</p><div class="dialogue"><div><b>B</b> … the nightlife is totally insane.</div><div><b>A</b> Really?</div><div><b>B</b> Honestly. We went out with these people and ended up in a place at about four in the morning and it was absolutely packed.</div><div><b>A</b> Yeah?</div><div><b>B</b> Seriously. You literally couldn’t move.</div></div>' },
        { type: 'ex', id: 'dev9', kind: 'match', src: 'SB p. 9 · ex. 9', title: 'Claim and example', mode: 'Individually · 2 min', instr: 'Match the sentences (1–5) to the examples (a–e).',
          items: ['The place is like a war zone.', 'The place is absolutely spotless.', 'The way people drive is insane.', 'We were staying in a really, really posh area.', 'There’s a real buzz about the place.'],
          opts: [['a', 'They race along the main roads at about 100 miles an hour.'], ['b', 'There isn’t a trace of litter or chewing gum on the pavements.'], ['c', 'It was like Beverly Hills. I felt a bit conspicuous walking around there.'], ['d', 'There’s a huge music scene. There are loads of venues springing up.'], ['e', 'There’s so much crime and hundreds of places have been condemned.']],
          key: ['e', 'b', 'a', 'c', 'd'] },
        { type: 'ex', id: 'dev10', kind: 'open', src: 'SB p. 9 · ex. 10', title: 'Act it out', mode: 'Pairs · 2 min',
          instr: 'Use the pairs from ex. 9 to have conversations. Add honestly, seriously and literally. Write one of yours here.',
          example: 'A: The place was like a war zone. B: Really? A: Honestly. There’s so much crime and literally hundreds of places have been condemned.',
          prompts: [{ q: 'Our conversation', rows: 4, track: true }] },
        { type: 'note', html: '<p>Интонация: подчёркнуто экспрессивные <i>Really?</i> и <i>Honestly.</i>, сильное ударение на extreme word. <i>Posh</i> — дорогой и престижный; <i>conspicuous</i> — бросающийся в глаза.</p>' }
      ] },

    { id: 's6', short: '6 Talk cities', title: 'Talk cities', meta: '68–75 min · SB p. 9 · Conversation practice ex. 11–12',
      blocks: [
        { type: 'lead', html: '<a href="https://miro.com/app/board/uXjVEbIZLS4=/?moveToWidget=3458764686882525823" target="_blank" rel="noopener">Miro · 07 Talk cities ↗</a>' },
        { type: 'ex', id: 'cp11', kind: 'open', src: 'SB p. 9 · ex. 11', title: 'Prepare: two cities you know', mode: 'Individually · 3 min',
          instr: 'Write the names of two cities you have been to. Note what they are like and at least one thing that happened to you there. Use as much language from this lesson as you can.',
          prompts: [{ q: 'City 1 · name, what it’s like, what happened', rows: 4, track: true }, { q: 'City 2 · name, what it’s like, what happened', rows: 4, track: true }] },
        { type: 'rule', title: 'Ex. 12 · Keep the conversation going', html: '<p>Work in pairs. Start with <em>Have you been to …?</em> Then: <em>What’s it like?</em> · <em>Really?</em> · <em>Yeah?</em> · <em>What happened?</em> Your partner backs up every claim with an example. Then change partners and do it again.</p>' },
        { type: 'note', html: '<p>Входная диагностика без оценки. Teacher’s Book советует повторить разговор 3–4 раза с новыми партнёрами — смешивайте залы. Слушайте по 4 критериям: диапазон лексики, точность, беглость, взаимодействие; 2 наблюдения на студента.</p>' }
      ] },

    { id: 's7', short: '7 Words', title: 'Lesson words', meta: 'Your word bank · tap a hidden translation to peek', blocks: [{ type: 'words' }] },

    { id: 's8', short: '8 Homework', title: 'Homework', meta: 'WB pp. 4, 6 · paragraph П1 · due Lesson 2',
      blocks: [
        { type: 'ex', id: 'wb41', kind: 'gap', select: true, src: 'WB p. 4 · ex. 1', title: 'City life', mode: 'Homework', instr: 'Complete the sentences with the words in the box.',
          bank: ['congested', 'run-down', 'spotless', 'sprawling', 'vibrant', 'well-run'],
          items: [
            { n: 1, t: 'At rush hour in Bangkok, thousands of motorcycles hit the streets. The centre’s really ___.', a: ['congested'] },
            { n: 2, t: 'There was no rubbish anywhere in the city centre. It was completely ___.', a: ['spotless'] },
            { n: 3, t: 'Istanbul is a big, ___ city. It seems to go on for miles and miles.', a: ['sprawling'] },
            { n: 4, t: 'The area is very ___, with many buildings in poor condition or completely derelict.', a: ['run-down'] },
            { n: 5, t: 'We have a very ___ bus service. Over 95% of all buses arrive on time.', a: ['well-run'] },
            { n: 6, t: 'Reykjavik’s nightlife is really ___, with lots of great bars and nightclubs.', a: ['vibrant'] }
          ] },
        { type: 'ex', id: 'wb42', kind: 'match', src: 'WB p. 4 · ex. 2', title: 'What are they talking about?', mode: 'Homework', instr: 'Match the descriptions (1–8) with the words and phrases (a–h).',
          items: ['The atmosphere is awful! I sometimes feel like I’m choking!', 'Pick that up! Do you want to get a fine?', 'They come on time, and everything runs really smoothly.', 'The crime rate’s quite high, so I worry about being attacked if I’m out after dark.', 'She’s always got to have the last word in fashion – the latest shoes, watch, smartphone … You name it.', 'Most of the buildings in the area are condemned, and there are plans to redevelop it.', 'We were just crawling along for two hours! So I was late for my meeting.', 'There are new bars and restaurants springing up in the area. It’s really livened up.'],
          opts: [['a', 'muggings and shootings'], ['b', 'slum'], ['c', 'network of buses and trams'], ['d', 'traffic'], ['e', 'smog and fumes'], ['f', 'buzz'], ['g', 'dropping litter'], ['h', 'conspicuous consumption']],
          key: ['e', 'g', 'c', 'a', 'h', 'b', 'd', 'f'] },
        { type: 'ex', id: 'wb43', kind: 'pick', src: 'WB p. 4 · ex. 3–4 · WB audio 1.1', title: 'Two students on one city', mode: 'Homework · WB audio',
          instr: 'Ex. 3: which city (a–c on WB p. 4) are they talking about? Ex. 4: who is more positive about each aspect: Aytak (A), Eileen (E), both (A+E) or neither?',
          items: [{ h: 'Ex. 3' }, { t: 'The city is …', opts: ['a', 'b', 'c'], a: 'c' }, { h: 'Ex. 4' },
            { n: 1, t: 'the climate', a: 'E' }, { n: 2, t: 'the city centre', a: 'A+E' }, { n: 3, t: 'the cleanliness', a: 'A' }, { n: 4, t: 'the local accent', a: 'neither' },
            { n: 5, t: 'the local people', a: 'A+E' }, { n: 6, t: 'the safety', a: 'A' }, { n: 7, t: 'the nightclubs', a: 'E' }],
          opts: ['A', 'E', 'A+E', 'neither'] },
        { type: 'ex', id: 'wb61', kind: 'open', src: 'WB p. 6 · ex. 1', title: 'Say it more strongly', mode: 'Homework', instr: 'Rewrite the sentences in a more emphatic way, using the words in brackets.',
          prompts: [{ q: '1 It was like the Arctic in there. (really, really) → The room was …', meter: true }, { q: '2 The view was panoramic, like being on top of the world. (miles and miles) → You could see …', meter: true }, { q: '3 The people are crazy drivers; it’s like being on a race track. (totally) → The way people drive …', meter: true }, { q: '4 It was very hot in the restaurant and I had to get out. (unbearably) → I had to leave …', meter: true }],
          modelLabel: 'Show answers',
          model: '<ul><li>1 The room was really, really cold / freezing.</li><li>2 You could see for miles and miles (around).</li><li>3 The way people drive is totally insane / crazy. It’s rather like being on a racetrack.</li><li>4 I had to leave the restaurant because it was unbearably hot (inside).</li></ul>' },
        { type: 'ex', id: 'wb62', kind: 'gap', select: true, src: 'WB p. 6 · ex. 2', title: 'Reinforcing and exemplifying', mode: 'Homework', instr: 'Complete the dialogues. You do not need to use all the words.',
          bank: ['spotless', 'literally', 'miles and miles', 'unbearably', 'completely', 'packed', 'totally', 'really, really', 'loads and loads', 'lively', 'absolutely'],
          items: [
            { t: '<b>A:</b> It looked like a bomb had hit it the next morning. <b>B:</b> Yeah? <b>A:</b> Honestly. There were ___ of empty cans and plastic plates all over the floor, and the place ___ stank of beer.', a: ['loads and loads', 'literally'] },
            { t: '<b>C:</b> The cinema was absolutely ___. <b>D:</b> Really? <b>C:</b> Seriously. The queue outside beforehand stretched for ___ – right round the block! It was ___ insane!', a: ['packed', 'miles and miles', 'totally'] },
            { t: '<b>E:</b> The hotel was ___ up-market. <b>F:</b> Oh, yes? <b>E:</b> Really. It was like the Ritz. The rooms were ___ huge, and the service was impeccable. The whole place was ___ too – everywhere was so clean it looked brand new.', a: ['really, really', 'absolutely', 'spotless'] }
          ] },
        { type: 'ex', id: 'wb63', kind: 'stress', src: 'WB p. 6 · ex. 3–4 · WB audio 1.2', title: 'Intonation for emphasis', mode: 'Homework',
          instr: 'Extreme words often carry the strongest stress. Tap the word with the strongest stress in each sentence, then listen to WB audio 1.2 and copy the intonation.',
          items: [{ t: 'I swear, the shop was filthy inside!', a: ['filthy'] }, { t: 'The woman in the baker’s was incredibly helpful.', a: ['incredibly'] }, { t: 'Honestly, the stench was unbearable!', a: ['unbearable'] }, { t: 'It was really, really great to see you again!', a: ['really'] }, { t: 'Seriously, he drove like crazy to get here!', a: ['crazy'] }, { t: 'Getting across town was a nightmare!', a: ['nightmare'] }] },
        { type: 'ex', id: 'p1', kind: 'open', src: 'П1 · written mark', title: 'Paragraph: life in a big city vs a small town', mode: '120–150 words · due Lesson 2',
          instr: 'Write one well-organised paragraph comparing life in a big city and in a small town. Start with a clear topic sentence, give examples, use at least five expressions from this lesson and finish with a concluding sentence.',
          prompts: [{ q: 'My paragraph', rows: 9, track: true, words: [120, 150] }],
          checklist: ['A clear topic sentence', 'Both places compared, with linkers (whereas, while, on the other hand)', 'At least one concrete example for each side', 'Five or more expressions from this lesson', 'A concluding sentence', '120–150 words'] },
        { type: 'rule', title: 'Reading for Lesson 2', html: '<p>Group A reads File 1 (SB p. 185), group B File 2 (p. 186), group C File 3 (p. 197). Learn the phrases in bold — you will tell the others about your city.</p>' },
        { type: 'note', html: '<p>П1 — первая письменная оценка модуля (критерии абзаца). WB-аудио 1.1 и 1.2 студенты слушают дома. Ключ к WB p. 6 ex. 3 в PDF потерял подчёркивания: ключевые слова отмечены по смыслу — сверьте с аудио 1.2. Распределите группы A/B/C для чтения к уроку 2.</p>' }
      ] },

    { id: 's9', short: '9 Reflect', title: 'Exit ticket and send', meta: '75–80 min',
      blocks: [
        { type: 'lead', html: '<a href="https://miro.com/app/board/uXjVEbIZLS4=/?moveToWidget=3458764686882525824" target="_blank" rel="noopener">Miro · 08 Exit ticket ↗</a>' },
        { type: 'lead', html: 'How confident do you feel now? Use the same scale as in our class agreement.' },
        { type: 'cando' },
        { type: 'submit' },
        { type: 'note', html: '<p>Exit ticket: шкала уверенности та же, что в Class agreement (фрейм 03), плюс одна фраза урока в фрейме 08. Попросите каждого нажать «Send my work» — в таблице появится строка с полным текстом ответов.</p>' }
      ] }
  ],

  cando: ['I can describe different aspects of cities and city life.', 'I can add interest to stories by emphasising and exaggerating.', 'I can reinforce and back up a point with an example.'],

  words: [
    ['dull', 'boring, nothing much happens', 'скучный, унылый', 'The suburb is safe but incredibly dull.'],
    ['well-run', 'organised and managed efficiently', 'хорошо организованный', 'Helsinki is a famously well-run city.'],
    ['congested', 'too full of traffic or people', 'перегруженный, забитый пробками', 'The centre gets really congested at rush hour.'],
    ['spotless', 'perfectly clean', 'безупречно чистый', 'The metro stations are absolutely spotless.'],
    ['chaotic', 'completely disorganised', 'хаотичный', 'The traffic there is totally chaotic.'],
    ['run-down', 'old and in bad condition', 'обветшалый, запущенный', 'The area around the station is a bit run-down.'],
    ['sprawling', 'spreading out over a large area', 'разросшийся, раскинувшийся', 'Moscow is a huge, sprawling city.'],
    ['compact', 'small, everything close together', 'компактный', 'Tallinn’s old town is compact and walkable.'],
    ['affluent', 'wealthy', 'зажиточный, богатый', 'It’s an affluent area full of posh cafés.'],
    ['vibrant', 'full of energy and life', 'яркий, полный жизни', 'Rubinstein Street is really vibrant at night.'],
    ['there’s a real buzz about the place', 'it has an exciting atmosphere', 'там кипит жизнь', 'Since the new galleries opened, there’s a real buzz about the place.'],
    ['new businesses are springing up', 'appearing quickly in large numbers', 'растут как грибы', 'Coffee shops are springing up all over Petrogradka.'],
    ['muggings and shootings', 'street robberies and gun attacks', 'грабежи и перестрелки', 'The area used to be famous for muggings.'],
    ['it all runs very smoothly', 'works without problems', 'всё работает как часы', 'The metro runs very smoothly, even at rush hour.'],
    ['choke on the fumes', 'can’t breathe because of exhaust gases', 'задыхаться от выхлопов', 'Cycling on the main road, you choke on the fumes.'],
    ['the cars just crawl along', 'move very slowly', 'машины еле ползут', 'On Friday evenings the cars just crawl along Nevsky.'],
    ['conspicuous consumption', 'buying expensive things to show wealth', 'демонстративное потребление', 'Luxury cars on every corner: pure conspicuous consumption.'],
    ['not a trace of litter', 'no rubbish at all', 'ни соринки', 'Singapore is spotless: not a trace of litter anywhere.'],
    ['should be condemned', 'officially declared unsafe to live in', 'признать аварийным', 'Half the old houses should be condemned and rebuilt.'],
    ['it took me by surprise', 'surprised me unexpectedly', 'застало меня врасплох', 'How friendly people were really took me by surprise.'],
    ['end up (in a place)', 'finally arrive somewhere you didn’t plan', 'в итоге оказаться', 'We ended up in a tiny bar at four in the morning.'],
    ['a bit of a pain', 'rather annoying', 'та ещё морока', 'Parking in the centre is a bit of a pain.'],
    ['it has its drawbacks', 'it has disadvantages', 'у него есть минусы', 'Living in the centre has its drawbacks: noise, mostly.'],
    ['don’t get me wrong', 'don’t misunderstand me', 'не пойми меня неправильно', 'Don’t get me wrong, I love Moscow, but it’s exhausting.'],
    ['settle down', 'start a quiet life in one place', 'осесть, остепениться', 'I’d like to travel first and settle down later.'],
    ['packed', 'completely full of people', 'битком набитый', 'The metro was absolutely packed.'],
    ['unbearably humid', 'so humid you can hardly stand it', 'невыносимо влажно', 'In August it gets unbearably humid.'],
    ['stink', 'smell very bad', 'вонять', 'The whole street stank of rubbish.'],
    ['posh', 'expensive and fashionable', 'фешенебельный, пафосный', 'We stayed in a really posh area near the river.'],
    ['a (music) scene', 'a lively group of people and places around an activity', 'музыкальная жизнь, тусовка', 'There’s a great indie music scene here.'],
    ['Honestly / Seriously / Literally', 'words that insist what you say is true', 'честно / серьёзно / буквально', 'Seriously. You literally couldn’t move.']
  ]
};
