/* Lesson 8 · Conflict and resolution: clear the air (Outcomes Advanced, Unit 6, SB pp. 50–53)
   Follows "Lesson Plan · Conflict and Resolution · Lesson 1" and its script:
   warm-up (Relationships review) → why we argue → arguments and discussions → listening (Track 17)
   → defending and excusing → wish and if only → conversation practice → wrap-up. 90-minute online lesson. */
window.LESSON = {
  id: 'l09-conflict-arguments',
  number: 9,
  title: 'Conflict and resolution: clear the air',
  titleHtml: 'Conflict and resolution: <em>clear the air</em>',
  duration: '90 min · online',
  summary: 'Yes, there is a good way to argue! Learn the phrases that calm an argument down (and the ones that make it worse), defend yourself without starting a war, and talk about what you wish were different.',
  chips: ['Outcomes Advanced · Unit 6', 'SB pp. 50–53', 'Audio 17', 'Wish and if only'],

  track: [
    ['see it from my point of view', 'point of view'], ['twist my words', 'twist(ing|ed)? (my|your|his|her) words'], ['get our wires crossed', 'wires crossed'],
    ['raise your voice', 'rais(e|ing|ed) (your|my|his|her) voice'], ['clear the air', 'clear(ed|ing)? the air'], ['move on', '\\bmove on'],
    ['it came out all wrong', 'came out (all )?wrong'], ['pretend I didn’t say that', "pretend i didn't say"], ['not the end of the world', 'end of the world'],
    ['crying over spilt milk', 'spil(t|led) milk'], ['going round in circles', 'round in circles'], ['agree to disagree', 'agree to disagree'],
    ['I take your point', 'take (your|his|her) point'], ['missing the point', 'missing the point'], ['get to the point', 'get to the point'],
    ['let off steam', 'let(ting)? off steam'], ['lose your temper', 'los(e|t|ing) (your|my|his|her) temper'], ['the last straw', 'last straw'],
    ['It’s not as though / if…', "it's not as (though|if)|it is not as (though|if)"], ['It’s just that…', "it's just that|it is just that"],
    ['I wish… / If only…', '\\bi wish\\b|\\bif only\\b']
  ],

  sections: [
    { id: 'map', short: 'Plan', title: 'Lesson plan', meta: '90 minutes · online',
      blocks: [
        { type: 'map', items: [
          { t: '0–5 min', n: 'Warm-up: from relationships to conflict', href: '#s1' },
          { t: '5–17 min', n: 'Why do we argue?', href: '#s2' },
          { t: '17–35 min', n: 'Arguments and discussions', href: '#s3' },
          { t: '35–50 min', n: 'Listening: two arguments', href: '#s4' },
          { t: '50–60 min', n: 'Defending and excusing', href: '#s5' },
          { t: '60–75 min', n: 'Wish and if only', href: '#s6' },
          { t: '75–87 min', n: 'Conversation practice', href: '#s7' },
          { t: '87–90 min', n: 'Wrap-up and homework', href: '#s8' },
          { t: 'Board', n: 'Our Miro board ↗', href: 'miro' }
        ] },
        { type: 'rule', title: 'Today you will learn to', html: '<ul><li>handle arguments in a constructive way;</li><li>tell which phrases calm an argument down — and which make it worse;</li><li>defend and excuse your position and behaviour;</li><li>talk about how you’d like things to be different with <i>wish</i> and <i>if only</i>.</li></ul>' },
        { type: 'note', html: '<p><b>Подготовка:</b> Track 17 (плеер в разделе 4; скрипт — SB p. 202); SB pp. 50–53, 172, Files 13–14 (pp. 187–188); Miro: рамки <i>Calm it down / Make it worse</i>, таймлайн <i>wish</i>, поле для реформуляции.</p><p>Студенты не видят ключей и заметок; вы видите всё в режиме #teacher.</p>' }
      ] },

    { id: 's1', short: '1 Warm-up', title: 'Warm-up: from relationships to conflict', meta: '5 min',
      blocks: [
        { type: 'lead', html: 'A quick memory check from our Relationships lessons. One word in each gap.' },
        { type: 'ex', id: 'rev', kind: 'gap', src: 'Relationships review', title: 'Complete the chunks', mode: 'Individually · 2 min',
          items: [
            { n: 1, t: 'They’re going through a rough ___.', a: ['patch'] },
            { n: 2, t: 'They’re not on speaking ___ at the moment.', a: ['terms'] },
            { n: 3, t: 'They don’t see eye to ___ on many issues.', a: ['eye'] },
            { n: 4, t: 'You shouldn’t bottle things ___.', a: ['up'] }
          ] },
        { type: 'note', html: '<p><i>What do all four sentences have in common? — They’re all about problems in relationships! So today: how to argue well.</i></p>' }
      ] },

    { id: 's2', short: '2 Why argue?', title: 'Why do we argue?', meta: 'SB pp. 50–51 · ex. 1–2 · 12 min',
      blocks: [
        { type: 'ex', id: 'op1', kind: 'open', src: 'SB p. 51 · ex. 1', title: 'Do you agree?', mode: 'Pairs · 6 min',
          instr: 'Look at the photo on pp. 50–51. Who are these people and what might they be arguing about? Then read the statements. Which do you agree with — and why? Try <i>I’d say…</i> / <i>I wouldn’t say…, just…</i><ul><li>It’s healthy to <b>let off steam</b> every once in a while.</li><li>As soon as you <b>lose your temper</b>, you lose the argument.</li><li>Sometimes people need <b>a good row</b> /raʊ/ to <b>clear the air</b>.</li><li>Arguing can become addictive and can have a terrible impact on relationships.</li><li>Raising your voice is a form of aggression.</li><li>An argument may be unpleasant, but it’s often the first step towards a solution.</li></ul>',
          prompts: [{ q: 'The photo: who are they, and what are they arguing about?', rows: 1 }, { q: 'The statement I agree with most — and why', rows: 2, track: true }],
          model: '<p><i>I’d say they’re husband and wife — they seem to be about the same age. He looks really angry, as if he’s telling her to leave.</i></p><p><i>I’d say it’s healthy to let off steam — otherwise you just bottle things up. / I wouldn’t say raising your voice is always aggression — sometimes people are just emotional.</i></p>' },
        { type: 'ex', id: 'op2', kind: 'open', src: 'SB p. 51 · ex. 2', title: 'What do people argue about?', mode: 'New pairs · 6 min',
          instr: 'Choose three or four topics: <i>careers · politics · silly annoyances · exes · religion · household chores · homework · sport · stress and tiredness · in-laws · kids · time spent together · money · work</i>. Who might argue about them — and what might they actually say? Then choose the three that cause the worst arguments.',
          prompts: [{ q: 'Topic → who argues → what they say', rows: 3 }, { q: 'Our top three', rows: 1 }],
          model: '<p><i>Silly annoyances</i> (flatmates): <i>I have to do everything round here! / Stop being such a pain!</i><br><i>Money</i>: <i>It’s your turn to pay. / You can’t buy that — it’s too expensive.</i><br><i>Work</i>: <i>Stop undermining me! / Get on with your own work!</i><br><i>Time spent together</i>: <i>I never see you! / Why don’t you stay in once in a while?</i><br><i>Sport</i>: <i>Come on, ref! You need glasses! That’s a blatant foul!</i></p>' }
      ] },

    { id: 's3', short: '3 Vocabulary', title: 'Arguments and discussions', meta: 'SB p. 52 · ex. 1–5 · 18 min',
      blocks: [
        { type: 'ex', id: 'v1', kind: 'gap', select: true, src: 'SB p. 52 · ex. 1', title: 'Complete the phrases people use in arguments', mode: 'Individually, then pairs · 5 min',
          instr: 'In the book, put the words in brackets in order. Here, choose the phrase that completes each line.',
          bank: ['try to see it from my point of view', 'You’re twisting my words', 'I think we’ve got our wires crossed', 'There’s no need to raise your voice', 'I think we should clear the air', 'Now can we just move on', 'Sorry, that came out all wrong', 'It’s not the end of the world', 'There’s no point crying over spilt milk', 'We’re just going round in circles'],
          items: [
            { n: 1, t: 'I hear what you’re saying, but ___.', a: ['try to see it from my point of view'] },
            { n: 2, t: 'That’s not what I meant at all. ___.', a: ['You’re twisting my words'] },
            { n: 3, t: '___. That wasn’t my intention at all.', a: ['I think we’ve got our wires crossed'] },
            { n: 4, t: 'Hey, chill! ___. I can hear you perfectly well.', a: ['There’s no need to raise your voice'] },
            { n: 5, t: 'I’ve obviously done something to upset you, so ___.', a: ['I think we should clear the air'] },
            { n: 6, t: 'OK. You’ve made your point and I heard you. ___?', a: ['Now can we just move on'] },
            { n: 7, t: '___. Just pretend I didn’t say that.', a: ['Sorry, that came out all wrong'] },
            { n: 8, t: 'Alright! Calm down! ___!', a: ['It’s not the end of the world'] },
            { n: 9, t: 'It’s done. Just forget about it. ___.', a: ['There’s no point crying over spilt milk'] },
            { n: 10, t: 'We’re getting nowhere here. ___. Can we just agree to disagree?', a: ['We’re just going round in circles'] }
          ] },
        { type: 'ex', id: 'v2', kind: 'pick', src: 'SB p. 52 · ex. 2', title: 'Calm it down or make it worse?', mode: 'Pairs · 5 min',
          instr: 'Would saying each phrase calm an argument down or make things worse? Could you translate it word for word into Russian?',
          opts: ['calms it down', 'makes it worse', 'it depends'],
          items: [
            { n: 1, t: 'I hear what you’re saying, but try to see it from my point of view.', a: 'calms it down', note: 'asking for balance' },
            { n: 2, t: 'You’re twisting my words.', a: 'makes it worse', note: 'suggests the other person is manipulating words' },
            { n: 3, t: 'I think we’ve got our wires crossed.', a: 'calms it down', note: 'recognises a misunderstanding' },
            { n: 4, t: 'There’s no need to raise your voice.', a: 'makes it worse', note: '“I’m not raising my voice!”' },
            { n: 5, t: 'I think we should clear the air.', a: 'calms it down', note: 'reasonable and understanding' },
            { n: 6, t: 'Now can we just move on?', a: 'it depends', note: 'on the tone — and if the other person wants to move on' },
            { n: 7, t: 'Sorry, that came out all wrong.', a: 'calms it down', note: 'an apology' },
            { n: 8, t: 'Calm down! It’s not the end of the world!', a: 'it depends', note: 'on the tone and the situation' },
            { n: 9, t: 'There’s no point crying over spilt milk.', a: 'it depends', note: 'can sound a bit dismissive' },
            { n: 10, t: 'We’re going round in circles. Can we just agree to disagree?', a: 'calms it down', note: 'reasonable and understanding' }
          ] },
        { type: 'ex', id: 'v3', kind: 'gap', src: 'SB p. 52 · ex. 3', title: 'One word completes all five', mode: '2 min',
          items: [
            { n: 1, t: 'What’s the ___ you’re trying to make?', a: ['point'] },
            { n: 2, t: 'Doesn’t that prove my ___?', a: ['point'] },
            { n: 3, t: 'I think you’re missing the ___.', a: ['point'] },
            { n: 4, t: 'OK. Fair enough. I take your ___.', a: ['point'] },
            { n: 5, t: 'I wish you’d just get to the ___.', a: ['point'] }
          ] },
        { type: 'rule', title: 'Ex. 4: books closed!', html: '<p>How many of the fifteen phrases can you and your partner remember in one minute? Write them in the chat.</p>' },
        { type: 'ex', id: 'v5', kind: 'open', src: 'SB p. 52 · ex. 5', title: 'When might you say it?', mode: 'Groups · 4 min',
          instr: 'Think of a time you might have said one of these. Tell your group what happened — a real or an invented story, it’s up to you: <i>There’s no point crying over spilt milk · I think we’ve got our wires crossed · Just pretend I didn’t say that · We’re going round in circles · I take your point</i>.',
          prompts: [{ q: 'My story', rows: 3, track: true }],
          model: '<p><i>Last term, my group and I were working on a project, and two of us just couldn’t agree on the topic. We were going round in circles for about an hour until someone said, “Let’s just vote!”</i></p>' },
        { type: 'note', html: '<p>Модель интонации: <i>Calm down! It’s not the end of the world!</i> — сначала мягко, потом резко. <i>Which one would make you even angrier?</i></p><p>Русские соответствия: <i>слезами горю не поможешь · мы не поняли друг друга · ходим по кругу · ты перевираешь мои слова · поговорить начистоту</i>.</p>' }
      ] },

    { id: 's4', short: '4 Listening', title: 'Listening: two arguments', meta: 'SB p. 52 · ex. 6–8 · Audio 17 · 15 min',
      blocks: [
        { type: 'lead', html: 'Two conversations, two arguments: the first at home, the second at work. Listen and answer the questions.' },
        { type: 'audio', src: '../../assets/audio/u06-track17-two-arguments.mp3', src_label: 'Audio 17', title: 'Two arguments',
          marks: [['Conversation 1', 0], ['Conversation 2', 90]] },
        { type: 'ex', id: 'l6', kind: 'open', src: 'SB p. 52 · ex. 6', title: 'What’s the main problem?', mode: 'Listen · 4 min',
          prompts: [{ q: 'Conversation 1', rows: 1 }, { q: 'Conversation 2', rows: 1 }],
          model: '<p>1 untidiness — leaving things lying around (someone almost broke his neck tripping over a bag) · 2 poor communication — clients cancelled because nobody got back to them about discounts</p>' },
        { type: 'ex', id: 'l7', kind: 'pick', src: 'SB p. 52 · ex. 7', title: 'Conversation 1, Conversation 2 or neither?', mode: 'From memory, then listen again · 7 min',
          instr: 'Someone…',
          opts: ['Conv. 1', 'Conv. 2', 'Neither'],
          items: [
            { n: 'a', t: 'has tripped over.', a: 'Conv. 1', note: 'I almost broke my neck!' },
            { n: 'b', t: 'has lost business.', a: 'Conv. 2', note: 'they’re cancelling' },
            { n: 'c', t: 'says they’re very busy.', a: 'Conv. 2', note: 'it’s just that I have a tremendous amount on' },
            { n: 'd', t: 'says something sarcastic.', a: 'Conv. 1', note: 'Right, of course — Mr Perfect!' },
            { n: 'e', t: 'has failed to pass on a message.', a: 'Neither', note: 'I passed that on to you.' },
            { n: 'f', t: 'takes offence.', a: 'Conv. 1', note: 'No, if that’s how you really feel…' },
            { n: 'g', t: 'has spent money they didn’t have.', a: 'Neither' },
            { n: 'h', t: 'deliberately broke something.', a: 'Neither', note: 'It’s not as though I did it deliberately.' },
            { n: 'i', t: 'has had a series of difficulties over the day.', a: 'Conv. 1', note: 'it’s been a long day and this was the last straw' },
            { n: 'j', t: 'was annoyed about a previous conversation.', a: 'Conv. 2', note: 'Last month — in the departmental meeting' }
          ] },
        { type: 'ex', id: 'l8', kind: 'open', src: 'SB p. 52 · ex. 8', title: 'How were they resolved?', mode: 'Pairs · 4 min',
          prompts: [
            { q: 'How are the two arguments resolved?', rows: 2 },
            { q: 'Do you think the underlying problems have actually been resolved? Why? / Why not?', rows: 2, track: true },
            { q: 'Do you know anyone who is untidy, sarcastic, a control freak or easily offended? Does it bother you?', rows: 2 },
            { q: 'Have you ever had any recurrent arguments with anyone? What about? Did you resolve them?', rows: 2 }
          ],
          model: '<p><b>1</b> an apology (<i>I’m sorry. It’s just that it’s been a long day and this was the last straw</i>), a suggestion to stop (<i>Can we just move on?</i>) and an offer of help (<i>Can I give you a hand?</i>).<br><b>2</b> recognising the misunderstanding (<i>I can see we’ve got our wires crossed</i>), an apology (<i>I was probably being a bit petulant, for which I apologise</i>) and agreeing to move on (<i>There’s no point crying over spilt milk</i>).</p>' },
        { type: 'note', html: '<p>Track 17 — в плеере выше (кнопки перехода к каждому разговору); скрипт — SB p. 202. По времени: найти в скрипте фразы из ex. 1 (<i>It’s not the end of the world, it came out wrong, try to see it from our point of view, wires crossed, cleared the air, spilt milk</i>).</p>' }
      ] },

    { id: 's5', short: '5 Defending', title: 'Defending and excusing', meta: 'SB p. 53 · ex. 9–10 · 10 min',
      blocks: [
        { type: 'rule', title: 'Defending and excusing (SB p. 53)', html: '<ul class="frames"><li><b>It’s not as though / if…</b> — to defend your position: <i>I almost broke my neck! — OK. Sorry. It’s not as though I did it deliberately.</i> <span class="ru">(= I didn’t do it deliberately · Я же не нарочно.)</span></li><li><b>It’s just that…</b> — to give an excuse: <i>It came out wrong. I’m sorry. It’s just that it’s been a long day and this was the last straw.</i> <span class="ru">(Просто день был тяжёлый…)</span></li></ul>' },
        { type: 'ex', id: 'd9', kind: 'open', src: 'SB p. 53 · ex. 9', title: 'Complete the exchanges with your own ideas', mode: 'Pairs · 5 min',
          prompts: [
            { q: '1 A: There’s no need to shout! — B: I know. I’m sorry. It’s just that…', rows: 1, track: true },
            { q: '2 A: Why did you buy that? — B: What’s the problem? It’s not as if… — A: I know. It’s just that…', rows: 2, track: true },
            { q: '3 A: Why can’t someone else do it? It’s not as though… — B: I know. It’s just that…', rows: 2, track: true },
            { q: '4 A: I didn’t want to ask you. — B: Why not? It’s not as though… — A: I guess. It’s just that…', rows: 2, track: true },
            { q: '5 A: I can’t believe you did that. — B: It’s not as though…', rows: 1, track: true }
          ],
          model: '<p>1 … it’s difficult to make myself heard / I’m tired<br>2 B: … it’s your money / it was expensive · A: … you’ve got one already / you don’t even know how to ski!<br>3 A: … I have nothing to do / everyone else is rushed off their feet · B: … you do it so well / the client specifically asked for you<br>4 B: … I bite / I haven’t offered before · A: … you’re always so busy / you looked a bit stressed<br>5 … it hurt anyone / I do it all the time, is it?</p>' },
        { type: 'rule', title: 'Ex. 10: new partner', html: '<p>Read out the exchanges with a new partner. Their ideas may be different from yours — listen carefully and react naturally. Stress <b>deliberately</b> in <i>It’s not as though I did it deliberately</i>; say <i>It’s just that…</i> softly.</p>' }
      ] },

    { id: 's6', short: '6 Wish', title: 'Wish and if only', meta: 'SB p. 53 · ex. 11, 13 · GR p. 172 · 15 min',
      blocks: [
        { type: 'ex', id: 'g11', kind: 'gap', src: 'SB p. 53 · ex. 11', title: 'Complete the sentences from the conversations', mode: 'Pairs · 6 min',
          instr: 'One word in each space. Then explain what each sentence is doing.',
          items: [
            { n: 1, t: 'A: If only you ___ put things away properly!', a: [["'d", 'would']], note: 'a habit — you want someone to behave differently' },
            { n: 2, t: 'B: I was going to take it to my room… — A: Well, I wish you ___.', a: ['had'], note: 'a regret about the past (= I wish you had taken it…)' },
            { n: 3, t: 'D: What? You’re joking? — C: I wish I ___.', a: [['was', 'were']], note: 'the present you want to be different (= I wish I was joking)' },
            { n: 4, t: 'C: I wish you ___ said something sooner.', a: [["'d", 'had']], note: 'criticism / regret about the past' },
            { n: 5, t: 'D: I ___ have, but you hardly come out of that office.', a: ['would'], note: 'replying to a wish: a hypothetical result' }
          ] },
        { type: 'rule', title: 'Wish and if only (GR p. 172)', html: '<ul class="frames"><li><b>wish / if only + would(n’t)</b> → how you want people to behave differently: <i>I wish you wouldn’t shout.</i> · <i>I wish he would.</i></li><li><b>wish / if only + past simple / could</b> → the present you want to be different: <i>I wish I could, but I’m working tonight.</i> · <i>If only you didn’t!</i></li><li><b>wish / if only + past perfect / could’ve</b> → the past you want to be different: <i>I wish you’d said something sooner.</i> · <i>I wish I could’ve done more to help.</i></li><li>In conversation we often use just the auxiliary: <i>I wish I had. · I wish I could. · I wish he would.</i></li><li><i>I wish I was</i> is more common in speech; <i>I wish I were</i> sounds more formal.</li></ul><p><b>Careful!</b> <s>I wish I would be taller</s> → <i>I wish I was taller.</i> · <s>I wish I would have worked harder</s> → <i>I wish I had worked harder.</i></p>' },
        { type: 'ex', id: 'g13', kind: 'open', src: 'SB p. 53 · ex. 13', title: 'Your wishes', mode: 'Groups of 3–4 · 5 min',
          instr: 'Use different patterns with <i>wish</i> to tell your group something…',
          prompts: [
            { q: '1 you regret (not) doing', rows: 1, track: true },
            { q: '2 you regret not being able to do', rows: 1, track: true },
            { q: '3 you’d like to be different about your life', rows: 1, track: true },
            { q: '4 you’d like to be able to do', rows: 1, track: true },
            { q: '5 you’d like to be different in the world', rows: 1, track: true },
            { q: '6 you’d like to be different about someone you know', rows: 1, track: true }
          ],
          model: '<p>1 <i>I wish I hadn’t stayed up so late before my exam.</i> · 2 <i>I wish I could’ve gone to my friend’s birthday party.</i> · 3 <i>I wish I lived closer to the university.</i> · 4 <i>I wish I could play the piano.</i> · 5 <i>I wish people were kinder to each other online.</i> · 6 <i>I wish my brother wouldn’t borrow my things without asking.</i></p>' },
        { type: 'ex', id: 'gr2', kind: 'gap', wide: true, src: 'GR p. 172 · ex. 2', title: 'Extra practice: say it with wish or if only', mode: 'If there’s time — or at home',
          instr: 'Complete the second sentence so that it means the same as the first. Use the word in capitals and three to six words.',
          items: [
            { n: 1, t: 'I really regret speaking to her like that. (ONLY) → If ___ to her like that!', a: [['only i had not spoken', "only i hadn't spoken", "only i'd not spoken"]] },
            { n: 2, t: 'Not being able to go to university has been one of my big regrets. (COULD) → I really ___ to university, but it just wasn’t possible.', a: [['wish i could have gone', "wish i could've gone"]] },
            { n: 3, t: 'It annoys me that you get so upset over such a small thing. (WISH) → I ___ over-sensitive about everything.', a: [['wish you were not so', "wish you weren't so"]] },
            { n: 4, t: 'Basically, I’d like everyone to get along better. (FIGHT) → I wish people ___ much.', a: [['would not fight so', 'would not fight as', "wouldn't fight so", "wouldn't fight as"]] },
            { n: 5, t: 'It’s a shame we have to work today. (NOT) → I wish ___ work today.', a: [['we did not have to', "we didn't have to"]] },
            { n: 6, t: 'It’s no good you telling me that now! (IF) → ___ that earlier!', a: [['if only you had told me', "if only you'd told me"]] }
          ] },
        { type: 'note', html: '<p>CCQ: <i>“I wish you’d stop interrupting me.” — now or past? (now, a habit) · Am I happy about it? (no) · Can I say “I wish I would be taller”? (no — I wish I was taller)</i>.</p><p>Live listening: перед ex. 13 расскажите 2–3 своих настоящих примера.</p>' }
      ] },

    { id: 's7', short: '7 Speaking', title: 'Conversation practice', meta: 'SB p. 53 · ex. 14–15 · 12 min',
      blocks: [
        { type: 'lead', html: 'Pairs. <b>Student A:</b> File 13, p. 187 · <b>Student B:</b> File 14, p. 188. Don’t show your file to your partner! Plan for two minutes, then roleplay two arguments. The aim isn’t to win — it’s to resolve the argument (or agree to disagree!).' },
        { type: 'ex', id: 'rp', kind: 'open', src: 'SB p. 53 · ex. 14–15', title: 'My plan and my best phrases', mode: 'Pairs · 10 min',
          prompts: [
            { q: 'A phrase to calm things down', rows: 1, track: true },
            { q: 'A phrase to defend myself (It’s not as though… / It’s just that…)', rows: 1, track: true },
            { q: 'A sentence with wish or if only', rows: 1, track: true },
            { q: 'How did we resolve it?', rows: 2 }
          ],
          checklist: ['I used a phrase to calm the argument down', 'I defended myself with It’s not as though… or It’s just that…', 'I used wish or if only', 'We resolved the argument (or agreed to disagree!)'],
          model: '<p><i>A: I’ve obviously done something to upset you, so I think we should clear the air.<br>B: Well, I wish you’d told me you weren’t going to finish your part of the project.<br>A: It’s not as though I didn’t want to! It’s just that I’ve had three deadlines this week.<br>B: OK, I take your point. But try to see it from my point of view — I had to do it all at the last minute.<br>A: You’re right. I’m sorry. Can we just move on?</i></p>' },
        { type: 'note', html: '<p>Files 13–14 — в учебнике (pp. 187–188). Если доступа нет: ситуации из ex. 2 (уборка у соседей, участник проекта не сдал свою часть).</p><p>Реформуляция: <i>I wish you didn’t told me → hadn’t told me · Don’t cry over spilled milk → There’s no point crying over spilt milk · It’s not like I did it specially → It’s not as though I did it deliberately</i>.</p>' }
      ] },

    { id: 's8', short: '8 Wrap-up', title: 'Wrap-up and homework', meta: '3 min',
      blocks: [
        { type: 'ex', id: 'wrap', kind: 'open', src: 'Wrap-up', title: 'Most useful — and never!', mode: '1 min',
          prompts: [{ q: 'The most useful phrase from today in real life', rows: 1, track: true }, { q: 'A phrase I’d never, ever say to my best friend', rows: 1 }] },
        { type: 'rule', title: 'Homework for next lesson', html: '<ol><li><em>Vocabulary:</em> learn the phrases from today’s lesson (see <b>Lesson words</b> below).</li><li><em>Wish and if only:</em> Grammar reference p. 172, ex. 1–2.</li><li><em>Optional:</em> SB p. 53, ex. 12 — write three short three-line dialogues around <i>I wish you would drop it! / I wish I could! / If only you’d mentioned that an hour ago!</i></li></ol><p>Next lesson: from personal arguments to conflict on a bigger scale — war, peace and how conflicts are resolved (SB pp. 54–57).</p>' }
      ] },

    { id: 's9', short: '9 Words', title: 'Lesson words', meta: 'Arguments · defending · wish', blocks: [{ type: 'words' }] },

    { id: 's10', short: '10 Send', title: 'Reflection', meta: '1 min',
      blocks: [
        { type: 'ex', id: 'reflect', kind: 'open', src: 'Reflection', title: 'Before you go', mode: '1 min',
          prompts: [{ q: 'Three phrases I’d most like to use', rows: 2 }, { q: 'What I still find tricky about wish', rows: 1 }] },
        { type: 'cando' }, { type: 'submit' }
      ] }
  ],

  cando: ['I can tell which phrases calm an argument down and which make it worse.', 'I can follow two arguments and explain how they were resolved.', 'I can defend and excuse myself with It’s not as though… and It’s just that….', 'I can talk about things I’d like to be different with wish and if only.', 'I can take part in an argument and help resolve it.'],

  words: [
    ['let off steam', 'release strong feelings', 'выпустить пар', 'It’s healthy to let off steam every once in a while.'],
    ['lose your temper', 'suddenly become very angry', 'выйти из себя', 'As soon as you lose your temper, you lose the argument.'],
    ['a (good) row', 'a noisy argument', 'ссора', 'Sometimes people need a good row to clear the air.'],
    ['clear the air', 'talk openly to end bad feelings', 'поговорить начистоту, разрядить обстановку', 'I think we should clear the air.'],
    ['try to see it from my point of view', 'understand my side', 'посмотри на это с моей стороны', 'I hear what you’re saying, but try to see it from my point of view.'],
    ['twist sb’s words', 'change the meaning of what sb said', 'перевирать чьи-то слова', 'That’s not what I meant. You’re twisting my words.'],
    ['get your wires crossed', 'misunderstand each other', 'не понять друг друга', 'I think we’ve got our wires crossed.'],
    ['raise your voice', 'speak loudly and angrily', 'повышать голос', 'There’s no need to raise your voice.'],
    ['move on', 'stop discussing sth and continue', 'закрыть тему, идти дальше', 'Now can we just move on?'],
    ['it came out all wrong', 'it sounded different from what I meant', 'прозвучало совсем не так', 'Sorry, that came out all wrong.'],
    ['pretend I didn’t say that', 'forget what I said', 'сделай вид, что я этого не говорил(а)', 'Just pretend I didn’t say that.'],
    ['it’s not the end of the world', 'it’s not a disaster', 'это не конец света', 'Calm down! It’s not the end of the world!'],
    ['there’s no point crying over spilt milk', 'don’t worry about what can’t be changed', 'слезами горю не поможешь', 'It’s done. There’s no point crying over spilt milk.'],
    ['go round in circles', 'keep discussing without progress', 'ходить по кругу', 'We’re just going round in circles.'],
    ['agree to disagree', 'accept that you have different opinions', 'остаться каждый при своём мнении', 'Can we just agree to disagree?'],
    ['what’s the point you’re trying to make?', 'what do you mean?', 'что ты хочешь сказать?', 'Sorry, what’s the point you’re trying to make?'],
    ['prove my point', 'show that I’m right', 'доказать мою правоту', 'Doesn’t that prove my point?'],
    ['miss the point', 'not understand the main idea', 'упускать суть', 'I think you’re missing the point.'],
    ['I take your point', 'I accept what you’re saying', 'согласен(на) с тобой', 'OK. Fair enough. I take your point.'],
    ['get to the point', 'say the important thing', 'перейти к сути', 'I wish you’d just get to the point.'],
    ['the last straw', 'the final problem that makes you lose patience', 'последняя капля', 'It’s been a long day and this was the last straw.'],
    ['leave your stuff lying around', 'not put things away', 'разбрасывать вещи', 'You’re constantly leaving your stuff lying around.'],
    ['have a tremendous amount on', 'be very busy', 'иметь уйму дел', 'It’s just that I have a tremendous amount on.'],
    ['be rushed off your feet', 'be extremely busy', 'сбиться с ног', 'Everyone else is rushed off their feet.'],
    ['It’s not as though / if…', 'used to defend your position', 'я же не… / нельзя сказать, что…', 'It’s not as though I did it deliberately.'],
    ['It’s just that…', 'used to give an excuse', 'просто…', 'It’s just that it’s been a long day.'],
    ['I wish you wouldn’t…', 'I want you to stop doing sth', 'лучше бы ты не…', 'I wish you wouldn’t shout.'],
    ['I wish I could', 'I’d like to, but it’s impossible', 'я бы с радостью, но…', 'I wish I could, but I’m working tonight.'],
    ['If only you’d told me!', 'I regret that you didn’t tell me', 'если бы ты мне сказал(а)!', 'If only you’d told me that earlier!'],
    ['I wish you would drop it!', 'please stop talking about it', 'да хватит уже об этом!', 'I know, but I wish you would drop it!']
  ]
};
