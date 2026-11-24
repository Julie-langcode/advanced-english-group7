/* Extra lesson · Reading: Lonely and connected (back-up material for the project presentation day)
   Article: "Young adults say they're happy with their friendships. So why do so many still feel disconnected?"
   Rick Hellman, KU News Service, University of Kansas, 12 November 2025. Students read the article on the original site (link below).
   Pre-reading → gist → detailed reading → language from the text → critical reading → personal response. 25–30 min. */
window.LESSON = {
  id: 'l08-reading-lonely-connected',
  number: 8,
  title: 'Reading: Lonely and connected',
  titleHtml: 'Reading: <em>lonely and connected</em>',
  duration: '25–30 min · online',
  summary: 'Can you be happy with your friends and still feel lonely? Read about a new study of young adults, learn ten chunks from a real article and decide how far the findings apply to you.',
  chips: ['Extra reading', 'Real article · KU News, Nov 2025', 'Relationships'],

  track: [
    ['the popular narrative', 'popular narrative'], ['ongoing life changes', 'ongoing (life )?changes'], ['prolonged instability', 'prolonged instability'],
    ['delayed intimacy', 'delayed intimacy'], ['social well-being', 'social well-?being'], ['the turbulence of modern life', 'turbulence'],
    ['quietly erode', '\\berod(e|es|ed|ing)'], ['perpetual change', 'perpetual'], ['growing pains', 'growing pains'], ['untethered', 'untethered'],
    ['ontological security', 'ontological security'], ["I'd say", "\\b(i'd|i would) say"], ['If I were you', 'if i were you']
  ],

  sections: [
    { id: 'map', short: 'Plan', title: 'Lesson plan', meta: '25–30 minutes',
      blocks: [
        { type: 'map', items: [
          { t: '0–3 min', n: 'Lead-in', href: '#s1' },
          { t: '3–5 min', n: 'Predict from the headline', href: '#s2' },
          { t: '5–9 min', n: 'Read for gist', href: '#s3' },
          { t: '9–17 min', n: 'Read for detail', href: '#s4' },
          { t: '17–23 min', n: 'Language from the text', href: '#s5' },
          { t: '23–27 min', n: 'Read critically', href: '#s6' },
          { t: '27–30 min', n: 'Your response', href: '#s7' },
          { t: 'Board', n: 'Our Miro board ↗', href: 'miro' }
        ] },
        { type: 'rule', title: 'The article', html: '<p><a href="https://news.ku.edu/news/article/young-adults-say-theyre-happy-with-their-friendships-so-why-do-so-many-still-feel-disconnected" target="_blank" rel="noopener"><b>Young adults say they’re happy with their friendships. So why do so many still feel disconnected?</b> ↗</a></p><p>Rick Hellman · KU News Service, University of Kansas · 12 November 2025 · about 550 words, 10 paragraphs.</p><p>Open the article in a new tab and keep this page open next to it. Don’t open it yet — wait for the gist task!</p>' },
        { type: 'note', html: '<p>Запасной урок на день защиты проектов. Текст студенты читают на сайте университета по ссылке; задания и автопроверка здесь. Ответы студентам не показываются.</p><p>Если времени мало: s3 → s4 → s5, остальное — по желанию или дома.</p>' }
      ] },

    { id: 's1', short: '1 Lead-in', title: 'Lead-in', meta: '3 min',
      blocks: [
        { type: 'ex', id: 'lead', kind: 'open', src: 'Lead-in', title: 'Friends and loneliness', mode: 'Pairs or chat · 3 min',
          prompts: [
            { q: 'On a scale of 1 to 10, how happy are you with your friendships right now?', rows: 1 },
            { q: 'Have you ever felt lonely in a room full of people? What was it like?', rows: 2, track: true }
          ],
          model: '<p><i>I’d say about seven. I’ve got good friends, but most of them are back home, so sometimes I feel a bit lonely here.</i></p>' }
      ] },

    { id: 's2', short: '2 Predict', title: 'Predict from the headline', meta: '2 min',
      blocks: [
        { type: 'lead', html: 'The headline: <b>“Young adults say they’re happy with their friendships. So why do so many still feel disconnected?”</b>' },
        { type: 'ex', id: 'pred', kind: 'open', src: 'Prediction', title: 'Three possible reasons', mode: 'Individually · 2 min',
          instr: 'Before you read, guess three reasons why young people might feel lonely even if they’re happy with their friends.',
          prompts: [{ q: 'My three guesses', rows: 3 }] },
        { type: 'note', html: '<p>Соберите догадки на Miro и вернитесь к ним после R3. Обычно называют social media, переезд, занятость. В статье социальные сети не упоминаются вообще.</p>' }
      ] },

    { id: 's3', short: '3 Gist', title: 'Read for gist', meta: '2 minutes reading · 4 min',
      blocks: [
        { type: 'lead', html: 'Now open the article. You’ve got <b>two minutes</b> — don’t worry about every word.' },
        { type: 'ex', id: 'gist', kind: 'pick', src: 'Gist', title: 'Which summary is closest to the article?', mode: 'Individually · 2 min',
          opts: ['a', 'b', 'c'],
          items: [{ n: 1, t: '<b>a</b> Young adults have fewer friends than previous generations, which is why they feel lonely.<br><b>b</b> Many young adults are happy with their friends but still feel lonely, largely because their lives are full of change and uncertainty.<br><b>c</b> Social media is the main cause of loneliness among young adults.', a: 'b' }] },
        { type: 'ex', id: 'gist2', kind: 'open', src: 'Gist', title: 'Back to your guesses', mode: 'Chat · 1 min',
          prompts: [{ q: 'Which of your guesses were right? Was anything missing from the article?', rows: 2 }] }
      ] },

    { id: 's4', short: '4 Detail', title: 'Read for detail', meta: '8 min',
      blocks: [
        { type: 'ex', id: 'tfng', kind: 'pick', src: 'Detailed reading', title: 'True, False or Not given?', mode: 'Individually, then compare in pairs · 6 min',
          instr: 'Read the article carefully. For each answer, be ready to say <b>which paragraph</b> and <b>which words</b> helped you.',
          opts: ['True', 'False', 'Not given'],
          items: [
            { n: 1, t: 'The researchers surveyed nearly 5,000 Americans.', a: 'True' },
            { n: 2, t: 'Most young adults in the study find it hard to make new friends.', a: 'False', note: 'they’re confident about making new ones' },
            { n: 3, t: 'Social media is one of the main causes of loneliness identified in the study.', a: 'Not given', note: 'social media isn’t mentioned' },
            { n: 4, t: 'College-educated women may be especially affected by ongoing instability.', a: 'True' },
            { n: 5, t: 'People with the strongest social well-being usually had the largest number of friends.', a: 'False', note: 'fewer friends, but more stable networks' },
            { n: 6, t: 'Young adults have been delaying big life decisions since the 1990s.', a: 'True' },
            { n: 7, t: 'Jeffrey Hall believes young people are either lonely or connected.', a: 'False', note: 'many experience both at the same time' },
            { n: 8, t: 'The researchers see loneliness in young adulthood as a sign of permanent isolation.', a: 'False', note: 'growing pains, not persistent isolation' }
          ] },
        { type: 'ex', id: 'deep', kind: 'open', src: 'Detailed reading', title: 'Think about the meaning', mode: 'Pairs · 2 min',
          prompts: [
            { q: 'What does “ontological security” mean? Explain in your own words.', rows: 2, track: true },
            { q: 'Which life transitions does the article mention?', rows: 2 },
            { q: 'Why might stability matter more than the number of friends you have?', rows: 2 }
          ],
          model: '<p>1 a sense of predictability and belonging — feeling that your life is stable and you know where you belong · 2 moving, changing jobs, starting new relationships, finishing a degree; putting off buying a home, getting married, having children · 3 open answer</p>' }
      ] },

    { id: 's5', short: '5 Language', title: 'Language from the text', meta: '6 min',
      blocks: [
        { type: 'ex', id: 'chunks', kind: 'match', src: 'From the article', title: 'Match the chunks to their meanings', mode: 'Pairs · 3 min',
          instr: 'Find the chunks in the article first — the context will help you.',
          items: ['the popular narrative', 'ongoing life changes', 'prolonged instability', 'delayed intimacy', 'the turbulence of modern life', 'quietly erode something', 'perpetual change', 'growing pains', 'untethered'],
          opts: [['a', 'problems that are a normal part of developing'], ['b', 'not connected or attached to anything'], ['c', 'the story most people believe'], ['d', 'change that never stops'], ['e', 'a long period without stability'], ['f', 'slowly damage something without people noticing'], ['g', 'changes that keep happening'], ['h', 'the chaos and fast pace of life today'], ['i', 'starting close relationships later in life']],
          key: ['c', 'g', 'e', 'i', 'h', 'f', 'd', 'a', 'b'] },
        { type: 'ex', id: 'chgap', kind: 'gap', select: true, src: 'Practice', title: 'Use the chunks', mode: 'Individually · 3 min',
          bank: ['erode', 'growing', 'narrative', 'untethered', 'well-being'],
          items: [
            { n: 1, t: 'The first year at university is full of ___ pains — it’s normal to feel a bit lost.', a: ['growing'] },
            { n: 2, t: 'Constant stress can quietly ___ even the closest friendship.', a: ['erode'] },
            { n: 3, t: 'The popular ___ is that young people are glued to their phones and don’t want to connect.', a: ['narrative'] },
            { n: 4, t: 'After three moves in two years, she felt completely ___ — she didn’t belong anywhere.', a: ['untethered'] },
            { n: 5, t: 'A good routine and a few reliable friends can really boost your social ___.', a: ['well-being'] }
          ] },
        { type: 'note', html: '<p>Ключ: 1c · 2g · 3e · 4i · 5h · 6f · 7d · 8a · 9b. Просите сначала найти чанк в тексте и только потом выбирать значение.</p><p>Связь с темой: <i>growing pains</i> ↔ <i>go through a rough patch</i>; <i>quietly erode</i> ↔ <i>cause friction</i>.</p>' }
      ] },

    { id: 's6', short: '6 Critical', title: 'Read critically', meta: '4 min',
      blocks: [
        { type: 'ex', id: 'crit', kind: 'open', src: 'Critical reading', title: 'How far can we trust it?', mode: 'Pairs · 4 min',
          prompts: [
            { q: 'Who published this text, and why? Is it a news article or a press release?', rows: 2 },
            { q: 'What don’t we know about the study from this text?', rows: 2 },
            { q: 'The study surveyed Americans. Would the results be the same in Russia? Why / why not?', rows: 2, track: true },
            { q: 'Does the article actually answer the question in its headline?', rows: 1 }
          ],
          model: '<p>1 the university’s own news service — it promotes the university’s research · 2 the age range of “young adults”, how the survey was done, any percentages · 3 open · 4 partly: change and instability, “growing pains”</p>' }
      ] },

    { id: 's7', short: '7 Response', title: 'Your response', meta: '3–5 min',
      blocks: [
        { type: 'ex', id: 'resp', kind: 'open', src: 'Speaking', title: 'Lonely and connected — and you?', mode: 'Groups of 3 · 4 min',
          prompts: [
            { q: 'Which big transitions have you gone through in the last year?', rows: 2 },
            { q: 'What gives you a sense of “ontological security” — people, places, routines?', rows: 2, track: true },
            { q: 'What would you advise a first-year student who has friends but still feels lonely?', rows: 2, track: true }
          ],
          checklist: ['I used a chunk from the article', 'I gave advice with would (I’d…, If I were you, I’d…)'] },
        { type: 'ex', id: 'exit', kind: 'open', src: 'Wrap-up', title: 'One chunk to keep', mode: '1 min',
          prompts: [{ q: 'One chunk from the article I’d like to use', rows: 1, track: true }] }
      ] },

    { id: 's8', short: '8 Words', title: 'Lesson words', meta: 'From the article', blocks: [{ type: 'words' }] },

    { id: 's9', short: '9 Send', title: 'Reflection', meta: '1 min', blocks: [{ type: 'cando' }, { type: 'submit' }] }
  ],

  cando: ['I can read a real article quickly for the main idea.', 'I can find evidence in a text for my answers.', 'I can use chunks from the article to talk about friendship and change.', 'I can think critically about who wrote a text and why.'],

  words: [
    ['the popular narrative', 'the story most people believe', 'расхожее мнение', 'We wanted to challenge the popular narrative.'],
    ['ongoing life changes', 'changes that keep happening', 'непрекращающиеся перемены', 'Ongoing life changes can make friendships feel fragile.'],
    ['prolonged instability', 'a long period without stability', 'затянувшаяся нестабильность', 'Prolonged instability affects how connected we feel.'],
    ['delayed intimacy', 'starting close relationships later', 'отложенная близость', 'Delayed intimacy is common among young adults.'],
    ['social well-being', 'feeling good about your social life', 'социальное благополучие', 'Stability anchors social well-being.'],
    ['the turbulence of modern life', 'the chaos and fast pace of life today', 'суматоха современной жизни', 'The turbulence of modern life can leave people feeling alone.'],
    ['quietly erode sth', 'slowly damage sth without people noticing', 'незаметно подтачивать', 'Stress can quietly erode a friendship.'],
    ['perpetual change', 'change that never stops', 'постоянные перемены', 'Life in your twenties is a time of perpetual change.'],
    ['growing pains', 'problems that are a normal part of developing', '«болезни роста»', 'Loneliness at this age may just be growing pains.'],
    ['untethered', 'not connected to anything', 'без опоры, не привязанный', 'After moving cities, he felt untethered.'],
    ['ontological security', 'a sense of predictability and belonging', 'онтологическая безопасность', 'Routines give us a sense of ontological security.']
  ]
};
