import { Footer, SectionTitle, Shell, TopNav, OperationsDashboard } from "@/components/TravelUI";
import { site } from "@/data/site";

export default function Page() {
  return <Shell><TopNav /><section className="mx-auto max-w-7xl px-5 py-16"><SectionTitle eyebrow="Operations dashboard" title="Travel operations control room" text="Backoffice dashboard for arrivals, booking queue, issues, and revenue signals." /> <OperationsDashboard /></section><Footer /></Shell>;
}
