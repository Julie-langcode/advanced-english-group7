/* Lesson 6 · Relationships: kinds of relationships (Outcomes Advanced, Unit 2, SB pp. 20–21)
   Second lesson of the topic, the last one before the project presentations. Follows "Lesson Plan · Relationships · Lesson 2":
   vocabulary quiz (lesson 5) → kinds of relationships → listening: Toby → would → relationships vocabulary
   → roleplay: talking through problems → project consultation → wrap-up. 90-minute online lesson. */
window.LESSON = {
  id: 'l06-would',
  number: 6,
  title: 'Relationships and would',
  titleHtml: 'Relationships: <em>mixed messages</em>',
  duration: '90 min · online',
  summary: 'Five people, one young man and one night that changed everything. Analyse different kinds of relationships, learn to give careful opinions with would, help a friend through a problem — and get your project ready for next lesson.',
  chips: ['Outcomes Advanced · Unit 2', 'SB pp. 20–21', 'Audio 6', 'Project: presentations next lesson'],

  track: [
    ['mixed messages', 'mixed messages'], ['the straight and narrow', 'straight and narrow'], ['back down', '\\bback(s|ed|ing)? down'],
    ['come as a shock', 'c(ome|ame|omes) as a (big |real )?shock'], ['confide', '\\bconfid(e|ed|es|ing)'], ['come to sb’s aid', 'to (his|her|my|your|their) aid'],
    ['when it came down to it', 'when it c(omes|ame) down to it'], ['a scene', '\\ba scene\\b'],
    ['a rough patch', 'rough patch'], ['keep an eye on', 'keep(s|ing)? an eye on|kept an eye on'], ['spark sb’s interest', '\\bspark(s|ed|ing)? (my|his|her|their|our|your) interest'],
    ['collaborate', '\\bcollaborat'], ['on speaking terms', 'on speaking terms'], ['on first-name terms', 'first[- ]name terms'],
    ['see eye to eye', 'eye to eye'], ['get on sb’s nerves', 'on (my|his|her|their|our|your|each other.s) nerves'], ['put sb at their ease', 'at (their|his|her|my|your|our) ease'],
    ['push sb hard', '\\bpush(es|ed|ing)? .{0,20}hard'], ['keep yourselves to yourselves', '(ourselves|themselves|himself|herself|myself) to (ourselves|themselves|himself|herself|myself)'],
    ['pull your weight', 'pull(s|ed|ing)? (his|her|my|your|their|our) weight'], ['friction', '\\bfriction'],
    ['I’d say', "\\b(i'd|i would) say"], ['I’d imagine', "\\b(i'd|i would) imagine"], ['I would’ve thought', "\\bi would('ve| have) thought|i'd have thought"],
    ['I wouldn’t say', "\\bi wouldn't say|i would not say"], ['If I were you, I’d…', 'if i were you'], ['I’d talk it over', 'talk(ed)? it over'], ['blow over', '\\bblow over']
  ],

  sections: [
    { id: 'map', short: 'Plan', title: 'Lesson plan', meta: '90 minutes · online',
      blocks: [
        { type: 'map', items: [
          { t: '0–7 min', n: 'Vocabulary quiz: last lesson', href: '#s1' },
          { t: '7–15 min', n: 'Kinds of relationships', href: '#s2' },
          { t: '15–33 min', n: 'Listening: mixed messages', href: '#s3' },
          { t: '33–48 min', n: 'Would', href: '#s4' },
          { t: '48–60 min', n: 'Talking about relationships', href: '#s5' },
          { t: '60–75 min', n: 'Talking through problems', href: '#s6' },
          { t: '75–87 min', n: 'Your presentation', href: '#s7' },
          { t: '87–90 min', n: 'Wrap-up and homework', href: '#s8' },
          { t: 'Board', n: 'Our Miro board ↗', href: 'miro' }
        ] },
        { type: 'rule', title: 'Today you will learn to', html: '<ul><li>talk about and analyse different kinds of relationships;</li><li>follow five people talking about the same young man;</li><li>give your opinion carefully with <i>would</i> — perfect for your presentation;</li><li>sympathise, share experiences and give advice;</li><li>plan your 5–7 minute presentation.</li></ul>' },
        { type: 'note', html: '<p><b>Подготовка:</b> Audio 6 (плеер ниже, скрипт — TB p. 26); Miro: зона Your language, рамки would, фразы для ролевых диалогов, структура презентации; залы: группы 4–5, пары, тройки, проектные пары; темы проектов из комментариев к посту.</p><p><b>Ответы:</b> студенты не видят ключей, «Show ideas» и этих заметок — только «Check» (правильно/неправильно и счёт). Вы видите всё, пока на вашем устройстве включён режим учителя (#teacher).</p>' }
      ] },

    { id: 's1', short: '1 Quiz', title: 'Vocabulary quiz: last lesson', meta: 'SB pp. 16–17 · 7 min',
      blocks: [
        { type: 'lead', html: 'Twelve sentences from last lesson. One word in each gap — no peeking at the glossary! You’ve got five minutes.' },
        { type: 'ex', id: 'quiz', kind: 'gap', src: 'Lesson 5 vocabulary', title: 'One word in each gap', mode: 'Individually · 5 min',
          items: [
            { n: 1, t: 'He’s a complete ___. He only talks to people who went to the ‘right’ school.', a: ['snob'] },
            { n: 2, t: 'Once he’s made up his ___, he won’t back down.', a: ['mind'] },
            { n: 3, t: 'She’s constantly going behind my ___ and saying things to undermine me.', a: ['back'] },
            { n: 4, t: 'He just takes no ___ of criticism.', a: ['notice'] },
            { n: 5, t: 'She sticks ___ her principles. She’s not easily bullied.', a: ['to'] },
            { n: 6, t: 'He never panics. He just takes everything in his ___.', a: ['stride'] },
            { n: 7, t: 'She’s not exactly shy and ___. She loves to be the centre of attention.', a: ['retiring'] },
            { n: 8, t: 'He’s not the easiest person to talk to. I wish he’d lighten ___ a little.', a: ['up'] },
            { n: 9, t: 'You’ll need to remind her. She is prone ___ forgetting things like that.', a: ['to'] },
            { n: 10, t: 'She’s constantly sucking up to the boss in order to get ___.', a: ['ahead'] },
            { n: 11, t: 'He seems pleasant enough, but he strikes me ___ a bit of a slacker.', a: ['as'] },
            { n: 12, t: 'She’s really nice and very chatty. We hit it ___ straightaway.', a: ['off'] }
          ] },
        { type: 'note', html: '<p><i>Good evening, everyone! Before we do anything else, let’s see how much of last lesson’s vocabulary has stuck.</i></p><p>Ключ: snob · mind · back · notice · to · stride · retiring · up · to · ahead · as · off. Частые трудности: <i>retiring</i> (= скромный, не «на пенсии»), <i>prone to + -ing</i>.</p><p>11–12 — отлично; 9–10 — хорошо; 6–8 — повторить глоссарий. Результат приходит в таблицу после «Check».</p>' }
      ] },

    { id: 's2', short: '2 Kinds', title: 'Kinds of relationships', meta: 'SB p. 20 · ex. 1 · 8 min',
      blocks: [
        { type: 'rule', title: 'Relationships (SB p. 20)', html: '<p><b>siblings</b> (= brothers and sisters) · grandparent – grandchild · <b>life partners</b> (= a long-term couple, married or not) · parent – child · colleagues · teacher – pupil · business partners · coach – athlete · neighbours · doctor – patient</p>' },
        { type: 'ex', id: 'rank', kind: 'open', src: 'SB p. 20 · ex. 1', title: 'Which relationships have shaped you most?', mode: 'Individually, then groups of 4–5 · 5 min',
          instr: 'Choose the relationships you have had. Put them in order — from the biggest influence on your life to the smallest. Then compare in groups and explain your choices.',
          prompts: [{ q: 'My order (biggest influence first)', rows: 3 }, { q: 'Why is number 1 so important to me?', rows: 2, track: true }],
          model: '<p><i>Parent – child comes first for me, obviously, but I’d put teacher – pupil second — my literature teacher really sparked my interest in languages.</i></p><p><i>I don’t have any siblings, so my grandparents were really important. My grandmother practically brought me up.</i></p>' },
        { type: 'note', html: '<p><b>Live listening (TB, 2 мин):</b> расскажите о важных для себя отношениях, студенты задают вопросы. Пример в сценарии — замените своим.</p><p>Реформуляция на Miro: <i>My grandmother made me who I am → She had a huge influence on me.</i> · <i>I don’t communicate with my neighbours → We keep ourselves to ourselves.</i></p><p>Мостик: <i>Now let’s look at one young man through the eyes of five people who know him in very different ways.</i></p>' }
      ] },

    { id: 's3', short: '3 Listening', title: 'Listening: mixed messages', meta: 'SB p. 20 · ex. 2–3 · Audio 6 · 18 min',
      blocks: [
        { type: 'lead', html: 'Five people talk about a young man called <b>Toby</b> and an incident he’s been involved in. Who is each speaker — and what do you think happened?' },
        { type: 'audio', src: '../../assets/audio/u02-track06-toby.mp3', src_label: 'Audio 6', title: 'Five people talking about Toby',
          marks: [['Speaker 1', 0], ['Speaker 2', 42], ['Speaker 3', 86], ['Speaker 4', 137], ['Speaker 5', 174]] },
        { type: 'ex', id: 'who', kind: 'pick', src: 'SB p. 20 · ex. 2', title: 'Who is each speaker?', mode: 'Listen, then compare in pairs · 7 min',
          opts: ['his grandmother', 'his class teacher', 'his football coach', 'a doctor', 'his ex-girlfriend'],
          items: [
            { n: 1, t: 'Speaker 1', a: 'his grandmother', note: 'my son and his mother · unsteady on my feet' },
            { n: 2, t: 'Speaker 2', a: 'his class teacher', note: 'a bright lad · change desks · call the Head' },
            { n: 3, t: 'Speaker 3', a: 'his football coach', note: 'turn professional · dispute on the pitch' },
            { n: 4, t: 'Speaker 4', a: 'a doctor', note: 'the operation went well · discharge him' },
            { n: 5, t: 'Speaker 5', a: 'his ex-girlfriend', note: 'we kind of went out · awkward in class' }
          ] },
        { type: 'ex', id: 'what', kind: 'open', src: 'SB p. 20 · ex. 2', title: 'What happened?', mode: 'Pairs · 1 min',
          prompts: [{ q: 'What do you think the incident was?', rows: 2 }] },
        { type: 'ex', id: 'phr', kind: 'match', src: 'SB p. 20 · ex. 3', title: 'What do the phrases mean?', mode: 'Pairs · 3 min',
          items: ['mixed messages', 'get back on the straight and narrow', 'be unwilling to back down', 'confide something to someone', 'come to someone’s aid', 'when it came down to it', 'a scene'],
          opts: [['a', 'in the end, basically'], ['b', 'a public argument or display of anger'], ['c', 'help someone who is in trouble'], ['d', 'signals that contradict each other'], ['e', 'tell someone a secret'], ['f', 'return to behaving well'], ['g', 'not be prepared to let the other person win']],
          key: ['d', 'f', 'g', 'e', 'c', 'a', 'b'] },
        { type: 'ex', id: 'q3', kind: 'open', src: 'SB p. 20 · ex. 3', title: 'Answer the questions — then listen again and check', mode: 'Pairs, then listen again · 7 min',
          prompts: [
            { q: '1 What were the mixed messages Toby received?' },
            { q: '2 What will help him get back on the straight and narrow, according to his grandmother?' },
            { q: '3 How did the ridiculous confrontation come about?' },
            { q: '4 Why do you think Toby was unwilling to back down?' },
            { q: '5 Why has the incident come as a shock to his coach?' },
            { q: '6 What did Toby confide to his coach?' },
            { q: '7 Why did the doctor say the man was in remarkably good health?' },
            { q: '8 Who came to his aid?' },
            { q: '9 Why did they split up, when it came down to it?' },
            { q: '10 Where was there a scene and what do you think caused it?' }
          ],
          model: '<p>1 Dad (and grandmother) were strict, but his mother comforted him. · 2 proper punishment — <i>treat him severely</i> · 3 he wouldn’t change desks to sit next to a girl · 4 didn’t want to sit next to her / used to getting his own way / unhappy at home · 5 he conducted himself well and took everything in his stride · 6 his parents were going through a rough patch; problems at school · 7 for someone of his age, after such severe blows · 8 a young man — probably Toby · 9 Toby was committed to football, not to her · 10 at a friend’s party — he saw his ex and was maybe jealous</p>' },
        { type: 'note', html: '<p>При проверке просите обосновать: <i>What exactly did you hear?</i> (TB: <i>justifying answers</i>). История намеренно открытая — голосование в чате: <i>Did Toby attack the man or help him?</i></p><p>В тексте есть лексика урока 5: <i>a stubborn streak, prone to outbursts, back down, took it in his stride</i>.</p><p>Мостик: <i>When we’re not sure, English speakers love “would”. Did you notice how often the speakers used it?</i></p>' }
      ] },

    { id: 's4', short: '4 Would', title: 'Would', meta: 'SB pp. 20–21 · ex. 4–6 · 15 min',
      blocks: [
        { type: 'rule', title: 'Would (SB p. 20)', html: '<p><i>Would</i> has many different uses: past habits, giving advice, the future in the past, hypothetical consequences — and careful opinions.</p>' },
        { type: 'ex', id: 'w4', kind: 'match', src: 'SB p. 21 · ex. 4', title: 'Same meaning of would', mode: 'Pairs · 5 min',
          instr: 'Match each sentence from the listening (1–6) to a sentence (a–f) with the same meaning of <i>would</i>.',
          items: ['I probably would’ve stayed with him if he’d apologised.', 'When he was a toddler, I’d do the childcare most days.', 'I knew it would come to no good, but you can’t really interfere, can you?', 'I asked him to change desks and he just wouldn’t — just refused point blank.', 'He should obviously be punished, but after that I’d still give him another chance.', 'I would say he has a stubborn streak and he’s been prone to outbursts.'],
          opts: [['a', 'I’d consider talking it through with a therapist. You shouldn’t bottle these things up.'], ['b', 'For some reason, the car wouldn’t start this morning.'], ['c', 'They said it would be miserable today, but it’s actually turned out quite nice.'], ['d', 'If they’d intervened, the situation would be a lot worse now.'], ['e', 'Before the anger management classes, he’d often get into unnecessary confrontations.'], ['f', 'I wouldn’t say it’s a disaster — just a slight setback.']],
          key: ['d', 'e', 'c', 'b', 'a', 'f'] },
        { type: 'rule', title: 'For your presentation: careful opinions', html: '<ul class="frames"><li><b>I’d say</b> (that)… — <span class="ru">я бы сказал(а), что…</span></li><li><b>I wouldn’t say</b>…, just… — <span class="ru">я бы не сказал(а), что…, скорее…</span></li><li><b>I’d imagine</b> (that)… — <span class="ru">полагаю, что…</span></li><li><b>I would’ve thought</b> (that)… — <span class="ru">мне кажется, что…</span></li><li><b>I’d expect</b>… — <span class="ru">я бы ожидал(а)…</span></li></ul><p>When you give your own opinion or answer a tricky question, <i>I’d say…</i> sounds much more natural than <i>I think…</i></p><p><b>Say it fast:</b> <i>I would have thought</i> → /aɪdəv θɔːt/ · <i>She couldn’t have known who’d be there.</i></p>' },
        { type: 'ex', id: 'w5', kind: 'open', src: 'SB p. 21 · ex. 5', title: 'Toby’s story with would', mode: 'Pairs · 5 min',
          instr: 'Write four or five sentences about Toby with <i>would</i>: his childhood · why people think what they think · why he was arrested · what you’d imagine happens now · what you’d advise.',
          example: '<i>I’d say he had a difficult childhood because his parents would argue a lot.</i> · <i>I would’ve thought Toby still likes his ex-girlfriend.</i>',
          prompts: [{ q: 'My sentences about Toby', rows: 5, track: true }],
          model: '<p><i>I’d say the grandmother doesn’t like her daughter-in-law and blames her.</i><br><i>It wouldn’t have happened if he’d stayed at home.</i><br><i>They wouldn’t have arrested him if the victim had spoken to the police sooner.</i><br><i>I’d imagine he’d get off. / I’d hope the victim would explain what happened.</i><br><i>I’d tell him to get some counselling. / I’d advise his parents to be clearer about the rules.</i></p>' },
        { type: 'ex', id: 'w6', kind: 'pick', src: 'SB p. 21 · ex. 6', title: 'Careful! Which one is correct?', mode: 'After your group discussion · 2 min',
          items: [
            { n: 1, t: 'If he ___ to the party, none of this would have happened.', opts: ['wouldn’t have gone', 'hadn’t gone'], a: 'hadn’t gone' },
            { n: 2, t: 'I knew he ___ that. He’s so predictable!', opts: ['’ll say', '’d say'], a: '’d say' },
            { n: 3, t: 'His parents wish he ___ closer to them.', opts: ['lived', 'would live'], a: 'lived' },
            { n: 4, t: 'At school, he ___ really long hair.', opts: ['would have', 'had'], a: 'had' },
            { n: 5, t: 'I ___ it’s a disaster — just a setback.', opts: ['wouldn’t say', 'won’t say'], a: 'wouldn’t say' }
          ] },
        { type: 'note', html: '<p>Ответы ex. 4 (TB): 1 d · 2 e · 3 c · 4 b · 5 a · 6 f. Значения: 1 — нереальное условие, 2 — привычка в прошлом, 3 — будущее в прошедшем, 4 — отказ, 5 — совет, 6 — осторожное мнение.</p><p>Вернитесь к своей фразе из стадии 2 (<i>I don’t think I’d be teaching… if it hadn’t been for her</i>) — какое это значение? (hypothetical)</p><p>Grammar reference p. 167 ex. 1, p. 168 ex. 2 — по желанию (ответы TB p. 27).</p>' }
      ] },

    { id: 's5', short: '5 Vocabulary', title: 'Talking about relationships', meta: 'SB p. 21 · ex. 7 · 12 min',
      blocks: [
        { type: 'ex', id: 'v7', kind: 'gap', select: true, src: 'SB p. 21 · ex. 7', title: 'Complete the chunks', mode: 'Pairs · 4 min',
          instr: 'Complete each sentence with one word from the box. Then underline the <b>whole chunk</b>.',
          bank: ['collaborated', 'ease', 'eye', 'first-name', 'nerves', 'ourselves', 'patch', 'pushes', 'see', 'sparked', 'speaking', 'weight'],
          items: [
            { n: 1, t: 'They’re going through a bit of a rough ___ and have talked about splitting up.', a: ['patch'] },
            { n: 2, t: 'I keep an ___ on her as she’s quite frail and has no relatives nearby.', a: ['eye'] },
            { n: 3, t: 'As a teenager, she really ___ my interest in science.', a: ['sparked'] },
            { n: 4, t: 'I’ve ___ with him on a number of projects and he’s taught me a lot.', a: ['collaborated'] },
            { n: 5, t: 'They’re not on ___ terms at the moment, which can make it awkward at meetings.', a: ['speaking'] },
            { n: 6, t: 'We’re on ___ terms as I have to go and see him so often.', a: ['first-name'] },
            { n: 7, t: 'They maintain a professional relationship, but they don’t ___ eye to eye on many issues.', a: ['see'] },
            { n: 8, t: 'They get on each other’s ___ all the time and they’re constantly competing for my attention.', a: ['nerves'] },
            { n: 9, t: 'She puts people at their ___ and reassures them about the whole process.', a: ['ease'] },
            { n: 10, t: 'He ___ his kids incredibly hard.', a: ['pushes'] },
            { n: 11, t: 'I don’t really know any of them as we tend to keep ourselves to ___.', a: ['ourselves'] },
            { n: 12, t: 'He doesn’t tend to pull his ___, which causes some friction in the office.', a: ['weight'] }
          ] },
        { type: 'ex', id: 'v7b', kind: 'open', src: 'SB p. 21 · ex. 7', title: 'Analyse the relationships', mode: 'Pairs · 4 min',
          instr: 'For each sentence above: a) which relationship from exercise 1 is it? b) is it a good or a bad relationship — and why?',
          prompts: [{ q: 'Our ideas for sentences 1–12', rows: 4 }],
          model: '<p>1 life partners — bad · 2 neighbours — good, caring · 3 teacher – pupil — good · 4 colleagues — good · 5 colleagues — bad · 6 doctor – patient — good (unusual!) · 7 colleagues — bad, but professional · 8 parent – child (the children compete) — bad · 9 doctor – patient — good · 10 parent – child / teacher – pupil / coach – athlete — it depends · 11 neighbours — neutral · 12 colleagues / siblings / flatmates — bad</p>' },
        { type: 'ex', id: 'v7c', kind: 'open', src: 'SB p. 21 · ex. 7c', title: 'And in your life?', mode: 'Pairs · 3 min',
          instr: 'Choose three sentences you could honestly say about relationships in your life. Tell your partner the story behind one of them.',
          prompts: [{ q: 'My three sentences', rows: 3, track: true }],
          model: '<p><i>My chemistry teacher really sparked my interest in science. · My brother and I get on each other’s nerves, but we’d do anything for each other. · In our group project last year, one person didn’t pull their weight and it caused a lot of friction.</i></p>' },
        { type: 'note', html: '<p>CCQ (TB): <i>If you’re not on speaking terms, did you have an argument? · Why is first-name terms surprising with a doctor? · Is pushing your kids hard good or bad? · Another word for friction?</i></p><p><i>rough patch, push hard</i> — уже звучали у тренера Тоби; <i>keep ourselves to ourselves</i> — в Track 4 (урок 5). <i>Where have you heard these before?</i></p><p>По времени: WB p. 15 ex. 6, диалог 1 (ответы TB p. 299).</p>' }
      ] },

    { id: 's6', short: '6 Speaking', title: 'Talking through problems', meta: 'SB p. 21 · ex. 8–10 · 15 min',
      blocks: [
        { type: 'lead', html: 'Groups of three. <b>Student A:</b> File 7, p. 187 · <b>Student B:</b> File 8, p. 185 · <b>Student C:</b> File 9, p. 189. Choose one of your three problems and imagine it’s really happening to you. Think of some details: names, how long it’s been going on, how you feel.' },
        { type: 'rule', title: 'Useful language (SB p. 21)', html: '<ul class="frames"><li><b>Start:</b> What’s up? — Oh, it’s…</li><li><b>Sympathise:</b> Oh dear! · That must be difficult. · How awful!</li><li><b>Share experiences:</b> I know exactly what you’re going through! · Something similar happened to a friend of mine.</li><li><b>Give advice:</b> I’d talk it over with them (if I were you). · Have you been in touch with the police? · I’d have thought they could help.</li><li><b>Reassure:</b> I’d imagine it’ll all blow over. · I wouldn’t worry about it.</li><li><b>React:</b> What an idiot!</li></ul>' },
        { type: 'ex', id: 'rp', kind: 'open', src: 'SB p. 21 · ex. 8–10', title: 'My problem — and the advice I got', mode: 'Groups of 3 · 10 min',
          prompts: [
            { q: 'My problem (a few notes)', rows: 2 },
            { q: 'The best advice I got', rows: 2, track: true },
            { q: 'Ex. 10: another problem — from your file or your own', rows: 2 }
          ],
          checklist: ['I used one phrase to sympathise', 'I shared an experience', 'I gave advice with would', 'I used a chunk from exercise 7'] },
        { type: 'note', html: '<p>Модель с сильным студентом (проблема C1): <i>A: What’s up? You look a bit fed up. — B: Oh, it’s this project. I’ve been asked to collaborate with Anya, but she just isn’t pulling her weight. — A: Oh dear! That must be difficult. If I were you, I’d have a quiet word with her first. I’d imagine she’s just shy.</i></p><p>В комнатах не исправляйте — записывайте по фразе. Реформуляция на Miro: <i>If I were you, I will speak with her → I’d talk it ___ with her (over)</i> · <i>Don’t worry, it will pass → it’ll all blow ___ (over)</i>. Ex. 10 — только если остаётся время.</p>' }
      ] },

    { id: 's7', short: '7 Project', title: 'Your presentation', meta: 'Next lesson: presentations · 12 min',
      blocks: [
        { type: 'lead', html: 'Next lesson it’s your turn: a <b>5–7 minute presentation</b> plus questions, on your own or in a pair. Every speaker presents a part and answers questions — marks are individual.' },
        { type: 'rule', title: 'A 5–7 minute presentation in five parts', html: '<ol><li><b>Introduction (0:30–1 min):</b> <i>Today I’d like to talk about… · The question I want to explore is…</i></li><li><b>Your source (1 min):</b> <i>The article / talk I chose is by… · It was published in…</i></li><li><b>Key ideas (2–3 min):</b> <i>The author argues that… · One of the main points is… · Critics, however, claim that…</i></li><li><b>Your opinion (1–1.5 min):</b> <i>I’d say… · I would’ve thought… · I wouldn’t go as far as to say…, but…</i></li><li><b>Conclusion (30 sec):</b> <i>To sum up… · Thank you. I’d be happy to answer your questions.</i></li></ol>' },
        { type: 'rule', title: 'Answering questions', html: '<p><i>That’s a good question. · If I understand you correctly, you’re asking… · I’m not entirely sure, but I’d say… · I’d imagine…</i></p>' },
        { type: 'rule', title: 'Need a model?', html: '<ul><li><b>Academic format:</b> Workbook pp. 12–13, <i>Making a case for Cinderella</i> — a question, the critics’ view, the other side, the author’s conclusion.</li><li><b>Professional format (essay or post):</b> Workbook p. 11, an online comment giving advice — personal, clear, with a strong opinion.</li><li><b>Video format:</b> treat the speaker like the author of an article: main message, evidence, do you agree?</li><li>Still looking for a topic? The article on SB pp. 18–19, <i>From Cupid to Computer</i>, is a ready-made academic source.</li></ul>' },
        { type: 'ex', id: 'plan', kind: 'open', src: 'Project', title: 'My presentation plan', mode: 'In your project pair or on your own · 4 min',
          prompts: [
            { q: 'My topic / question', rows: 1 },
            { q: 'Source(s)', rows: 1 },
            { q: '2–3 key ideas', rows: 3 },
            { q: 'My opinion in one sentence (with would!)', rows: 1, track: true },
            { q: 'Who presents which part (if you work in a pair)', rows: 1 },
            { q: 'A question I expect from the group — and my answer', rows: 2 }
          ],
          checklist: ['5–7 minutes, practised out loud with a timer', 'Slides with no mistakes, sources on the last slide', '3–5 chunks from our Relationships lessons', 'Slides uploaded to Smart LMS before the lesson'] },
        { type: 'rule', title: 'How you will be assessed (10-point scale)', html: '<p>content and structure · work with sources · timing (5–7 minutes) · visuals · delivery · answering questions · grammar · vocabulary</p><p>Everyone in the audience asks at least one question — so listen carefully!</p>' },
        { type: 'note', html: '<p>Темы — из комментариев к посту. Слишком широкая тема: <i>That’s a fascinating area — but it’s quite big for five to seven minutes. Could you narrow it down?</i></p><p>В комнатах: <i>What’s the one thing you want us to remember? · Who’s presenting which part? · Which chunks could you use? · What question do you think we’ll ask you?</i> Порядок выступлений лучше объявить сегодня.</p>' }
      ] },

    { id: 's8', short: '8 Wrap-up', title: 'Wrap-up and homework', meta: '3 min',
      blocks: [
        { type: 'ex', id: 'phrase', kind: 'open', src: 'Wrap-up', title: 'One phrase for my presentation', mode: '1 min',
          prompts: [{ q: 'One phrase from today I’ll use in my presentation', rows: 1, track: true }] },
        { type: 'rule', title: 'Homework for next lesson', html: '<ol><li><em>Project:</em> finish your 5–7 minute presentation and practise it out loud at least once with a timer. Upload your slides to Smart LMS before the lesson.</li><li><em>Vocabulary:</em> learn the new words and expressions from the glossary and use 3–5 chunks from our two Relationships lessons in your presentation.</li></ol>' },
        { type: 'note', html: '<p><i>Thank you, everyone — you worked really hard today. I’m really looking forward to your presentations!</i></p><p>По желанию (WB): p. 14 ex. 4 · p. 15 ex. 6 · pp. 12–13 — для академического проекта.</p>' }
      ] },

    { id: 's9', short: '9 Words', title: 'Lesson words', meta: 'The listening · relationships · would', blocks: [{ type: 'words' }] },

    { id: 's10', short: '10 Send', title: 'Reflection', meta: '1 min',
      blocks: [
        { type: 'ex', id: 'reflect', kind: 'open', src: 'Reflection', title: 'Before you go', mode: '1 min',
          prompts: [{ q: 'Three chunks I’d most like to use', rows: 2 }, { q: 'How ready do I feel for my presentation — and what do I still need to do?', rows: 2 }] },
        { type: 'cando' }, { type: 'submit' }
      ] }
  ],

  cando: ['I can talk about and analyse different kinds of relationships.', 'I can follow several people talking about the same person.', 'I can give my opinion carefully with I’d say, I’d imagine, I would’ve thought.', 'I can sympathise, share experiences and give advice.', 'I know how my 5–7 minute presentation will go.'],

  words: [
    ['mixed messages', 'signals that contradict each other', 'противоречивые сигналы', 'His parents sent him totally mixed messages.'],
    ['get back on the straight and narrow', 'return to behaving well', 'вернуться на правильный путь', 'It’s what he needs to get back on the straight and narrow.'],
    ['a ridiculous confrontation', 'a silly argument or face-off', 'нелепое столкновение', 'We got into this ridiculous confrontation.'],
    ['be unwilling to back down', 'not be prepared to let the other person win', 'не соглашаться уступить', 'Neither of us was willing to back down.'],
    ['come as a shock', 'be very surprising', 'стать шоком', 'This has come as a big shock.'],
    ['confide sth to sb', 'tell a secret to someone', 'доверить секрет', 'He confided to his coach that his parents were having problems.'],
    ['in remarkably good health', 'surprisingly healthy', 'в удивительно хорошей форме', 'He was in remarkably good health for someone of his age.'],
    ['come to sb’s aid', 'help someone in trouble', 'прийти на помощь', 'The young man had come to his aid.'],
    ['when it came down to it', 'in the end, basically', 'в конечном счёте', 'When it came down to it, he only cared about football.'],
    ['a scene', 'a public argument or display of anger', 'скандал, сцена', 'There was a bit of a scene at the party.'],
    ['go through a (bit of a) rough patch', 'have a difficult period', 'переживать трудный период', 'They’re going through a bit of a rough patch.'],
    ['keep an eye on sb', 'watch someone to make sure they’re OK', 'присматривать за кем-то', 'I keep an eye on my elderly neighbour.'],
    ['spark sb’s interest in sth', 'make someone interested in something', 'пробудить интерес к', 'She sparked my interest in science.'],
    ['collaborate with sb on sth', 'work together with someone', 'сотрудничать', 'I’ve collaborated with him on several projects.'],
    ['not be on speaking terms', 'not talk to each other after an argument', 'не разговаривать друг с другом', 'They’re not on speaking terms at the moment.'],
    ['be on first-name terms', 'call each other by first names', 'обращаться друг к другу по имени', 'We’re on first-name terms.'],
    ['maintain a professional relationship', 'keep things polite and work-focused', 'сохранять деловые отношения', 'They maintain a professional relationship.'],
    ['not see eye to eye (on sth)', 'disagree', 'расходиться во мнениях', 'They don’t see eye to eye on many issues.'],
    ['get on each other’s nerves', 'annoy each other', 'действовать друг другу на нервы', 'My brothers get on each other’s nerves.'],
    ['put sb at their ease', 'make someone feel relaxed', 'успокоить, расположить к себе', 'She puts people at their ease.'],
    ['push sb hard', 'make strong demands on someone', 'сильно давить, много требовать', 'He pushes his kids incredibly hard.'],
    ['keep ourselves to ourselves', 'not get involved with others', 'держаться особняком', 'We tend to keep ourselves to ourselves.'],
    ['pull your weight', 'do your fair share of the work', 'выполнять свою часть работы', 'He doesn’t pull his weight.'],
    ['cause friction', 'cause tension and disagreements', 'вызывать трения', 'It causes some friction in the office.'],
    ['I’d say (that)…', 'a careful way to give your opinion', 'я бы сказал(а), что…', 'I’d say he had a difficult childhood.'],
    ['I wouldn’t say…, just…', 'a careful way to disagree', 'я бы не сказал(а), что…, скорее…', 'I wouldn’t say it’s a disaster — just a setback.'],
    ['I’d imagine (that)…', 'I suppose', 'полагаю, что…', 'I’d imagine he’d get off.'],
    ['I would’ve thought (that)…', 'I’d expect / it seems to me', 'мне кажется, что…', 'I would’ve thought he still likes her.'],
    ['I’d talk it over with them', 'advice: discuss it', 'я бы обсудил(а) это с ними', 'If I were you, I’d talk it over with her.'],
    ['it’ll all blow over', 'the problem will pass', 'всё уляжется', 'Don’t worry — I’d imagine it’ll all blow over.']
  ]
};
