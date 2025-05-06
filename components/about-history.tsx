"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const milestones = [
  {
    year: "2010",
    title: "Company Founded",
    description: "Orion LED was established with a vision to revolutionize the visual display industry in India.",
  },
  {
    year: "2012",
    title: "First Major Project",
    description: "Completed our first large-scale installation for a prominent retail chain across multiple locations.",
  },
  {
    year: "2014",
    title: "Manufacturing Facility",
    description: "Opened our state-of-the-art manufacturing facility in Bangalore to ensure quality control.",
  },
  {
    year: "2016",
    title: "Expansion Across India",
    description:
      "Established regional offices in Delhi, Mumbai, and Hyderabad to better serve our growing client base.",
  },
  {
    year: "2018",
    title: "Innovation Award",
    description: "Received industry recognition for our innovative flexible LED display technology.",
  },
  {
    year: "2020",
    title: "International Partnerships",
    description: "Formed strategic partnerships with global technology providers to enhance our product offerings.",
  },
  {
    year: "2023",
    title: "Sustainability Initiative",
    description: "Launched our eco-friendly LED display line, reducing energy consumption by up to 40%.",
  },
]

export function AboutHistory() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Journey</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The evolution of Orion LED from a small startup to India's leading LED display provider
            </p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-3xl py-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="mb-4 md:mb-0 md:mr-8">
                      <span className="text-3xl font-bold gradient-text">{milestone.year}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{milestone.title}</h3>
                      <p className="mt-2 text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {index < milestones.length - 1 && (
                <div className="flex justify-center">
                  <Separator className="h-8 w-px bg-border" orientation="vertical" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
