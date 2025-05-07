"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Pin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "PHONE NO",
    details: ["+91 11 41861479", "+91 9839177046"],
  },
  {
    icon: Mail,
    title: "EMAIL",
    details: ["info@orion-led.com"],
  },
  {
    icon: Pin,
    title: "DELHI",
    subtitle: "REGD. Office:",
    details: [
      "504, 5th Floor ABW Elegance",
      "Tower, Jasola District Centre, Jasola, New",
      "Delhi - 110025",
    ],
  },
  {
    icon: Pin,
    title: "MUMBAI",
    subtitle: "Branch Address",
    details: [
      "602, Grace Chambers,",
      "Adjacent Old Gurudwara, Chakala, Andheri",
      "Kurla Road, Mumbai - 400093",
    ],
  },
  {
    icon: Pin,
    title: "HYDERABAD",
    subtitle: "Branch Address",
    details: [
      "103, 1st Floor, Down Town",
      "Commercial Complex, Lakdi ka pul,",
      "Hyderabad - 500004",
    ],
  },
  {
    icon: Pin,
    title: "LUCKNOW",
    subtitle: "Branch Address",
    details: [
      "382-383, Akarshan",
      "Complex Vibhuti Khand, Gomti Nagar,",
      "Lucknow - 226010",
    ],
  },
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

function ContactHero() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 text-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              <span className="text-[#4DA6FF]">IF YOU HAVE ANY QUERY?</span>{" "}
              CONTACT US.
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCards() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {contactInfo.map((info, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border border-[#4DA6FF]/30 shadow-[0_0_15px_rgba(77,166,255,0.15)]">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full p-3 bg-transparent">
                    <info.icon className="h-12 w-12 text-[#4DA6FF]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  {info.subtitle && (
                    <p className="text-sm font-medium mb-1">{info.subtitle}</p>
                  )}
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-white">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Form submitted successfully!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-[#4DA6FF]/30 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">
                Get In Touch
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={handleSelectChange}
                      required
                    >
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="support">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please describe your inquiry in detail..."
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-32"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#4DA6FF] hover:bg-[#3A8CD6] text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function ContactMap() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold md:text-3xl">Our Locations</h2>
            <p className="text-muted-foreground mt-2">Find us across India</p>
          </div>
          <Card className="overflow-hidden border-[#4DA6FF]/30">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2536866965384!2d77.28272807549058!3d28.56178517555267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d0e5f38611%3A0x3a76243773fae57b!2sJasola%20District%20Centre%2C%20Jasola%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1651231234567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Orion LED Locations"
                  className="h-full w-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <ContactMap />
    </main>
  );
}
