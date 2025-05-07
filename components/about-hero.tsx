"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/abous-us.jpg"
              alt="Orion LED Office"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                We Deliver The Best Digital Signage Solutions
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What's making you stop from creating unforgettable visual
                experiences that set your brand apart? Is it that you are still
                using the old traditional way of marketing your brand? Or do you
                feel that operating and managing digital LED screens can be
                complex for you? But in today's fast-paced world, if you want
                your brand to outstand your competitors then our digital signage
                solutions can be the best choice for you. We at Atenti Origins
                Photoelectricity Consort Private Limited (AOPCPL) provide a wide
                range of LED display solutions that will master you in the art
                of captivating audiences and transforming spaces. Our LED
                screens are the best in technology, hardware, and quality. From
                airports, transportation, corporate offices, and malls to
                retail, hotels, and events, we provide tailor-made digital
                signage solutions of customized shapes and sizes for each
                client. Our expert engineers and designers work directly with
                you to make your vision a reality.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <motion.div
                className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-5xl font-bold text-primary mb-2">100+</h2>
                <p className="text-lg text-muted-foreground font-medium">
                  Installations
                </p>
              </motion.div>
              <motion.div
                className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-5xl font-bold text-primary mb-2">6</h2>
                <p className="text-lg text-muted-foreground font-medium">
                  Offices in India
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
