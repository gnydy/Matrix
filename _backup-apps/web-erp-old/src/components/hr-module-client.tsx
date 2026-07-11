
'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { erpApi, field, money, num } from './erp-api';

type Employee = {
  id: string;
  code?: string | null;
  employeeCode?: string | null;
  name: string;
  phone?: string | null;
  jobTitle?: string | null;
  department?: string | null;
  salary?: string | number | null;
  baseSalary?: string | number | null;
  basicSalary?: string | number | null;
  status?: string | null;
  hiredAt?: string | null;
};

type Attendance = {
  id: string;
  employeeId?: string | null;
  date?: string | null;
  status?: string | null;
  checkIn?: string | null;
  checkOut?: string | null;
  note?: string | null;
  employee?: Employee | null;
};

type Payroll = {
  id: string;
  employeeId?: string | null;
  month?: string | null;
  baseSalary?: string | number | null;
  salary?: string | number | null;
  additions?: string | number | null;
  deductions?: string | number | null;
  netSalary?: string | number | null;
  total?: string | number | null;
  status?: string | null;
  employee?: Employee | null;
};

type Mode = 'none' | 'employee' | 'attendance' | 'payroll';

async function getFirst<T>(paths: string[], fallback: T): Promise<T> {
  let lastError: unknown;

  for (const item of paths) {
    try {
      return await erpApi<T>(item);
    } catch (e) {
      lastError = e;
    }
  }

  console.warn('HR load fallback used', lastError);
  return fallback;
}

async function postFirst<T>(paths: string[], body: unknown): Promise<T> {
  let lastError: unknown;

  for (const item of paths) {
    try {
      return await erpApi<T>(item, {
        method: 'POST',
        body: JSON.stringify(body),
      });
    } catch (e) {
      lastError = e;
    }
  }

  if (lastError instanceof Error) {
    throw lastError;
  }

  throw new Error('تعذر تنفيذ العملية');
}

function employeeCode(employee: Employee) {
  return employee.employeeCode || employee.code || 'بدون كود';
}

function employeeSalary(employee: Employee) {
  return Number(employee.baseSalary ?? employee.basicSalary ?? employee.salary ?? 0);
}

function statusText(status?: string | null) {
  if (status === 'active') return 'نشط';
  if (status === 'inactive') return 'موقوف';
  if (status === 'present') return 'حاضر';
  if (status === 'absent') return 'غائب';
  if (status === 'leave') return 'إجازة';
  if (status === 'paid') return 'مدفوع';
  if (status === 'draft') return 'مسودة';
  return status || 'غير محدد';
}

function attendanceEmployeeName(row: Attendance, employees: Employee[]) {
  return row.employee?.name || employees.find((employee) => employee.id === row.employeeId)?.name || 'موظف';
}

function payrollEmployeeName(row: Payroll, employees: Employee[]) {
  return row.employee?.name || employees.find((employee) => employee.id === row.employeeId)?.name || 'موظف';
}

function payrollNet(row: Payroll) {
  return Number(row.netSalary ?? row.total ?? row.salary ?? 0);
}

export function HrModuleClient() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [attendance, setAttendance] = useState<Attendance[]>([]);
  const [payroll, setPayroll] = useState<Payroll[]>([]);

  const [mode, setMode] = useState<Mode>('none');
  const [selectedPayrollEmployeeId, setSelectedPayrollEmployeeId] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    setError('');

    try {
      const [employeeRows, attendanceRows, payrollRows] = await Promise.all([
        getFirst<Employee[]>(['hr/employees'], []),
        getFirst<Attendance[]>(['hr/attendance', 'hr/attendances'], []),
        getFirst<Payroll[]>(['hr/payroll', 'hr/payrolls', 'hr/payroll-runs'], []),
      ]);

      setEmployees(Array.isArray(employeeRows) ? employeeRows : []);
      setAttendance(Array.isArray(attendanceRows) ? attendanceRows : []);
      setPayroll(Array.isArray(payrollRows) ? payrollRows : []);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل الموارد البشرية');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  const totals = useMemo(() => {
    const activeEmployees = employees.filter((employee) => employee.status !== 'inactive').length;
    const salaryTotal = employees.reduce((sum, employee) => sum + employeeSalary(employee), 0);
    const payrollTotal = payroll.reduce((sum, row) => sum + payrollNet(row), 0);

    return {
      activeEmployees,
      salaryTotal,
      payrollTotal,
    };
  }, [employees, payroll]);

  async function addEmployee(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const name = field(form, 'name');
    const salary = num(form, 'salary');

    if (!name) {
      setError('اكتب اسم الموظف');
      return;
    }

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await postFirst<Employee>(['hr/employees'], {
        code: field(form, 'code') || undefined,
        employeeCode: field(form, 'code') || undefined,
        name,
        phone: field(form, 'phone') || undefined,
        jobTitle: field(form, 'jobTitle') || undefined,
        department: field(form, 'department') || undefined,
        salary,
        baseSalary: salary,
        basicSalary: salary,
        hiredAt: field(form, 'hiredAt') || undefined,
        status: 'active',
      });

      formElement.reset();
      setMode('none');
      setMessage('تم حفظ الموظف');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ الموظف');
    } finally {
      setSaving(false);
    }
  }

  async function addAttendance(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const employeeId = field(form, 'employeeId');
    const date = field(form, 'date');
    const status = field(form, 'status');

    if (!employeeId) {
      setError('اختر الموظف');
      return;
    }

    if (!date) {
      setError('اختر التاريخ');
      return;
    }

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await postFirst<Attendance>(['hr/attendance', 'hr/attendances'], {
        employeeId,
        date,
        status,
        checkIn: field(form, 'checkIn') || undefined,
        checkOut: field(form, 'checkOut') || undefined,
        note: field(form, 'note') || undefined,
      });

      formElement.reset();
      setMode('none');
      setMessage('تم تسجيل الحضور');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تسجيل الحضور');
    } finally {
      setSaving(false);
    }
  }

  async function addPayroll(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const employeeId = field(form, 'employeeId');
    const month = field(form, 'month');
    const baseSalary = num(form, 'baseSalary');
    const additions = num(form, 'additions');
    const deductions = num(form, 'deductions');
    const netSalary = baseSalary + additions - deductions;

    if (!employeeId) {
      setError('اختر الموظف');
      return;
    }

    if (!month) {
      setError('اختر الشهر');
      return;
    }

    if (netSalary < 0) {
      setError('صافي الراتب لا يمكن أن يكون بالسالب');
      return;
    }

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await postFirst<Payroll>(['hr/payroll', 'hr/payrolls', 'hr/payroll-runs'], {
        employeeId,
        month,
        baseSalary,
        salary: baseSalary,
        additions,
        deductions,
        netSalary,
        total: netSalary,
        status: 'paid',
        note: field(form, 'note') || undefined,
      });

      formElement.reset();
      setSelectedPayrollEmployeeId('');
      setMode('none');
      setMessage('تم تسجيل الراتب');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تسجيل الراتب');
    } finally {
      setSaving(false);
    }
  }

  const selectedPayrollEmployee = employees.find((employee) => employee.id === selectedPayrollEmployeeId);

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>الموارد البشرية</h1>
            <p style={{ color: '#cbd5e1', margin: 0 }}>
              إدارة الموظفين والحضور والرواتب.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button type="button" onClick={() => setMode(mode === 'employee' ? 'none' : 'employee')} style={{ padding: '12px 16px', borderRadius: 12, border: 0, background: '#2563eb', color: 'white', fontWeight: 700, cursor: 'pointer' }}>
              إضافة موظف
            </button>

            <button type="button" onClick={() => setMode(mode === 'attendance' ? 'none' : 'attendance')} style={{ padding: '12px 16px', borderRadius: 12, border: '1px solid #14532d', background: '#052e16', color: '#bbf7d0', fontWeight: 700, cursor: 'pointer' }}>
              تسجيل حضور
            </button>

            <button type="button" onClick={() => setMode(mode === 'payroll' ? 'none' : 'payroll')} style={{ padding: '12px 16px', borderRadius: 12, border: '1px solid #7c2d12', background: '#431407', color: '#fed7aa', fontWeight: 700, cursor: 'pointer' }}>
              تسجيل راتب
            </button>
          </div>
        </div>

        {loading ? <p style={{ marginTop: 16 }}>جاري تحميل الموارد البشرية...</p> : null}
        {message ? <p style={{ marginTop: 16, color: '#22c55e' }}>{message}</p> : null}
        {error ? <p style={{ marginTop: 16, color: '#ef4444' }}>{error}</p> : null}

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
          <strong>الموظفون: {employees.length}</strong>
          <strong>النشطون: {totals.activeEmployees}</strong>
          <strong>إجمالي الرواتب الأساسية: {money(totals.salaryTotal)}</strong>
          <strong>إجمالي الرواتب المسجلة: {money(totals.payrollTotal)}</strong>
        </div>
      </section>

      {mode === 'employee' ? (
        <form onSubmit={addEmployee} style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>إضافة موظف</h2>

          <div style={{ display: 'grid', gap: 12, maxWidth: 620 }}>
            <input name="code" placeholder="كود الموظف مثال: EMP-001" style={{ padding: 12 }} />
            <input name="name" required placeholder="اسم الموظف" style={{ padding: 12 }} />
            <input name="phone" placeholder="رقم الهاتف" style={{ padding: 12 }} />
            <input name="jobTitle" placeholder="الوظيفة مثال: كاشير / محاسب / عامل مخزن" style={{ padding: 12 }} />
            <input name="department" placeholder="القسم مثال: مبيعات / مخزن / إدارة" style={{ padding: 12 }} />
            <input name="salary" type="number" min="0" defaultValue="0" placeholder="الراتب الأساسي" style={{ padding: 12 }} />
            <input name="hiredAt" type="date" style={{ padding: 12 }} />

            <button disabled={saving} style={{ padding: 12 }}>
              {saving ? 'جاري الحفظ...' : 'حفظ الموظف'}
            </button>
          </div>
        </form>
      ) : null}

      {mode === 'attendance' ? (
        <form onSubmit={addAttendance} style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>تسجيل حضور</h2>

          <div style={{ display: 'grid', gap: 12, maxWidth: 620 }}>
            <select name="employeeId" required style={{ padding: 12 }}>
              <option value="">اختر الموظف</option>
              {(Array.isArray(employees) ? employees : []).map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employeeCode(employee)} — {employee.name}
                </option>
              ))}
            </select>

            <input name="date" type="date" required defaultValue={new Date().toISOString().slice(0, 10)} style={{ padding: 12 }} />

            <select name="status" required defaultValue="present" style={{ padding: 12 }}>
              <option value="present">حاضر</option>
              <option value="absent">غائب</option>
              <option value="leave">إجازة</option>
            </select>

            <input name="checkIn" type="time" placeholder="وقت الحضور" style={{ padding: 12 }} />
            <input name="checkOut" type="time" placeholder="وقت الانصراف" style={{ padding: 12 }} />
            <input name="note" placeholder="ملاحظة" style={{ padding: 12 }} />

            <button disabled={saving} style={{ padding: 12 }}>
              {saving ? 'جاري التسجيل...' : 'تسجيل الحضور'}
            </button>
          </div>
        </form>
      ) : null}

      {mode === 'payroll' ? (
        <form onSubmit={addPayroll} style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>تسجيل راتب</h2>

          <div style={{ display: 'grid', gap: 12, maxWidth: 620 }}>
            <select
              name="employeeId"
              required
              value={selectedPayrollEmployeeId}
              onChange={(event) => setSelectedPayrollEmployeeId(event.target.value)}
              style={{ padding: 12 }}
            >
              <option value="">اختر الموظف</option>
              {(Array.isArray(employees) ? employees : []).map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employeeCode(employee)} — {employee.name}
                </option>
              ))}
            </select>

            <input name="month" type="month" required defaultValue={new Date().toISOString().slice(0, 7)} style={{ padding: 12 }} />

            <input
              name="baseSalary"
              type="number"
              min="0"
              defaultValue={selectedPayrollEmployee ? employeeSalary(selectedPayrollEmployee) : 0}
              placeholder="الراتب الأساسي"
              style={{ padding: 12 }}
            />

            <input name="additions" type="number" min="0" defaultValue="0" placeholder="إضافات / حوافز" style={{ padding: 12 }} />
            <input name="deductions" type="number" min="0" defaultValue="0" placeholder="خصومات" style={{ padding: 12 }} />
            <input name="note" placeholder="ملاحظة" style={{ padding: 12 }} />

            <button disabled={saving} style={{ padding: 12 }}>
              {saving ? 'جاري التسجيل...' : 'تسجيل الراتب'}
            </button>
          </div>
        </form>
      ) : null}

      <section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <div style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>الموظفون</h2>

          <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
            {(Array.isArray(employees) ? employees : []).map((employee) => (
              <div key={employee.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
                <strong>{employeeCode(employee)} — {employee.name}</strong>
                <div style={{ color: '#94a3b8', marginTop: 4 }}>
                  {employee.jobTitle || 'بدون وظيفة'} · {employee.department || 'بدون قسم'}
                </div>
                <div style={{ color: '#cbd5e1', marginTop: 4 }}>
                  الراتب: {money(employeeSalary(employee))} · الحالة: {statusText(employee.status)}
                </div>
              </div>
            ))}

            {!employees.length ? <p style={{ color: '#94a3b8' }}>لا يوجد موظفون مسجلون.</p> : null}
          </div>
        </div>

        <div style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>آخر الحضور</h2>

          <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
            {(Array.isArray(attendance) ? attendance : []).slice(0, 20).map((row) => (
              <div key={row.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
                <strong>{attendanceEmployeeName(row, employees)}</strong>
                <div style={{ color: '#94a3b8', marginTop: 4 }}>
                  التاريخ: {row.date || 'غير محدد'} · الحالة: {statusText(row.status)}
                </div>
                <div style={{ color: '#cbd5e1', marginTop: 4 }}>
                  حضور: {row.checkIn || '-'} · انصراف: {row.checkOut || '-'}
                </div>
              </div>
            ))}

            {!attendance.length ? <p style={{ color: '#94a3b8' }}>لا يوجد حضور مسجل.</p> : null}
          </div>
        </div>

        <div style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>آخر الرواتب</h2>

          <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
            {(Array.isArray(payroll) ? payroll : []).slice(0, 20).map((row) => (
              <div key={row.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
                <strong>{payrollEmployeeName(row, employees)}</strong>
                <div style={{ color: '#94a3b8', marginTop: 4 }}>
                  الشهر: {row.month || 'غير محدد'} · الحالة: {statusText(row.status)}
                </div>
                <div style={{ color: '#cbd5e1', marginTop: 4 }}>
                  الصافي: {money(payrollNet(row))}
                </div>
              </div>
            ))}

            {!payroll.length ? <p style={{ color: '#94a3b8' }}>لا توجد رواتب مسجلة.</p> : null}
          </div>
        </div>
      </section>
    </div>
  );
}
