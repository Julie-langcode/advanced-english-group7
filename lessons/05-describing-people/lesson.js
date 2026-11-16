/* Lesson 5 · Relationships: people (Outcomes Advanced, Unit 2, SB pp. 14–17)
   First lesson of the topic Relationships. Follows the lesson plan "Relationships · Lesson 1":
   school reunion → describing people → chunks about character → giving your impression → listening (three conversations)
   → conversation practice with task repetition → project launch → retrieval and homework. 90-minute online lesson. */
window.LESSON = {
  id: 'l05-describing-people',
  number: 5,
  title: 'Relationships: people',
  titleHtml: 'Relationships: <em>people</em>',
  duration: '90 min · online',
  summary: 'Describe the people you know — and the ones you’ve only seen on screen. Learn the words and chunks people really use to talk about character, share your impressions, and start your Relationships project.',
  chips: ['Outcomes Advanced · Unit 2', 'SB pp. 14–17', 'Project launch'],

  track: [
    ['back down', '\\bback(s|ed|ing)? down\\b'], ['make up your mind', '\\bma(de|ke|kes|king) up (his|her|my|your|their|our) mind'],
    ['go behind sb’s back', 'behind (his|her|my|your|their|our) back'], ['undermine', '\\bundermin'],
    ['take no notice of', 'no notice of'], ['stick to your principles', '\\bst(ick|icks|uck|icking) to (his|her|my|your|their|our) principles'],
    ['stand up for', '\\bst(and|ands|ood|anding) up for'], ['take sth in your stride', 'in (his|her|my|your|their|our) stride'],
    ['shy and retiring', 'shy and retiring'], ['the centre of attention', 'centre of attention'], ['lighten up', '\\blighten(s|ed)? up'],
    ['be prone to', '\\bprone to'], ['suck up to', '\\bsuck(s|ed|ing)? up to'], ['get ahead', '\\b(get|gets|got|getting) ahead'],
    ['a stubborn streak', 'stubborn streak'], ['a slacker', '\\bslacker'], ['a snob', '\\bsnob'], ['cynical', '\\bcynic'],
    ['principled', '\\bprincipled'], ['arrogant / arrogance', '\\barrogan'], ['incompetent', '\\bincompeten'],
    ['seems', '\\bseems?\\b'], ['strikes me as', '\\bstri(kes|ke|kes) (me|you|him|her|us|them) as'], ['comes across as', '\\bc(omes|ame|ome) across as'],
    ['I get the impression', 'the (impression|feeling)'], ['hit it off', '\\bhit it off'], ['keep yourself to yourself', '\\b(himself|herself|themselves|myself|ourselves) to (himself|herself|themselves|myself|ourselves)'],
    ['go over sb’s head', 'over (his|her|my|your|their) head'], ['drag sb down', '\\bdrag(s|ged|ging)? .{0,25}down']
  ],

  sections: [
    { id: 'map', short: 'Plan', title: 'Lesson plan', meta: '90 minutes · online',
      blocks: [
        { type: 'map', items: [
          { t: '0–8 min', n: 'Warm-up: the school reunion', href: '#s1' },
          { t: '8–18 min', n: 'Describing people', href: '#s2' },
          { t: '18–33 min', n: 'Chunks about character', href: '#s3' },
          { t: '33–43 min', n: 'Giving your impression', href: '#s4' },
          { t: '43–58 min', n: 'Listening: three conversations', href: '#s5' },
          { t: '58–72 min', n: 'Conversation practice', href: '#s6' },
          { t: '72–84 min', n: 'Your Relationships project', href: '#s7' },
          { t: '84–90 min', n: 'Name the chunk + homework', href: '#s8' },
          { t: 'Board', n: 'Our Miro board ↗', href: 'miro' }
        ] },
        { type: 'rule', title: 'Today you will learn to', html: '<ul><li>talk about people you know;</li><li>describe character with the words and chunks people really use;</li><li>give your impression of people you don’t know well;</li><li>follow three real conversations about people;</li><li>choose your project for the topic Relationships.</li></ul>' },
        { type: 'note', html: '<p><b>Подготовка:</b> фото SB pp. 14–15 на экран; фреймы Miro (слова ex. 1 и 3 · рамки Giving your impression · зона Your language · таблица проектов: команда · тип · тема); Track 4 для демонстрации экрана со звуком; два состава сессионных залов (пары) для стадии 6.</p><p><b>Оценки:</b> устный опрос — Conversation practice (стадия 6); самостоятельная работа — проект по теме.</p>' }
      ] },

    { id: 's1', short: '1 Warm-up', title: 'The school reunion', meta: 'SB pp. 14–15 · Speaking ex. 1 · 8 min',
      blocks: [
        { type: 'lead', html: 'Look at the photo on pages 14–15. What do you think is going on? What usually happens at a school reunion?' },
        { type: 'ex', id: 'reunion', kind: 'open', src: 'SB p. 15 · ex. 1', title: 'Old classmates', mode: 'Groups of 4–5 · 4 min',
          instr: 'Discuss the questions. No need to write much — key words are enough.',
          prompts: [
            { q: 'Would you want to go to a school reunion — now or some time in the future? Why? / Why not?', track: true },
            { q: 'Do you know anyone who turned out to be successful after doing badly at school — or the other way round?', track: true },
            { q: 'Do you know anyone whose character has changed? In what ways? Why?', track: true },
            { q: 'How have your friendships changed over time? Why?', track: true }
          ],
          model: '<p>Thomas Edison, Benjamin Franklin, Bill Gates and Albert Einstein all left school or college early before becoming successful.</p><p><i>I don’t think I’d go — I’ve kept in touch with the people who matter. · My best friend at school was really quiet, but now she’s the life and soul of the party.</i></p>' },
        { type: 'note', html: '<p><i>Good evening, everyone! We’re starting a new topic today — Relationships. Have a look at the photo on pages 14 and 15. What do you think is going on here?</i></p><p>Live listening (2 мин, TB): напишите в чат имена трёх бывших одноклассников — <i>What would you like to know about them, then and now?</i></p><p>После обсуждения — 1–2 фразы студентов на Miro в улучшенном виде.</p><p>Мостик: <i>When we talk about old classmates, we usually end up describing their character. Let’s collect some useful words for that.</i></p>' }
      ] },

    { id: 's2', short: '2 People', title: 'Describing people', meta: 'SB p. 16 · ex. 1–2 · 10 min',
      blocks: [
        { type: 'ex', id: 'dp1', kind: 'pick', src: 'SB p. 16 · ex. 1', title: 'Choose the correct option', mode: 'Individually, then pairs · 5 min',
          instr: 'Look at the word after the gap — and before it. Do you need an adjective or a noun?',
          items: [
            { n: 1, t: 'He’s a complete ___. He only talks to people who went to the ‘right’ school.', opts: ['snobbish', 'snob'], a: 'snob' },
            { n: 2, t: 'He’s so ___. He thinks everyone’s got an agenda.', opts: ['cynical', 'cynic'], a: 'cynical' },
            { n: 3, t: 'She has strong ___. I completely trust her.', opts: ['principled', 'principles'], a: 'principles' },
            { n: 4, t: 'He’s ever so ___. He makes everyone feel special.', opts: ['charming', 'charm'], a: 'charming' },
            { n: 5, t: 'She’s ___ bitchy. She can be quite nasty about people.', opts: ['a real', 'really'], a: 'really' },
            { n: 6, t: 'She’s a bit of ___. She really makes life difficult.', opts: ['painful', 'a pain'], a: 'a pain' },
            { n: 7, t: 'It’s his sheer ___ that I hate. He thinks he knows it all.', opts: ['arrogant', 'arrogance'], a: 'arrogance' },
            { n: 8, t: 'She’s completely ___. She’s really messed things up.', opts: ['incompetent', 'incompetence'], a: 'incompetent' },
            { n: 9, t: 'He’s got a real ___ streak. You won’t get him to change his mind.', opts: ['stubborn', 'stubbornness'], a: 'stubborn' },
            { n: 10, t: 'She’s incredibly ___. We always seem to end up having quite heavy conversations.', opts: ['intense', 'intensity'], a: 'intense' },
            { n: 11, t: 'She’s very ___ to listen. I’m sure you’ll get a good response.', opts: ['willing', 'wilful'], a: 'willing' },
            { n: 12, t: 'He’s a right ___. He just seems to lie around all day.', opts: ['laid-back', 'slacker'], a: 'slacker' }
          ] },
        { type: 'ex', id: 'dp2', kind: 'open', src: 'SB p. 16 · ex. 2', title: 'What would they say?', mode: 'Pairs · 4 min',
          instr: 'Write a typical thing three of these people might say. Read one out — can the group guess the word?',
          example: '<b>a snob:</b> <i>I couldn’t possibly stay in a cheap hotel like that.</i>',
          prompts: [{ q: 'Person 1 — what they say', track: true }, { q: 'Person 2 — what they say', track: true }, { q: 'Person 3 — what they say', track: true }],
          model: '<p><b>a cynic:</b> They don’t really want to help people — they’re just doing it for the money.<br><b>principled:</b> I wouldn’t do it no matter what you paid me.<br><b>charming:</b> But you can’t have children that age — you look far too young!<br><b>a pain:</b> I can’t do it now — you’ll have to come back later.<br><b>arrogant:</b> Listen, you know I’m right because I’m always right.<br><b>stubborn:</b> I don’t care what you say — I’m not doing it.<br><b>intense:</b> Yes, but what does it all mean? What’s the meaning of life?<br><b>willing:</b> If you ever want to talk it over, please just ask.<br><b>laid-back:</b> I’ll do it later — it’ll be fine. Don’t worry.</p>' },
        { type: 'note', html: '<p>Первый пункт вместе: <i>Snobbish or snob — which one fits after “a complete”? Why?</i></p><p>Ударение (TB): <i>CYNical, PRINcipled, ARrogant, inCOMpetent, STUBborn, inTENSE</i> — быстро проговорить хором.</p><p>CCQ (TB): <i>Which word in item 2 is an adjective — how do you know? (‑al) · What’s the opposite of easy-going? (stubborn) · Is a slacker positive or negative? (negative — lazy, idle)</i></p><p>Мостик: <i>Single words are useful, but people usually describe character with longer phrases. Let’s look at some.</i></p>' }
      ] },

    { id: 's3', short: '3 Chunks', title: 'Chunks about character', meta: 'SB pp. 16–17 · ex. 3–5 · 15 min',
      blocks: [
        { type: 'lead', html: 'Once he’s <b>made up his mind</b>, he won’t <b>back down</b> even if he’s in the wrong. — <i>mind</i> goes with <i>make up</i>; <i>back down</i> is a phrasal verb. What do <i>won’t</i> and <i>even if he’s in the wrong</i> tell you about its meaning?' },
        { type: 'ex', id: 'ch3', kind: 'gap', select: true, src: 'SB p. 16 · ex. 3', title: 'Complete the chunks', mode: 'Individually, then pairs · 6 min',
          instr: 'Each sentence takes one pair of words from the box. Then underline the <b>whole phrase</b> each word is part of — that’s the bit you’ll actually use.',
          bank: ['back', 'boss', 'bothered', 'centre', 'easiest', 'exaggerating', 'get ahead', 'lighten up', 'notice', 'panics', 'principles', 'prone', 'remind', 'seriously', 'shy', 'stands up for', 'stride', 'undermine'],
          items: [
            { n: 2, t: 'She’s constantly going behind my ___ and saying things to ___ me.', a: ['back', 'undermine'] },
            { n: 3, t: 'He never seems that ___ by criticism or bitchy comments. He just takes no ___ of it all.', a: ['bothered', 'notice'] },
            { n: 4, t: 'She ___ what she believes in and she sticks to her ___. She’s not easily bullied.', a: ['stands up for', 'principles'] },
            { n: 5, t: 'He’s one of those people who never ___. He just takes everything in his ___.', a: ['panics', 'stride'] },
            { n: 6, t: 'She’s not exactly ___ and retiring. She loves to be the ___ of attention.', a: ['shy', 'centre'] },
            { n: 7, t: 'He’s not the ___ person to talk to. I wish he’d ___ a little.', a: ['easiest', 'lighten up'] },
            { n: 8, t: 'You’ll need to ___ her about it. She is ___ to forgetting things like that.', a: ['remind', 'prone'] },
            { n: 9, t: 'He’s a bit prone to ___, so I wouldn’t take what he said too ___.', a: ['exaggerating', 'seriously'] },
            { n: 10, t: 'She’s the kind of person who’s constantly sucking up to the ___ in order to ___.', a: ['boss', 'get ahead'] }
          ] },
        { type: 'ex', id: 'ch-q', kind: 'pick', src: 'Language check', title: 'Positive or negative?', mode: 'Whole class · 2 min', opts: ['positive', 'negative', 'it depends'],
          items: [
            { n: 1, t: 'She sucks up to the boss.', a: 'negative', note: 'tries to please people in power — a negative word' },
            { n: 2, t: 'He takes everything in his stride.', a: 'positive', note: 'deals with problems calmly' },
            { n: 3, t: 'She sticks to her principles.', a: 'positive' },
            { n: 4, t: 'He’s prone to exaggerating.', a: 'negative', note: 'prone to = tends to (usually something bad)' },
            { n: 5, t: 'She loves to be the centre of attention.', a: 'it depends' },
            { n: 6, t: 'He takes no notice of criticism.', a: 'it depends', note: 'thick-skinned — or just not listening?' }
          ] },
        { type: 'ex', id: 'ch4', kind: 'open', src: 'SB p. 17 · ex. 4', title: 'One word for each person', mode: 'Pairs · 3 min',
          instr: 'Think of an adjective or a noun to describe each of the people in exercise 3.',
          prompts: [{ q: 'My words for sentences 1–10', rows: 3, track: true }],
          model: '<p>1 stubborn · 2 bitchy · 3 self-confident / thick-skinned / laid-back · 4 principled · 5 laid-back / easy-going · 6 outgoing / extrovert / loud · 7 intense / serious · 8 forgetful / absent-minded · 9 unreliable · 10 (overly) ambitious / a creep</p>' },
        { type: 'rule', title: 'SB p. 17 · ex. 5 · Pairs · 4 min', html: '<p><b>Student A</b> reads a sentence from exercise 3. <b>Student B</b> — book closed — responds with an adjective from exercise 4. Then swap.</p><p>A: <i>Once he’s made up his mind, he won’t back down even if he’s in the wrong.</i><br>B: <i>I know, he’s so stubborn. It drives me crazy sometimes!</i></p>' },
        { type: 'note', html: '<p>Вопросы о языке (2 мин): <i>Is “suck up to” positive or negative? What else can you take in your stride? What are you prone to?</i></p><p>Мостик: <i>We can describe people we know well. But what about people we’ve only met once — or only seen on TV?</i></p>' }
      ] },

    { id: 's4', short: '4 Impression', title: 'Giving your impression', meta: 'SB p. 17 · ex. 6–7 · 10 min',
      blocks: [
        { type: 'rule', title: 'Giving your impression', html: '<p>For people in the public eye or people we haven’t met many times:</p><ul class="frames"><li>He <b>seems</b> fairly laid-back.</li><li>She <b>strikes me as</b> someone you can trust.</li><li>He <b>comes across as</b> a real gentleman.</li><li><b>I get the impression / feeling</b> she’s very principled.</li></ul><p>Notice <b>as</b>: <i>strike someone as, come across as</i> — and also <i>be seen / regarded / described as</i>.</p><p>Asking: <i>So what do you think of…? · What do you make of…? · What’s your impression of…?</i></p>' },
        { type: 'ex', id: 'imp-gap', kind: 'gap', src: 'Quick check', title: 'One word in each gap', mode: 'Individually · 1 min',
          items: [
            { n: 1, t: 'She strikes me ___ someone you can trust.', a: ['as'] },
            { n: 2, t: 'He comes ___ as a real gentleman.', a: ['across'] },
            { n: 3, t: 'I get the ___ she’s very principled.', a: [['impression', 'feeling']] },
            { n: 4, t: 'What do you ___ of the new head of department?', a: ['make'] },
            { n: 5, t: 'He ___ fairly laid-back, but I’ve only met him once.', a: ['seems'] }
          ] },
        { type: 'ex', id: 'imp6', kind: 'open', src: 'SB p. 17 · ex. 6–7', title: 'Five people in the public eye', mode: 'Pairs · 7 min',
          instr: 'Together, choose five people in the public eye — writers, actors, musicians, bloggers. Think on your own for a minute: what’s your impression of each, and why? Then share, using the frames above and the questions.',
          prompts: [
            { q: 'Our five people', rows: 2 },
            { q: 'My impressions (one sentence each)', rows: 4, track: true }
          ],
          model: '<p><b>So what do you think of</b> him? — <b>He comes across as</b> a really decent guy, but <b>I get the feeling</b> it’s all a bit of an act.<br><b>What do you make of</b> her? — <b>She strikes me as</b> quite principled — she always stands up for what she believes in.</p>' },
        { type: 'note', html: '<p><i>Think of five people in the public eye — writers, actors, politicians, bloggers. What’s your gut feeling about each of them?</i></p><p>Реформуляция (1 мин): 2 фразы студентов на Miro.</p><p>Мостик: <i>Let’s hear how other people do it — three conversations about three very different people.</i></p>' }
      ] },

    { id: 's5', short: '5 Listening', title: 'Listening: three conversations', meta: 'SB p. 17 · ex. 8–10 · Track 4 · 15 min',
      blocks: [
        { type: 'rule', title: 'How we listen', html: '<p>First time: who they’re talking about and what that person is like — don’t worry about every word. Second time: the exact chunks.</p>' },
        { type: 'ex', id: 'l8', kind: 'pick', src: 'SB p. 17 · ex. 8', title: 'Who is the person they mainly talk about?', mode: 'Individually, then pairs · 5 min', opts: ['a manager', 'a pop or rock star', 'people in a student residence'],
          items: [
            { n: 1, t: 'Conversation 1', a: 'a manager', note: 'dragging the whole team down · go over his head · blames everyone below him' },
            { n: 2, t: 'Conversation 2', a: 'a pop or rock star', note: 'saving the world · sell more of his music' },
            { n: 3, t: 'Conversation 3', a: 'people in a student residence', note: 'corridor · lectures · Medicine · one bathroom' }
          ] },
        { type: 'ex', id: 'l8b', kind: 'pick', src: 'SB p. 17 · ex. 8', title: 'What is the person like?', mode: 'Pairs · 2 min',
          items: [
            { n: 1, t: 'The manager in conversation 1 is…', opts: ['incompetent and arrogant', 'laid-back and charming'], a: 'incompetent and arrogant', note: 'he also sucks up to the people above him' },
            { n: 2, t: 'Speaker D thinks the star is…', opts: ['decent and principled', 'fake and cynical'], a: 'decent and principled', note: 'speaker C thinks he’s fake — it’s all self-promotion' },
            { n: 3, t: 'The girl opposite is…', opts: ['bright, chatty and a good laugh', 'shy and retiring'], a: 'bright, chatty and a good laugh', note: '…but she takes over the bathroom every morning' },
            { n: 4, t: 'The guy next door (he studies Medicine)…', opts: ['keeps himself to himself', 'loves to be the centre of attention'], a: 'keeps himself to himself' },
            { n: 5, t: 'The guy on the other side seems to be…', opts: ['a bit of a slacker', 'incompetent'], a: 'a bit of a slacker', note: 'laid-back to the point of horizontal!' }
          ] },
        { type: 'ex', id: 'l9', kind: 'gap', src: 'SB p. 17 · ex. 9', title: 'Remember the missing words', mode: 'Pairs first, then listen again · 6 min', wide: true,
          instr: 'Try to remember the missing words with your partner. Then listen again and check.',
          items: [
            { h: 'Conversation 1' },
            { n: '1a', t: 'He’s ___ with him.', hint: '(5 words)', a: [['dragging the whole team down']] },
            { n: '1b', t: 'He always just gets really defensive and ___ big barrier.', hint: '(4 words)', a: [['puts up this great']] },
            { n: '1c', t: 'Maybe you need to ___ and talk to his line manager about it?', hint: '(4 words)', a: [['go over his head']] },
            { h: 'Conversation 2' },
            { n: '2a', t: 'I’ve always thought he ___ a really decent guy.', hint: '(3 words)', a: [['comes across as']] },
            { n: '2b', t: 'He’s ___ of various different causes.', hint: '(5 words)', a: [['done a lot to raise awareness']] },
            { h: 'Conversation 3' },
            { n: '3a', t: 'She’s really nice and very bright and chatty. We ___.', hint: '(4 words)', a: [['hit it off straightaway', 'hit it off straight away']] },
            { n: '3b', t: 'The only problem is she kind of ___ every morning.', hint: '(4 words)', a: [['takes over the bathroom']] },
            { n: '3c', t: 'The guy on the other side seems pleasant enough, but he ___ a bit of a slacker.', hint: '(3 words)', a: [['strikes me as']] }
          ] },
        { type: 'ex', id: 'l10', kind: 'open', src: 'SB p. 17 · ex. 10', title: 'Over to you', mode: 'Groups · 4 min',
          instr: 'Choose two or three questions.',
          prompts: [
            { q: 'What would you do in the first speaker’s situation?', track: true },
            { q: 'Can you think of a celebrity who tries to raise awareness of a cause? What do you think about it?', track: true },
            { q: 'Have you ever shared accommodation with anyone? How was it?', track: true },
            { q: 'Have you ever hit it off with someone straight away? Who with?', track: true }
          ] },
        { type: 'note', html: '<p><b>Track 4</b> — включить с демонстрацией экрана со звуком (скрипт: TB pp. 21–22). При проверке ex. 8 студенты обосновывают ответ: что именно услышали.</p><p>drag someone down = make someone perform worse · hit it off = get on well immediately · go over someone’s head = talk to their boss</p><p>Мостик: <i>Now it’s your turn to talk about the people in your life.</i></p>' }
      ] },

    { id: 's6', short: '6 Speaking', title: 'Conversation practice', meta: 'SB p. 17 · ex. 11–12 · say it twice · 14 min',
      blocks: [
        { type: 'ex', id: 'cp11', kind: 'open', src: 'SB p. 17 · ex. 11', title: 'Five people', mode: 'Individually · 3 min',
          instr: 'Write a name for each kind of person. Think about: words and chunks from this lesson you could use; examples of their behaviour or habits; the things they say or do; how you feel about them and why.',
          prompts: [
            { q: '1 · someone in your family', track: true },
            { q: '2 · someone you can describe with a word from exercise 1', track: true },
            { q: '3 · someone you get on really well with', track: true },
            { q: '4 · someone quite unusual, eccentric or annoying', track: true },
            { q: '5 · someone you admire', track: true }
          ],
          model: '<p><i>My cousin is one of those people who never panic — she just takes everything in her stride. My new neighbour, on the other hand, strikes me as a bit of a snob, though I may have got him wrong.</i></p>' },
        { type: 'rule', title: 'Round 1 · pairs · 4 min', html: '<p>Swap names. Ask and tell each other about the people on your lists. Find out as much as you can: <i>So who’s Masha? · What’s she like? · How do you get on? · What makes you say that?</i></p>' },
        { type: 'rule', title: 'Round 2 · new pairs · 4 min', html: '<p>Same people — you already know what you want to say. This time, use everything on the checklist below. Your partner ticks what they hear.</p>' },
        { type: 'ex', id: 'cp-r2', kind: 'open', src: 'After round 2', title: 'My checklist', mode: 'Individually · 1 min',
          prompts: [{ q: 'The best sentence I said in round 2', rows: 2, track: true }, { q: 'Did the second time feel different?', rows: 2 }],
          checklist: ['2 words from exercise 1 (a snob, cynical, a stubborn streak…)', '2 chunks from exercise 3 (takes everything in her stride, prone to…)', '1 chunk from the listening (hit it off, keeps himself to himself…)', '1 impression frame (strikes me as, comes across as…)'] },
        { type: 'note', html: '<p>Цикл Goh & Burns: в первом раунде не вмешивайтесь, записывайте по одной фразе из каждого зала. Между раундами — реформуляция на Miro (2 мин), пропуски дополняет вся группа: <i>He is very lazy. → He’s a bit of a ___ (slacker) — he just seems to lie around all day.</i></p><p>Оценка за устный опрос — по второму раунду.</p>' }
      ] },

    { id: 's7', short: '7 Project', title: 'Your Relationships project', meta: 'Home reading · 9–10 minute presentation · 12 min',
      blocks: [
        { type: 'lead', html: 'The project is how we check your <b>home reading</b> for this topic. You can work on your own or in a team of 2–3. Every team member presents a part and answers questions — the mark is individual.' },
        { type: 'rule', title: 'Choose one of three types', html: '<ol><li><b>Academic.</b> Ask a narrow question. Find two academic articles with opposing views, sum up each author’s arguments, compare them and give your own opinion.<br><i>Ideas:</i> Does social media strengthen or weaken friendship? · Can algorithms find you a partner? (SB pp. 18–19) · Strict vs permissive parenting · Should students and teachers be on first-name terms? · Does remote work damage relationships between colleagues?</li><li><b>Professional.</b> Create a wiki page in English for a Russian professional concept — translate an existing article or write your own.<br><i>Ideas:</i> литературный салон · литературное общество («Арзамас») · эпистолярный жанр · литературная полемика.</li><li><b>Language.</b> Find a video or audio lecture (for example, a TED talk) or a text on the topic and create tasks for it. In your presentation, do some of the tasks with the group.<br><i>Ideas:</i> Robert Waldinger, <i>What makes a good life?</i> · Susan Pinker, <i>The secret to living longer may be your social life</i> · Helen Fisher, <i>The brain in love</i> · Esther Perel, <i>The secret to desire in a long-term relationship</i>.</li></ol>' },
        { type: 'rule', title: 'How you will be assessed (10-point scale)', html: '<ul><li><b>Content and structure</b> — the presentation reflects your project; clear structure and logical transitions.</li><li><b>Sources</b> — critical analysis of up-to-date authentic sources, with references.</li><li><b>Timing</b> — 9–10 minutes.</li><li><b>Visuals</b> — relevant images, no mistakes on the slides.</li><li><b>Delivery</b> — confident, fluent speech; good pronunciation.</li><li><b>Answering questions</b> — you understand the questions and answer them fully.</li><li><b>Grammar</b> — a range of complex structures.</li><li><b>Vocabulary</b> — a rich range, including academic vocabulary and the vocabulary of the topics we’ve studied. Today’s chunks count!</li></ul>' },
        { type: 'rule', title: 'Timeline', html: '<ul><li><b>Today:</b> your team, the type of project and a working topic — in the table on Miro.</li><li><b>Before next lesson:</b> send me your question and two links to sources (for a language project — a link to the lecture).</li><li><b>Next lesson:</b> a short consultation in breakout rooms.</li><li><b>Lesson 7:</b> presentations — 9–10 minutes per team + questions.</li></ul>' },
        { type: 'ex', id: 'proj', kind: 'open', src: 'Project', title: 'Our project', mode: 'Teams of 2–3 · 6 min',
          prompts: [
            { q: 'Team members', rows: 1 },
            { q: 'Type of project (academic / professional / language)', rows: 1 },
            { q: 'Working topic or question', rows: 2 },
            { q: 'Who does what (so everyone pulls their weight)', rows: 2 }
          ] },
        { type: 'note', html: '<p><i>You’ll be presenting in teams, so it might help to think about who you get on well with — and who won’t leave everything to the last minute!</i></p><p>Консультация (2 мин): подтвердить темы или помочь сузить слишком широкие. Темы и команды фиксируются до конца занятия: на уроке 6 — консультация, на уроке 7 — защита.</p>' }
      ] },

    { id: 's8', short: '8 Retrieval', title: 'Name the chunk', meta: 'Retrieval + homework · 6 min',
      blocks: [
        { type: 'lead', html: 'Without looking back — how much can you remember?' },
        { type: 'ex', id: 'ret', kind: 'gap', src: 'Retrieval', title: 'What’s the chunk?', mode: 'Individually · 3 min', wide: true,
          items: [
            { n: 1, t: 'Once he’s decided something, he never admits he’s wrong. → He won’t back ___.', a: ['down'] },
            { n: 2, t: 'She criticises me to the boss when I’m not there. → She goes behind my ___.', a: ['back'] },
            { n: 3, t: 'He’s always flattering the boss to get promoted. → He sucks ___ to the boss.', a: ['up'] },
            { n: 4, t: 'Nothing ever stresses her. → She takes everything in her ___.', a: ['stride'] },
            { n: 5, t: 'He loves being noticed at parties. → He loves to be the ___ of attention.', a: ['centre'] },
            { n: 6, t: 'We liked each other from the first minute. → We hit it ___ straightaway.', a: ['off'] },
            { n: 7, t: 'I’ve only met him once, but he seems honest. → He strikes me ___ an honest person.', a: ['as'] },
            { n: 8, t: 'My neighbour never talks to anyone. → He keeps himself to ___.', a: ['himself'] }
          ] },
        { type: 'rule', title: 'Homework for next lesson', html: '<ol><li><em>Glossary:</em> the words from SB p. 16 ex. 1, the chunks from ex. 3, the impression frames on p. 17 and the chunks from the listening (ex. 9). Add your own example to each — see <a href="#s9">Lesson words</a>.</li><li><em>Writing (120–150 words):</em> describe someone you know well and someone in the public eye — the task is below. Use at least 5 words or chunks from today and 2 impression frames.</li><li><em>Reading:</em> SB pp. 18–19, <i>getting together</i> — read the article about love and science and note down 5 useful phrases for talking about relationships.</li><li><em>Project:</em> send me your type of project, your question and two links to sources.</li></ol><p>Next lesson starts with a short vocabulary quiz on today’s words.</p>' },
        { type: 'ex', id: 'hw-write', kind: 'open', src: 'Homework · writing', title: 'Two people', mode: '120–150 words · due next lesson',
          prompts: [{ q: 'Someone I know well — and someone in the public eye', rows: 10, track: true, words: [120, 150] }],
          checklist: ['At least 5 words or chunks from today', '2 impression frames (seems, strikes me as, comes across as, I get the impression)', 'Examples of what the people do or say', '120–150 words'] },
        { type: 'note', html: '<p><i>Thanks, everyone — that was a lovely lesson. Next time we’ll look at very different kinds of relationships, so have a look at the article on pages 18–19 before we meet.</i></p>' }
      ] },

    { id: 's9', short: '9 Words', title: 'Lesson words', meta: 'Describing people · chunks · impressions · the listening', blocks: [{ type: 'words' }] },

    { id: 's10', short: '10 Send', title: 'Reflection', meta: '1 min',
      blocks: [
        { type: 'ex', id: 'reflect', kind: 'open', src: 'Reflection', title: 'Before you go', mode: '1 min',
          prompts: [{ q: 'Three chunks I’d most like to use', rows: 2 }, { q: 'Our project topic (so far)', rows: 1 }] },
        { type: 'cando' }, { type: 'submit' }
      ] }
  ],

  cando: ['I can talk about people I know.', 'I can describe character with words and chunks like a stubborn streak or take everything in your stride.', 'I can give my impression of people I don’t know well.', 'I can follow conversations about people.', 'I know what my Relationships project will be about.'],

  words: [
    ['a snob', 'someone who thinks they are better than others', 'сноб', 'He’s a complete snob — he only talks to people who went to the “right” school.'],
    ['cynical', 'believing people only act for selfish reasons', 'циничный', 'He’s so cynical. He thinks everyone’s got an agenda.'],
    ['have strong principles', 'have firm moral beliefs', 'иметь твёрдые принципы', 'She has strong principles. I completely trust her.'],
    ['charming', 'pleasant and attractive in manner', 'обаятельный', 'He’s ever so charming. He makes everyone feel special.'],
    ['a pain', 'someone who makes life difficult', 'зануда, сплошная головная боль', 'She’s a bit of a pain. She really makes life difficult.'],
    ['sheer arrogance', 'thinking you know it all', 'чистой воды высокомерие', 'It’s his sheer arrogance that I hate.'],
    ['incompetent', 'not able to do a job properly', 'некомпетентный', 'She’s completely incompetent. She’s really messed things up.'],
    ['a stubborn streak', 'a tendency to refuse to change your mind', 'упрямая жилка', 'He’s got a real stubborn streak.'],
    ['intense', 'very serious, with strong feelings', 'напряжённый, слишком серьёзный', 'She’s incredibly intense — we always end up having heavy conversations.'],
    ['willing to listen', 'happy to hear you out', 'готовый выслушать', 'She’s very willing to listen.'],
    ['a slacker', 'a lazy person who avoids work', 'лентяй, бездельник', 'He’s a right slacker. He just seems to lie around all day.'],
    ['make up your mind', 'decide', 'принять решение', 'Once he’s made up his mind, he won’t back down.'],
    ['back down', 'stop insisting you are right', 'отступить, уступить', 'He won’t back down even if he’s in the wrong.'],
    ['go behind sb’s back', 'do sth secretly, without telling them', 'действовать за спиной', 'She’s constantly going behind my back.'],
    ['undermine sb', 'make sb weaker or less respected', 'подрывать авторитет', 'She keeps saying things to undermine me.'],
    ['take no notice of', 'ignore', 'не обращать внимания на', 'He just takes no notice of criticism.'],
    ['stand up for sth', 'defend sth', 'отстаивать', 'She stands up for what she believes in.'],
    ['stick to your principles', 'not change your beliefs under pressure', 'придерживаться своих принципов', 'She sticks to her principles. She’s not easily bullied.'],
    ['take sth in your stride', 'deal with a problem calmly', 'спокойно воспринимать (трудности)', 'He just takes everything in his stride.'],
    ['not exactly shy and retiring', 'confident, likes attention', 'отнюдь не скромница', 'She’s not exactly shy and retiring.'],
    ['the centre of attention', 'the person everyone is looking at', 'центр внимания', 'She loves to be the centre of attention.'],
    ['lighten up', 'relax, stop being so serious', 'расслабиться, не быть таким серьёзным', 'I wish he’d lighten up a little.'],
    ['be prone to (doing) sth', 'tend to do sth (usually bad)', 'быть склонным к', 'She is prone to forgetting things like that.'],
    ['suck up to sb', 'try to please sb in power (negative)', 'подлизываться', 'He’s constantly sucking up to the boss.'],
    ['get ahead', 'be successful in your career', 'продвинуться, преуспеть', 'She does it in order to get ahead.'],
    ['He seems…', 'my impression is that he is…', 'он кажется…', 'He seems fairly laid-back.'],
    ['She strikes me as…', 'my impression of her is…', 'она производит впечатление…', 'She strikes me as someone you can trust.'],
    ['He comes across as…', 'other people see him as…', 'он производит впечатление…', 'He comes across as a real gentleman.'],
    ['I get the impression / feeling (that)…', 'I think, from what I’ve seen', 'у меня складывается впечатление, что…', 'I get the impression she’s very principled.'],
    ['What do you make of…?', 'what is your opinion of…?', 'что ты думаешь о…?', 'What do you make of the new manager?'],
    ['drag sb down', 'make sb perform worse', 'тянуть кого-то вниз', 'He’s dragging the whole team down with him.'],
    ['go over sb’s head', 'speak to their boss instead', 'обратиться через голову', 'Maybe you need to go over his head.'],
    ['raise awareness of', 'make people know more about', 'привлекать внимание к', 'He’s done a lot to raise awareness of various causes.'],
    ['hit it off', 'get on well immediately', 'сразу найти общий язык', 'We hit it off straightaway.'],
    ['keep yourself to yourself', 'not get involved with other people', 'держаться особняком', 'He certainly keeps himself to himself.']
  ]
};
