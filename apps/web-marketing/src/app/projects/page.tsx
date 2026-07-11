export default function ProjectsPage() {
  const projects = [
    { title: "Corporate Websites", type: "Websites", size: "Medium", count: 20 },
    { title: "E-Commerce Stores", type: "Stores", size: "Large", count: 20 },
    { title: "ERP Systems", type: "Business Systems", size: "Huge", count: 20 },
    { title: "CRM Systems", type: "Business Systems", size: "Large", count: 20 },
    { title: "POS Systems", type: "Retail Systems", size: "Large", count: 20 },
    { title: "SaaS Platforms", type: "Platforms", size: "Huge", count: 20 },
    { title: "AI Applications", type: "AI", size: "Huge", count: 20 },
    { title: "AI Chatbots", type: "AI", size: "Large", count: 20 },
    { title: "Template Marketplaces", type: "Marketplace", size: "Huge", count: 20 },
    { title: "Industry-Specific Solutions", type: "Solutions", size: "Huge", count: 20 }
  ];

  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "#020617",
      color: "white",
      padding: "70px 24px",
      fontFamily: "Arial, sans-serif"
    }}>
      <section style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ color: "#67e8f9", fontWeight: 800, letterSpacing: 4 }}>
          MATRIXALL PORTFOLIO
        </p>

        <h1 style={{ fontSize: 64, margin: "20px 0", fontWeight: 900 }}>
          مشاريعنا
        </h1>

        <p style={{ maxWidth: 820, color: "#cbd5e1", fontSize: 20, lineHeight: 1.8 }}>
          صفحة عرض مشاريع MatrixAll: مواقع شركات، متاجر إلكترونية، ERP، CRM،
          POS، SaaS، ذكاء اصطناعي، Marketplaces، وحلول حسب الصناعة.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
          marginTop: 40
        }}>
          {projects.map((project) => (
            <article key={project.title} style={{
              border: "1px solid rgba(255,255,255,0.12)",
              background: "#0f172a",
              borderRadius: 24,
              padding: 24
            }}>
              <div style={{ color: "#67e8f9", fontSize: 13, fontWeight: 800 }}>
                {project.type}
              </div>

              <h2 style={{ fontSize: 26, margin: "14px 0", fontWeight: 900 }}>
                {project.title}
              </h2>

              <p style={{ color: "#94a3b8", lineHeight: 1.7 }}>
                حجم المشروع: {project.size}
              </p>

              <p style={{ color: "#94a3b8", lineHeight: 1.7 }}>
                عدد القوالب: {project.count}
              </p>

              <button style={{
                marginTop: 18,
                width: "100%",
                border: 0,
                borderRadius: 16,
                padding: "14px 18px",
                background: "#67e8f9",
                color: "#020617",
                fontWeight: 900
              }}>
                عرض التفاصيل
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}