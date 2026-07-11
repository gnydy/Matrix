import { Footer, SectionTitle, Shell, TopNav, AvailabilityBoard } from "@/components/TravelUI";
import { site } from "@/data/site";

export default function Page() {
  return <Shell><TopNav /><section className="mx-auto max-w-7xl px-5 py-16"><SectionTitle eyebrow="Availability" title="Open inventory and occupancy pressure" text="Mock availability view for hotel rooms, villas, tours, or travel capacity." /> <AvailabilityBoard /></section><Footer /></Shell>;
}
