"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Hyderabad Race Course",
    description: "Outdoor P4 LED display spanning 120 square meters",
    image: "/placeholder.svg?height=600&width=800",
    location: "Hyderabad, India",
    size: "120 sq.m",
    features: ["Weather-resistant", "High brightness", "Remote control"],
  },
  {
    id: 2,
    title: "Milan Mela Prangan",
    description: "Indoor P2.5 LED walls for exhibition center",
    image: "/placeholder.svg?height=600&width=800",
    location: "Kolkata, India",
    size: "85 sq.m",
    features: ["High resolution", "Seamless integration", "Content management"],
  },
  {
    id: 3,
    title: "Corporate Headquarters",
    description: "Curved LED display for reception area",
    image: "/placeholder.svg?height=600&width=800",
    location: "Mumbai, India",
    size: "32 sq.m",
    features: ["Flexible design", "Low power consumption", "Interactive content"],
  },
]

export function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Project Showcase</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our successful installations across India
            </p>
          </motion.div>
        </div>

        <div className="relative mx-auto max-w-5xl py-12">
          <div className="overflow-hidden rounded-xl">
            <div className="relative aspect-[16/9] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="grid h-full grid-cols-1 md:grid-cols-2">
                    <div className="relative h-full">
                      <Image
                        src={projects[currentIndex].image || "/placeholder.svg"}
                        alt={projects[currentIndex].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-6 md:p-10">
                      <h3 className="text-2xl font-bold">{projects[currentIndex].title}</h3>
                      <p className="mt-2 text-muted-foreground">{projects[currentIndex].description}</p>
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium">Location</h4>
                          <p className="text-sm text-muted-foreground">{projects[currentIndex].location}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Size</h4>
                          <p className="text-sm text-muted-foreground">{projects[currentIndex].size}</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <h4 className="text-sm font-medium">Features</h4>
                        <ul className="mt-2 space-y-1">
                          {projects[currentIndex].features.map((feature, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              • {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-8">
                        <Link href="/projects">
                          <Button>View Project Details</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous project</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next project</span>
          </Button>

          <div className="mt-6 flex justify-center gap-2">
            {projects.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`size-3 rounded-full p-0 ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
                onClick={() => setCurrentIndex(index)}
              >
                <span className="sr-only">Go to project {index + 1}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/projects">
            <Button size="lg">View All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
