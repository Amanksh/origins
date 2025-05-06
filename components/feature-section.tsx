"use client"

import { motion } from "framer-motion"
import { Shield, Zap, PenToolIcon as Tool, Volume2, Lightbulb, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "IP65 Weatherproof",
    description: "Resistant to dust and water, suitable for all weather conditions",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Low power consumption with smart energy-saving features",
  },
  {
    icon: Lightbulb,
    title: "Lightweight Build",
    description: "Easy to install and transport with our lightweight cabinet design",
  },
  {
    icon: Volume2,
    title: "Noise-Free Operation",
    description: "Silent cooling system for distraction-free environments",
  },
  {
    icon: Tool,
    title: "Easy Maintenance",
    description: "Front and rear service access for quick maintenance",
  },
  {
    icon: Award,
    title: "5-Year Warranty",
    description: "Industry-leading warranty and support for peace of mind",
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

export function FeatureSection() {
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Orion</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our LED displays are designed with quality, reliability, and performance in mind
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
          {features.map((feature) => (
            <motion.div key={feature.title} className="flex flex-col items-center text-center" variants={item}>
              <div className="mb-4 rounded-full p-3 gradient-bg">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
