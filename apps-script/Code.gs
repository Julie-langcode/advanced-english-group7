/**
 * Advanced English · Group 6 — results receiver for Google Sheets.
 * Paste this whole file into Extensions → Apps Script of the results spreadsheet,
 * run setup() once, then Deploy → New deployment → Web app
 *   (Execute as: Me · Who has access: Anyone).
 * Copy the Web App URL (ends with /exec) into assets/config.js → sheetEndpoint.
 */
var SHEET_ID = '1msnpqbhJD7dzU-9OdlS8Z4D2mQm_hOk3O2o2sfQCSpQ';

var TABS = {
  check:      { name: 'Checks',      head: ['Time', 'Group', 'Lesson', 'Student', 'Exercise', 'Score', 'Total', '%', 'Answers'] },
  task:       { name: 'Tasks',       head: ['Time', 'Group', 'Lesson', 'Student', 'Task', 'Answers'] },
  submission: { name: 'Submissions', head: ['Time', 'Group', 'Lesson', 'Student', 'Correct', 'Total', '%', 'Full work'] }
};

function setup() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  Object.keys(TABS).forEach(function (k) { tab_(ss, TABS[k]); });
}

function doGet() {
  return ContentService.createTextOutput('Advanced English results endpoint is running.');
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var d = JSON.parse(e.postData.contents);
    var kind = TABS[d.kind] ? d.kind : 'task';
    var sh = tab_(SpreadsheetApp.openById(SHEET_ID), TABS[kind]);
    var now = new Date();
    var pct = (d.total ? Math.round((Number(d.score) || 0) / Number(d.total) * 100) : '');
    var row;
    if (kind === 'check') row = [now, d.group, d.lesson, d.student, d.exercise, d.score, d.total, pct, d.answers];
    else if (kind === 'submission') row = [now, d.group, d.lesson, d.student, d.score, d.total, pct, d.answers];
    else row = [now, d.group, d.lesson, d.student, d.exercise, d.answers];
    sh.appendRow(row.map(clean_));
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error: ' + err);
  } finally {
    lock.releaseLock();
  }
}

function tab_(ss, t) {
  var sh = ss.getSheetByName(t.name);
  if (!sh) {
    sh = ss.insertSheet(t.name);
    sh.appendRow(t.head);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, t.head.length).setFontWeight('bold').setBackground('#E6EDE2');
    sh.setColumnWidth(t.head.length, 520);
  }
  return sh;
}

/* Text from students never becomes a formula, and stays a sensible size. */
function clean_(v) {
  if (v instanceof Date || typeof v === 'number') return v;
  var s = String(v == null ? '' : v).slice(0, 45000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}
