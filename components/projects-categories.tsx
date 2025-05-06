"use client"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectSlideshow } from "@/components/project-slideshow"

// Project data for each category
const corporateProjects = [
  {
    id: 1,
    title: "Tech Park Lobby Display",
    location: "Bangalore, India",
    description: "A stunning 4K curved LED wall for a corporate headquarters lobby",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Conference Room Solution",
    location: "Mumbai, India",
    description: "Interactive LED displays for a modern conference facility",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Corporate Campus Installation",
    location: "Hyderabad, India",
    description: "Multiple synchronized LED displays across a tech campus",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Executive Briefing Center",
    location: "Delhi, India",
    description: "High-resolution LED video wall for client presentations",
    image: "/placeholder.svg?height=600&width=800",
  },
]

const doohProjects = [
  {
    id: 1,
    title: "Highway Billboard Network",
    location: "Maharashtra State Highways",
    description: "Network of 15 digital billboards along major highways",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Railway Station Displays",
    location: "Multiple Cities, India",
    description: "Information and advertising displays across 8 major railway stations",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Stadium Perimeter Displays",
    location: "Chennai, India",
    description: "360° perimeter LED displays for a major sports stadium",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Mall Facade Installation",
    location: "Kolkata, India",
    description: "Massive outdoor LED display covering a shopping mall facade",
    image: "/placeholder.svg?height=600&width=800",
  },
]

const retailProjects = [
  {
    id: 1,
    title: "Flagship Store Experience",
    location: "Mumbai, India",
    description: "Immersive LED installations for a luxury retail brand",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Retail Chain Rollout",
    location: "Pan-India",
    description: "Standardized LED display solution for 50+ retail locations",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Interactive Shopping Display",
    location: "Bangalore, India",
    description: "Touch-enabled LED walls for an enhanced shopping experience",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Department Store Installation",
    location: "Delhi, India",
    description: "Multi-floor LED displays for a premium department store",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export function ProjectsCategories() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="corporate" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="corporate">Corporate</TabsTrigger>
                <TabsTrigger value="dooh">DOOH</TabsTrigger>
                <TabsTrigger value="retail">Retail</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="corporate" className="mt-0">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-center mb-4">Corporate Projects</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                  Transforming corporate environments with stunning LED displays that enhance communication, brand
                  presence, and visitor experience.
                </p>
              </div>
              <ProjectSlideshow projects={corporateProjects} />
            </TabsContent>

            <TabsContent value="dooh" className="mt-0">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-center mb-4">Digital Out-of-Home Projects</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                  Creating impactful digital out-of-home advertising solutions that capture attention and deliver
                  messages effectively in public spaces.
                </p>
              </div>
              <ProjectSlideshow projects={doohProjects} />
            </TabsContent>

            <TabsContent value="retail" className="mt-0">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-center mb-4">Retail Projects</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                  Enhancing the shopping experience with innovative LED display solutions that engage customers and
                  drive sales in retail environments.
                </p>
              </div>
              <ProjectSlideshow projects={retailProjects} />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
