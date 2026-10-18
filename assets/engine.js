/* Lesson engine: turns window.LESSON (lessons/<slug>/lesson.js) into an interactive page.
   You normally never need to edit this file — lessons are plain data. */
(function () {
  'use strict';
  var CFG = window.SITE_CONFIG || {};
  var COURSE = window.COURSE || { lessons: [] };
  var L = window.LESSON;
  if (!L) return;

  /* ---------- helpers ---------- */
  var NS = 'ae7:' + L.id + ':', G = 'ae7:';
  var SCORED = { gap: 1, match: 1, pick: 1, stress: 1 };
  var SCALE = ['Not yet', 'Getting there', 'Confident'];
  var store = {
    get: function (k, global) { try { return localStorage.getItem((global ? G : NS) + k); } catch (e) { return null; } },
    set: function (k, v, global) { try { localStorage.setItem((global ? G : NS) + k, v); } catch (e) {} },
    clear: function () { try { Object.keys(localStorage).filter(function (k) { return k.indexOf(NS) === 0; }).forEach(function (k) { localStorage.removeItem(k); }); } catch (e) {} }
  };
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function h(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function arr(x) { return Array.isArray(x) ? x : [x]; }
  function strip(s) { return String(s == null ? '' : s).replace(/<[^>]+>/g, ''); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function norm(s) {
    return String(s || '').toLowerCase()
      .replace(/[’‘`´]/g, "'").replace(/\bhasn't\b/g, 'has not').replace(/\bhadn't\b/g, 'had not').replace(/\bhaven't\b/g, 'have not')
      .replace(/\bdon't\b/g, 'do not').replace(/\bwon't\b/g, 'will not').replace(/\bit's\b/g, 'it is').replace(/\b(\w+)'ve\b/g, '$1 have')
      .replace(/á/g, 'a').replace(/[.,!?;:"“”()–—\-]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function studentName() { var i = $('#student-name'); return i ? i.value.trim() : ''; }

  /* ---------- language detectors ---------- */
  var PATTERNS = {
    'repetition': /\b(\w+),?\s+(and\s+)?\1\b/i,
    'intensifying adverb': /\b(absolutely|incredibly|unbearably|totally|extremely|ridiculously|insanely|terribly|hugely|remarkably|utterly|completely|amazingly|unbelievably|awfully|seriously|staggeringly|wildly|spotlessly)\b/i,
    'extreme word': /\b(packed|spotless|stink|stank|stinks|crawl\w*|enormous|huge|tiny|filthy|freezing|boiling|fascinating|awful|dreadful|starving|exhausted|terrifying|hilarious|deserted|massive|vast|gorgeous|crumbling|insane|heaving|stunning|scorching|deafening|gigantic|horrendous|nightmare)\b/i,
    'like …': /\b(like (being|living|talking|walking|hitting|a|an|the)\b|it'?s like|it was like|feels like|looks like)/i
  };
  var TRACK = (L.track || []).map(function (t) { return [t[0], new RegExp(t[1], 'i')]; });

  /* ---------- page shell ---------- */
  var app = $('#app');
  var chips = (L.chips || []).map(function (c) { return '<span class="chip">' + c + '</span>'; }).join('');
  var navs = L.sections.map(function (s) { return '<a href="#' + s.id + '">' + (s.short || strip(s.title)) + '</a>'; }).join('');
  app.innerHTML =
    '<header class="hero"><div class="wrap">' +
      '<div class="crumbs"><a href="../../">← All lessons</a><span>' + esc(CFG.group || '') + ' · Lesson ' + L.number + '</span><span>' + esc(L.duration || '80 min · online') + '</span></div>' +
      '<h1>' + L.titleHtml + '</h1>' +
      '<p class="sum">' + L.summary + '</p>' +
      '<div class="chips">' + chips + '</div>' +
      '<div class="who"><label for="student-name">Your name</label><input id="student-name" placeholder="First name and surname" autocomplete="name"><span class="hint">Your teacher sees results under this name.</span></div>' +
    '</div></header>' +
    '<nav class="bar" aria-label="Lesson sections"><div class="wrap row">' +
      '<div class="meter" aria-live="polite"><div class="track"><div class="fill" id="fill"></div></div><b id="meter-text"></b></div>' +
      '<span class="sync' + (CFG.sheetEndpoint ? ' on' : '') + '">' + (CFG.sheetEndpoint ? 'Results go to your teacher' : 'Saved on this device') + '</span>' +
      '<button class="toggle" id="teacher-toggle" aria-pressed="false" hidden>Teacher notes</button>' +
    '</div><div class="wrap nav">' + navs + '</div></nav>' +
    '<main><div class="wrap" id="main"></div></main>' +
    '<footer><div class="wrap"><span>' + esc(CFG.course || '') + ' · ' + esc(CFG.group || '') + ' · ' + esc(COURSE.book || 'Outcomes Advanced') + '. Answers are saved in this browser.</span>' +
      '<span class="actions" id="pager"></span>' +
      '<span class="actions"><button class="btn" id="reset-all">Clear my answers</button><button class="btn primary" id="reset-yes" hidden>Yes, clear this lesson</button></span></div></footer>';

  var nameInput = $('#student-name');
  nameInput.value = store.get('name', true) || '';
  nameInput.addEventListener('input', function () { store.set('name', nameInput.value, true); });

  /* pager */
  var idx = COURSE.lessons.findIndex ? COURSE.lessons.findIndex(function (x) { return x.n === L.number; }) : -1;
  var pager = $('#pager');
  if (idx > 0 && COURSE.lessons[idx - 1].status === 'ready') pager.insertAdjacentHTML('beforeend', '<a class="btn" href="../' + COURSE.lessons[idx - 1].slug + '/">← Lesson ' + COURSE.lessons[idx - 1].n + '</a>');
  if (idx > -1 && COURSE.lessons[idx + 1] && COURSE.lessons[idx + 1].status === 'ready') pager.insertAdjacentHTML('beforeend', '<a class="btn" href="../' + COURSE.lessons[idx + 1].slug + '/">Lesson ' + COURSE.lessons[idx + 1].n + ' →</a>');

  /* ---------- blocks ---------- */
  var main = $('#main');
  var EXDEF = {};
  L.sections.forEach(function (s, i) {
    var sec = h('section', 'sec'); sec.id = s.id;
    sec.innerHTML = '<div class="sec-head"><span class="no">§ ' + i + '</span><h2>' + s.title + '</h2>' + (s.meta ? '<span class="meta">' + s.meta + '</span>' : '') + '</div>';
    (s.blocks || []).forEach(function (b) { var el = renderBlock(b); if (el) sec.appendChild(el); });
    main.appendChild(sec);
  });

  function renderBlock(b) {
    switch (b.type) {
      case 'lead': return h('p', 'lead', b.html);
      case 'rule': return h('div', 'rule', (b.title ? '<h3>' + b.title + '</h3>' : '') + b.html);
      case 'note': return h('div', 'tnote', b.html);
      case 'map': return renderMap(b);
      case 'audio': return renderAudio(b);
      case 'ex': EXDEF[b.id] = b; return renderEx(b);
      case 'words': return renderWords(b);
      case 'cando': return renderCando(b);
      case 'submit': return renderSubmit(b);
    }
    return null;
  }

  function renderMap(b) {
    var ol = h('ol', 'map');
    b.items.forEach(function (it) {
      var href = it.href === 'miro' ? (CFG.miroBoard || '#') : /^miro:/.test(it.href) ? (CFG.miroBoard || '') + '?moveToWidget=' + it.href.slice(5) : it.href;
      var ext = /^https?:/.test(href);
      ol.insertAdjacentHTML('beforeend', '<li class="' + (ext ? 'ext' : '') + '"><a href="' + href + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '><span class="t">' + it.t + '</span><span class="n">' + it.n + '</span></a></li>');
    });
    return ol;
  }

  function renderAudio(b) {
    var box = h('div', 'audio');
    box.innerHTML = '<div class="top"><span class="src">' + b.src_label + '</span><h3>' + b.title + '</h3></div>' +
      '<audio controls preload="metadata" src="' + b.src + '"></audio>' +
      '<div class="ctrl"><button class="btn" data-a="back">↺ 5 s</button><button class="btn" data-a="slow" aria-pressed="false">Slower 0.85×</button>' +
      (b.marks || []).map(function (m) { return '<button class="btn" data-a="jump" data-t="' + m[1] + '">' + m[0] + '</button>'; }).join('') + '</div>' +
      (b.note ? '<p class="instr" style="font-size:15px;color:var(--muted)">' + b.note + '</p>' : '');
    var au = $('audio', box);
    box.addEventListener('click', function (e) {
      var t = e.target.closest('[data-a]'); if (!t) return;
      if (t.dataset.a === 'back') au.currentTime = Math.max(0, au.currentTime - 5);
      if (t.dataset.a === 'slow') { var on = t.getAttribute('aria-pressed') !== 'true'; au.playbackRate = on ? 0.85 : 1; t.setAttribute('aria-pressed', on); }
      if (t.dataset.a === 'jump') { au.currentTime = +t.dataset.t; au.play().catch(function () {}); }
    });
    return box;
  }

  function head(d) {
    return '<div class="ex-head"><span class="src">' + d.src + '</span><h3>' + d.title + '</h3>' + (d.mode ? '<span class="mode">' + d.mode + '</span>' : '') + '</div>' + (d.instr ? '<p class="instr">' + d.instr + '</p>' : '');
  }

  function renderEx(d) {
    var id = d.id;
    var card = h('article', 'ex'); card.id = 'ex-' + id; card.dataset.ex = id;
    var html = head(d);
    if (d.bank) html += '<div class="bank">' + d.bank.map(function (w) { return '<span data-w="' + esc(w) + '">' + w + '</span>'; }).join('') + '</div>';
    if (d.example) html += '<p class="instr example">' + d.example + '</p>';
    card.innerHTML = html;
    var ol;

    if (d.kind === 'gap') {
      ol = h('ol', 'items');
      d.items.forEach(function (it, i) {
        if (it.h) { ol.appendChild(h('li', 'h', it.h)); return; }
        var li = h('li'); li.innerHTML = '<span class="n">' + (it.n != null ? it.n : '') + '</span>';
        var txt = h('span', 'txt'); var parts = it.t.split('___');
        parts.forEach(function (p, j) {
          txt.insertAdjacentHTML('beforeend', p);
          if (j < parts.length - 1) {
            var f;
            if (d.select) { f = h('select', 'f'); f.innerHTML = '<option value="">…</option>' + d.bank.map(function (w) { return '<option>' + w + '</option>'; }).join(''); }
            else { f = h('input', 'f' + (d.wide ? ' wide' : '')); f.type = 'text'; f.autocomplete = 'off'; f.spellcheck = false; f.setAttribute('autocapitalize', 'off'); }
            f.dataset.key = id + '-' + i + '-' + j; f.dataset.ans = JSON.stringify(arr(it.a[j]));
            f.setAttribute('aria-label', 'Gap ' + (it.n != null ? it.n : i) + (parts.length > 2 ? '.' + (j + 1) : ''));
            txt.appendChild(f); txt.appendChild(h('span', 'key', esc(arr(it.a[j])[0])));
          }
        });
        if (it.hint) txt.insertAdjacentHTML('beforeend', ' <span class="hint">' + it.hint + '</span>');
        if (it.note) txt.appendChild(h('span', 'key note', it.note));
        li.appendChild(txt); ol.appendChild(li);
      });
      card.appendChild(ol);
    }

    if (d.kind === 'match') {
      ol = h('ol', 'items');
      d.items.forEach(function (t, i) {
        var li = h('li'); li.innerHTML = '<span class="n">' + (i + 1) + '</span>';
        var txt = h('span', 'txt', t + ' ');
        var f = h('select', 'f'); f.innerHTML = '<option value="">…</option>' + d.opts.map(function (o) { return '<option value="' + o[0] + '">' + o[0] + '</option>'; }).join('');
        f.dataset.key = id + '-' + i; f.dataset.ans = JSON.stringify([d.key[i]]); f.setAttribute('aria-label', 'Answer for ' + (i + 1));
        txt.appendChild(f); txt.appendChild(h('span', 'key', d.key[i])); li.appendChild(txt); ol.appendChild(li);
      });
      card.appendChild(ol);
      card.appendChild(h('ul', 'opts', d.opts.map(function (o) { return '<li><b>' + o[0] + '</b>' + o[1] + '</li>'; }).join('')));
    }

    if (d.kind === 'pick') {
      ol = h('ol', 'items');
      d.items.forEach(function (it, i) {
        if (it.h) { ol.appendChild(h('li', 'h', it.h)); return; }
        var li = h('li'); li.innerHTML = '<span class="n">' + (it.n != null ? it.n : '') + '</span>';
        var txt = h('span', 'txt', it.t + ' ');
        var opts = it.opts || d.opts;
        var g = h('span', 'grp'); g.dataset.key = id + '-' + i; g.dataset.ans = JSON.stringify(arr(it.a)); g.setAttribute('role', 'radiogroup'); g.setAttribute('aria-label', strip(it.t));
        opts.forEach(function (o) { g.insertAdjacentHTML('beforeend', '<label><input type="radio" name="' + id + '-' + i + '" value="' + esc(o) + '"><span>' + o + '</span></label>'); });
        txt.appendChild(g); txt.appendChild(h('span', 'key', esc(arr(it.a)[0])));
        if (it.note) txt.appendChild(h('span', 'key note', it.note));
        li.appendChild(txt); ol.appendChild(li);
      });
      card.appendChild(ol);
    }

    if (d.kind === 'stress') {
      ol = h('ol', 'items');
      d.items.forEach(function (it, i) {
        var li = h('li'); li.innerHTML = '<span class="n">' + (i + 1) + '</span>';
        var g = h('span', 'txt words grp'); g.dataset.key = id + '-' + i; g.dataset.ans = JSON.stringify(it.a); g.setAttribute('role', 'radiogroup'); g.setAttribute('aria-label', 'Sentence ' + (i + 1));
        it.t.split(' ').forEach(function (w) { g.insertAdjacentHTML('beforeend', '<label><input type="radio" name="' + id + '-' + i + '" value="' + esc(norm(w)) + '"><span>' + w + '</span></label> '); });
        g.appendChild(h('span', 'key', it.a[0])); li.appendChild(g); ol.appendChild(li);
      });
      card.appendChild(ol);
    }

    if (d.kind === 'open') {
      d.prompts.forEach(function (p, i) {
        var key = id + '-' + i; var box = h('div', 'prompt');
        box.innerHTML = '<label for="t-' + key + '">' + p.q + '</label><textarea id="t-' + key + '" data-save="' + key + '" rows="' + (p.rows || 2) + '"></textarea>';
        if (p.meter) box.appendChild(h('div', 'pills meter-pills', '<span class="lbl">Patterns:</span>' + Object.keys(PATTERNS).map(function (k) { return '<span data-p="' + k + '">' + k + '</span>'; }).join('')));
        if (p.track || p.words) box.appendChild(h('div', 'pills track-pills'));
        card.appendChild(box);
      });
      if (d.checklist) {
        var cl = h('div', 'prompt');
        cl.innerHTML = '<label>Before you hand it in</label>' + d.checklist.map(function (c, i) { return '<label class="check"><input type="checkbox" data-save="' + id + '-c' + i + '"> ' + c + '</label>'; }).join('');
        card.appendChild(cl);
      }
    }

    if (d.kind === 'budget') card.appendChild(renderBudget(d));

    if (d.model) card.appendChild(h('div', 'model', d.model));
    var scored = !!SCORED[d.kind];
    var acts = '<div class="actions">';
    if (scored) acts += '<button class="btn primary" data-act="check">Check</button><button class="btn" data-act="show" disabled title="Try first, then you can see the answers">Show answers</button>';
    if (d.model) acts += '<button class="btn" data-act="model" aria-expanded="false">' + (d.modelLabel || 'Show ideas') + '</button>';
    if (d.kind === 'open' || d.kind === 'budget') acts += '<button class="btn" data-act="sendopen">Send to teacher</button>';
    acts += '<button class="btn" data-act="clear">Clear</button>';
    if (scored) acts += '<span class="score" aria-live="polite"></span>';
    acts += '<span class="sent" aria-live="polite"></span></div>';
    card.insertAdjacentHTML('beforeend', acts);
    return card;
  }

  function renderBudget(d) {
    var wrap = h('div', 'budget');
    var n = d.items.length;
    d.items.forEach(function (idea, i) {
      var row = h('div', 'brow'); row.dataset.i = i;
      row.innerHTML =
        '<div><span class="lbl">Priority</span><select data-save="' + d.id + '-p' + i + '" aria-label="Priority for: ' + esc(idea) + '"><option value="">–</option>' +
          Array.apply(null, { length: n }).map(function (_, k) { return '<option>' + (k + 1) + '</option>'; }).join('') + '</select></div>' +
        '<div class="idea">' + idea + '</div>' +
        '<div><span class="lbl">' + (d.unit || '£m') + '</span><input type="number" min="0" step="5" inputmode="numeric" data-save="' + d.id + '-a' + i + '" aria-label="Money for: ' + esc(idea) + '"></div>' +
        '<div><span class="lbl">Timescale</span><select data-save="' + d.id + '-t' + i + '" aria-label="Timescale for: ' + esc(idea) + '"><option value="">–</option>' + d.timescales.map(function (t) { return '<option>' + t + '</option>'; }).join('') + '</select></div>';
      wrap.appendChild(row);
    });
    var tot = h('div', 'total'); tot.dataset.budget = d.id;
    tot.innerHTML = '<span class="t-text"></span><span class="track"><span class="fill" style="display:block"></span></span><button class="btn" data-act="sortbudget">Sort by priority</button>';
    wrap.appendChild(tot);
    return wrap;
  }
  function budgetUpdate(card) {
    var d = EXDEF[card.dataset.ex]; if (!d || d.kind !== 'budget') return;
    var sum = 0;
    d.items.forEach(function (_, i) { var v = parseFloat((store.get(d.id + '-a' + i) || '').replace(',', '.')); if (!isNaN(v)) sum += v; });
    var tot = $('.total', card); var over = sum > d.total;
    tot.classList.toggle('over', over);
    $('.t-text', tot).textContent = (d.unit || '£m') + ' ' + sum + ' of ' + d.total + ' allocated' + (over ? ' · over budget by ' + (sum - d.total) : ' · ' + (d.total - sum) + ' left');
    $('.fill', tot).style.width = Math.min(100, sum / d.total * 100) + '%';
  }
  function budgetSort(card) {
    var wrap = $('.budget', card); var rows = $$('.brow', wrap);
    rows.sort(function (a, b) { var pa = +($('select', a).value || 99), pb = +($('select', b).value || 99); return pa - pb; });
    rows.forEach(function (r) { wrap.insertBefore(r, $('.total', wrap)); });
  }

  function renderWords(b) {
    var box = h('div', 'grid-words');
    box.style.display = 'grid'; box.style.gap = '12px';
    box.innerHTML = '<div class="tools"><button class="btn" id="ru-toggle" aria-pressed="false">Hide Russian to test yourself</button></div>' +
      '<div class="tablebox"><table id="words"><thead><tr><th>Word or phrase</th><th>Meaning</th><th>Russian</th><th>Example</th></tr></thead><tbody>' +
      L.words.map(function (w) { return '<tr><td>' + w[0] + '</td><td>' + w[1] + '</td><td class="ru"><span tabindex="0">' + w[2] + '</span></td><td>' + w[3] + '</td></tr>'; }).join('') +
      '</tbody></table></div>';
    var rt = $('#ru-toggle', box), tb = $('#words', box);
    rt.addEventListener('click', function () { var on = rt.getAttribute('aria-pressed') !== 'true'; rt.setAttribute('aria-pressed', on); tb.classList.toggle('hide-ru', on); rt.textContent = on ? 'Show Russian' : 'Hide Russian to test yourself'; $$('.peek', tb).forEach(function (s) { s.classList.remove('peek'); }); });
    tb.addEventListener('click', function (e) { var s = e.target.closest('td.ru span'); if (s) s.classList.toggle('peek'); });
    tb.addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('td.ru span')) { e.preventDefault(); e.target.classList.toggle('peek'); } });
    return box;
  }

  function renderCando() {
    var ol = h('ol', 'cando');
    L.cando.forEach(function (q, i) {
      var li = h('li'); li.innerHTML = '<span class="q">' + q + '</span>';
      var g = h('span', 'grp'); g.setAttribute('role', 'radiogroup'); g.setAttribute('aria-label', q);
      SCALE.forEach(function (s) { g.insertAdjacentHTML('beforeend', '<label><input type="radio" name="cando-' + i + '" value="' + s + '" data-save="cando-' + i + '"><span>' + s + '</span></label>'); });
      li.appendChild(g); ol.appendChild(li);
    });
    return ol;
  }

  function renderSubmit() {
    var card = h('div', 'ex');
    card.innerHTML = '<div class="ex-head"><span class="src">End of lesson</span><h3>Send everything to your teacher</h3></div>' +
      '<p class="instr">Sends your name, scores, notes, texts and self-check' + (CFG.sheetEndpoint ? ' straight to your teacher’s results table.' : '. The link to the results table is not switched on yet, so copy the text and paste it into the LMS.') + '</p>' +
      '<div class="actions"><button class="btn primary" id="send-all">' + (CFG.sheetEndpoint ? 'Send my work' : 'Copy my work') + '</button><button class="btn" id="copy-all">Copy as text</button><span class="status" id="copy-status" aria-live="polite"></span></div>' +
      '<textarea class="copyout" id="copy-out" readonly aria-label="Your work as text"></textarea>';
    return card;
  }

  /* ---------- state: restore ---------- */
  function fieldVal(f) { if (f.matches('select,input')) return f.value; var c = $('input:checked', f); return c ? c.value : ''; }
  function setField(f, v) { if (f.matches('select,input')) { f.value = v; return; } $$('input', f).forEach(function (r) { r.checked = (r.value === v); }); }
  function fields(card) { return $$('[data-key]', card); }

  $$('[data-key]').forEach(function (f) { var v = store.get(f.dataset.key); if (v) setField(f, v); });
  $$('[data-save]').forEach(function (t) {
    var v = store.get(t.dataset.save); if (v == null) return;
    if (t.type === 'checkbox') t.checked = v === '1';
    else if (t.type === 'radio') t.checked = t.value === v;
    else t.value = v;
  });

  var results = {};
  var TOTAL = $$('[data-key]').length;

  function updateMeter() {
    var c = 0; Object.keys(results).forEach(function (k) { c += results[k].c; });
    $('#fill').style.width = (TOTAL ? c / TOTAL * 100 : 0) + '%';
    $('#meter-text').textContent = c + ' of ' + TOTAL + ' correct';
  }
  function updateBank(card) {
    var bank = $('.bank', card); if (!bank) return;
    var used = fields(card).map(function (f) { return f.value; });
    $$('span', bank).forEach(function (s) { s.classList.toggle('used', used.indexOf(s.dataset.w) > -1); });
  }
  function updatePills(t) {
    var box = t.closest('.prompt'); if (!box) return; var v = t.value;
    $$('.meter-pills [data-p]', box).forEach(function (s) { s.classList.toggle('on', PATTERNS[s.dataset.p].test(v)); });
    var tp = $('.track-pills', box); if (!tp) return;
    var exId = t.dataset.save.replace(/-\d+$/, ''); var p = EXDEF[exId] && EXDEF[exId].prompts[+t.dataset.save.split('-').pop()];
    var found = TRACK.filter(function (x) { return x[1].test(v); }).map(function (x) { return x[0]; });
    var words = v.trim() ? v.trim().split(/\s+/).length : 0; var s = '';
    if (p && p.words) { var ok = words >= p.words[0] && words <= p.words[1]; s += '<span class="lbl ' + (ok ? 'good' : '') + '">' + words + ' words · target ' + p.words[0] + '–' + p.words[1] + '</span>'; }
    if (p && p.track) s += '<span class="lbl">Lesson language: ' + found.length + '</span>' + found.map(function (n) { return '<span class="on">' + n + '</span>'; }).join('');
    tp.innerHTML = s;
  }

  /* ---------- sending to Google Sheets ---------- */
  function base(kind) { return { kind: kind, group: CFG.group || '', lesson: 'L' + L.number + ' ' + L.title, lessonId: L.id, student: studentName(), sentAt: new Date().toISOString() }; }
  function send(payload) {
    if (!CFG.sheetEndpoint) return Promise.resolve('off');
    return fetch(CFG.sheetEndpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) })
      .then(function () { return 'ok'; }, function () { return 'fail'; });
  }
  function sentMsg(card, r) {
    var el = $('.sent', card); if (!el) return;
    el.classList.toggle('ok', r === 'ok');
    el.textContent = r === 'ok' ? 'Sent to your teacher' : r === 'noname' ? 'Add your name at the top to send this' : r === 'fail' ? 'Not sent: check your connection' : '';
  }
  function exAnswers(card) {
    var d = EXDEF[card.dataset.ex], out = [];
    fields(card).forEach(function (f, i) { var v = fieldVal(f); if (v) out.push((i + 1) + ') ' + v + (f.classList.contains('ok') ? ' ✓' : f.classList.contains('bad') ? ' ✗' : '')); });
    $$('textarea[data-save]', card).forEach(function (t, i) { if (t.value.trim()) out.push(strip(d.prompts[i].q) + ': ' + t.value.trim()); });
    if (d.kind === 'budget') out = out.concat(budgetLines(d));
    return out;
  }
  function budgetLines(d) {
    return d.items.map(function (idea, i) { return { p: store.get(d.id + '-p' + i) || '–', a: store.get(d.id + '-a' + i) || '0', t: store.get(d.id + '-t' + i) || '–', idea: strip(idea) }; })
      .sort(function (x, y) { return (+x.p || 99) - (+y.p || 99); })
      .map(function (r) { return '#' + r.p + ' ' + r.idea + ' — ' + (d.unit || '£m') + ' ' + r.a + ', ' + r.t; });
  }

  function check(card, silent) {
    var fs = fields(card), c = 0;
    fs.forEach(function (f) {
      var v = norm(fieldVal(f)); var ans = JSON.parse(f.dataset.ans).map(norm);
      var ok = v !== '' && ans.indexOf(v) > -1;
      f.classList.toggle('ok', ok); f.classList.toggle('bad', !ok); if (ok) c++;
    });
    results[card.dataset.ex] = { c: c, t: fs.length };
    var sc = $('.score', card); sc.textContent = c + ' / ' + fs.length; sc.classList.toggle('full', c === fs.length);
    var sb = $('[data-act="show"]', card); if (sb) sb.disabled = false;
    updateMeter();
    if (silent) return;
    store.set('chk:' + card.dataset.ex, '1');
    var d = EXDEF[card.dataset.ex];
    if (!CFG.sheetEndpoint) return;
    if (!studentName()) { sentMsg(card, 'noname'); return; }
    var p = base('check'); p.exercise = strip(d.src + ' · ' + d.title); p.score = c; p.total = fs.length; p.answers = exAnswers(card).join(' | ');
    send(p).then(function (r) { sentMsg(card, r); });
  }
  function clearCard(card) {
    fields(card).forEach(function (f) { setField(f, ''); f.classList.remove('ok', 'bad'); store.set(f.dataset.key, ''); });
    $$('[data-save]', card).forEach(function (t) {
      if (t.type === 'checkbox') { t.checked = false; store.set(t.dataset.save, '0'); }
      else { t.value = ''; store.set(t.dataset.save, ''); if (t.tagName === 'TEXTAREA') updatePills(t); }
    });
    card.classList.remove('show-keys');
    var sc = $('.score', card); if (sc) { sc.textContent = ''; sc.classList.remove('full'); }
    var sb = $('[data-act="show"]', card); if (sb) sb.disabled = true;
    sentMsg(card, '');
    delete results[card.dataset.ex]; store.set('chk:' + card.dataset.ex, '');
    updateBank(card); budgetUpdate(card); updateMeter();
  }

  $$('textarea[data-save]').forEach(updatePills);
  $$('.ex[data-ex]').forEach(function (card) { updateBank(card); budgetUpdate(card); if (store.get('chk:' + card.dataset.ex) === '1') check(card, true); });
  updateMeter();

  /* ---------- events ---------- */
  document.addEventListener('change', function (e) {
    var t = e.target;
    var f = t.closest('[data-key]');
    if (f) { store.set(f.dataset.key, fieldVal(f)); f.classList.remove('ok', 'bad'); updateBank(f.closest('.ex')); }
    if (t.dataset && t.dataset.save) {
      if (t.type === 'checkbox') store.set(t.dataset.save, t.checked ? '1' : '0');
      else if (t.type === 'radio') store.set(t.dataset.save, t.value);
      else store.set(t.dataset.save, t.value);
      var card = t.closest('.ex'); if (card) budgetUpdate(card);
    }
  });
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t.matches && t.matches('input.f')) { store.set(t.dataset.key, t.value); t.classList.remove('ok', 'bad'); }
    if (t.dataset && t.dataset.save && t.type !== 'checkbox' && t.type !== 'radio') {
      store.set(t.dataset.save, t.value);
      if (t.tagName === 'TEXTAREA') updatePills(t);
      var card = t.closest('.ex'); if (card) budgetUpdate(card);
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.matches && e.target.matches('input.f')) { e.preventDefault(); check(e.target.closest('.ex')); }
  });
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]'); if (!b) return;
    var card = b.closest('.ex'); var act = b.dataset.act;
    if (act === 'check') check(card);
    if (act === 'show') card.classList.add('show-keys');
    if (act === 'model') { var m = $('.model', card); var o = m.classList.toggle('open'); b.textContent = o ? 'Hide' : (EXDEF[card.dataset.ex].modelLabel || 'Show ideas'); b.setAttribute('aria-expanded', o); }
    if (act === 'clear') clearCard(card);
    if (act === 'sortbudget') budgetSort(card);
    if (act === 'sendopen') {
      if (!CFG.sheetEndpoint) { var el = $('.sent', card); el.classList.remove('ok'); el.textContent = 'Saved on this device. Use “Send my work” at the end of the lesson.'; return; }
      if (!studentName()) { sentMsg(card, 'noname'); return; }
      var d = EXDEF[card.dataset.ex]; var p = base('task'); p.exercise = strip(d.src + ' · ' + d.title); p.score = ''; p.total = ''; p.answers = exAnswers(card).join(' | ');
      send(p).then(function (r) { sentMsg(card, r); });
    }
  });

  /* teacher mode: open any lesson with #teacher once on your own device */
  if (location.hash === '#teacher') store.set('teacher-on', '1', true);
  if (location.hash === '#student') store.set('teacher-on', '0', true);
  var tt = $('#teacher-toggle');
  if (store.get('teacher-on', true) === '1') {
    tt.hidden = false;
    var setT = function (on) { document.body.classList.toggle('teacher', on); tt.setAttribute('aria-pressed', on); store.set('teacher', on ? '1' : '0', true); };
    setT(store.get('teacher', true) !== '0');
    tt.addEventListener('click', function () { setT(tt.getAttribute('aria-pressed') !== 'true'); });
  }

  /* summary + send all */
  function summary() {
    var out = [];
    out.push(CFG.course + ' · ' + CFG.group + ' · Lesson ' + L.number + ' ' + L.title);
    out.push('Student: ' + (studentName() || '(no name)'));
    var c = 0; Object.keys(results).forEach(function (k) { c += results[k].c; });
    out.push('Checked: ' + c + ' of ' + TOTAL + ' correct'); out.push('');
    $$('.ex[data-ex]').forEach(function (card) {
      var d = EXDEF[card.dataset.ex]; var lines = exAnswers(card);
      $$('input[type=checkbox][data-save]', card).forEach(function (t, i) { if (t.checked) lines.push('✓ ' + strip(d.checklist[i])); });
      if (lines.length) { out.push(strip(d.src + ' · ' + d.title) + (results[d.id] ? ' (' + results[d.id].c + '/' + results[d.id].t + ')' : '')); lines.forEach(function (l) { out.push('  ' + l); }); out.push(''); }
    });
    if (L.cando) { out.push('Self-check:'); L.cando.forEach(function (q, i) { out.push('  ' + strip(q) + ' — ' + (store.get('cando-' + i) || 'not marked')); }); }
    return out.join('\n');
  }
  function showCopy(text, msg) {
    var out = $('#copy-out'), st = $('#copy-status');
    out.value = text; out.classList.add('open');
    var done = function () { st.classList.remove('warn'); st.textContent = msg || 'Copied. Paste it into the LMS.'; };
    try { navigator.clipboard.writeText(text).then(done, function () { out.focus(); out.select(); st.textContent = 'Select the text below and copy it.'; }); }
    catch (e) { out.focus(); out.select(); st.textContent = 'Select the text below and copy it.'; }
  }
  var sendAll = $('#send-all');
  if (sendAll) {
    sendAll.addEventListener('click', function () {
      var st = $('#copy-status'); var text = summary();
      if (!CFG.sheetEndpoint) { showCopy(text); return; }
      if (!studentName()) { st.classList.add('warn'); st.textContent = 'Add your name at the top first.'; nameInput.focus(); return; }
      var c = 0; Object.keys(results).forEach(function (k) { c += results[k].c; });
      var p = base('submission'); p.score = c; p.total = TOTAL; p.answers = text;
      st.classList.remove('warn'); st.textContent = 'Sending…';
      send(p).then(function (r) { if (r === 'ok') st.textContent = 'Sent. Your teacher has your work.'; else { st.classList.add('warn'); st.textContent = 'Not sent: check your connection, or copy the text instead.'; } });
    });
    $('#copy-all').addEventListener('click', function () { showCopy(summary()); });
  }

  /* reset */
  var ra = $('#reset-all'), ry = $('#reset-yes');
  ra.addEventListener('click', function () { ry.hidden = !ry.hidden; ra.textContent = ry.hidden ? 'Clear my answers' : 'Cancel'; });
  ry.addEventListener('click', function () {
    store.clear(); $$('.ex[data-ex]').forEach(clearCard); $$('.cando input').forEach(function (r) { r.checked = false; });
    ry.hidden = true; ra.textContent = 'Clear my answers';
  });
})();
