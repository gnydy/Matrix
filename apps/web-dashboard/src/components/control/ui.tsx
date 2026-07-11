import Link from 'next/link';

export function MetricCard({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: string;
}) {
  return (
    <div className="card metric">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{trend}</small>
    </div>
  );
}

export function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: string[][];
}) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={`${index}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PageTopbar({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}: {
  title: string;
  subtitle: string;
  primaryAction: string;
  secondaryAction: string;
}) {
  return (
    <div className="topbar">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="top-actions">
        <button className="btn">{secondaryAction}</button>
        <button className="btn primary">{primaryAction}</button>
      </div>
    </div>
  );
}

export function NotesCard({ notes }: { notes: string[] }) {
  return (
    <div className="card">
      <h3>ملاحظات تشغيلية</h3>
      <div style={{ display: 'grid', gap: 10, marginTop: 16 }}>
        {notes.map((note) => (
          <div key={note} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <span className="badge green">✓</span>
            <p style={{ margin: 0 }}>{note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EmptyActionCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="card" style={{ textDecoration: 'none' }}>
      <span className="badge">Next</span>
      <h3 style={{ marginTop: 14 }}>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}