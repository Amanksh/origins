import { AboutHero } from "@/components/about-hero"
import { AboutMission } from "@/components/about-mission"
import { AboutHistory } from "@/components/about-history"
import { AboutTeam } from "@/components/about-team"
import { AboutValues } from "@/components/about-values"
import { AboutCertifications } from "@/components/about-certifications"
import { AboutCTA } from "@/components/about-cta"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <AboutHero />
      <AboutMission />
      <AboutHistory />
      <AboutValues />
      <AboutTeam />
      <AboutCertifications />
      <AboutCTA />
    </main>
  )
}
