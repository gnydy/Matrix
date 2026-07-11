import { Footer, Shell } from '@/components/Shell';
import { ControlRoom, FeatureGrid, Hero, MenuShowcase } from '@/components/RestaurantSections';

export default function HomePage() {
  return <Shell><Hero /><FeatureGrid /><MenuShowcase /><ControlRoom /><Footer /></Shell>;
}
