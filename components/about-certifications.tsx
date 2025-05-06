"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "ISO 14001:2015",
    description: "Environmental Management System",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "CE Certification",
    description: "European Conformity",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "BIS Certification",
    description: "Bureau of Indian Standards",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function AboutCertifications() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Certifications & Standards</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our commitment to quality and compliance
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div key={cert.name} variants={item}>
              <Card className="h-full">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="relative mb-4 h-24 w-24">
                    <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-contain" />
                  </div>
                  <h3 className="font-bold">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
