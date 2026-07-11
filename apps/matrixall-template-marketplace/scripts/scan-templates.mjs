import fs from "node:fs";
import path from "node:path";

const root = process.argv[2] || "E:\\Matrix\\Projects";
const marketplaceName = "matrixall-template-marketplace";

function walk(dir, results = []) {
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (
        entry.name === "node_modules" ||
        entry.name === ".next" ||
        entry.name === "zips" ||
        entry.name === marketplaceName
      ) {
        continue;
      }

      const pkg = path.join(full, "package.json");

      if (fs.existsSync(pkg)) {
        results.push(full);
        continue;
      }

      walk(full, results);
    }
  }

  return results;
}

function toTitle(slug) {
  return slug
    .replace(/^\d+-/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function detectCategory(projectPath) {
  const lower = projectPath.toLowerCase();

  const known = [
    ["erp", "ERP Systems"],
    ["crm", "CRM Systems"],
    ["ecommerce", "E-Commerce Stores"],
    ["grocery-pos", "Grocery POS Systems"],
    ["dashboard", "Dashboard & Admin Panels"],
    ["saas", "SaaS Platforms"],
    ["landing", "Landing Pages"],
    ["booking", "Booking Systems"],
    ["restaurant", "Restaurant Systems"],
    ["healthcare", "Healthcare Systems"],
    ["education", "Education Platforms"],
    ["real-estate", "Real Estate Platforms"],
    ["hotel", "Hotel & Travel Systems"],
    ["logistics", "Logistics & Delivery Systems"],
    ["manufacturing", "Manufacturing Systems"],
    ["ai-applications", "AI Applications"],
    ["ai-chatbots", "AI Chatbots"],
    ["marketplace", "Marketplace Platforms"],
    ["support", "Support Centers"],
    ["ticket", "Ticket Systems"]
  ];

  for (const [key, label] of known) {
    if (lower.includes(key)) return label;
  }

  return "Business Templates";
}

const projects = walk(root);

const templates = projects.map((projectPath, index) => {
  const slug = path.basename(projectPath);

  return {
    slug,
    title: toTitle(slug),
    category: detectCategory(projectPath),
    path: projectPath.replace(/\\/g, "\\\\"),
    stack: ["Next.js", "TypeScript", "Tailwind", "Mock Data"],
    price: index % 5 === 0 ? "$99" : index % 3 === 0 ? "$79" : "$49",
    complexity: index % 4 === 0 ? "Advanced" : index % 2 === 0 ? "Medium" : "Starter",
    pages: ["Overview", "Dashboard", "Details", "Settings"]
  };
});

const out = `export type TemplateItem = {
  slug: string;
  title: string;
  category: string;
  path: string;
  stack: string[];
  price: string;
  complexity: string;
  pages: string[];
};

export const templates: TemplateItem[] = ${JSON.stringify(templates, null, 2)};
`;

fs.mkdirSync(path.join(process.cwd(), "data"), { recursive: true });
fs.writeFileSync(path.join(process.cwd(), "data", "templates.generated.ts"), out, "utf8");

console.log(`Scanned ${templates.length} templates from ${root}`);
console.log("Generated data/templates.generated.ts");
