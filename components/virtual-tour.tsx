"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Maximize2, Minimize2, RotateCw } from "lucide-react"
import type { College } from "@/lib/types"

interface VirtualTourProps {
  college: College
}

export default function VirtualTour({ college }: VirtualTourProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [rotation, setRotation] = useState(0)

  const toggleFullscreen = () => {
    const tourElement = document.getElementById("virtual-tour-container")
    if (!tourElement) return

    if (!isFullscreen) {
      if (tourElement.requestFullscreen) {
        tourElement.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="relative h-full w-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-t-4 border-primary border-solid rounded-full animate-spin"></div>
            <p className="mt-4 text-white">Loading virtual tour...</p>
          </div>
        </div>
      )}

      <div
        id="virtual-tour-container"
        className="relative h-full w-full overflow-hidden rounded-lg"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <iframe
          src={college.virtualTourUrl}
          className="w-full h-full border-0"
          allowFullScreen
          onLoad={handleLoad}
        ></iframe>

        <div className="absolute bottom-4 right-4 flex space-x-2">
          <Button variant="secondary" size="icon" className="bg-black/70 hover:bg-black/90" onClick={handleRotate}>
            <RotateCw className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="bg-black/70 hover:bg-black/90" onClick={toggleFullscreen}>
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}

