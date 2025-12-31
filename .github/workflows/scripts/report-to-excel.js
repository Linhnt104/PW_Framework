const fs = require('fs');
const XLSX = require('xlsx');

const input = 'playwright-report.json';
const output = 'test-results.xlsx';

const report = JSON.parse(fs.readFileSync(input, 'utf-8'));

let stt = 0;
const rows = [];

function walkSuites(suites, prefix = '') {
  for (const s of suites || []) {
    const suiteName = s.title ? (prefix ? `${prefix} > ${s.title}` : s.title) : prefix;
    // tests nằm trong s.specs
    for (const spec of s.specs || []) {
      const testName = spec.title;
      for (const t of spec.tests || []) {
        // 1 test có nhiều results (retry). Lấy kết quả cuối
        const last = (t.results && t.results[t.results.length - 1]) || {};
        const status = last.status || t.status || 'unknown';

        stt += 1;
        rows.push({
          STT: stt,
          Testcase: suiteName ? `${suiteName} > ${testName}` : testName,
          Status: status, // passed / failed / skipped / timedOut / interrupted
        });
      }
    }
    walkSuites(s.suites, suiteName);
  }
}

walkSuites(report.suites);

const ws = XLSX.utils.json_to_sheet(rows);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Results');
XLSX.writeFile(wb, output);

console.log(`Wrote ${output} with ${rows.length} rows`);