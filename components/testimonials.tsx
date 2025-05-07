"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "The LED displays from Orion have transformed our retail space. The vibrant colors and clarity have significantly increased customer engagement.",
    author: "Rajesh Kumar",
    position: "Marketing Director, Retail Chain",
  },
  {
    quote:
      "We've been using Orion's outdoor displays for over 3 years now. They've withstood all weather conditions and still look as good as new.",
    author: "Priya Sharma",
    position: "Events Manager, Exhibition Center",
  },
  {
    quote:
      "The content management system is incredibly intuitive. It's made managing our multiple displays across different locations so much easier.",
    author: "Vikram Singh",
    position: "IT Director, Corporate Office",
  },
];

const clients = [
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl">
          Testimonials
        </h2>

        <div className="mx-auto max-w-5xl py-12">
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-muted-foreground/50" />
                    <p className="mt-4 text-muted-foreground">
                      {testimonial.quote}
                    </p>
                    <div className="mt-6">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
