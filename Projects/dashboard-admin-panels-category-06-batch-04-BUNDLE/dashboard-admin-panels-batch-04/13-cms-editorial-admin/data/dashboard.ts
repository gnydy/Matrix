export const dashboard = {
  name: "CMS Editorial Admin",
  slug: "cms-editorial-admin",
  desc: "A publishing administration dashboard for editorial teams managing content pipelines, authors, categories, moderation, and analytics.",
  client: "Media companies, blogs and content teams",
  use: "Manage articles, authors, categories, moderation, ads and editorial calendar",
  industry: "Media / CMS",
  layout: "split",
  metrics: [
  {
    "label": "Published",
    "value": "1,936",
    "change": "+86"
  },
  {
    "label": "Drafts",
    "value": "142",
    "change": "+27"
  },
  {
    "label": "Authors",
    "value": "38",
    "change": "+5"
  },
  {
    "label": "Newsletter CTR",
    "value": "11.4%",
    "change": "+1.8%"
  }
],
  modules: [
  "Editorial Calendar",
  "Article Queue",
  "Author Profiles",
  "Moderation Desk",
  "Ad Slots",
  "Newsletter Analytics"
],
  records: [
  "AI Business Article",
  "Finance Weekly",
  "Interview Draft",
  "Ad Placement",
  "Newsletter Blast"
],
  roles: [
  "Editor in Chief",
  "Author",
  "Moderator",
  "Marketing Admin"
],
  states: [
  "Draft",
  "Review",
  "Scheduled",
  "Published"
],
  chart: [181, 84, 107, 130, 153, 176, 199, 102],
} as const;
