import { ProjectsHero } from "@/components/projects-hero"
import { ProjectsCategories } from "@/components/projects-categories"

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ProjectsHero />
      <ProjectsCategories />
    </main>
  )
}
