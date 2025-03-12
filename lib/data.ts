import type { College, Event } from "./types"

export const collegesData: College[] = [
  {
    id: "cmr-university",
    name: "CMR University",
    description:
      "CMR University is a private university in Bangalore, Karnataka, India. It was established in 2013 under the CMR University Act. The university offers undergraduate, postgraduate, and doctoral programs in various disciplines.",
    location: "Bangalore, Karnataka",
    image: "/CMRU.jpg?height=400&width=600",
    studentCount: 12500,
    upcomingEvents: 8,
    tags: ["Engineering", "Management", "Law", "Science"],
    virtualTourUrl:
      "https://www.google.com/maps/embed?pb=!4v1741250307905!6m8!1m7!1sCAoSLEFGMVFpcFBELUlVckRLNk9YNUZ1QTU2V2laTU52c2s4Tk16ei10aU5McF9U!2m2!1d13.11761407103509!2d77.65553344778243!3f340!4f10!5f0.7820865974627469",
    mapPosition: {
      x: 25,
      y: 30,
    },
    programs: [
      {
        name: "B.Tech in Computer Science",
        description: "4-year undergraduate program in computer science and engineering",
      },
      {
        name: "MBA",
        description: "2-year postgraduate program in business administration",
      },
      {
        name: "LLB",
        description: "3-year undergraduate program in law",
      },
      {
        name: "Ph.D Programs",
        description: "Doctoral programs in various disciplines",
      },
    ],
    contact: {
      phone: "+91 80 2345 6789",
      email: "info@cmr.edu.in",
      website: "https://www.cmr.edu.in",
      address: "CMRIT Campus, AECS Layout, Kundalahalli, Bangalore - 560037",
    },
  },
  {
    id: "cmr-institute",
    name: "CMR Institute of Technology",
    description:
      "CMR Institute of Technology (CMRIT) is an engineering college in Bangalore, affiliated to Visvesvaraya Technological University. It offers undergraduate and postgraduate programs in engineering and management.",
    location: "Bangalore, Karnataka",
    image: "/CMRIT.jpg?height=400&width=600",
    studentCount: 8500,
    upcomingEvents: 5,
    tags: ["Engineering", "Technology", "Research"],
    virtualTourUrl:
      "https://www.google.com/maps/embed?pb=!4v1741252067888!6m8!1m7!1sCAoSLEFGMVFpcE5YZVdwb1dHUVUzbXBYcFF1aTBRMG9CbEk3a2JvemxtbkxqWWpI!2m2!1d12.96751821745942!2d77.71407728474557!3f336.155837174639!4f-6.837416446763029!5f0.7820865974627469",
    mapPosition: {
      x: 40,
      y: 45,
    },
    programs: [
      {
        name: "B.E. in Information Science",
        description: "4-year undergraduate program in information science and engineering",
      },
      {
        name: "M.Tech in AI & ML",
        description: "2-year postgraduate program in artificial intelligence and machine learning",
      },
      {
        name: "B.E. in Electronics & Communication",
        description: "4-year undergraduate program in electronics and communication engineering",
      },
      {
        name: "M.Tech in Digital Communication",
        description: "2-year postgraduate program in digital communication",
      },
    ],
    contact: {
      phone: "+91 80 2345 1234",
      email: "info@cmrit.ac.in",
      website: "https://www.cmrit.ac.in",
      address: "132, AECS Layout, IT Park Road, Kundalahalli, Bangalore - 560037",
    },
  },
  {
    id: "nitte",
    name: "Nitte Meenakshi Institute of Technology",
    description:
      "Nitte Meenakshi Institute of Technology (NMIT) is an engineering college in Bangalore, affiliated to Visvesvaraya Technological University. It offers undergraduate, postgraduate, and doctoral programs in engineering and management.",
    location: "Bangalore, Karnataka",
    image: "/NITTE.jpg?height=400&width=600",
    studentCount: 7800,
    upcomingEvents: 6,
    tags: ["Engineering", "Technology", "Research"],
    virtualTourUrl:
      "https://www.google.com/maps/embed?pb=!4v1741252010417!6m8!1m7!1sCAoSLEFGMVFpcFBnR1RuWDRFbjRMeHdLNGtLcTVHcy1HTmlCVGtKUnlxcWxTends!2m2!1d13.12845704236902!2d77.58724347638724!3f161.29105836679076!4f13.247404516561204!5f0.7820865974627469",
    mapPosition: {
      x: 60,
      y: 25,
    },
    programs: [
      {
        name: "B.E. in Computer Science",
        description: "4-year undergraduate program in computer science and engineering",
      },
      {
        name: "M.Tech in Data Science",
        description: "2-year postgraduate program in data science",
      },
      {
        name: "B.E. in Mechanical Engineering",
        description: "4-year undergraduate program in mechanical engineering",
      },
      {
        name: "Ph.D in Engineering",
        description: "Doctoral program in engineering",
      },
    ],
    contact: {
      phone: "+91 80 2345 5678",
      email: "info@nmit.ac.in",
      website: "https://www.nmit.ac.in",
      address: "Govindapura, Gollahalli, Yelahanka, Bangalore - 560064",
    },
  },
  {
    id: "bms",
    name: "BMS College of Engineering",
    description:
      "BMS College of Engineering (BMSCE) is an autonomous engineering college in Bangalore, affiliated to Visvesvaraya Technological University. It was established in 1946 and is one of the oldest engineering colleges in India.",
    location: "Bangalore, Karnataka",
    image: "/BMS.jpg?height=400&width=600",
    studentCount: 10200,
    upcomingEvents: 9,
    tags: ["Engineering", "Technology", "Research"],
    virtualTourUrl:
      "https://www.google.com/maps/embed?pb=!4v1741251946904!6m8!1m7!1sCAoSLEFGMVFpcE5wczhyU0JsMkZ4Qzc0VGU4Q0lETjd5VnpYamhuYTlKY0NLeml2!2m2!1d12.94085136295614!2d77.56538141881248!3f281.92238488700406!4f6.014041990888288!5f0.7820865974627469",
    mapPosition: {
      x: 75,
      y: 60,
    },
    programs: [
      {
        name: "B.E. in Computer Science",
        description: "4-year undergraduate program in computer science and engineering",
      },
      {
        name: "M.Tech in Structural Engineering",
        description: "2-year postgraduate program in structural engineering",
      },
      {
        name: "B.E. in Electronics & Communication",
        description: "4-year undergraduate program in electronics and communication engineering",
      },
      {
        name: "Ph.D in Engineering",
        description: "Doctoral program in engineering",
      },
    ],
    contact: {
      phone: "+91 80 2662 2130",
      email: "info@bmsce.ac.in",
      website: "https://www.bmsce.ac.in",
      address: "Bull Temple Road, Basavanagudi, Bangalore - 560019",
    },
  },
  {
    id: "reva",
    name: "REVA University",
    description:
      "REVA University is a private university in Bangalore, Karnataka, India. It was established in 2012 under the REVA University Act. The university offers undergraduate, postgraduate, and doctoral programs in various disciplines.",
    location: "Bangalore, Karnataka",
    image: "/REVA.png?height=400&width=600",
    studentCount: 15000,
    upcomingEvents: 7,
    tags: ["Engineering", "Management", "Law", "Arts"],
    virtualTourUrl:
      "https://www.google.com/maps/embed?pb=!4v1741251856239!6m8!1m7!1sCAoSLEFGMVFpcE84UG9sdXhzNEFpWk44TFc0ZnVmVHY1aHRyTndodDJUTmh6bVd2!2m2!1d13.11369706533276!2d77.63464572332464!3f280!4f10!5f0.7820865974627469",
    mapPosition: {
      x: 20,
      y: 70,
    },
    programs: [
      {
        name: "B.Tech in Computer Science",
        description: "4-year undergraduate program in computer science and engineering",
      },
      {
        name: "MBA",
        description: "2-year postgraduate program in business administration",
      },
      {
        name: "B.Com",
        description: "3-year undergraduate program in commerce",
      },
      {
        name: "Ph.D Programs",
        description: "Doctoral programs in various disciplines",
      },
    ],
    contact: {
      phone: "+91 80 6622 6622",
      email: "info@reva.edu.in",
      website: "https://www.reva.edu.in",
      address: "Rukmini Knowledge Park, Kattigenahalli, Yelahanka, Bangalore - 560064",
    },
  },
]

export const eventsData: Event[] = [
  {
    id: "event-1",
    title: "TechFest 2023",
    description:
      "Annual technical festival featuring coding competitions, hackathons, technical workshops, and guest lectures from industry experts.",
    date: "March 15-17, 2023",
    location: "Main Campus Auditorium",
    image: "/TECH.jpg?height=400&width=600",
    type: "technical",
    collegeId: "cmr-university",
    collegeName: "CMR University",
    collegeLogo: "/CMRUL.jpg?height=100&width=100",
  },
  {
    id: "event-2",
    title: "Hackathon: AI Solutions",
    description:
      "24-hour hackathon focused on developing AI solutions for real-world problems. Open to all engineering students with prizes worth ₹2 lakhs.",
    date: "April 8-9, 2023",
    location: "Innovation Center",
    image: "/AI.jpg?height=400&width=600",
    type: "hackathon",
    collegeId: "cmr-institute",
    collegeName: "CMR Institute of Technology",
    collegeLogo: "/CMRITL.jpg?height=100&width=100",
  },
  {
    id: "event-3",
    title: "Cultural Fest: Rhythms 2023",
    description:
      "Annual cultural festival featuring music, dance, drama, and art competitions. Celebrate diversity and showcase your talents.",
    date: "February 24-26, 2023",
    location: "College Grounds",
    image: "/CU.jpg?height=400&width=600",
    type: "cultural",
    collegeId: "nitte",
    collegeName: "Nitte Meenakshi Institute of Technology",
    collegeLogo: "/NITTEL.jpg?height=100&width=100",
  },
  {
    id: "event-4",
    title: "Workshop on Blockchain Technology",
    description:
      "Two-day workshop on blockchain technology and its applications. Learn about cryptocurrencies, smart contracts, and decentralized applications.",
    date: "May 12-13, 2023",
    location: "Seminar Hall",
    image: "/MU.jpg?height=400&width=600",
    type: "workshop",
    collegeId: "bms",
    collegeName: "BMS College of Engineering",
    collegeLogo: "/BMSL.jpg?height=100&width=100",
  },
  {
    id: "event-5",
    title: "Entrepreneurship Summit",
    description:
      "Annual entrepreneurship summit featuring panel discussions, startup pitches, and networking opportunities with successful entrepreneurs and investors.",
    date: "June 5-6, 2023",
    location: "Business School",
    image: "/EU.jpg?height=400&width=600",
    type: "seminar",
    collegeId: "reva",
    collegeName: "REVA University",
    collegeLogo: "/REVAL.jpg?height=100&width=100",
  },
  {
    id: "event-6",
    title: "Robotics Competition",
    description:
      "Annual robotics competition featuring robot battles, line following, and obstacle course challenges. Open to all engineering students.",
    date: "July 22-23, 2023",
    location: "Engineering Block",
    image: "/LU.jpg?height=400&width=600",
    type: "technical",
    collegeId: "cmr-university",
    collegeName: "CMR University",
    collegeLogo: "/CMRUL.jpg?height=100&width=100",
  },
]

