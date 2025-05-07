import { AboutHero } from "@/components/about-hero";
import { AboutValues } from "@/components/about-values";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <AboutHero />

      <AboutValues />
    </main>
  );
}
