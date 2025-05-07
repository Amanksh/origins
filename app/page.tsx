import { HeroSection } from "@/components/hero-section";
import { ProjectShowcase } from "@/components/project-showcase";
import { SoftwareCms } from "@/components/software-cms";
import { FeatureSection } from "@/components/feature-section";
import { Testimonials } from "@/components/testimonials";
import { BlogPreview } from "@/components/blog-preview";
import { ApplicationsSection } from "@/components/applications-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <ProjectShowcase />
      <SoftwareCms />
      <ApplicationsSection />
      <FeatureSection />
      <Testimonials />
      <BlogPreview />
    </main>
  );
}
