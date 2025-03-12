"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail("")
      toast({
        title: "Success!",
        description: "You've been added to our newsletter.",
        duration: 5000,
      })
    }, 1000)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !name || !message) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail("")
      setName("")
      setMessage("")
      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon.",
        duration: 5000,
      })
    }, 1000)
  }

  return (
    <footer className="bg-black border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">CampusNavigator</h3>
            <p className="text-gray-400 mb-6">
              Discover and explore top colleges with virtual tours and events. Your ultimate guide to finding the
              perfect campus experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/colleges" className="text-gray-400 hover:text-primary transition-colors">
                  Colleges
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-primary transition-colors">
                  Events & Fests
                </Link>
              </li>
              <li>
                <Link href="/virtual-tours" className="text-gray-400 hover:text-primary transition-colors">
                  Virtual Tours
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on college events and tours.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 bg-black/50 border-gray-700 focus:border-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    Subscribing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <span className="text-gray-400">info@campusnavigator.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <span className="text-gray-400">123 Education Street, Bangalore, Karnataka, India</span>
              </div>
            </div>
            <form onSubmit={handleContactSubmit} className="space-y-3">
              <Input
                type="text"
                placeholder="Name"
                className="bg-black/50 border-gray-700 focus:border-primary"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-black/50 border-gray-700 focus:border-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Textarea
                placeholder="Message"
                className="bg-black/50 border-gray-700 focus:border-primary min-h-[100px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} CampusNavigator. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/terms" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </footer>
  )
}

