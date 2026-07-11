import TemplatesClient from "@/components/TemplatesClient";
import { templates } from "@/data/templates.generated";

export default function TemplatesPage() {
  return <TemplatesClient templates={templates} />;
}
