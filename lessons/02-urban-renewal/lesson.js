/* Lesson 2 · Urban renewal (Outcomes Advanced, Unit 1, SB pp. 10–11; Grammar reference p. 166)
   Content follows the Teacher's Book plan for this spread, compressed for group 6. 80-minute online lesson. */
window.LESSON = {
  id: 'l02-urban-renewal',
  number: 2,
  title: 'Urban renewal',
  titleHtml: 'Urban <em>renewal</em>',
  duration: '80 min · online',
  summary: 'Read and retell how three cities came back from crisis, talk about recovery and change, use perfect forms to show what happened first, and pitch a plan to save a town.',
  chips: ['Outcomes Advanced · Unit 1', 'SB pp. 10–11', 'Files 1–4 · SB pp. 185–197', 'Grammar reference p. 166', 'WB pp. 6–8'],

  track: [
    ['undergo', '\\bunderw(ent|go)|\\bundergo(ne|es|ing)?'], ['flourish', '\\bflourish'], ['pour money into', '\\bpour(ed|ing|s)?\\b'], ['neglected', '\\bneglect'],
    ['impose', '\\bimpos(e|ed|es|ing)'], ['demolish', '\\bdemolish'], ['soar', '\\bsoar'], ['initiate', '\\binitiat'],
    ['halt the decline', '\\bhalt'], ['decline', '\\bdecline'], ['downturn', '\\bdownturn'], ['inward investment', '\\binward investment'],
    ['regeneration', '\\bregenerat'], ['boost', '\\bboost'], ['tackle', '\\btackl'], ['present perfect', "\\b(has|have|'ve) (been |already |never |just )?\\w+ed\\b"],
    ['past perfect', "\\b(had|'d) (been |already |never )?\\w+(ed|en)\\b"], ['future perfect', '\\bwill have\\b'], ['having + V3', '\\bhaving \\w+(ed|en)\\b']
  ],

  sections: [
    { id: 'map', short: 'Plan', title: 'Lesson plan', meta: '80 minutes · online',
      blocks: [
        { type: 'map', items: [
          { t: '0–8 min', n: 'Warm-up: a city story, made bigger · hand in П1', href: '#s1' },
          { t: '8–12 min', n: 'What can hit a city?', href: '#ex-ex1' },
          { t: '12–28 min', n: 'Jigsaw: Bilbao, Bogotá, Manchester', href: '#s2' },
          { t: '28–40 min', n: 'Recovery and change', href: '#s3' },
          { t: '40–57 min', n: 'Perfect forms', href: '#s4' },
          { t: '57–77 min', n: 'Pitch: £500 million for Oldbury', href: '#s5' },
          { t: '77–80 min', n: 'Wrap-up and homework', href: '#s8' },
          { t: 'Miro', n: 'Our board for group 7', href: 'miro' }
        ] },
        { type: 'rule', title: 'Before the lesson', html: '<p>You have read your File at home: group A — File 1 (SB p. 185), group B — File 2 (p. 186), group C — File 3 (p. 197). Keep your Student’s Book open. Hand in your paragraph П1 if you haven’t yet.</p>' },
        { type: 'note', html: '<p>Группа 7, урок 2 из 8. Сегодня оценки: <b>С1 — групповой питч Oldbury</b> (критерии «Устный ответ»), сдача <b>П1</b>. Заранее разбейте группу на тройки A/B/C для чтения и подготовьте два набора сессионных залов: «по текстам» (A, B, C) и смешанные (A+B+C).</p>' }
      ] },

    { id: 's1', short: '1 Warm-up', title: 'A city story, made bigger', meta: '0–12 min · Review of Lesson 1 · SB p. 10 ex. 1',
      blocks: [
        { type: 'ex', id: 'warm', kind: 'open', src: 'Lesson 1 review', title: 'Tell it big', mode: 'Pairs · 4 min',
          instr: 'Retell something that happened to you in a city (from your Lesson 1 notes). Your partner says “Really?” — back it up! Write your best two lines here.',
          prompts: [{ q: 'My two best lines', rows: 3, meter: true }] },
        { type: 'ex', id: 'ex1', kind: 'open', src: 'SB p. 10 · ex. 1', title: 'What can hit a city?', mode: 'Breakout rooms of 3 · 4 min',
          instr: 'What effects can these have on a city? How serious are they? Which three are of greatest concern where you live, and which is of least concern? Why?<br><span class="mono" style="font-size:14px">an economic downturn · a hurricane · an armed conflict · an earthquake · flooding · a high crime rate · severe pollution · terrorism · a huge fire</span>',
          prompts: [{ q: 'Our top three concerns and why', rows: 3 }],
          model: '<ul><li><b>an economic downturn:</b> businesses go bankrupt, people are made redundant, poverty and homelessness go up</li><li><b>flooding:</b> houses are flooded, areas are evacuated, repairs cost a fortune</li><li><b>a high crime rate:</b> middle-class people leave, the area goes downhill, no-go zones appear</li><li><b>severe pollution:</b> people go out less, health suffers, the middle classes move out</li><li><b>a huge fire:</b> destroys buildings, may kill people, causes traffic chaos</li></ul>' },
        { type: 'note', html: '<p><i>an economic downturn</i> — период экономического спада; <i>an armed conflict</i> — вооружённый конфликт, ещё не война. Мониторинг по Teacher’s Book: слушайте каждую пару, записывайте устойчивые ошибки и удачные фразы — на обратной связи выпишите 3–4 полезные фразы.</p>' }
      ] },

    { id: 's2', short: '2 Jigsaw', title: 'Three cities that came back', meta: '12–28 min · SB p. 10 · Reading ex. 3–6 · Files 1–3',
      blocks: [
        { type: 'rule', title: 'How the jigsaw works online', html: '<ol><li><em>Room by text</em> (3 min): with people who read the same File, compare what you understood and check the phrases in bold.</li><li><em>Mixed room A + B + C</em> (7 min): books closed! Tell each other about your city using the bold phrases. Find three similarities.</li><li><em>Same mixed room</em>: do ex. 5 together, then discuss ex. 6.</li></ol>' },
        { type: 'ex', id: 'bold', kind: 'match', src: 'Files 1–3 · phrases in bold', title: 'Key phrases from the three texts', mode: 'Room by text · 3 min',
          instr: 'Match the phrases from the texts to their meanings.',
          items: ['expropriated the land', 'imposed restrictions', 'poured money into', 'devastated the city centre', 'badly neglected', 'boost tourism', 'discouraged inward investment', 'voices of opposition'],
          opts: [['a', 'ruined, destroyed'], ['b', 'not looked after well'], ['c', 'made investors unwilling to bring money in'], ['d', 'took the land away from its owners'], ['e', 'people who disagree and say so'], ['f', 'introduced limits'], ['g', 'invested huge amounts in'], ['h', 'increase the number of visitors']],
          key: ['d', 'f', 'g', 'a', 'b', 'h', 'c', 'e'] },
        { type: 'ex', id: 'sim', kind: 'open', src: 'SB p. 10 · ex. 4', title: 'Three similarities', mode: 'Mixed room · 7 min',
          instr: 'Books closed. After telling each other about your cities, note three things they have in common.',
          prompts: [{ q: 'My city (A, B or C) in three sentences', rows: 3, track: true }, { q: 'Three similarities', rows: 3 }],
          model: '<ul><li>All three overcame huge obstacles and used to be more run-down, divided or poor.</li><li>They all reinvented space in the city and brought the centre back to life.</li><li>They have all been victims of violence or terrorism.</li><li>Each project has been criticised for benefiting some people more than others.</li></ul>' },
        { type: 'ex', id: 'ex5', kind: 'pick', src: 'SB p. 10 · ex. 5', title: 'Which city?', mode: 'Mixed room · 4 min',
          instr: 'Decide which city each sentence refers to. Look back at the texts if you need to.',
          opts: ['Bilbao', 'Bogotá', 'Manchester'],
          items: [
            { n: 1, t: 'Some other cities have unsuccessfully tried to copy what it did.', a: 'Bilbao', note: 'the “Guggenheim effect”' },
            { n: 2, t: 'The government forced people to sell something.', a: 'Bogotá', note: 'a private country club’s land was expropriated' },
            { n: 3, t: 'Sport has played a role in the city’s redevelopment.', a: 'Manchester', note: 'National Football Museum, Manchester City' },
            { n: 4, t: 'Some of the changes were paid for by motorists.', a: 'Bogotá', note: 'petrol taxes paid for the new transport system' },
            { n: 5, t: 'It has a more diverse economy than it did in the past.', a: 'Bilbao', note: 'steel and shipbuilding → culture, tourism, technology' },
            { n: 6, t: 'It has aimed to create a child-friendly environment.', a: 'Bogotá', note: 'Peñalosa: a successful city for children' },
            { n: 7, t: 'The changes made it better able to survive a second downturn.', a: 'Bilbao', note: 'survived the 2008 recession' },
            { n: 8, t: 'A bad event turned out to be fortunate.', a: 'Manchester', note: 'the bombing gave a chance to start again' }
          ] },
        { type: 'ex', id: 'ex6', kind: 'open', src: 'SB p. 10 · ex. 6', title: 'Discuss', mode: 'Mixed room · 3 min',
          instr: 'Choose two questions.',
          prompts: [{ q: 'Which city has the most interesting story? Why?' }, { q: 'Are there comparable cities in Russia? In what ways are they similar or different?' }, { q: 'How child-friendly is your city?' }, { q: 'What cities in your country have new iconic buildings? Why do some redevelopment projects fail?' }] },
        { type: 'note', html: '<p>Культурные справки (Teacher’s Book): Энрике Пеньялоса — мэр Боготы в 1998–2001 и 2016–2019. Манчестер: взрыв ИРА 1996 года разрушил центр; Commonwealth Games 2002. Бильбао: музей Гуггенхайма (Фрэнк Гери, 1997) задуман похожим на корабль; ETA объявила о прекращении огня в 2010.</p><p>На обратной связи по ex. 5 просите доказательство из текста — «где это сказано?».</p>' }
      ] },

    { id: 's3', short: '3 Vocabulary', title: 'Recovery and change', meta: '28–40 min · SB p. 11 · Vocabulary ex. 7–8',
      blocks: [
        { type: 'ex', id: 'ex7', kind: 'gap', src: 'SB p. 11 · ex. 7', title: 'Say it in a more formal way', mode: 'Individually, then compare · 6 min', wide: false,
          instr: 'Replace the words in brackets with the correct form of these verbs. Then decide which synonym is more common in academic or written English.',
          bank: ['undergo', 'flourish', 'pour', 'be neglected', 'impose', 'demolish', 'soar', 'initiate'],
          items: [
            { n: 1, t: 'The city has ___ huge changes in recent years – not entirely for the better.', hint: '(gone through)', a: ['undergone'], note: 'undergone is more academic' },
            { n: 2, t: 'The government will have ___ £3 billion into the transport system by the end of this parliament.', hint: '(invested)', a: ['poured'], note: 'here invested is the more academic word' },
            { n: 3, t: 'The slums were ___ to make way for a golf course and the inhabitants were re-housed nearby.', hint: '(knocked down)', a: ['demolished'], note: 'demolished is more academic' },
            { n: 4, t: 'The previous mayor ___ an ambitious plan to develop the city centre, but it’s run into financial difficulties.', hint: '(set out)', a: ['initiated'], note: 'initiated is more academic' },
            { n: 5, t: 'The whole area has ___ and the council has managed to secure EU funding to halt the decline.', hint: '(become run-down)', a: ['been neglected'], note: 'been neglected is more academic' },
            { n: 6, t: 'The city has managed to attract a lot of inward investment and businesses are springing up and ___.', hint: '(doing very well)', a: ['flourishing'], note: 'flourishing is more academic' },
            { n: 7, t: 'Crime had ___ in the 1980s and the mayor’s zero-tolerance policy was credited with reversing the trend.', hint: '(gone up a lot)', a: ['soared'], note: 'soared is more academic' },
            { n: 8, t: 'In order to ease congestion, the government ___ restrictions on car use.', hint: '(brought in)', a: ['imposed'], note: 'imposed is more academic' }
          ] },
        { type: 'ex', id: 'ex8', kind: 'open', src: 'SB p. 11 · ex. 8', title: 'One example of each', mode: 'Pairs · 5 min',
          instr: 'Give one example of each. Use the verb in your answer.',
          prompts: [{ q: '1 a place or institution that has undergone big changes', track: true }, { q: '2 a place or section of society that has been neglected', track: true }, { q: '3 a plan or strategy the government has initiated', track: true }, { q: '4 someone or something that is flourishing', track: true }, { q: '5 something the government has poured money into', track: true }] },
        { type: 'note', html: '<p>Дополнительно (Teacher’s Book): письменный перевод туда и обратно — The city has gone through huge changes – not entirely for the better · I guess it’s probably for the best · It was a change for the worse · He took a turn for the worse last night. Студенты переводят на русский, затем без оригинала — обратно на английский и сравнивают.</p>' }
      ] },

    { id: 's4', short: '4 Grammar', title: 'Perfect forms', meta: '40–57 min · SB p. 11 · Grammar ex. 9–10 · Grammar reference p. 166',
      blocks: [
        { type: 'rule', title: 'What perfect forms do', html: '<p>Perfect forms use <em>have + past participle</em>; passive perfect forms use <em>have + been + past participle</em>. They show that something happened or started <em>before</em> another event or point in time.</p><ul><li><em>Present perfect</em> — before now, with a present result: The museum <u>has become</u> world-famous.</li><li><em>Past perfect</em> — before another past event: Bilbao <u>had been dominated</u> by steel plants (before the 1980s).</li><li><em>Modal + have + V3</em> — before a point in the future or a possibility about the past: we <u>will have built</u> … · other cities <u>may have failed</u> …</li><li><em>Having + V3</em> — one action finished before the next: <u>Having cleared</u> one space, the administration then …</li></ul>' },
        { type: 'ex', id: 'ex9', kind: 'gap', src: 'SB p. 11 · ex. 9', title: 'Sentences from the texts', mode: 'Pairs · 6 min', wide: true,
          instr: 'Complete the sentences with the correct perfect form. After checking, open the answers to see what each event happened before.',
          items: [
            { n: 1, t: 'Since its completion in 1997, the Guggenheim Museum in Bilbao ___ one of the most famous buildings in the world.', hint: '(become)', a: ['has become'], note: 'before now' },
            { n: 2, t: 'There ___ some voices of opposition that suggest the process did not benefit the working-class people …', hint: '(be)', a: ['have been'], note: 'before now' },
            { n: 3, t: 'The slum ___ effectively ___ a barrier between the affluent north and the more deprived south of the city.', hint: '(create)', a: ['had', 'created'], note: 'before it was demolished' },
            { n: 4, t: 'Up until the early 80s, Bilbao ___ by steel plants and shipbuilding.', hint: '(dominate)', a: ['had been dominated'], note: 'before the economic downturn of the late 1980s' },
            { n: 5, t: 'If other mayors ___ the city’s finances before him … the changes wouldn’t have been so successful.', hint: '(not / secure)', a: [["hadn't secured", 'had not secured']], note: 'before Peñalosa’s reforms' },
            { n: 6, t: 'If we ever achieve a successful city for children, we ___ the perfect city for all citizens.', hint: '(build)', a: ['will have built'], note: 'before achieving it in the future' },
            { n: 7, t: 'Other cities trying to replicate the so-called ‘Guggenheim effect’ ___ because they didn’t take up the other strands of Bilbao’s project.', hint: '(fail · it’s possible)', a: [['may have failed', 'might have failed', 'could have failed']], note: 'before now · possibility' },
            { n: 8, t: '___ one space, Peñalosa’s administration then expropriated the land of a private country club.', hint: '(clear)', a: ['having cleared'], note: 'before expropriating the country club' }
          ] },
        { type: 'ex', id: 'gr1', kind: 'gap', src: 'Grammar reference p. 166 · ex. 1', title: 'Perfect or not?', mode: 'Individually · 7 min', wide: true,
          instr: 'Complete each pair with the verb given: one sentence needs a perfect form, the other doesn’t.',
          items: [
            { h: '1 not / call' },
            { n: 'a', t: 'If I ___ by six, it means I’m not coming.', a: [["haven't called", 'have not called']] },
            { n: 'b', t: 'As a rule, I ___ anyone after nine at night.', a: [["don't call", 'do not call']] },
            { h: '2 be done up' },
            { n: 'a', t: 'It ___ a few years ago, but the place is already falling apart.', a: ['was done up'] },
            { n: 'b', t: 'It used to be very run-down, but it ___.', a: [['has been done up', "'s been done up"]] },
            { h: '3 be struck' },
            { n: 'a', t: 'It was the second time the city ___ by an earthquake.', a: ['had been struck'] },
            { n: 'b', t: 'Our house ___ by lightning last year.', a: ['was struck'] },
            { h: '4 change' },
            { n: 'a', t: 'I doubt anything ___ by this time next year.', a: ['will have changed'] },
            { n: 'b', t: 'I think things ___ if the Freedom Party wins power in the election.', a: ['will change'] },
            { h: '5 consult' },
            { n: 'a', t: 'They should ___ the people who live here to find out what they want.', a: ['consult'] },
            { n: 'b', t: 'They should ___ more widely, but they just weren’t interested in what others wanted.', a: ['have consulted'] },
            { h: '6 be' },
            { n: 'a', t: 'I wish he ___ here now.', a: [['was', 'were']] },
            { n: 'b', t: 'It sounds like you had a great time. I wish I ___ there.', a: ['had been'] },
            { h: '7 spend' },
            { n: 'a', t: '___ millions on the project, the city centre still looks awful!', a: ['having spent'] },
            { n: 'b', t: '___ any amount of time there, you quickly start to feel stressed.', a: ['spending'] },
            { h: '8 undergo' },
            { n: 'a', t: 'Following the disaster, the city ___ a huge transformation.', a: ['underwent'] },
            { n: 'b', t: 'When the disaster struck, the city ___ a number of changes already.', a: ['had undergone'] }
          ] },
        { type: 'ex', id: 'ex10', kind: 'open', src: 'SB p. 11 · ex. 10', title: 'Your city, then and next', mode: 'Pairs · 5 min',
          instr: 'Discuss two questions. Try to use a different perfect form in each answer.',
          prompts: [{ q: 'How has your city changed in the last few years?', track: true }, { q: 'How will your city or country have changed in ten years’ time? Why?', track: true }, { q: 'What are the two most important events in your city’s or country’s history? Why?' }, { q: 'Can you think of places that have suffered any of the events in ex. 1? What happened?' }] },
        { type: 'note', html: '<p>Teacher’s Book: первый пункт ex. 9 — вместе, остальные в парах; ответы студенты сверяют по Grammar reference p. 166. Перед ex. 10 соберите 2–3 изменения в вашем городе от группы, чтобы задать тон. Важно, чтобы студенты видели связь present perfect с результатом в настоящем.</p>' }
      ] },

    { id: 's5', short: '5 Oldbury', title: '£500 million for Oldbury', meta: '57–77 min · SB p. 11 · Speaking ex. 11–12 · File 4 p. 186 · С1',
      blocks: [
        { type: 'rule', title: 'The town (SB File 4, p. 186)', html: '<p><em>Oldbury</em>: 250,000 people · £500 million of funding to halt years of decline · a chemical works on the outskirts produces nasty fumes · deprived areas and high unemployment · a small, very run-down historical centre, 300 years old.</p>' },
        { type: 'ex', id: 'ex11', kind: 'budget', src: 'SB p. 11 · ex. 11', title: 'Plan the spending', mode: 'Breakout rooms of 4 · 10 min',
          instr: 'Put the ideas in order of priority, decide how much to spend on each and give an approximate timescale. One person shares the screen and fills it in.',
          total: 500, unit: '£m',
          timescales: ['within a year', '1–2 years', '3–5 years', '5–10 years'],
          items: ['Set up a recycling centre', 'Provide grants for people starting up new businesses', 'Restore the historical centre and build a tourist centre', 'Provide low-interest loans to improve homes', 'Shut down the chemical works and relocate it on the coast', 'Set up youth centres to give young unemployed people something to do', 'Recruit more officers to police the poorer parts of the city', 'Plant trees in every street and increase public green space'] },
        { type: 'ex', id: 'ex12', kind: 'open', src: 'SB p. 11 · ex. 12', title: 'Write and give your pitch', mode: 'Rooms · 7 min to write · 2 min each to present',
          instr: 'Write a short pitch for your proposal. Explain the reasons for your choices, the timescale for the different strands and what the outcomes will be. Use the vocabulary and at least two perfect forms.',
          prompts: [{ q: 'Our pitch', rows: 9, track: true, words: [150, 250] }],
          checklist: ['Opening: the problem in one sentence', 'Top priority and why', 'Money and timescale for each strand', 'Outcomes: by 2030 Oldbury will have …', 'Recovery and change vocabulary (initiate, pour into, flourish …)'],
          modelLabel: 'Useful language',
          model: '<ul><li><b>Opening:</b> Oldbury has been in decline for years. Our plan tackles the three biggest problems first.</li><li><b>Priorities:</b> First and foremost, we would … · Our top priority is … because … · We have decided not to … since …</li><li><b>Money and time:</b> We would pour £150 million into … over the next three years. · Within a year, we would initiate …</li><li><b>Outcomes:</b> By 2030, unemployment will have fallen … · Having relocated the chemical works, we will … · Local businesses will flourish …</li></ul>' },
        { type: 'note', html: '<p><b>С1 — групповой питч</b> (критерии «Устный ответ»). Teacher’s Book: группы по четыре, новые партнёры; сначала разберите незнакомые слова File 4, затем приоритеты и бюджет. Каждый в группе участвует в подготовке; выступает один, остальные отвечают на 1 вопрос класса. На обратной связи — удачные примеры, исправление ошибок, лучшие формулировки.</p>' }
      ] },

    { id: 's6', short: '6 Words', title: 'Lesson words', meta: 'Recovery and change · phrases from the texts', blocks: [{ type: 'words' }] },

    { id: 's7', short: '7 Homework', title: 'Homework', meta: 'Grammar reference p. 166 · WB pp. 6–8 · due Lesson 3',
      blocks: [
        { type: 'ex', id: 'gr2', kind: 'gap', src: 'Grammar reference p. 166 · ex. 2', title: 'Key word transformations', mode: 'Homework · 3–5 words', wide: true,
          instr: 'Complete the second sentence so that it has a similar meaning to the first. Use the word in capitals and three to five words.',
          items: [
            { n: 1, t: '<span class="hint">I don’t think my flight will get in in time to catch the last train home.</span><br>The last train ___ the time my flight gets in. <b>LEFT</b>', a: ['will have left by'] },
            { n: 2, t: '<span class="hint">The first time I saw anything like that was when I went to Mumbai.</span><br>I ___ like that before I went to Mumbai. <b>NEVER</b>', a: ['had never seen anything'] },
            { n: 3, t: '<span class="hint">I’m not sure I can give you any advice as it’s so long since I’ve been there.</span><br>Not ___, I don’t think I can give you any advice. <b>RECENTLY</b>', a: ['having been there recently'] },
            { n: 4, t: '<span class="hint">When the current government came to power, they largely continued the previous government’s policies.</span><br>The current government’s policies ___ by the previous one. <b>INITIATED</b>', a: ['had been initiated'] },
            { n: 5, t: '<span class="hint">People were moved out of the area before the storm hit, so there were very few casualties.</span><br>There would have been a lot more casualties if ___ before the storm. <b>EVACUATED</b>', a: [['people had not been evacuated', "people hadn't been evacuated", 'they had not been evacuated', "they hadn't been evacuated"]] },
            { n: 6, t: '<span class="hint">As far as I can tell, things are much better than they were when I was there last.</span><br>Things appear ___ since my last visit. <b>IMPROVED</b>', a: ['to have improved'] }
          ] },
        { type: 'rule', title: 'Workbook reading: “All change in Curitiba!” (WB pp. 6–7)', html: '<p>Read the article in your Workbook, then do ex. 5–7 here.</p>' },
        { type: 'ex', id: 'wb5', kind: 'pick', src: 'WB p. 6 · ex. 5', title: 'In what order?', mode: 'Homework', instr: 'In what order do you learn about these things? Choose 1–6.',
          opts: ['1', '2', '3', '4', '5', '6'],
          items: [{ t: 'population increase', a: '5' }, { t: 'a method to deal with waste', a: '1' }, { t: 'protest against changes', a: '4' }, { t: 'the creation of green spaces', a: '2' }, { t: 'concerns for the future', a: '6' }, { t: 'an idea to improve travel', a: '3' }] },
        { type: 'ex', id: 'wb6', kind: 'pick', src: 'WB p. 6 · ex. 6', title: 'True or false?', mode: 'Homework', opts: ['True', 'False'],
          items: [
            { n: 1, t: 'Curitiba’s difficulties are unusual when compared to other large cities.', a: 'False' },
            { n: 2, t: 'In Curitiba, people are rewarded for collecting waste.', a: 'True' },
            { n: 3, t: 'Lawnmowers are used to maintain all the grassy areas in the city.', a: 'False' },
            { n: 4, t: 'Lerner invested more money in buses than trains because buses were faster.', a: 'False' },
            { n: 5, t: 'A number of children prevented motorists from entering the new pedestrian centre.', a: 'True' },
            { n: 6, t: 'Retail companies suffered as a result of Lerner’s initiatives.', a: 'False' },
            { n: 7, t: 'Curitiba is now a more affluent city.', a: 'True' },
            { n: 8, t: 'The bus system is less popular now than it was initially.', a: 'True' }
          ] },
        { type: 'ex', id: 'wb7', kind: 'gap', src: 'WB p. 6 · ex. 7', title: 'One particle', mode: 'Homework', instr: 'Complete the sentences with one particle in each gap. The expressions are all from the article.',
          items: [
            { n: 1, t: 'What is the government doing to deal ___ the problem of urban unemployment?', a: ['with'] },
            { n: 2, t: 'The tenants have come ___ with a plan to do up the tower block.', a: ['up'] },
            { n: 3, t: 'The council keeps the lawns ___ good trim.', a: ['in'] },
            { n: 4, t: 'At first, residents opposed plans for a new city skate park, but the skaters eventually won them ___.', a: ['over'] },
            { n: 5, t: 'Commuters are ___ in arms about the new parking regulations.', a: ['up'] },
            { n: 6, t: 'The cost of the new stadium has put the council’s finances ___ enormous strain.', a: ['under'] }
          ] },
        { type: 'ex', id: 'wb81', kind: 'gap', src: 'WB p. 8 · ex. 1', title: 'New Orleans: recovery and change', mode: 'Homework',
          instr: 'Complete the text from WB p. 8 with the correct form of: decline · flourish · neglect · initiate · pour · demolish · soar · undergo.',
          items: [
            { n: 1, t: '… many buildings were so severely damaged that they had to be ___.', a: ['demolished'] },
            { n: 2, t: 'The task of ___ plans for recovery seemed immense.', a: ['initiating'] },
            { n: 3, t: '… a unique opportunity for improving areas which had long been in ___.', a: ['decline'] },
            { n: 4, t: 'Several run-down, ___ buildings were replaced by new schools …', a: ['neglected'] },
            { n: 5, t: '… the number of pupils ___ within the first two years of them opening.', a: ['soaring'] },
            { n: 6, t: '… large parts of the city had to ___ major reconstruction.', a: ['undergo'] },
            { n: 7, t: 'As a result, the local building industry has ___ in recent years.', a: ['flourished'] },
            { n: 8, t: 'Meanwhile, entrepreneurs have ___ funds into researching new methods of flood prevention.', a: ['poured'] }
          ] },
        { type: 'ex', id: 'wb82', kind: 'pick', src: 'WB p. 8 · ex. 2', title: 'Find six mistakes', mode: 'Homework',
          instr: 'Six sentences contain a mistake with perfect forms. Mark each sentence; then open the answers to see the corrections.',
          opts: ['correct', 'mistake'],
          items: [
            { n: 1, t: 'She said she hasn’t been to Buenos Aires before last year.', a: 'mistake', note: 'hadn’t been' },
            { n: 2, t: 'My family has lived in Milan until 1994.', a: 'mistake', note: 'lived' },
            { n: 3, t: 'I’m sure there’s a reason why he didn’t turn up. He may have thought you meant half past eight.', a: 'correct' },
            { n: 4, t: 'The town hall was reopened last year, had been completely rebuilt after the fire.', a: 'mistake', note: 'having been' },
            { n: 5, t: 'It is believed that the number of university graduates will had doubled by 2020.', a: 'mistake', note: 'will double / will have doubled' },
            { n: 6, t: 'By the time we got there, the concert finished.', a: 'mistake', note: 'had finished' },
            { n: 7, t: 'Where had you been? We’ve been waiting here for hours and hours!', a: 'mistake', note: 'have you been' },
            { n: 8, t: 'Having visited the city several times, Kasia was starting to feel at home there.', a: 'correct' }
          ] },
        { type: 'ex', id: 'wb83', kind: 'gap', src: 'WB p. 8 · ex. 3', title: 'The right perfect form', mode: 'Homework', wide: true,
          instr: 'Complete the sentences with the correct form of the verbs in brackets.',
          items: [
            { n: 1, t: 'It was the third time the city ___ by an earthquake.', hint: '(destroy)', a: ['had been destroyed'] },
            { n: 2, t: 'For the last two years, the city council ___ the centre.', hint: '(develop)', a: [['has been developing', 'has developed']] },
            { n: 3, t: 'He ___ a town planner ever since 2010.', hint: '(be)', a: ['has been'] },
            { n: 4, t: 'The city may ___ from the recession, but it’s still facing problems with crime.', hint: '(recover)', a: ['have recovered'] },
            { n: 5, t: 'At the time I met them, they ___ from city to city for many years, never making a permanent home.', hint: '(travel)', a: [['had been travelling', 'had been traveling', 'had travelled']] },
            { n: 6, t: 'The improved transport network is thought to ___ an influx of new entrepreneurs to the area.', hint: '(encourage)', a: ['have encouraged'] },
            { n: 7, t: '___ up as part of the council’s ‘clean up the city’ campaign, the area is now more popular with affluent families.', hint: '(do)', a: [['having been done', 'done']] },
            { n: 8, t: 'The new motorway ___ by this time next month.', hint: '(complete)', a: [['will have been completed', 'will be completed']] }
          ] },
        { type: 'rule', title: 'Optional: an urban myth', html: '<p>Read “Buying into the myth” (SB pp. 12–13) and find an urban legend about your city to retell in class (ex. 11b).</p>' },
        { type: 'note', html: '<p>Teacher’s Book, web research (по желанию): как возрождаются Detroit, Cleveland, Baltimore — короткое сообщение на следующем занятии. Ключи WB по ex. 2 и 3 стр. 8 приведены по WB Answer Key.</p>' }
      ] },

    { id: 's8', short: '8 Reflect', title: 'Reflect and send', meta: '77–80 min',
      blocks: [{ type: 'cando' }, { type: 'submit' },
        { type: 'note', html: '<p>Попросите каждого нажать «Send my work»: в таблицу уйдут бюджет и текст питча группы (С1) с именами.</p>' }] }
  ],

  cando: ['I can understand and retell a text about how a city recovered.', 'I can use verbs of recovery and change, and choose the more formal one.', 'I can use perfect forms to show what happened first.', 'I can present a short proposal and give reasons.'],

  words: [
    ['undergo (changes)', 'go through, experience', 'претерпевать (изменения)', 'The district has undergone a complete transformation.'],
    ['flourish', 'grow and do very well', 'процветать', 'Small businesses are flourishing in the old port.'],
    ['pour money into', 'invest a very large amount in', 'вкладывать огромные деньги', 'The city has poured money into public transport.'],
    ['be neglected', 'not be looked after', 'быть заброшенным', 'The riverside had been neglected for decades.'],
    ['impose (restrictions)', 'officially introduce limits', 'вводить (ограничения)', 'The council imposed restrictions on car use.'],
    ['demolish', 'knock down a building', 'сносить', 'The old factory was demolished in 2019.'],
    ['soar', 'go up to a very high level', 'резко взлетать', 'House prices soared after the metro opened.'],
    ['initiate', 'start (a plan, a process)', 'инициировать, начинать', 'The mayor initiated an ambitious regeneration plan.'],
    ['an economic downturn', 'a period when the economy gets worse', 'экономический спад', 'Many shops closed during the downturn.'],
    ['halt the decline', 'stop things getting worse', 'остановить упадок', 'The funding is meant to halt the decline of the centre.'],
    ['inward investment', 'money from outside coming into an area', 'внешние инвестиции', 'Tax breaks attracted inward investment.'],
    ['expropriate (land)', 'officially take property from its owner', 'изымать, экспроприировать', 'The city expropriated the land to build a park.'],
    ['voices of opposition', 'people who disagree publicly', 'голоса несогласных', 'There were voices of opposition from local residents.'],
    ['tackle congestion', 'deal with traffic problems', 'бороться с пробками', 'Bus lanes were introduced to tackle congestion.'],
    ['devastate', 'damage very badly', 'опустошать, разрушать', 'The bomb devastated the city centre.'],
    ['boost tourism', 'increase the number of visitors', 'стимулировать туризм', 'The new museum boosted tourism overnight.'],
    ['lose its soul', 'lose what made it special', 'утратить душу', 'Some say the city lost its soul when the markets closed.']
  ]
};
