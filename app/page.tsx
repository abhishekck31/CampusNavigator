"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import HeroSection from "@/components/hero-section"
import CollegeShowcase from "@/components/college-showcase"
import InteractiveMap from "@/components/interactive-map"
import EventCalendar from "@/components/event-calendar"
import { collegesData } from "@/lib/data"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-primary border-solid rounded-full animate-spin"></div>
          <h2 className="mt-4 text-xl font-medium gradient-text">Loading CampusNavigator...</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <HeroSection />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Discover Top Colleges</h2>
        <CollegeShowcase colleges={collegesData} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto px-4 py-12 bg-gradient-to-b from-black to-gray-900 rounded-xl my-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Explore College Locations</h2>
        <InteractiveMap colleges={collegesData} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Upcoming Events & Fests</h2>
        <EventCalendar />
      </motion.div>
    </div>
  )
}

