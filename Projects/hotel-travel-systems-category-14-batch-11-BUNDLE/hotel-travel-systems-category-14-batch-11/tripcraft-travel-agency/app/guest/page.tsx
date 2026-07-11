import { Footer, SectionTitle, Shell, TopNav, GuestPortal } from "@/components/TravelUI";
import { site } from "@/data/site";

export default function Page() {
  return <Shell><TopNav /><section className="mx-auto max-w-7xl px-5 py-16"><SectionTitle eyebrow="Guest portal" title="Traveler account and itinerary experience" text="Guest-facing view for upcoming stays, itinerary, and trip status." /> <GuestPortal /></section><Footer /></Shell>;
}
