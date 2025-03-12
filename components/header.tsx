"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useAuth } from "@/lib/auth-context"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { user, login, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">CampusNavigator</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/colleges" className="text-white hover:text-primary transition-colors">
              Colleges
            </Link>
            <Link href="/events" className="text-white hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="/virtual-tours" className="text-white hover:text-primary transition-colors">
              Virtual Tours
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>

            {user ? (
              <Button
                variant="outline"
                onClick={logout}
                className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Logout
              </Button>
            ) : (
              <Button
                onClick={login}
                className="bg-gradient-to-r from-purple-600 to-accent text-white hover:opacity-90 transition-opacity"
              >
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 right-0 top-full mt-2 px-4"
            >
              <div className="bg-black/90 backdrop-blur-md rounded-lg p-4 shadow-lg border border-gray-800">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search colleges, events..."
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white py-2 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/colleges"
                className="text-white py-2 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Colleges
              </Link>
              <Link
                href="/events"
                className="text-white py-2 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/virtual-tours"
                className="text-white py-2 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Virtual Tours
              </Link>
              {user ? (
                <Button
                  variant="outline"
                  onClick={() => {
                    logout()
                    setMobileMenuOpen(false)
                  }}
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Logout
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    login()
                    setMobileMenuOpen(false)
                  }}
                  className="bg-gradient-to-r from-purple-600 to-accent text-white hover:opacity-90 transition-opacity"
                >
                  Login
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

