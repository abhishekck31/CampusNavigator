"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Clock, Search, Filter, CalendarPlus, Share2 } from "lucide-react"
import { eventsData } from "@/lib/data"
import type { Event } from "@/lib/types"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function EventCalendar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [collegeFilter, setCollegeFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [view, setView] = useState("grid")

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCollege = collegeFilter === "all" || event.collegeId === collegeFilter
    const matchesType = typeFilter === "all" || event.type === typeFilter

    return matchesSearch && matchesCollege && matchesType
  })

  const addToCalendar = (event: Event) => {
    // In a real app, this would generate a calendar file or link
    toast({
      title: "Event Added to Calendar",
      description: `${event.title} has been added to your calendar.`,
      duration: 3000,
    })
  }

  const shareEvent = (event: Event) => {
    // In a real app, this would open a share dialog
    toast({
      title: "Share Event",
      description: `Share link for ${event.title} has been copied to clipboard.`,
      duration: 3000,
    })
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="glass-card p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search events..."
              className="pl-10 bg-black/50 border-gray-700 focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={collegeFilter} onValueChange={setCollegeFilter}>
              <SelectTrigger className="w-full sm:w-[180px] bg-black/50 border-gray-700">
                <SelectValue placeholder="Filter by college" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-gray-700">
                <SelectItem value="all">All Colleges</SelectItem>
                <SelectItem value="cmr-university">CMR University</SelectItem>
                <SelectItem value="cmr-institute">CMR Institute of Technology</SelectItem>
                <SelectItem value="nitte">Nitte Meenakshi Institute</SelectItem>
                <SelectItem value="bms">BMS College of Engineering</SelectItem>
                <SelectItem value="reva">REVA University</SelectItem>
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-[180px] bg-black/50 border-gray-700">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-gray-700">
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="hackathon">Hackathon</SelectItem>
                <SelectItem value="cultural">Cultural Fest</SelectItem>
                <SelectItem value="technical">Technical Fest</SelectItem>
                <SelectItem value="workshop">Workshop</SelectItem>
                <SelectItem value="seminar">Seminar</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex rounded-md overflow-hidden">
              <Button
                variant={view === "grid" ? "default" : "outline"}
                className={`rounded-none ${
                  view === "grid" ? "bg-primary text-white" : "border-gray-700 text-gray-400"
                }`}
                onClick={() => setView("grid")}
              >
                Grid
              </Button>
              <Button
                variant={view === "list" ? "default" : "outline"}
                className={`rounded-none ${
                  view === "list" ? "bg-primary text-white" : "border-gray-700 text-gray-400"
                }`}
                onClick={() => setView("list")}
              >
                List
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Events Display */}
      <Tabs defaultValue="upcoming">
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="this-month">This Month</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="h-12 w-12 mx-auto text-gray-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">No events match your filters</h3>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </div>
          ) : view === "grid" ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} onAddToCalendar={addToCalendar} onShare={shareEvent} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filteredEvents.map((event) => (
                <EventListItem key={event.id} event={event} onAddToCalendar={addToCalendar} onShare={shareEvent} />
              ))}
            </motion.div>
          )}
        </TabsContent>

        <TabsContent value="this-month">
          <div className="text-center py-12">
            <Calendar className="h-12 w-12 mx-auto text-gray-500 mb-4" />
            <h3 className="text-xl font-medium mb-2">This Month's Events</h3>
            <p className="text-gray-400">Coming soon</p>
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="text-center py-12">
            <Clock className="h-12 w-12 mx-auto text-gray-500 mb-4" />
            <h3 className="text-xl font-medium mb-2">Past Events</h3>
            <p className="text-gray-400">Coming soon</p>
          </div>
        </TabsContent>
      </Tabs>
      <Toaster />
    </div>
  )
}

interface EventCardProps {
  event: Event
  onAddToCalendar: (event: Event) => void
  onShare: (event: Event) => void
}

function EventCard({ event, onAddToCalendar, onShare }: EventCardProps) {
  return (
    <Card className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span
            className={`text-xs px-3 py-1 rounded-full ${
              event.type === "hackathon"
                ? "bg-blue-500/20 text-blue-400"
                : event.type === "cultural"
                  ? "bg-purple-500/20 text-purple-400"
                  : event.type === "technical"
                    ? "bg-green-500/20 text-green-400"
                    : event.type === "workshop"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-gray-500/20 text-gray-400"
            }`}
          >
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center text-sm text-white/90 mb-1">
            <Calendar className="h-4 w-4 mr-1 text-primary" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-white/90">
            <MapPin className="h-4 w-4 mr-1 text-primary" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-gray-400 mb-4 line-clamp-3">{event.description}</p>
        <div className="flex items-center text-sm text-gray-400">
          <div className="w-6 h-6 rounded-full bg-gray-700 mr-2 overflow-hidden">
            <img
              src={event.collegeLogo || "/placeholder.svg"}
              alt={event.collegeId}
              className="w-full h-full object-cover"
            />
          </div>
          <span>{event.collegeName}</span>
        </div>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2 pt-2">
        <Button
          variant="outline"
          size="sm"
          className="border-primary/50 text-primary hover:bg-primary hover:text-white transition-colors"
          onClick={() => onAddToCalendar(event)}
        >
          <CalendarPlus className="h-4 w-4 mr-2" />
          Add to Calendar
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-gray-700 text-gray-400 hover:bg-gray-800 transition-colors"
          onClick={() => onShare(event)}
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}

function EventListItem({ event, onAddToCalendar, onShare }: EventCardProps) {
  return (
    <Card className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-48 h-48 md:h-auto">
          <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4">
            <span
              className={`text-xs px-3 py-1 rounded-full ${
                event.type === "hackathon"
                  ? "bg-blue-500/20 text-blue-400"
                  : event.type === "cultural"
                    ? "bg-purple-500/20 text-purple-400"
                    : event.type === "technical"
                      ? "bg-green-500/20 text-green-400"
                      : event.type === "workshop"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-gray-500/20 text-gray-400"
              }`}
            >
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </span>
          </div>
        </div>

        <div className="flex-grow p-4">
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-gray-400 mb-4">{event.description}</p>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center text-sm text-gray-400">
              <Calendar className="h-4 w-4 mr-1 text-primary" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <MapPin className="h-4 w-4 mr-1 text-primary" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <div className="w-5 h-5 rounded-full bg-gray-700 mr-2 overflow-hidden">
                <img
                  src={event.collegeLogo || "/placeholder.svg"}
                  alt={event.collegeId}
                  className="w-full h-full object-cover"
                />
              </div>
              <span>{event.collegeName}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/50 text-primary hover:bg-primary hover:text-white transition-colors"
              onClick={() => onAddToCalendar(event)}
            >
              <CalendarPlus className="h-4 w-4 mr-2" />
              Add to Calendar
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 text-gray-400 hover:bg-gray-800 transition-colors"
              onClick={() => onShare(event)}
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

