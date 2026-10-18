/* TEMPLATE for a new lesson.
   1. Copy the whole _template folder and rename it, e.g. 03-culture-and-identity
   2. Fill in this file (keep the commas and quotes!)
   3. In assets/course.js set the lesson's status to 'ready'
   Exercise kinds you can use: gap, match, pick, stress, open, budget — see lessons/01-cities and 02-urban-renewal for real examples. */
window.LESSON = {
  id: 'l03-example',            // unique, never change after students start using it
  number: 3,
  title: 'Lesson title',
  titleHtml: 'Lesson <em>title</em>',
  duration: '80 min · online',
  summary: 'One sentence: what students will be able to do after this lesson.',
  chips: ['Outcomes Advanced · Unit 3', 'SB pp. 24–27'],
  track: [['example phrase', '\\bexample phrase']],   // phrases counted in students' writing

  sections: [
    { id: 'map', short: 'Plan', title: 'Lesson plan', meta: '80 minutes · online',
      blocks: [{ type: 'map', items: [{ t: '0–10 min', n: 'Warm-up', href: '#s1' }] }] },

    { id: 's1', short: '1 Warm-up', title: 'Warm-up', meta: 'SB p. 24 · ex. 1 · 10 min',
      blocks: [
        { type: 'lead', html: 'A short line that sets up the stage.' },

        /* gap with a word box (drop-down) */
        { type: 'ex', id: 'g1', kind: 'gap', select: true, src: 'SB p. 24 · ex. 2', title: 'Exercise title', mode: 'Pairs · 4 min',
          instr: 'Complete the sentences.', bank: ['word one', 'word two'],
          items: [{ n: 1, t: 'A sentence with a ___ gap.', a: ['word one'] }, { n: 2, t: 'Another ___ gap.', a: ['word two'] }] },

        /* gap you type into; several correct answers in [ ] */
        { type: 'ex', id: 'g2', kind: 'gap', src: 'GR p. 168', title: 'Typed answers', wide: true,
          items: [{ n: 1, t: 'It ___ (be) a long day.', a: [['has been', "'s been"]], note: 'optional explanation shown with answers' }] },

        /* multiple choice buttons */
        { type: 'ex', id: 'p1', kind: 'pick', src: 'SB p. 25', title: 'True or false?', opts: ['True', 'False'],
          items: [{ n: 1, t: 'A statement.', a: 'True' }] },

        /* open answers with ideas */
        { type: 'ex', id: 'o1', kind: 'open', src: 'SB p. 25 · ex. 4', title: 'Discuss', mode: 'Breakout rooms · 5 min',
          prompts: [{ q: 'Question one?', track: true }], model: '<p>Possible ideas …</p>' },

        { type: 'note', html: '<p>Заметки преподавателю (видны только в режиме #teacher).</p>' }
      ] },

    { id: 's2', short: 'Words', title: 'Lesson words', blocks: [{ type: 'words' }] },
    { id: 's3', short: 'Reflect', title: 'Reflect and send', blocks: [{ type: 'cando' }, { type: 'submit' }] }
  ],

  cando: ['I can …'],
  words: [['phrase', 'meaning', 'перевод', 'Example sentence.']]
};
