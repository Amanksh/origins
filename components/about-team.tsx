"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const team = [
  {
    name: "Rajiv Sharma",
    position: "Founder & CEO",
    bio: "With over 20 years of experience in the display technology industry, Rajiv founded Orion LED with a vision to transform visual communication across India.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Priya Patel",
    position: "Chief Technology Officer",
    bio: "Priya leads our R&D team, bringing innovative LED display solutions from concept to reality with her extensive background in electronic engineering.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Vikram Mehta",
    position: "Head of Operations",
    bio: "Vikram ensures the smooth functioning of our manufacturing facilities and installation teams, maintaining our high standards of quality and efficiency.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Ananya Singh",
    position: "Creative Director",
    bio: "Ananya brings creative vision to our projects, helping clients maximize the impact of their LED displays through strategic content and design.",
    image: "/placeholder.svg?height=400&width=400",
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

export function AboutTeam() {
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Leadership Team</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the experts behind Orion LED's success
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={item}>
              <Card className="overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                  <p className="mt-2 text-sm">{member.bio}</p>
                  <div className="mt-4 flex space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
