"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { Cloud, Calendar, Settings, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function SoftwareCms() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Content Management System
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our proprietary CMS gives you complete control over your LED displays from anywhere in the world
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full p-2 gradient-bg">
                  <Cloud className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Cloud-Based Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Control your displays from anywhere with internet access
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full p-2 gradient-bg">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Content Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    Plan your content display with advanced scheduling options
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full p-2 gradient-bg">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Mobile Control</h3>
                  <p className="text-sm text-muted-foreground">Manage your displays on-the-go with our mobile app</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full p-2 gradient-bg">
                  <Settings className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Advanced Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Fine-tune brightness, contrast, and other display parameters
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Link href="/cms">
                <Button size="lg" className="gradient-bg">
                  Learn More About CMS
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="dashboard" className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="control">Control</TabsTrigger>
              </TabsList>
              <TabsContent value="dashboard" className="mt-4">
                <Card>
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="CMS Dashboard"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold">Intuitive Dashboard</h3>
                      <p className="text-sm text-muted-foreground">
                        Monitor all your displays from a single, user-friendly dashboard
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="schedule" className="mt-4">
                <Card>
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Content Scheduling"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold">Content Scheduling</h3>
                      <p className="text-sm text-muted-foreground">
                        Plan your content display with day-parting and advanced scheduling
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="control" className="mt-4">
                <Card>
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Remote Control"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold">Remote Control</h3>
                      <p className="text-sm text-muted-foreground">
                        Adjust settings and troubleshoot displays from anywhere
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
