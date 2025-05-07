"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("relative z-10", className)}>{children}</div>;
};

const CardHeader = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("mb-4", className)}>{children}</div>;
};

const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("text-xl font-semibold text-primary", className)}>
      {children}
    </h3>
  );
};

const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-muted-foreground leading-relaxed", className)}>
      {children}
    </p>
  );
};

export function AboutValues() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 " />
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <motion.div
            className="space-y-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Still, if you think WHY ORION?
            </h2>
          </motion.div>
        </div>

        <div className="mx-auto max-w-3xl py-12">
          <motion.div
            className="space-y-6 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed">
              Well, we are one of the fastest growing LED manufacturers and the
              greatest factor which makes us different from our competitors is
              our after-sales services.
            </p>
            <p className="text-lg leading-relaxed">
              Our outstanding after-sales services help us to build trust for
              and in our client's eyes. Once you become a client, you won't have
              to worry about where to go if any problem occurs after installing
              the screen.
            </p>
            <p className="text-lg leading-relaxed">
              AOPCPL after-sales service is always there to help you!
            </p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-5xl py-12">
          <h3 className="text-2xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            We follow 3 C's for our Clients
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="group hover:shadow-2xl hover:shadow-primary/20">
                <CardContent>
                  <CardHeader>
                    <CardTitle>Customised Product</CardTitle>
                  </CardHeader>
                  <CardDescription>
                    Our products are not generally sold off the shelf. We
                    provide tailor-made LED screens to our clients as per their
                    requirements for both indoor and outdoor sites.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="group hover:shadow-2xl hover:shadow-primary/20">
                <CardContent>
                  <CardHeader>
                    <CardTitle>Customer Satisfaction</CardTitle>
                  </CardHeader>
                  <CardDescription>
                    To meet customer satisfaction we offer the best on-site and
                    after-sales services. Our dedicated team identifies the
                    client's needs and offers the best solutions.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="group hover:shadow-2xl hover:shadow-primary/20">
                <CardContent>
                  <CardHeader>
                    <CardTitle>Certified Products</CardTitle>
                  </CardHeader>
                  <CardDescription>
                    Orion LEDs are made up of world-class components that give
                    competition to other big brands. All the products are BIS
                    certified which signifies quality products.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
