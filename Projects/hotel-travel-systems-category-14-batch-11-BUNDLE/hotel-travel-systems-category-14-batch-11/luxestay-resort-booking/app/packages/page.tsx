import { Footer, SectionTitle, Shell, TopNav, PackagesGrid } from "@/components/TravelUI";
import { site } from "@/data/site";

export default function Page() {
  return <Shell><TopNav /><section className="mx-auto max-w-7xl px-5 py-16"><SectionTitle eyebrow="Packages" title="Bookable packages and room inventory" text="Catalog-style UI for stays, tours, cabins, villas, or travel packages." /> <PackagesGrid /></section><Footer /></Shell>;
}
