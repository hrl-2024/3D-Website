import { cloudcomputing } from "../assets/images"
import * as icons from "../assets/icons"

export const skills = [
    {
        imageUrl: icons.css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: icons.git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: icons.github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: icons.html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: icons.javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: icons.mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: icons.react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: icons.tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: icons.typescript,
        name: "TypeScript",
        type: "Frontend",
    }
]

export const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "iQiyi.com",
      icon: icons.iQiyi,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Architected with Spring Boot framework to enhance the performance of iQiyi's 110.7 million users' Big Data Platform, reducing response time from 3 mins to 20 secs with multi-threaded system design.",
        "Crafted scalable APIs to bridge backend technologies with front-end UIs for data scientists.",
      ],
    },
    {
      title: "Undergraduate Teaching/Course Assistant",
      company_name: "Boston University Department of Computer Science",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Boston_University_wordmark.svg",
      iconBg: "#CC0000",
      date: "Sep 2022 - Dec 2022; Jan 2024 - Current",
      points: [
        "Tutored 180+ students in functional programming, OCaml and Android application development in office hours.",
        "Participated in assignment making to enhance student learning.",
        "Created and graded assignments of 180+ students within a 4-day turnaround.",
      ],
    },
  ]

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: icons.contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: icons.github,
        link: 'https://github.com/hrl-2024',
    },
    {
        name: 'LinkedIn',
        iconUrl: icons.linkedin,
        link: 'https://www.linkedin.com/in/ruihang-liu',
    }
]

export const projects = [
    {
      iconUrl: icons.ai,
      theme: 'btn-back-blue',
      name: 'ChessMS',
      description: 'Developed ChessMS, a chess AI agent on SMS Text, which won at BostonHack 2022. Designed and deployed a serverless database using CockroachDB and connected a local Flask server with Twilio clients using ngrok and WebHook.',
      link: 'https://github.com/hrl-2024/ChessMS',
    },
    {
      iconUrl: icons.doodlejump,
      theme: 'btn-back-green',
      name: 'Doodle Jump AI',
      description: 'Created an AI agent to play Doodle Jump using the NEAT algorithm, a genetic AI algorithm. Explored various input features and reward systems, adjusting NEAT algorithm parameters for optimal results.',
      link: 'https://github.com/hrl-2024/DoodleJumpAI',
    },
    {
      iconUrl: icons.ai,
      theme: 'btn-back-pink',
      name: 'AI Ball Balancing Robot',
      description: 'Leveraged reinforcement learning techniques to train an AI agent for real-time ball balancing on a robot. Engineered bespoke mechanisms with signal processing capabilities, using UART communication to translate AI predictions into precise robotic arm movements.',
      link: 'https://github.com/hrl-2024/AIBallBalancingRobot',
    },
    {
      iconUrl: icons.moviedate,
      theme: 'btn-back-yellow',
      name: 'MovieDate',
      description: 'Architected backend server and wrote HTTP RESTFUL API for a social media application. Enhanced relational database performance with indexes, foreign keys, and database design, balancing storage and speed. Deployed CockroachDB for high availability and throughput.',
      link: 'https://github.com/hrl-2024/MovieDate',
    },
    {
      iconUrl: cloudcomputing,
      theme: 'btn-back-purple',
      name: 'Distributed Data Processing Systems',
      description: 'Developed a custom MapReduce system in Go, employing parallel computation to optimize distributed data processing. Engineered a RAFT-based distributed system in Go for robust log consensus in a distributed setting.',
      link: 'https://github.com/hrl-2024/DistributedSystems',
    },
  ]