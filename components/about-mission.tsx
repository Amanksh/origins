"use client"

import { motion } from "framer-motion"
import { Target, Eye, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutMission() {
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission & Vision</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Guiding principles that drive our innovation and growth
            </p>
          </motion.div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex justify-center">
                  <div className="rounded-full p-3 gradient-bg">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-center">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  To provide innovative LED display solutions that transform how businesses communicate with their
                  audiences, delivering exceptional visual experiences through cutting-edge technology and unparalleled
                  service.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex justify-center">
                  <div className="rounded-full p-3 gradient-bg">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-center">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  To be recognized as India's premier LED display provider, setting industry standards for quality,
                  innovation, and customer satisfaction while expanding our presence across South Asia.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex justify-center">
                  <div className="rounded-full p-3 gradient-bg">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-center">Our Approach</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  We combine technical expertise with creative thinking to deliver customized LED solutions that address
                  the unique needs of each client, ensuring maximum impact and return on investment.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
