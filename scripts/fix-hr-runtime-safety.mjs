import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const hrFile = path.join(root, 'apps', 'web-erp', 'src', 'components', 'hr-module-client.tsx');
const shellFile = path.join(root, 'apps', 'web-erp', 'src', 'components', 'erp-shell.tsx');

if (fs.existsSync(shellFile)) {
  let shell = fs.readFileSync(shellFile, 'utf8');

  shell = shell.replaceAll('[\\n', '[\n');
  shell = shell.replaceAll('\\n  {', '\n  {');

  fs.writeFileSync(shellFile, shell, 'utf8');
  console.log('fixed shell newline issues');
}

if (fs.existsSync(hrFile)) {
  let code = fs.readFileSync(hrFile, 'utf8');

  code = code.replace(
    `setEmployees(employeeRows);
      setAttendance(attendanceRows);
      setPayroll(payrollRows);`,
    `setEmployees(Array.isArray(employeeRows) ? employeeRows : []);
      setAttendance(Array.isArray(attendanceRows) ? attendanceRows : []);
      setPayroll(Array.isArray(payrollRows) ? payrollRows : []);`,
  );

  code = code.replaceAll('employees.map(', '(Array.isArray(employees) ? employees : []).map(');
  code = code.replaceAll('attendance.slice(0, 20).map(', '(Array.isArray(attendance) ? attendance : []).slice(0, 20).map(');
  code = code.replaceAll('payroll.slice(0, 20).map(', '(Array.isArray(payroll) ? payroll : []).slice(0, 20).map(');

  fs.writeFileSync(hrFile, code, 'utf8');
  console.log('fixed HR runtime safety');
}

console.log('DONE');