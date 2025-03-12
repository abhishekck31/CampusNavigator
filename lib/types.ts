export interface College {
  id: string
  name: string
  description: string
  location: string
  image: string
  studentCount: number
  upcomingEvents: number
  tags: string[]
  virtualTourUrl: string
  mapPosition: {
    x: number
    y: number
  }
  programs: {
    name: string
    description: string
  }[]
  contact: {
    phone: string
    email: string
    website: string
    address: string
  }
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  image: string
  type: "hackathon" | "cultural" | "technical" | "workshop" | "seminar"
  collegeId: string
  collegeName: string
  collegeLogo: string
}

