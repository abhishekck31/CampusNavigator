"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { collegesData } from "@/lib/data"
import CollegeShowcase from "@/components/college-showcase"

export default function CollegesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [tagFilter, setTagFilter] = useState("all")

  const filteredColleges = collegesData.filter((college) => {
    const matchesSearch =
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = tagFilter === "all" || college.tags.includes(tagFilter)

    return matchesSearch && matchesTag
  })

  const allTags = Array.from(new Set(collegesData.flatMap((college) => college.tags)))

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
            Explore <span className="gradient-text">Top Colleges</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the best colleges in Bangalore with detailed information, virtual tours, and upcoming events
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-6 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search colleges..."
                className="pl-10 bg-black/50 border-gray-700 focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select value={tagFilter} onValueChange={setTagFilter}>
              <SelectTrigger className="w-full md:w-[200px] bg-black/50 border-gray-700">
                <SelectValue placeholder="Filter by tag" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-gray-700">
                <SelectItem value="all">All Tags</SelectItem>
                {allTags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
          {filteredColleges.length === 0 ? (
            <div className="text-center py-16">
              <Filter className="h-16 w-16 mx-auto text-gray-500 mb-4" />
              <h3 className="text-2xl font-medium mb-2">No colleges match your filters</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filters</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setTagFilter("all")
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-xl font-medium text-gray-300">Found {filteredColleges.length} colleges</h2>
              </div>
              <CollegeShowcase colleges={filteredColleges} />
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}

