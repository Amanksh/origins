"use client"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Monitor, MonitorSmartphone, Tv, Smartphone, Layers, Lightbulb } from "lucide-react"
import Link from "next/link"

const products = [
  {
    title: "Betelgeuse Series",
    description: "Premium indoor LED displays for corporate environments",
    icon: Monitor,
    category: "Indoor",
    href: "/products/indoor/betelgeuse",
  },
  {
    title: "Rigel Series",
    description: "High-brightness outdoor displays for any weather condition",
    icon: Tv,
    category: "Outdoor",
    href: "/products/outdoor/rigel",
  },
  {
    title: "Bellatrix Series",
    description: "Portable rental displays for events and exhibitions",
    icon: MonitorSmartphone,
    category: "Rental",
    href: "/products/rental/bellatrix",
  },
  {
    title: "Sirius Series",
    description: "Digital standee displays for retail and hospitality",
    icon: Smartphone,
    category: "Standee",
    href: "/products/standee/sirius",
  },
  {
    title: "Vega Series",
    description: "Flexible LED displays for curved and creative installations",
    icon: Layers,
    category: "Flexible",
    href: "/products/flexible/vega",
  },
  {
    title: "Polaris Series",
    description: "Custom LED solutions for unique applications",
    icon: Lightbulb,
    category: "Custom",
    href: "/products/custom/polaris",
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

export function ProductHighlights() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Product Highlights</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our range of high-quality LED display solutions for every application
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
          {products.map((product) => (
            <motion.div key={product.title} variants={item}>
              <Link href={product.href} className="block h-full">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full p-2 gradient-bg">
                        <product.icon className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-sm font-medium">{product.category}</p>
                    </div>
                    <CardTitle className="mt-4">{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="gap-1">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center">
          <Link href="/products">
            <Button size="lg">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
