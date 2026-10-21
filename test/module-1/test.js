/* Module 1 Test — group 6.
   Content is encrypted (data.enc.js) and opens with the access code the teacher gives in class.
   Answers autosave on this device; on submit the scores and texts go to the group's Google Sheet
   through the same Apps Script endpoint the lessons use (assets/config.js → sheetEndpoint). */
(function () {
  'use strict';
  var CFG = window.SITE_CONFIG || {};
  var ENC = window.TEST_ENC;
  var NS = 'ae7:test:m1:';
  var app = document.getElementById('app');
  var T = null;          // decrypted test
  var V = null;          // chosen variant
  var S = load();        // state
  var tick = null, warned = {};

  /* ---------------- storage ---------------- */
  function load() {
    try { return JSON.parse(localStorage.getItem(NS + 'state')) || {}; } catch (e) { return {}; }
  }
  var saveT = null;
  function save(now) {
    clearTimeout(saveT);
    var w = function () { try { localStorage.setItem(NS + 'state', JSON.stringify(S)); } catch (e) {} };
    if (now) w(); else saveT = setTimeout(w, 250);
  }
  function getCode() { try { return localStorage.getItem(NS + 'code') || ''; } catch (e) { return ''; } }
  function setCode(c) { try { localStorage.setItem(NS + 'code', c); } catch (e) {} }

  /* ---------------- helpers ---------------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function toast(msg) { var t = $('#toast'); t.textContent = msg; t.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(function () { t.hidden = true; }, 4200); }
  function mmss(sec) { sec = Math.max(0, Math.round(sec)); var m = Math.floor(sec / 60), s = sec % 60; return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s; }
  function b64(s) { var b = atob(s), u = new Uint8Array(b.length); for (var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return u; }
  function words(s) { return (String(s || '').trim().match(/[A-Za-zÀ-ÿ0-9’'-]+/g) || []).length; }

  function norm(s) {
    s = String(s || '').toLowerCase();
    s = s.replace(/[’‘`´]/g, "'");
    s = s.replace(/n't\b/g, ' not');
    s = s.replace(/[-–—_/]/g, ' ');
    s = s.replace(/%/g, ' percent');
    s = s.replace(/[^a-z0-9' ]/g, '');
    return s.replace(/\s+/g, ' ').trim();
  }
  function sha(text) {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (x) { return ('0' + x.toString(16)).slice(-2); }).join('');
    });
  }
  function decrypt(code) {
    var enc = new TextEncoder();
    return crypto.subtle.importKey('raw', enc.encode(code.trim().toUpperCase()), 'PBKDF2', false, ['deriveKey'])
      .then(function (base) {
        return crypto.subtle.deriveKey({ name: 'PBKDF2', salt: b64(ENC.salt), iterations: ENC.iter, hash: 'SHA-256' },
          base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
      })
      .then(function (key) { return crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64(ENC.iv) }, key, b64(ENC.ct)); })
      .then(function (buf) { return JSON.parse(new TextDecoder().decode(buf)); });
  }

  /* ---------------- items ---------------- */
  function eachItem(fn) {
    V.parts.forEach(function (p) { p.groups.forEach(function (g) { g.items.forEach(function (it) { fn(it, g, p); }); }); });
  }
  function isAuto(g) { return g.type === 'choice' || g.type === 'short' || g.type === 'gap'; }
  function answered(it) { return String((S.answers || {})[it.id] || '').trim() !== ''; }
  function partDone(p) {
    var all = true; p.groups.forEach(function (g) { g.items.forEach(function (it) { if (!answered(it)) all = false; }); }); return all;
  }

  /* ---------------- gate ---------------- */
  function renderGate(msg) {
    var v = S.variant || '';
    app.innerHTML =
      '<header class="t-hero"><div class="wrap">' +
        '<div class="crumbs"><a href="../../">' + esc(CFG.course || 'Advanced English') + ' · ' + esc(CFG.group || '') + '</a><span>' + esc(CFG.org || '') + '</span></div>' +
        '<h1>Module 1 <em>Test</em></h1>' +
        '<p class="sum">Cities · A real buzz about the place · Urban renewal. Six parts, 70 points, 80 minutes. Your answers are saved on this device as you go and sent to your teacher when you finish.</p>' +
      '</div></header>' +
      '<main><div class="wrap gate">' +
        '<form class="card" id="gate" novalidate>' +
          '<h2>Before you start</h2>' +
          '<div class="field"><label for="g-name">First name and surname</label><input id="g-name" autocomplete="name" value="' + esc(S.name || guessName()) + '" placeholder="e.g. Anna Petrova"></div>' +
          '<div class="field"><span class="lab" id="g-vl">Your variant</span><div class="seg" role="group" aria-labelledby="g-vl">' +
            '<button type="button" data-v="A" aria-pressed="' + (v === 'A') + '"><b>A</b><span>Odd numbers on the class list</span></button>' +
            '<button type="button" data-v="B" aria-pressed="' + (v === 'B') + '"><b>B</b><span>Even numbers on the class list</span></button>' +
          '</div></div>' +
          '<div class="field"><label for="g-code">Access code</label><input id="g-code" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="Your teacher will give it in class" value="' + esc(getCode()) + '"><span class="hint">The test opens only with this code.</span></div>' +
          '<p class="err" id="g-err" role="alert">' + esc(msg || '') + '</p>' +
          '<button class="btn primary big" id="g-go" type="submit">' + (S.startedAt ? 'Continue my test' : 'Start the test · 80:00') + '</button>' +
        '</form>' +
        '<aside class="card">' +
          '<h2>Rules</h2>' +
          '<ol class="rules">' +
            '<li>Books, dictionaries, translators and AI tools are closed. Keep your camera on.</li>' +
            '<li>The timer starts when you press <b>Start</b> and does not stop if you close the page.</li>' +
            '<li>In Listening you watch only the part of the video shown on the highlighted card, <b>twice</b>.</li>' +
            '<li>Leaving this tab is recorded and sent to your teacher.</li>' +
            '<li>Press <b>Submit</b> when you finish. At 00:00 the test is sent automatically.</li>' +
          '</ol>' +
          '<ul class="parts-map">' +
            '<li><span>1 · Listening</span><span>10 pts · 12 min</span></li>' +
            '<li><span>2 · Vocabulary</span><span>15 pts · 10 min</span></li>' +
            '<li><span>3 · Grammar</span><span>15 pts · 12 min</span></li>' +
            '<li><span>4 · Reading</span><span>10 pts · 12 min</span></li>' +
            '<li><span>5 · Writing</span><span>10 pts · 18 min</span></li>' +
            '<li><span>6 · Creative task</span><span>10 pts · 13 min</span></li>' +
          '</ul>' +
        '</aside>' +
      '</div></main>';

    $$('.seg button').forEach(function (b) {
      b.addEventListener('click', function () {
        if (S.startedAt && S.variant && S.variant !== b.dataset.v) { $('#g-err').textContent = 'You have already started Variant ' + S.variant + '.'; return; }
        $$('.seg button').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true'); v = b.dataset.v;
      });
    });
    $('#gate').addEventListener('submit', function (e) {
      e.preventDefault();
      var name = $('#g-name').value.trim().replace(/\s+/g, ' ');
      var code = $('#g-code').value.trim();
      var err = $('#g-err');
      if (name.split(' ').length < 2) { err.textContent = 'Please write your first name and surname.'; $('#g-name').focus(); return; }
      if (!v) { err.textContent = 'Choose your variant: A or B.'; return; }
      if (!code) { err.textContent = 'Enter the access code.'; $('#g-code').focus(); return; }
      if (!window.crypto || !crypto.subtle) { err.textContent = 'This browser cannot open the test. Please use a recent Chrome, Edge, Firefox or Safari.'; return; }
      var btn = $('#g-go'); btn.disabled = true; btn.innerHTML = '<span class="spin" aria-hidden="true"></span> Opening…';
      decrypt(code).then(function (data) {
        T = data; setCode(code);
        S.name = name; S.variant = v; S.answers = S.answers || {};
        if (!S.startedAt) { S.startedAt = Date.now(); S.tabSwitches = 0; S.plays = {}; }
        try { localStorage.setItem('ae7:name', name); } catch (x) {}
        save(true); startTest();
      }).catch(function () {
        btn.disabled = false; btn.textContent = S.startedAt ? 'Continue my test' : 'Start the test · 80:00';
        err.textContent = 'The code is not correct. Check it with your teacher.';
      });
    });
  }
  function guessName() { try { return localStorage.getItem('ae7:name') || ''; } catch (e) { return ''; } }

  /* ---------------- test ---------------- */
  function startTest() {
    V = T.variants[S.variant];
    var html = '';
    html += '<div class="xbar"><div class="wrap"><div class="row">' +
      '<span class="xwho">' + esc(S.name) + '</span><span class="vchip">Variant ' + esc(S.variant) + '</span>' +
      '<span class="timer" id="timer" aria-live="off">80:00</span>' +
      '<div class="prog"><div class="track"><div class="fill" id="pfill"></div></div><span id="ptext">0 / 0</span></div>' +
      '<button class="btn primary" id="submit-top" type="button">Submit</button>' +
    '</div><nav class="pnav" id="pnav" aria-label="Parts">' +
      V.parts.map(function (p, i) { return '<a href="#part-' + p.id + '" data-p="' + p.id + '">' + (i + 1) + ' · ' + esc(p.title) + '</a>'; }).join('') +
    '</nav></div></div>';
    html += '<main><div class="wrap">';
    V.parts.forEach(function (p, i) { html += renderPart(p, i + 1); });
    html += '<section class="finish"><div class="card"><h2>Finished?</h2><p>Check that every part is done. Parts 3B, 5 and 6 are marked by your teacher; everything else is checked automatically. You cannot change your answers after you submit.</p><div><button class="btn primary big" id="submit-bottom" type="button">Submit my test</button></div></div></section>';
    html += '</div></main>';
    app.innerHTML = html;
    window.scrollTo(0, 0);

    $$('[data-item]').forEach(function (el) {
      var id = el.getAttribute('data-item');
      var ev = (el.type === 'radio') ? 'change' : 'input';
      el.addEventListener(ev, function () {
        S.answers[id] = el.value; save(); progress();
        if (el.classList.contains('essay')) wordCount(el);
      });
    });
    $$('.essay').forEach(wordCount);
    $('#submit-top').addEventListener('click', confirmSubmit);
    $('#submit-bottom').addEventListener('click', confirmSubmit);
    setupMedia();
    progress();
    clearInterval(tick); tick = setInterval(timer, 1000); timer();
    document.addEventListener('visibilitychange', onVis);
    window.addEventListener('beforeunload', onLeave);
  }

  function renderPart(p, n) {
    var h = '<section class="part" id="part-' + p.id + '">' +
      '<div class="part-head"><span class="no">Part ' + n + '</span><h2>' + esc(p.title) + '</h2><span class="meta">' + p.points + ' points · about ' + p.minutes + ' min</span></div>';
    if (p.intro) h += '<p class="intro">' + p.intro + '</p>';
    if (p.media) h += renderMedia(p.media);
    if (p.passage) {
      h += '<article class="passage"><h3>' + esc(p.passage.title) + '</h3>' +
        p.passage.paras.map(function (t, i) { return '<p><span class="pn">' + (i + 1) + '</span>' + esc(t) + '</p>'; }).join('') +
        '<p class="psrc">' + esc(p.passage.source) + '</p></article>';
    }
    p.groups.forEach(function (g) {
      h += '<div class="group">';
      if (g.title) h += '<h3>' + esc(g.title) + '</h3>';
      if (g.note) h += '<p class="note">' + esc(g.note) + '</p>';
      if (g.box) h += '<div class="box" aria-label="Words in the box">' + g.box.map(function (w) { return '<span>' + esc(w) + '</span>'; }).join('') + '</div>';
      g.items.forEach(function (it, k) { h += renderItem(it, g, k); });
      h += '</div>';
    });
    return h + '</section>';
  }

  function renderItem(it, g, k) {
    var val = (S.answers || {})[it.id] || '';
    var num = it.id.replace(/^[AB][A-Z]/, '');
    if (g.type === 'essay') {
      return '<div class="task">' + it.task + '</div>' +
        '<textarea class="essay" data-item="' + it.id + '" data-min="' + it.min + '" data-max="' + it.max + '" aria-label="Your text" spellcheck="false">' + esc(val) + '</textarea>' +
        '<div class="wc" data-wc="' + it.id + '"><div class="track"><div class="fill"></div></div><span><b>0</b> words · aim for ' + it.min + '–' + it.max + '</span></div>' +
        '<p class="crit">Marked by your teacher: ' + esc(it.crit) + '.</p>';
    }
    var h = '<div class="q"><span class="n">' + num + '</span>';
    if (g.type === 'choice') {
      h += '<div><div class="txt">' + it.q + '</div><div class="xopts" role="radiogroup" aria-label="Answer ' + num + '">' +
        g.options.map(function (o) {
          return '<label><input type="radio" name="' + it.id + '" value="' + esc(o) + '" data-item="' + it.id + '"' + (val === o ? ' checked' : '') + '><span>' + esc(o) + '</span></label>';
        }).join('') + '</div></div>';
    } else if (g.type === 'gap') {
      var parts = it.q.split('___');
      var w = it.id.indexOf('G') > 0 ? 22 : 14;
      h += '<div class="txt">' + parts[0] + '<input class="gapin" style="--w:' + w + '" data-item="' + it.id + '" value="' + esc(val) + '" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Gap ' + num + '">' + (parts[1] || '') + '</div>';
    } else if (g.type === 'short') {
      h += '<div><div class="txt">' + it.q + '</div><input class="line" data-item="' + it.id + '" value="' + esc(val) + '" autocomplete="off" spellcheck="false" aria-label="Answer ' + num + '"></div>';
    } else if (g.type === 'manual') {
      h += '<div><div class="txt">' + it.q + '</div><input class="line" data-item="' + it.id + '" value="' + esc(val) + '" autocomplete="off" spellcheck="false" aria-label="Your sentence ' + num + '"></div>';
    }
    return h + '</div>';
  }

  /* ---------------- media ---------------- */
  function renderMedia(m) {
    var h = '<div class="media"><div class="watch"><b>Watch only this part</b><span class="range">' + esc(m.range) + '</span><p>' + esc(m.cue) + '</p></div>';
    if (m.kind === 'file') {
      h += '<div class="screen"><video id="vid" preload="metadata" playsinline disablepictureinpicture controlslist="nodownload noplaybackrate nofullscreen"><source src="' + esc(m.src) + '" type="video/mp4"><source src="' + esc(m.src.replace(/\.mp4$/, '.webm')) + '" type="video/webm"></video></div>' +
        '<div class="ctrl"><button class="btn primary" id="vplay" type="button">Play the extract</button>' +
        '<button class="btn" id="vpause" type="button" hidden>Pause</button>' +
        '<div class="tl"><div class="track"><div class="fill" id="vfill"></div></div><span id="vtime">00:00 / ' + mmss(m.end - m.start) + '</span></div>' +
        '<span class="left" id="vleft"></span></div>';
    } else {
      var src = 'https://www.youtube-nocookie.com/embed/' + m.id + '?start=' + m.start + '&end=' + m.end + '&rel=0&modestbranding=1&cc_load_policy=0';
      h += '<div class="screen"><iframe src="' + src + '" title="Listening video" allow="encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>' +
        '<div class="ctrl"><span class="left">The video starts at ' + mmss(m.start) + ' and stops at about ' + mmss(m.end) + '. Watch it twice. If it does not load, open it on <a href="' + esc(m.alt) + '" target="_blank" rel="noopener">TED</a> and find ' + esc(m.range) + '.</span></div>';
    }
    return h + '<p class="credit">' + esc(m.credit) + ' Subtitles off.</p></div>';
  }

  function setupMedia() {
    var lp = V.parts[0], m = lp && lp.media;
    if (!m || m.kind !== 'file') return;
    var v = $('#vid'), play = $('#vplay'), pause = $('#vpause'), fill = $('#vfill'), time = $('#vtime'), left = $('#vleft');
    S.plays = S.plays || {};
    var used = function () { return S.plays[S.variant] || 0; };
    var running = false, paused = false;
    function ui() {
      var l = m.plays - used();
      left.textContent = running ? 'Playing ' + used() + ' of ' + m.plays : (l > 0 ? l + (l === 1 ? ' play' : ' plays') + ' left' : 'No plays left');
      play.hidden = running && !paused; pause.hidden = !running || paused;
      play.textContent = paused ? 'Resume' : (used() === 0 ? 'Play the extract' : 'Play again');
      play.disabled = !paused && l <= 0;
    }
    function finish() { running = false; paused = false; v.pause(); ui(); }
    play.addEventListener('click', function () {
      if (paused) { paused = false; v.play(); ui(); return; }
      if (used() >= m.plays) return;
      S.plays[S.variant] = used() + 1; save(true);
      running = true; paused = false;
      try { v.currentTime = m.start; } catch (e) {}
      var p = v.play(); if (p && p.catch) p.catch(function () { toast('Press Play again — the browser blocked the sound.'); S.plays[S.variant] = used() - 1; running = false; save(true); ui(); });
      ui();
    });
    pause.addEventListener('click', function () { paused = true; v.pause(); ui(); });
    v.addEventListener('timeupdate', function () {
      var t = Math.max(0, v.currentTime - m.start), d = m.end - m.start;
      fill.style.width = Math.min(100, t / d * 100) + '%';
      time.textContent = mmss(Math.min(t, d)) + ' / ' + mmss(d);
      if (v.currentTime >= m.end) finish();
    });
    v.addEventListener('ended', finish);
    v.addEventListener('seeking', function () { if (running && (v.currentTime > m.end + 1)) v.currentTime = m.end; });
    ui();
  }

  /* ---------------- progress, timer ---------------- */
  function progress() {
    var total = 0, done = 0;
    eachItem(function (it) { total++; if (answered(it)) done++; });
    $('#pfill').style.width = (total ? done / total * 100 : 0) + '%';
    $('#ptext').textContent = done + ' / ' + total;
    V.parts.forEach(function (p) { var a = $('#pnav a[data-p="' + p.id + '"]'); if (a) a.classList.toggle('done', partDone(p)); });
  }
  function remaining() { return (S.startedAt + (T.minutes || 80) * 60000 - Date.now()) / 1000; }
  function timer() {
    var r = remaining(), el = $('#timer');
    if (!el) return;
    el.textContent = mmss(r);
    el.classList.toggle('warn', r <= 600 && r > 120);
    el.classList.toggle('late', r <= 120);
    if (r <= 600 && !warned[10]) { warned[10] = 1; toast('10 minutes left.'); }
    if (r <= 300 && !warned[5]) { warned[5] = 1; toast('5 minutes left. Check your writing.'); }
    if (r <= 0) { clearInterval(tick); toast('Time is up. Sending your test…'); submit(true); }
  }
  function wordCount(el) {
    var n = words(el.value), min = +el.dataset.min, max = +el.dataset.max;
    var box = $('[data-wc="' + el.dataset.item + '"]');
    box.querySelector('b').textContent = n;
    box.querySelector('.fill').style.width = Math.min(100, n / max * 100) + '%';
    box.classList.toggle('ok', n >= min && n <= max);
    box.classList.toggle('over', n > max + 15);
  }
  function onVis() { if (document.hidden && S.startedAt && !S.submittedAt) { S.tabSwitches = (S.tabSwitches || 0) + 1; save(true); } }
  function onLeave(e) { if (S.startedAt && !S.submittedAt) { e.preventDefault(); e.returnValue = ''; } }

  /* ---------------- submit ---------------- */
  function confirmSubmit() {
    var empty = 0; eachItem(function (it) { if (!answered(it)) empty++; });
    var wrap = document.createElement('div');
    wrap.className = 'modal';
    wrap.innerHTML = '<div class="card" role="dialog" aria-modal="true" aria-labelledby="m-h"><h2 id="m-h">Submit your test?</h2>' +
      '<p>' + (empty ? 'You have <b>' + empty + '</b> unanswered ' + (empty === 1 ? 'question' : 'questions') + '. ' : 'Every question has an answer. ') +
      'You cannot change anything after you submit.</p><div class="actions"><button class="btn" type="button" data-x>Back to the test</button><button class="btn primary" type="button" data-ok>Submit</button></div></div>';
    document.body.appendChild(wrap);
    var close = function () { wrap.remove(); };
    wrap.addEventListener('click', function (e) { if (e.target === wrap) close(); });
    $('[data-x]', wrap).addEventListener('click', close);
    $('[data-ok]', wrap).addEventListener('click', function () { close(); submit(false); });
    $('[data-ok]', wrap).focus();
  }

  function score() {
    var jobs = [];
    var res = { parts: {}, items: {}, auto: 0, autoTotal: 0 };
    eachItem(function (it, g, p) {
      if (!isAuto(g)) return;
      res.autoTotal++;
      var a = (S.answers || {})[it.id] || '';
      if (it.rule && it.rule.kind === 'keywords') {
        var n = norm(a), hits = 0;
        it.rule.groups.forEach(function (grp) { if (grp.some(function (k) { return n.indexOf(k) >= 0; })) hits++; });
        jobs.push(Promise.resolve({ it: it, p: p, ok: hits >= it.rule.need }));
      } else {
        jobs.push(sha(T.salt + it.id + '|' + norm(a)).then(function (hx) { return { it: it, p: p, ok: a.trim() !== '' && it.keys.indexOf(hx) >= 0 }; }));
      }
    });
    return Promise.all(jobs).then(function (list) {
      list.forEach(function (r) {
        res.items[r.it.id] = r.ok;
        var ps = res.parts[r.p.id] = res.parts[r.p.id] || { ok: 0, n: 0 };
        ps.n++; if (r.ok) { ps.ok++; res.auto++; }
      });
      return res;
    });
  }

  function report(res) {
    var a = S.answers || {}, out = [];
    var used = Math.round((Math.min(Date.now(), S.startedAt + (T.minutes || 80) * 60000) - S.startedAt) / 60000);
    out.push('MODULE 1 TEST · Variant ' + S.variant + ' · ' + S.name);
    out.push('Auto-checked: ' + res.auto + ' / ' + res.autoTotal + ' · Teacher marks: 3B /5, Writing /10, Creative /10');
    out.push('Time used: ' + used + ' min · Left the tab: ' + (S.tabSwitches || 0) + ' times · Video plays: ' + ((S.plays || {})[S.variant] || 0));
    V.parts.forEach(function (p, i) {
      out.push('');
      var ps = res.parts[p.id];
      out.push('PART ' + (i + 1) + ' · ' + p.title.toUpperCase() + (ps ? ' — ' + ps.ok + ' / ' + ps.n : ''));
      p.groups.forEach(function (g) {
        g.items.forEach(function (it) {
          var num = it.id.replace(/^[AB][A-Z]/, '');
          var ans = String(a[it.id] || '').trim();
          if (g.type === 'essay') { out.push('(' + words(ans) + ' words)'); out.push(ans || '—'); }
          else if (isAuto(g)) out.push(num + '. ' + (res.items[it.id] ? '✓ ' : '✗ ') + (ans || '—'));
          else out.push(num + '. ' + (ans || '—'));
        });
      });
    });
    return out.join('\n');
  }

  function post(payload) {
    if (!CFG.sheetEndpoint) return Promise.resolve('off');
    return fetch(CFG.sheetEndpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) });
  }

  function submit(auto) {
    if (S.submittedAt || submit.busy) return;
    submit.busy = true;
    clearInterval(tick);
    window.removeEventListener('beforeunload', onLeave);
    var btns = $$('#submit-top,#submit-bottom'); btns.forEach(function (b) { b.disabled = true; b.innerHTML = '<span class="spin" aria-hidden="true"></span> Sending…'; });
    score().then(function (res) {
      var text = report(res);
      var lesson = 'Module 1 Test · Variant ' + S.variant;
      var base = function (kind) { return { kind: kind, group: CFG.group || '', lesson: lesson, student: S.name, sentAt: new Date().toISOString() }; };
      var a = S.answers || {};
      var reqs = [];
      var sub = base('submission'); sub.score = res.auto; sub.total = res.autoTotal; sub.answers = text; reqs.push(sub);
      V.parts.forEach(function (p) {
        var ps = res.parts[p.id];
        if (ps) { var c = base('check'); c.exercise = 'Test · ' + p.title; c.score = ps.ok; c.total = ps.n; c.answers = ''; reqs.push(c); }
      });
      var gm = []; V.parts.forEach(function (p) { p.groups.forEach(function (g) { if (g.type === 'manual') g.items.forEach(function (it) { gm.push(it.id.replace(/^[AB][A-Z]/, '') + '. ' + (a[it.id] || '—')); }); }); });
      var t1 = base('task'); t1.exercise = 'Test · Grammar 3B (/5)'; t1.answers = gm.join('\n'); reqs.push(t1);
      var w = a[S.variant + 'W1'] || '', c2 = a[S.variant + 'C1'] || '';
      var t2 = base('task'); t2.exercise = 'Test · Writing (/10) · ' + words(w) + ' words'; t2.answers = w; reqs.push(t2);
      var t3 = base('task'); t3.exercise = 'Test · Creative (/10) · ' + words(c2) + ' words'; t3.answers = c2; reqs.push(t3);
      var chain = Promise.resolve(), failed = false;
      reqs.forEach(function (r) { chain = chain.then(function () { return post(r).catch(function () { failed = true; }); }); });
      return chain.then(function () {
        S.submittedAt = Date.now(); S.sendFailed = failed || !CFG.sheetEndpoint; S.report = text; save(true);
        renderDone(auto);
      });
    }).catch(function () {
      submit.busy = false; btns.forEach(function (b) { b.disabled = false; b.textContent = 'Submit'; });
      toast('Something went wrong. Please press Submit again.');
    });
  }

  function renderDone(auto) {
    document.removeEventListener('visibilitychange', onVis);
    var at = new Date(S.submittedAt);
    app.innerHTML = '<header class="t-hero"><div class="wrap"><div class="crumbs"><a href="../../">' + esc(CFG.course || 'Advanced English') + ' · ' + esc(CFG.group || '') + '</a></div><h1>Module 1 <em>Test</em></h1></div></header>' +
      '<main><div class="wrap done">' +
        '<div class="tick" aria-hidden="true">✓</div>' +
        '<h2>' + (S.sendFailed ? 'Saved — please send it to your teacher' : 'Your test has been sent') + '</h2>' +
        '<dl><dt>Name</dt><dd>' + esc(S.name) + '</dd><dt>Variant</dt><dd>' + esc(S.variant) + '</dd><dt>Submitted</dt><dd>' + at.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + (auto ? ' (time ran out)' : '') + '</dd></dl>' +
        '<p>' + (S.sendFailed ? 'The connection to the results table did not work. Press the button below and paste the text into the chat or the LMS.' : 'Your teacher will check the writing tasks and give you your mark. You can close this page.') + '</p>' +
        '<div><button class="btn" id="copy" type="button">Copy my answers</button></div>' +
      '</div></main>';
    $('#copy').addEventListener('click', function () {
      var txt = S.report || '';
      (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(function () { toast('Copied.'); }, function () {
        var ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); toast('Copied.'); } catch (e) { toast('Select and copy the text manually.'); } ta.remove();
      });
    });
  }

  /* ---------------- boot ---------------- */
  if (location.hash === '#reset') {
    try { localStorage.removeItem(NS + 'state'); localStorage.removeItem(NS + 'code'); } catch (e) {}
    S = {}; history.replaceState(null, '', location.pathname);
  }
  if (!ENC) { app.innerHTML = '<main><div class="wrap done"><h2>The test is not available yet.</h2></div></main>'; return; }
  if (S.submittedAt) renderDone(false);
  else if (S.startedAt && getCode()) {
    decrypt(getCode()).then(function (d) { T = d; startTest(); }).catch(function () { renderGate(); });
  } else renderGate();
})();
