"use client"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of LED Technology: What's Next?",
    description: "Explore the upcoming trends and innovations in LED display technology",
    date: "May 15, 2023",
    image: "/placeholder.svg?height=400&width=600",
    href: "/blog/future-of-led-technology",
  },
  {
    title: "How to Choose the Right LED Display for Your Business",
    description: "A comprehensive guide to selecting the perfect LED solution",
    date: "April 22, 2023",
    image: "/placeholder.svg?height=400&width=600",
    href: "/blog/choosing-right-led-display",
  },
  {
    title: "Maintenance Tips to Extend the Life of Your LED Display",
    description: "Simple practices to ensure your LED display lasts longer",
    date: "March 10, 2023",
    image: "/placeholder.svg?height=400&width=600",
    href: "/blog/led-maintenance-tips",
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

export function BlogPreview() {
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Articles</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay updated with the latest news and insights from the LED display industry
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.div key={post.title} variants={item}>
              <Link href={post.href} className="block h-full">
                <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="gap-1">
                      Read more <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <Link href="/blog">
            <Button size="lg">View All Articles</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
