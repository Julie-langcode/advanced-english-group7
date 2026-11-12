/* The lessons on the home page, grouped by module. The current module comes first.
   Lesson status: 'ready' = open (current module) · 'review' = open, earlier module · 'done' = finished, no page · 'soon' = not published yet.
   To publish a new lesson: create its folder in /lessons/, change its status from 'soon' to 'ready'
   and make sure "slug" matches the folder name. */
window.COURSE = {
  book: 'Outcomes Advanced, 2nd edition',
  modules: [
    { id: 2, name: 'Module 2', state: 'current',
      lessons: [
        { n: 3, slug: '03-culture-and-society', status: 'ready',
          title: 'Culture and society', topic: 'Society and culture · challenging stereotypes · listening · essay thesis',
          pages: 'SB pp. 24–27' },
        { n: 4, slug: '04-objects-and-identity', status: 'ready',
          title: 'Objects and identity', topic: 'Cleft sentences · household objects · Foreign objects · a lecture on identity · essay',
          pages: 'SB pp. 27–31, 168–169' },
        { n: 5, slug: '05-describing-people', status: 'soon',
          title: 'Describing people', topic: 'Describing people and giving impressions · phrasal verbs',
          pages: 'SB pp. 14–19' },
        { n: 6, slug: '06-would', status: 'soon',
          title: 'Relationships and would', topic: 'Kinds of relationships · would · roleplay',
          pages: 'SB pp. 20–21' },
        { n: 7, slug: '07-mini-project', status: 'soon',
          title: 'Mini-project and review', topic: 'Team defence · Review 1',
          pages: 'SB p. 23' }
      ] },
    { id: 1, name: 'Module 1', state: 'completed', meta: 'Lessons stay open for review',
      lessons: [
        { n: 1, slug: '01-cities', status: 'review',
          title: 'Cities', topic: 'Getting to know each other · describing cities · emphasising and exaggerating',
          pages: 'SB pp. 6–9 · WB pp. 4, 6' },
        { n: 2, slug: '02-urban-renewal', status: 'review',
          title: 'Urban renewal', topic: 'How cities change · recovery and change · perfect forms · pitch for Oldbury',
          pages: 'SB pp. 10–11, 166 · WB pp. 6–8' },
        { n: '✓', status: 'done',
          title: 'Module 1 test', topic: 'Listening, vocabulary, grammar, reading and writing · Cities and Urban renewal',
          pages: 'Unit 1' }
      ] }
  ]
};
/* Flat list of lesson pages for the "previous / next lesson" buttons inside lessons. */
window.COURSE.lessons = window.COURSE.modules.reduce(function (a, m) { return a.concat(m.lessons); }, [])
  .filter(function (l) { return typeof l.n === 'number'; }).sort(function (a, b) { return a.n - b.n; });
