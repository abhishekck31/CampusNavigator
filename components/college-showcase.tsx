"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, BookOpen, Phone, Globe, Info, Mail } from "lucide-react"
import type { College } from "@/lib/types"
import VirtualTour from "@/components/virtual-tour"

interface CollegeShowcaseProps {
  colleges: College[]
}

export default function CollegeShowcase({ colleges }: CollegeShowcaseProps) {
  const [activeCollege, setActiveCollege] = useState<College | null>(null)
  const [showVirtualTour, setShowVirtualTour] = useState(false)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {colleges.map((college) => (
          <motion.div key={college.id} variants={item}>
            <Card className="glass-card overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={college.image || "/placeholder.svg"}
                  alt={college.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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

                <div className="flex flex-wrap gap-2 mb-4">
                  {college.tags.map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Users className="h-4 w-4 mr-2 text-primary" />
                  <span>{college.studentCount.toLocaleString()} Students</span>
                </div>

                <div className="flex items-center text-sm text-gray-400">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  <span>{college.upcomingEvents} Upcoming Events</span>
                </div>
              </CardContent>

              <CardFooter className="flex flex-wrap gap-2 pt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary hover:text-white transition-colors"
                      onClick={() => setActiveCollege(college)}
                    >
                      <Info className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] bg-black/95 border-gray-800">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold gradient-text">{activeCollege?.name}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <Tabs defaultValue="about">
                        <TabsList className="grid grid-cols-3 mb-4">
                          <TabsTrigger value="about">About</TabsTrigger>
                          <TabsTrigger value="programs">Programs</TabsTrigger>
                          <TabsTrigger value="contact">Contact</TabsTrigger>
                        </TabsList>
                        <TabsContent value="about" className="space-y-4">
                          <p>{activeCollege?.description}</p>
                          <div className="flex items-center text-sm">
                            <Users className="h-4 w-4 mr-2 text-primary" />
                            <span>{activeCollege?.studentCount.toLocaleString()} Students</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="h-4 w-4 mr-2 text-primary" />
                            <span>{activeCollege?.location}</span>
                          </div>
                        </TabsContent>
                        <TabsContent value="programs" className="space-y-4">
                          <h3 className="text-lg font-semibold">Available Programs</h3>
                          <ul className="space-y-2">
                            {activeCollege?.programs.map((program, index) => (
                              <li key={index} className="flex items-start">
                                <BookOpen className="h-4 w-4 mr-2 text-primary mt-1" />
                                <div>
                                  <span className="font-medium">{program.name}</span>
                                  <p className="text-sm text-gray-400">{program.description}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="contact" className="space-y-4">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-primary" />
                            <span>{activeCollege?.contact.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2 text-primary" />
                            <span>{activeCollege?.contact.email}</span>
                          </div>
                          <div className="flex items-center">
                            <Globe className="h-4 w-4 mr-2 text-primary" />
                            <a
                              href={activeCollege?.contact.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {activeCollege?.contact.website}
                            </a>
                          </div>
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 mr-2 text-primary mt-1" />
                            <span>{activeCollege?.contact.address}</span>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  variant="default"
                  className="bg-gradient-to-r from-purple-600 to-accent text-white hover:opacity-90 transition-opacity"
                  onClick={() => {
                    setActiveCollege(college)
                    setShowVirtualTour(true)
                  }}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Virtual Tour
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Virtual Tour Dialog */}
      <Dialog open={showVirtualTour} onOpenChange={setShowVirtualTour}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] bg-black/95 border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text">{activeCollege?.name} - Virtual Tour</DialogTitle>
          </DialogHeader>
          <div className="mt-4 h-[500px]">{activeCollege && <VirtualTour college={activeCollege} />}</div>
        </DialogContent>
      </Dialog>
    </>
  )
}

