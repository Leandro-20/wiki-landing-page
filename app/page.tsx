import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { Features } from "@/components/features";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <Features />
      <Stats />
      <Testimonials />
      <Footer />
    </main>
  );
}
