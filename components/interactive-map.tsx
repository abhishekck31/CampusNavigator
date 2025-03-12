"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Maximize2, Minimize2, MapIcon, Globe } from "lucide-react"
import type { College } from "@/lib/types"
import { motion, AnimatePresence } from "framer-motion"

interface InteractiveMapProps {
  colleges: College[]
}

export default function InteractiveMap({ colleges }: InteractiveMapProps) {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null)
  const [isVirtualView, setIsVirtualView] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  const toggleFullscreen = () => {
    if (!mapContainerRef.current) return

    if (!isFullscreen) {
      if (mapContainerRef.current.requestFullscreen) {
        mapContainerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  return (
    <div className="relative h-[500px] rounded-xl overflow-hidden" ref={mapContainerRef}>
      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-10 flex space-x-2">
        <Button
          variant="secondary"
          size="sm"
          className="bg-black/70 hover:bg-black/90 text-white"
          onClick={() => setIsVirtualView(!isVirtualView)}
        >
          {isVirtualView ? <MapIcon className="h-4 w-4 mr-2" /> : <Globe className="h-4 w-4 mr-2" />}
          {isVirtualView ? "Map View" : "Virtual View"}
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="bg-black/70 hover:bg-black/90 text-white"
          onClick={toggleFullscreen}
        >
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </Button>
      </div>

      {/* Map Container */}
      <div className="h-full w-full bg-gray-900 relative">
        {isVirtualView ? (
          <iframe
            src={selectedCollege?.virtualTourUrl || colleges[0].virtualTourUrl}
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="relative h-full w-full overflow-hidden">
            {/* Map Background with Grid and Gradient */}
            <div className="absolute inset-0 bg-[#0A0F1E]">
              {/* Base Map Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                  backgroundImage: "url('/MAP.jpg')",
                }}
              ></div>

              {/* Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #ffffff 1px, transparent 1px),
                    linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px'
                }}
              ></div>
              
              {/* Radial Gradient Overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(88, 28, 135, 0.15), rgba(10, 15, 30, 0.2))'
                }}
              ></div>
              
              {/* Glowing Points for Major Areas */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-500/50 rounded-full animate-pulse-slow"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* College Pins */}
            {colleges.map((college) => (
              <motion.div
                key={college.id}
                className={`absolute cursor-pointer transition-all duration-300 z-10 ${
                  selectedCollege?.id === college.id ? "scale-125" : "scale-100"
                }`}
                style={{
                  left: `${college.mapPosition.x}%`,
                  top: `${college.mapPosition.y}%`,
                }}
                onClick={() => setSelectedCollege(college)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <MapPin
                    className={`h-8 w-8 ${selectedCollege?.id === college.id ? "text-accent" : "text-primary"}`}
                  />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
                </div>

                <AnimatePresence>
                  {selectedCollege?.id === college.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-48 glass-card p-2 text-center"
                    >
                      <h3 className="font-semibold text-sm">{college.name}</h3>
                      <p className="text-xs text-gray-300">{college.upcomingEvents} upcoming events</p>
                      <div className="flex justify-center mt-2 space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs h-7 px-2 border-primary/50 text-primary hover:bg-primary hover:text-white"
                          onClick={() => (window.location.href = `/colleges/${college.id}`)}
                        >
                          Details
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          className="text-xs h-7 px-2 bg-gradient-to-r from-purple-600 to-accent text-white"
                          onClick={() => {
                            setSelectedCollege(college)
                            setIsVirtualView(true)
                          }}
                        >
                          Tour
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

