"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Sparkles, Recycle, HeartHandshake, BadgeCheck } from "lucide-react"

const values = [
  {
    icon: CheckCircle,
    title: "Quality",
    description: "We never compromise on the quality of our products and services, ensuring longevity and reliability.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "We prioritize understanding and meeting our customers' unique needs and expectations.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We continuously explore new technologies and approaches to stay at the forefront of the industry.",
  },
  {
    icon: Recycle,
    title: "Sustainability",
    description: "We are committed to environmentally responsible practices in our operations and products.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical standards.",
  },
  {
    icon: BadgeCheck,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our work, from design to installation and support.",
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

export function AboutValues() {
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Core Values</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The principles that guide our decisions and define our company culture
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {values.map((value) => (
            <motion.div key={value.title} className="flex flex-col items-center text-center" variants={item}>
              <div className="mb-4 rounded-full p-3 gradient-bg">
                <value.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">{value.title}</h3>
              <p className="mt-2 text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
