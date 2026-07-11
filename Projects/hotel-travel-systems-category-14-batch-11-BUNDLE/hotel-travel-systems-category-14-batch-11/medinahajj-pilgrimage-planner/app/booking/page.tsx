import { Footer, SectionTitle, Shell, TopNav, BookingFlow } from "@/components/TravelUI";
import { site } from "@/data/site";

export default function Page() {
  return <Shell><TopNav /><section className="mx-auto max-w-7xl px-5 py-16"><SectionTitle eyebrow="Booking" title="Reservation flow mock" text="Frontend booking flow with date, guest, package, and confirmation logic." /> <BookingFlow /></section><Footer /></Shell>;
}
