import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <div className="absolute inset-0 gradient-bg"></div>
              </div>
              <span className="font-bold">Orion LED Displays</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              India's largest LED display provider, offering high-quality indoor and outdoor LED solutions for
              businesses and organizations across the country.
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/indoor" className="text-muted-foreground hover:text-foreground">
                  Indoor Displays
                </Link>
              </li>
              <li>
                <Link href="/products/outdoor" className="text-muted-foreground hover:text-foreground">
                  Outdoor Displays
                </Link>
              </li>
              <li>
                <Link href="/products/rental" className="text-muted-foreground hover:text-foreground">
                  Rental Solutions
                </Link>
              </li>
              <li>
                <Link href="/products/standee" className="text-muted-foreground hover:text-foreground">
                  Digital Standees
                </Link>
              </li>
              <li>
                <Link href="/products/flexible" className="text-muted-foreground hover:text-foreground">
                  Flexible Displays
                </Link>
              </li>
              <li>
                <Link href="/products/custom" className="text-muted-foreground hover:text-foreground">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Subscribe</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates and offers
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Input type="email" placeholder="Enter your email" />
              <Button className="gradient-bg">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Orion LED Displays. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/sitemap" className="hover:text-foreground">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
