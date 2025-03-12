"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MapPin, Globe } from "lucide-react"
import { collegesData } from "@/lib/data"
import type { College } from "@/lib/types"
import VirtualTour from "@/components/virtual-tour"

export default function VirtualToursPage() {
  const [activeCollege, setActiveCollege] = useState<College | null>(null)
  const [showVirtualTour, setShowVirtualTour] = useState(false)

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Colleges with <span className="gradient-text">Virtual Tours</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience campus life from anywhere with our immersive 360° virtual tours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {collegesData.map((college) => (
            <Card
              key={college.id}
              className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={college.image || "/placeholder.svg"}
                  alt={college.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <MapPin className="h-4 w-4 text-primary mr-1" />
                  <span className="text-sm text-white/90">{college.location}</span>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">{college.name}</CardTitle>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-gray-400 mb-4 line-clamp-3">{college.description}</p>
              </CardContent>

              <CardFooter className="pt-2">
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-accent text-white hover:opacity-90 transition-opacity"
                  onClick={() => {
                    setActiveCollege(college)
                    setShowVirtualTour(true)
                  }}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Start Virtual Tour
                </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Virtual Tour Dialog */}
      <Dialog open={showVirtualTour} onOpenChange={setShowVirtualTour}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] bg-black/95 border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text">{activeCollege?.name} - Virtual Tour</DialogTitle>
          </DialogHeader>
          <div className="mt-4 h-[500px]">{activeCollege && <VirtualTour college={activeCollege} />}</div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

