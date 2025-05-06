"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ProjectGallery } from "@/components/project-gallery"

interface Project {
  id: number
  title: string
  location: string
  description: string
  image: string
  category: string
}

interface ProjectFilterProps {
  projects: Project[]
}

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [filter, setFilter] = useState<string>("all")

  const categories = ["all", ...new Set(projects.map((project) => project.category))]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            className={filter === category ? "gradient-bg" : ""}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>
      <ProjectGallery projects={filteredProjects} />
    </div>
  )
}
