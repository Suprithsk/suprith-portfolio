import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Suprith S K",
  initials: "SKS",
  url: "https://suprith.online",
  location: "Bengaluru, KA",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "A software engineer",
  summary:
    "At the start of 2025, I launched Premium Code, [a LeetCode Premium-style platform](#projects) aimed at helping developers prepare for interviews by filtering questions by company. Previously, I completed my [B.E. in Computer Science and Engineering](#education), worked as a [full-stack engineer at Nuvepro](#work), and built several full-stack applications using React and Node.js. I enjoy solving real-world problems through code ",
  avatarUrl: "/suprith.jpg",
  skills: [
    "React",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "MongoDb",
    "Express",
    "Angular"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "suprithsk2001@gmail.com",
    tel: "+918088079320",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Suprithsk",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/suprith-s-k-442381196/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/suprithmay31",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@suprithsk7567",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:suprithsk2001@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Nuvepro Technologies",
      href: "https://nuvepro.com",
      badges: [],
      location: "Remote",
      title: "SDE- Full Stack",
      logoUrl: "/nuvepro.jpg",
      start: "July 2023",
      end: "Current",
      description:
        "Designed developer assessments for React and Angular, evaluating 1000+ engineers on architecture and state management. Built cloud-optimized Node.js services reducing execution time by 30%. Led full-cycle assessment design, improving internal workflows. Authored clear documentation that cut support tickets by 10%. Integrated Redux Toolkit and Zustand to simulate real-world frontend scenarios.",
    }
  ],
  education: [
    {
      school: "SJB Institute Of Technology",
      href: "https://sjbit.edu.in/",
      degree: "Bachelor's Degree of Computer Science (B. E)",
      logoUrl: "/SJBIT.jpg",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Premium Code",
      href: "https://premium-code.suprith.online/",
      dates: "Feb 2025 - Mar 2025",
      active: true,
      description:
        "A LeetCode Premium-style platform for interview preparation, filtering questions by company.",
      technologies: [
        "React.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://premium-code.suprith.online/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Suprithsk/ceet-code",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/HLTPQ1MV/Screenshot-2025-05-03-172847.jpg",
      video:
        "",
    },
    {
      title: "Milk Price Calculator",
      href: "https://milk-calculator-app-frontend.vercel.app/",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "Worked on a user-friendly, mobile-responsive application for calculating monthly milk and curd expenses for my family.",
      technologies: [
        "React.js",
        "JavaScript",
        "MongoDB",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://milk-calculator-app-frontend.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Suprithsk/milk-calculator-app-frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/PGm6whwX/Screenshot-2025-05-03-173747.jpg",
      video: "",
    },
    {
      title: "Medium Clone",
      href: "https://github.com/Suprithsk/blog-app",
      dates: "March 2025 - April 2025",
      active: true,
      description:
        "Created a blogging platform using React for the front end and Node js for the back end.",
      technologies: [
        "React.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Node.js"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Suprithsk/blog-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/Jj4vzpQg/Screenshot-2025-05-03-180725.jpg",
      video: "",
    }
  ],
  hackathons: [
    
  ],
} as const;
