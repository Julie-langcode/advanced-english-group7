/* Lesson 3 · Culture and society (group 7) (Outcomes Advanced, Unit 3, SB pp. 24–27; Grammar reference p. 168)
   Follows the lesson plan "Culture and Identity · Lesson 1" (lexical approach, Goh & Burns speaking cycle,
   essay strand for the written mark). 90-minute online lesson. */
window.LESSON = {
  id: 'l03-culture-and-society',
  number: 3,
  title: 'Culture and society',
  titleHtml: 'Culture and <em>society</em>',
  duration: '90 min · online',
  summary: 'Describe a society precisely, challenge a stereotype politely, and turn what you say into the thesis of an essay.',
  chips: ['Outcomes Advanced · Unit 3', 'SB pp. 24–27', 'Audio 7 on this page · script p. 199'],

  track: [
    ['hospitality', '\\bhospitab|\\bhospitality'], ['male-dominated', 'male[- ]dominated'], ['looked down on', '\\blook(ed|s|ing)? down on'],
    ['conform', '\\bconform'], ['plays a role', '\\bplay(s|ed|ing)? an? (\\w+ )?role'], ['bureaucratic', '\\bbureaucra'],
    ['family-centred', 'family[- ]cent(red|ered)'], ['revolves around', '\\brevolv\\w* around'], ['secular', '\\bsecular'],
    ['lose touch with', '\\b(lose|lost|losing) touch with'], ['live and let live', 'live and let live'], ['outlook', '\\boutlook'],
    ['social mobility', 'social mobility'], ['take the mickey', 'mickey'], ['reserved', '\\breserved'], ['superficial', '\\bsuperficial'],
    ['fit in', '\\bfit(s|ting)? in\\b'], ['outsider', '\\boutsider'], ['the flip side', 'flip side'],
    ['What … is', '\\bwhat (\\w+ ){1,5}(is|was) '], ['It’s … that', "\\bit(’|')?s (not )?(\\w+ ){1,4}that\\b|\\bit is (not )?(\\w+ ){1,4}that\\b"],
    ['The thing … is', '\\b(the|one) (main )?thing (that |i )?(\\w+ ){0,5}(is|was)\\b'], ['All … is / was', '\\ball (\\w+ ){1,4}(is|was) '],
    ['I wouldn’t go that far', "wouldn(’|')?t go that far"], ['overstatement / overgeneralisation', 'overstatement|overgenerali[sz]'],
    ['It’s not as though', 'not as though']
  ],

  sections: [
    { id: 'map', short: 'Plan', title: 'Lesson plan', meta: '90 minutes · online',
      blocks: [
        { type: 'map', items: [
          { t: '0–8 min', n: 'Warm-up: what would surprise a foreigner?', href: '#s1' },
          { t: '8–28 min', n: 'Society and culture: the chunks', href: '#s2' },
          { t: '28–38 min', n: 'Challenging overgeneralisations', href: '#s3' },
          { t: '38–53 min', n: 'Listening: three conversations', href: '#s4' },
          { t: '53–70 min', n: 'Speaking: say it twice', href: '#s6' },
          { t: '70–85 min', n: 'From opinion to essay thesis', href: '#s7' },
          { t: '85–90 min', n: 'Reflect, homework, send', href: '#s9' },
          { t: 'Board', n: 'Our Miro board ↗', href: 'miro' }
        ] },
        { type: 'rule', title: 'Today you will learn to', html: '<ul><li>discuss different aspects of culture and society with precise phrases;</li><li>politely challenge stereotypes and overgeneralisations;</li><li>turn a spoken opinion into the thesis of an essay.</li></ul>' },
        { type: 'note', html: '<p><b>Подготовка:</b> аудио track 7 (SB Unit 3) для демонстрации экрана со звуком; доска Miro с 4 зонами: Society and culture · Challenging · Your language. Два набора сессионных залов: пары для стадий 1–3, новые пары для второго раунда в стадии 6.</p><p><b>Оценки:</b> аудиторная работа (участие и новая лексика в стадиях 3, 6, 7); старт письменной работы по теме — эссе 250+ слов, сегодня тренируем критерий Task Response.</p>' }
      ] },

    { id: 's1', short: '1 Warm-up', title: 'What would surprise a foreigner?', meta: 'SB p. 24 · ex. 1 · 8 min',
      blocks: [
        { type: 'ex', id: 'warm', kind: 'open', src: 'Warm-up', title: 'A week in St Petersburg', mode: 'Whole class · 1 min',
          instr: 'If a foreigner spent a week in St Petersburg, what would surprise them most about how people here live?',
          prompts: [{ q: 'My answer (one or two sentences)', rows: 2, track: true }] },
        { type: 'ex', id: 'ex1', kind: 'open', src: 'SB p. 24 · ex. 1', title: 'The photo', mode: 'Pairs · 4 min',
          instr: 'Look at the photo on page 24. Who do you think the people are? Where was it taken? What is happening, and what might it say about the culture of the place? How important is it to maintain traditions? Why?',
          prompts: [{ q: 'Our ideas about the photo', rows: 3 }, { q: 'How important is it to maintain traditions? Why?', rows: 3, track: true }],
          model: '<p>Possible ideas: traditional costume, perhaps a wedding or a festival; Southern or Eastern Europe, North Africa or the Near East; someone is filming it on a phone — old traditions next to modern life.</p><p>Useful: <b>people have managed to maintain their traditions</b> · <b>people have lost touch with their traditions</b>.</p>' },
        { type: 'note', html: '<p><i>Good evening, everyone! Thumbs up in the chat if you can hear me.</i> Вопрос про иностранца — ответы в чат, 3–4 зачитать.</p><p>Переход: <i>Today and on Thursday we’re looking at culture and identity — how to talk about a society without falling into clichés.</i></p><p>Если пары быстро закончили: <i>How do you think the man on the right is feeling? Is there a tradition in your family you’d never give up? Who keeps traditions alive — the older generation, the state, or tourists?</i></p><p>Не исправляйте ошибки здесь. Запишите 2–3 фразы студентов и переформулируйте на Miro: <i>people keep traditions → people have managed to maintain their traditions</i>.</p>' }
      ] },

    { id: 's2', short: '2 Society', title: 'Society and culture', meta: 'SB p. 25 · ex. 2–3 · 20 min',
      blocks: [
        { type: 'ex', id: 'voc-rate', kind: 'open', src: 'SB p. 25 · ex. 2', title: 'Is it true of Russia?', mode: 'Individually, then pairs · 6 min',
          instr: 'Read the 12 descriptions in your book. Don’t check the words yet — guess from context. Which three are most true of Russia, and which three are least true? Compare with your partner: where do you disagree?',
          prompts: [{ q: 'Most true (numbers + why)', rows: 2, track: true }, { q: 'Least true (numbers + why)', rows: 2, track: true }] },
        { type: 'ex', id: 'voc-chunks', kind: 'gap', src: 'SB p. 25 · ex. 2', title: 'Complete the chunk', mode: 'Book closed · 4 min',
          instr: 'Learn the whole chunk, not just the word. Type the missing word(s).',
          items: [
            { n: 1, t: 'Hospitality is ___ to the culture.', a: ['central'] },
            { n: 2, t: 'Women are looked down ___ and there’s still a lot of discrimination.', a: ['on'] },
            { n: 3, t: 'It’s quite conservative, so if you don’t ___, life can be quite difficult.', a: ['conform'] },
            { n: 4, t: 'Religion ___ a powerful role in society.', a: [['plays', 'has']], note: 'play a key / major / minor role in' },
            { n: 5, t: 'Most people’s social life revolves ___ their extended family.', a: ['around'], note: 'not “about”' },
            { n: 6, t: 'It’s a very secular society and people have lost touch ___ their traditions.', a: ['with'], note: 'not “from”' },
            { n: 7, t: 'People don’t like to interfere — it’s very much live and ___ live.', a: ['let'] },
            { n: 8, t: 'Life is tough, but people generally have a very positive ___.', a: ['outlook'] },
            { n: 9, t: 'People are very aware of your background and there’s not much social ___.', a: ['mobility'] },
            { n: 10, t: 'People often take the mickey ___ ___ each other.', a: ['out', 'of'], note: 'spoken, BrE = tease, make fun of' },
            { n: 11, t: 'People are very reserved — you can only relate ___ them on a superficial level.', a: ['to'] },
            { n: 12, t: 'Everything’s very ___. You need a permit or ID card for everything.', a: ['bureaucratic'] }
          ] },
        { type: 'ex', id: 'voc-ccq', kind: 'pick', src: 'Check the meaning', title: 'True or false?', mode: 'Pairs · 3 min', opts: ['True', 'False'],
          instr: 'Decide if each statement is true or false.',
          items: [
            { n: 1, t: 'In a liberal society, people often interfere in your private life.', a: 'False', note: 'liberal here = tolerant, “live and let live”' },
            { n: 2, t: 'In a secular society, religion plays a big part in public life.', a: 'False' },
            { n: 3, t: 'If you conform, you behave the way people expect you to.', a: 'True' },
            { n: 4, t: 'When people take the mickey out of each other, they are usually being friendly.', a: 'True', note: 'friendly teasing — not for essays' },
            { n: 5, t: 'Where there is high social mobility, a poor child can hardly ever become rich.', a: 'False' },
            { n: 6, t: 'If people are reserved, you usually become close friends quickly.', a: 'False' },
            { n: 7, t: 'If women are looked down on, they are treated as equals.', a: 'False', note: 'look down on ↔ look up to' }
          ] },
        { type: 'ex', id: 'ex3', kind: 'open', src: 'SB p. 25 · ex. 3', title: 'Good for a country? The flip side', mode: 'Pairs · 6 min',
          instr: 'Choose four descriptions. Is each one good for a country? Give one flip side for each. Use <b>On the plus side, …</b> / <b>The flip side is that …</b>',
          example: 'A family-centred culture sounds lovely. <u>The flip side is that</u> there’s a lot of pressure to conform and you can’t really escape your relatives.',
          prompts: [{ q: 'My four descriptions and their flip sides', rows: 5, track: true }],
          model: '<ul><li><b>hospitality</b> → you can feel obliged to eat and drink more than you want</li><li><b>liberal</b> → people may feel isolated; nobody steps in</li><li><b>reserved</b> → more privacy, but it’s harder to make friends</li><li><b>secular</b> → more freedom, but fewer shared rituals</li><li><b>bureaucratic</b> → slow, but predictable and fair</li></ul>' },
        { type: 'note', html: '<p>Test–teach–test: сначала оценка «true of Russia», потом чанки, потом flip side. Записывайте на Miro всегда целый чанк. Произношение: bureau<b>CRA</b>tic, hospi<b>TA</b>lity, <b>SE</b>cular.</p><p>CCQ: <i>Would a guest leave hungry? Is it easy to be different? Do people interfere in others’ lives? Would you write ‘take the mickey’ in an essay?</i> (No — <i>tease, make fun of</i>.)</p><p>Чувствительные пункты 2 и 4: <i>You can talk about any country you know.</i></p><p>Переход: <i>Some of you said ‘Russians are reserved’. Is that true of all of us?</i></p>' }
      ] },

    { id: 's3', short: '3 Challenge', title: 'Challenging overgeneralisations', meta: 'SB p. 26 · Developing conversations · 10 min',
      blocks: [
        { type: 'rule', title: 'Four ways to challenge politely', html: '<ul><li><em>Soften:</em> I wouldn’t go that far. · That’s a bit harsh / of an overstatement, isn’t it?</li><li><em>Question it:</em> What? Everyone? / All women? · It’s not as though we’re all like that.</li><li><em>Show it’s absurd:</em> That can’t be true! It’s like saying all Dutch people are tall! · Just because you’re Brazilian, it doesn’t mean you like football.</li><li><em>Give a counter-example:</em> There must be loads of British people who don’t drink tea!</li></ul><p>Say them with a smile in your voice; let <i>isn’t it?</i> go <b>down</b>.</p>' },
        { type: 'ex', id: 'ch-fn', kind: 'pick', src: 'SB p. 26 · box', title: 'What does each phrase do?', mode: 'Individually · 2 min', opts: ['soften', 'question', 'absurd', 'counter-example'],
          items: [
            { n: 1, t: 'I wouldn’t go that far.', a: 'soften' },
            { n: 2, t: 'What? All men?', a: 'question' },
            { n: 3, t: 'It’s like saying all Italians eat ice cream!', a: 'absurd' },
            { n: 4, t: 'There must be millions of Americans who never go to McDonald’s.', a: 'counter-example' },
            { n: 5, t: 'That’s a bit of a stereotype, isn’t it?', a: 'soften' },
            { n: 6, t: 'Just because you’re a man, it doesn’t mean you can’t listen.', a: 'absurd' }
          ] },
        { type: 'ex', id: 'ch1', kind: 'open', src: 'SB p. 26 · ex. 1', title: 'Respond to the overgeneralisation', mode: 'Pairs · 5 min',
          instr: 'Take turns: one says the statement, the other challenges it. Don’t use the same phrase twice. Write your best response to each.',
          prompts: [
            { q: '1 Men are no good at listening.', track: true }, { q: '2 Women are terrible drivers.', track: true },
            { q: '3 Young people these days have no respect.', track: true }, { q: '4 The people from the South are more friendly.', track: true },
            { q: '5 The rich are only interested in themselves.', track: true }, { q: '6 People who are on benefits are just lazy.', track: true },
            { q: '7 The British are such hypocrites!', track: true }, { q: '8 How come you speak my language? You’re British!', track: true }
          ],
          model: '<p><b>1</b> What? All men? · Come on! It’s not as though all men are like that. · That can’t be true! It’s like saying women talk too much! · Just because you’re a man, it doesn’t mean you can’t be good at listening. · I wouldn’t go that far. There must be loads of men who are good listeners.</p><p><i>hypocrite</i> = лицемер; <i>on benefits</i> = на пособии.</p>' },
        { type: 'rule', title: 'In an essay, the same move sounds like this', html: '<p>This is something of an overgeneralisation. · It would be misleading to claim that all … · This is not to say that … · Admittedly, …; however, …</p>' },
        { type: 'note', html: '<p>Open pairs: учитель говорит, студент оспаривает: <i>Philology students never get proper jobs. / People in Petersburg are all snobs. / Nobody reads books any more.</i></p><p>Для пунктов 2 и 6: <i>These are NOT my opinions — they’re there for you to argue against.</i> Интонация: <i>What? EVERYONE?</i></p><p>Переход: <i>Now let’s listen to people doing exactly this.</i></p>' }
      ] },

    { id: 's4', short: '4 Listening', title: 'Three conversations', meta: 'SB p. 27 · ex. 3–5 · audio track 7 · 15 min',
      blocks: [
        { type: 'rule', title: 'How we listen', html: '<p>First time: just three things for each conversation — <em>what part of culture</em>, <em>whose culture</em>, <em>how they feel</em>. Notes only. Second time: the true / false / not mentioned task.</p>' },
        { type: 'audio', src: '../../assets/audio/u03-track07-society-and-culture.mp3', src_label: 'Audio 7', title: 'Three conversations about society and culture',
          marks: [['Conversation 1', 3], ['Conversation 2', 107], ['Conversation 3', 173]],
          note: 'Listen once for the gist (ex. 3), then again for the details (ex. 4). Use ↺ 5 s to replay a phrase. Headphones on, please.' },
        { type: 'ex', id: 'lis3', kind: 'open', src: 'SB p. 27 · ex. 3', title: 'First listening: the gist', mode: 'Individually, then pairs',
          instr: 'For each conversation: 1 What aspect of culture? 2 Are they talking about their own culture? 3 What feelings are expressed?',
          prompts: [{ q: 'Conversation 1 (Chrissy and Zoe)', rows: 2 }, { q: 'Conversation 2', rows: 2 }, { q: 'Conversation 3', rows: 2 }],
          modelLabel: 'Show answers',
          model: '<ul><li><b>1</b> People and how they interact: hypocrisy, taking the mickey, polite but superficial. British culture, seen through the eyes of Mehdi, who is from somewhere else. Negative: Mehdi can’t fit in.</li><li><b>2</b> Bureaucracy and people’s attitudes to it — where they live now, not their own culture. Negative: <i>drives me insane, frustrates me</i>.</li><li><b>3</b> Hospitality, traditions, women’s roles — a place both speakers visited. First speaker positive (amazing hospitality, they’ve maintained their traditions); second more critical (hard if you don’t conform, women are looked down on).</li></ul>' },
        { type: 'ex', id: 'lis4', kind: 'pick', src: 'SB p. 27 · ex. 4', title: 'Second listening: true, false or not mentioned?', mode: 'Individually, then justify in pairs', opts: ['T', 'F', 'N'],
          instr: 'Listen again. Be ready to justify each answer with words from the recording.',
          items: [
            { n: '1a', t: 'Zoe’s partner is from a different country.', a: 'T', note: 'sick of our British hypocrisy; more formal where he’s from' },
            { n: '1b', t: 'The people Mehdi works with are making fun of him.', a: 'N', note: 'there are comments, but we don’t know they’re about him' },
            { n: '1c', t: 'Mehdi wants to change jobs.', a: 'N', note: 'he’s a bit down — nothing about changing jobs' },
            { n: '2a', t: 'They don’t have enough admin people.', a: 'F', note: 'it wasn’t that they were short-staffed' },
            { n: '2b', t: 'People are happy to queue.', a: 'F', note: 'funny about it, in that dry, understated way' },
            { n: '3a', t: 'The speaker stayed with friends who live there.', a: 'N', note: 'invited into people’s homes — not where they stayed' },
            { n: '3b', t: 'Most women don’t work.', a: 'T', note: 'most take on the traditional home-building role' },
            { n: '3c', t: 'The government is encouraging changes in attitudes to women.', a: 'F', note: 'it’s the women pushing the government' }
          ] },
        { type: 'ex', id: 'lis-chunks', kind: 'gap', src: 'Audio script p. 199', title: 'Chunks worth stealing', mode: 'Open the script · 4 min',
          instr: 'Complete the chunks from the conversations. Then highlight five you’d like to use yourself.',
          items: [
            { n: 1, t: 'Apparently he’s ___ of our British hypocrisy!', a: ['sick'] },
            { n: 2, t: 'It’s not him — and I try not to take it ___.', a: ['personally'] },
            { n: 3, t: 'He’s not just ___ it? People sometimes just take the mickey.', a: ['misinterpreting'] },
            { n: 4, t: 'The bottom ___ is that he’s just not like that and it makes it difficult to ___ in.', a: ['line', 'fit'] },
            { n: 5, t: 'He feels he’s always going to be an ___.', a: ['outsider'] },
            { n: 6, t: 'The bureaucracy here! It just drives me ___.', a: ['insane'] },
            { n: 7, t: 'It wasn’t that they were short-___.', a: ['staffed'] },
            { n: 8, t: 'People were very funny about it, in that dry, ___ way they have here.', a: ['understated'] }
          ] },
        { type: 'ex', id: 'ex5', kind: 'open', src: 'SB p. 27 · ex. 5', title: 'Talk about it', mode: 'If there’s time · groups',
          instr: 'Have you ever misinterpreted something, or been misinterpreted? What is your worst experience of bureaucracy? Can a government change aspects of culture?',
          prompts: [{ q: 'Notes', rows: 3, track: true }] },
        { type: 'note', html: '<p>Запись есть прямо на странице: можно включить её у себя и демонстрировать экран со звуком или попросить студентов слушать самостоятельно в наушниках (в парах на второй раз удобно). Перед запуском: <i>Can everyone hear the audio clearly?</i> Первое прослушивание — не тест: <i>What did you catch? Anything at all.</i></p><p>Второе: <i>Why ‘not mentioned’ and not ‘false’? What exactly did she say?</i> При разногласиях проиграйте только нужный отрывок.</p><p>Ex. 5 — только если есть время; иначе вопрос про TV, education, money, travel переносится в стадию 6.</p><p>Переход: <i>Zoe didn’t say ‘He hates the comments’. She said ‘What he hates is all the bitchy comments’. Why?</i></p>' }
      ] },

    { id: 's6', short: '5 Speaking', title: 'Say it twice', meta: 'Planning → round 1 → language focus → round 2 · 12 min',
      blocks: [
        { type: 'ex', id: 'sp-plan', kind: 'open', src: 'Planning', title: 'What I value, what worries me', mode: 'Individually · 3 min',
          instr: 'Think about Russia, St Petersburg or a country you know well. Complete at least three frames — key words only, not full text.',
          prompts: [
            { q: 'One thing I really value about our culture is …', track: true },
            { q: 'What frustrates me most is …', track: true },
            { q: 'What concerns me is that people are …', track: true },
            { q: 'It’s not … that needs to change, it’s …', track: true },
            { q: 'One thing that gives me hope is …', track: true }
          ] },
        { type: 'rule', title: 'Round 1 · pairs · 4 min', html: '<p><em>A</em> talks, <em>B</em> listens and challenges at least once with a phrase from section 3. Then swap.</p>' },
        { type: 'rule', title: 'Round 2 · new partner · 3 min', html: '<p>Same topic, new partner. This time use <em>two chunks from the board</em> and <em>one from the listening</em>. Then discuss: which has the biggest effect on a culture — TV and film, education, money, or travel and immigration?</p>' },
        { type: 'ex', id: 'sp-r2', kind: 'open', src: 'After round 2', title: 'What changed the second time?', mode: 'Individually · 1 min',
          prompts: [{ q: 'The best sentence I said in round 2', rows: 2, track: true }, { q: 'What was easier or better the second time?', rows: 2 }] },
        { type: 'note', html: '<p>Цикл Goh & Burns: задание → фокус на языке → повтор. В первом раунде не вмешивайтесь, записывайте фразы дословно.</p><p>Между раундами на Miro 3–4 фразы студентов: две удачные, две с пропуском или ошибкой: <i>Our culture revolves about the family. → around</i>; <i>People have lost ___ with their traditions. → touch</i>.</p><p>Если разговор затихает: <i>Why do you think that is? Is that true for your parents’ generation too? What would a foreigner find hardest about that?</i></p>' }
      ] },

    { id: 's7', short: '6 Essay', title: 'From opinion to essay thesis', meta: 'Written mark · Task Response · 7 min',
      blocks: [
        { type: 'rule', title: 'Our essay question for this topic', html: '<p><em>Some people believe that globalisation is making national cultures disappear. Others argue that it makes them stronger. Discuss both views and give your own opinion.</em> (250+ words)</p>' },
        { type: 'rule', title: 'From what you say to what you write', html: '<ol><li><em>Spoken opinion:</em> What worries me is that young people are losing touch with their traditions.</li><li><em>Paraphrase of the task:</em> It is often claimed that global culture is gradually erasing national traditions, while others maintain that it encourages people to value their roots.</li><li><em>Thesis (cleft + hedging):</em> What this essay will argue is that, although globalisation has weakened some traditions, it has made people more aware of their cultural identity.</li></ol><p>For full marks in <em>Task Response</em>: the task is fully paraphrased and the introduction ends with a clear thesis that shows your position.</p>' },
        { type: 'ex', id: 'thesis', kind: 'open', src: 'Essay · introduction', title: 'Your paraphrase and thesis', mode: 'Individually · 3 min · post it on Miro too',
          instr: 'Write two sentences: a paraphrase of the essay question and your thesis. Use at least two chunks from today.',
          prompts: [{ q: 'Paraphrase of the task', rows: 2, track: true }, { q: 'My thesis statement', rows: 2, track: true }],
          checklist: ['I didn’t copy the words of the task', 'Both views are mentioned', 'My own position is clear', 'At least two chunks from today', 'No informal phrases (take the mickey, drives me insane)'] },
        { type: 'note', html: '<p><i>Could you use ‘take the mickey’ or ‘drives me insane’ here? Why not?</i></p><p>Разберите анонимно две работы: одну сильную, одну с типичной проблемой. Комментарии: <i>Very clear position — I know exactly what this essay will argue.</i> / <i>Your thesis just repeats the question. What’s YOUR view?</i> / <i>You’ve copied ‘national cultures disappear’ from the task — find another way to say it.</i></p>' }
      ] },

    { id: 's8', short: '7 Words', title: 'Lesson words', meta: 'Society and culture · challenging · from the listening', blocks: [{ type: 'words' }] },

    { id: 's9', short: '8 Homework', title: 'Homework and reflection', meta: 'Due Lesson 4 · Objects and identity',
      blocks: [
        { type: 'rule', title: 'For next lesson', html: '<ol><li><em>Vocabulary:</em> write 10 chunks from today in your notebook, each with your own example about Russia or a country you’ve been to.</li><li><em>Writing:</em> the introduction to the essay below. We continue with the argument next lesson.</li></ol>' },
        { type: 'ex', id: 'hw-intro', kind: 'open', src: 'Written work · essay', title: 'Introduction: globalisation and national cultures', mode: '50–70 words · due Lesson 4',
          instr: 'Write the introduction: a paraphrase of the task and a clear thesis. Use at least three chunks from this lesson and one cleft sentence.',
          prompts: [{ q: 'My introduction', rows: 6, track: true, words: [50, 70] }],
          checklist: ['The task is paraphrased, not copied', 'Both views are mentioned', 'A clear thesis with my position', 'At least three chunks from this lesson', 'One cleft sentence', '50–70 words'] },
        { type: 'ex', id: 'reflect', kind: 'open', src: 'Reflection', title: 'Before you go', mode: '1 min',
          prompts: [{ q: 'One chunk I used today for the first time', rows: 1 }, { q: 'One chunk I wanted to use but didn’t', rows: 1 }] },
        { type: 'cando' }, { type: 'submit' },
        { type: 'note', html: '<p>Сохраните ответы «хотел использовать, но не смог» — готовая разминка для урока 4. Попросите каждого нажать «Send my work».</p><p><i>The most important homework is the introduction — we’ll work on it next lesson, so please don’t skip it. Great work today, everyone!</i></p>' }
      ] }
  ],

  cando: ['I can describe a society precisely with phrases like “revolves around” and “lost touch with”.', 'I can challenge a stereotype politely.', 'I can write a paraphrase of an essay task and a clear thesis.'],

  words: [
    ['hospitality is central to the culture', 'guests are always welcomed warmly', 'гостеприимство — основа культуры', 'Hospitality is central to the culture — no guest leaves hungry.'],
    ['male-dominated', 'controlled by men', 'с доминированием мужчин', 'Politics there is still very male-dominated.'],
    ['be looked down on', 'be treated as less important', 'смотреть свысока (на кого-то)', 'Manual workers are often looked down on.'],
    ['conform (to)', 'behave as people expect', 'подчиняться нормам', 'If you don’t conform, life can be difficult.'],
    ['play a powerful role in', 'have a big influence on', 'играть важную роль в', 'Religion plays a powerful role in society.'],
    ['bureaucratic', 'with too many rules and documents', 'бюрократический', 'You need a permit for everything — it’s very bureaucratic.'],
    ['revolve around', 'have something as the centre', 'вращаться вокруг', 'Social life revolves around the extended family.'],
    ['secular', 'not religious', 'светский', 'It’s a largely secular society.'],
    ['lose touch with (traditions)', 'stop being connected to', 'утратить связь с', 'Many people have lost touch with their traditions.'],
    ['live and let live', 'accept other people’s way of life', 'живи и дай жить другим', 'People don’t interfere — it’s very much live and let live.'],
    ['a positive outlook', 'an optimistic attitude to life', 'оптимистичный взгляд на жизнь', 'Life is tough, but people have a positive outlook.'],
    ['social mobility', 'moving to a higher social class', 'социальная мобильность', 'There’s not much social mobility.'],
    ['take the mickey (out of)', 'tease (informal, BrE)', 'подшучивать, подкалывать', 'People take the mickey out of each other all the time.'],
    ['relate to sb on a superficial level', 'have only a shallow connection', 'общаться поверхностно', 'You can only relate to them on a superficial level.'],
    ['the flip side', 'the negative side of something good', 'обратная сторона', 'The flip side is that there’s a lot of pressure to conform.'],
    ['I wouldn’t go that far', 'I don’t fully agree', 'я бы так не сказал', 'Everyone here is rude? I wouldn’t go that far.'],
    ['an overstatement / overgeneralisation', 'saying too much / about everyone', 'преувеличение / обобщение', 'That’s a bit of an overstatement, isn’t it?'],
    ['fit in', 'feel accepted in a group', 'вписаться, стать своим', 'It makes it difficult for him to fit in.'],
    ['an outsider', 'someone who doesn’t belong', 'чужак', 'He feels he’s always going to be an outsider.'],
    ['take it personally', 'feel it is criticism of you', 'принимать на свой счёт', 'I try not to take it personally.'],
    ['drive sb insane', 'make sb very annoyed', 'сводить с ума', 'The bureaucracy here drives me insane.'],
    ['What really frustrates me is …', 'cleft: emphasises the feeling', 'больше всего меня раздражает …', 'What really frustrates me is the lack of social mobility.']
  ]
};
