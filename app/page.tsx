import { HeroSection } from "@/components/hero-section"
import { ProductHighlights } from "@/components/product-highlights"
import { ProjectShowcase } from "@/components/project-showcase"
import { SoftwareCms } from "@/components/software-cms"
import { FeatureSection } from "@/components/feature-section"
import { Testimonials } from "@/components/testimonials"
import { BlogPreview } from "@/components/blog-preview"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <ProductHighlights />
      <ProjectShowcase />
      <SoftwareCms />
      <FeatureSection />
      <Testimonials />
      <BlogPreview />
      <ContactSection />
    </main>
  )
}
