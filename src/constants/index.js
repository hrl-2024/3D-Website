import { cloudcomputing } from "../assets/images"
import * as icons from "../assets/icons"

export const skills = [
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
        imageUrl: icons.python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: icons.java,
        name: "Java",
        type: "Language",
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
        name: "C",
        type: "Language",
    },
    {
        imageUrl: icons.go,
        name: "Go",
        type: "Language",
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
        imageUrl: icons.react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: icons.css,
        name: "CSS",
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
    },
    {
        imageUrl: icons.flutter,
        name: "Flutter",
        type: "Frontend"
    },
    {
        imageUrl: icons.mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: icons.mySQL,
        name: "mySQL",
        type: "Database"
    },
    {
        imageUrl: icons.firebase,
        name: "firebase",
        type: "Database"
    },
    {
        imageUrl: icons.flask,
        name: "Flask",
        type: "Server"
    },
    {
        imageUrl: icons.springboot,
        name: "Spring boot",
        type: "Server"
    },
    {
        imageUrl: icons.pandas,
        name: "pandas",
        type: "Data Analysis"
    },
    {
        imageUrl: icons.android,
        name: "Android",
        type: "Mobile"
    },
    {
        imageUrl: icons.swift,
        name: "iOS Swift",
        type: "Mobile"
    }
]

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "WEX",
        icon: icons.wex,
        iconBg: "#F3F3F3",
        date: "June 2025 - Present",
        points: [
            "Engineered an API Al Assistant (AAA) utilizing a secure Proxy Identity Architecture and Autho integration, deploying a self-service partner onboarding flow that eliminated manual Auth provisioning bottlenecks and enforced secure usage limits.",
            "Accelerated core API processing speeds by over 80% (reducing \"Create Card\" latency from 11 seconds to ~2 seconds) by bypassing asynchronous Kafka stream/OpenSearch pipelines and driectly mapping Siebel database records to the API response model.",
            "Modernized Fleet API v3 microservices by implementing dynamic HATEOAS pagination and RESTful resource linking via MvcUriComponentsBuilder, significantly improving ecosystem discoverability.",
            "Implemented foundational CI/CD pipelines for Secure Telematics from the ground up, utilizing Kubernetes App-of-Apps to manage complex multi-cluster deployments and establishing foundational observability with Grafana/Prometheus.",
            "Developed a scalable \"Kill Switch\" automation tool for Fleet Services that safely deactivates DriverDash users in bulk by modifying provisioning statuses and traversing account ancestry IDs.",
        ]
    },
    {
        title: "Full Stack Software Engineer Intern",
        company_name: "Synergies Intelligent Systems",
        icon: icons.synergies,
        iconBg: "#F3F3F3",
        date: "Sep 2024 - April 2025",
        points: [
            "Collaborated in a multidisciplinary team to align product objectives, boost engagement, and refine user experience.",
            "Integrated AI models into websites to boost sales, contributing to $500,000 in revenue within the first month.",
            "Built a scalable backend server and database storage with SQL, RESTful APIs, and maintainable documentation.",
            "Optimized data storage by using a single template to dynamically generate documents, reducing file size by 90%.",
            "Implemented responsive UI components and reusable component libraries using React and Tailwind CSS.",
            "Optimized React algorithm to reduce lag, enabling smooth, adaptive user interactions.",
            "Used Selenium to automate web app testing and web scraping.",
        ]
    },
    {
        title: "Software Engineer Intern",
        company_name: "iQiyi.com",
        icon: icons.iQiyi,
        iconBg: "#E6DEDD",
        date: "Jun 2023 - Aug 2023",
        points: [
            "Architected with Spring Boot framework to enhance the performance of iQiyi's 110.7 million users' Big Data Platform, reducing response time from 3 mins to 20 secs with multi-threaded system design.",
            "Implemented system monitoring to identify and resolve resource quota issues in horizontally scaled applications.",
            "Developed scalable APIs to integrate backend SQL databases with front-end tools used by data scientists.",
        ],
    },
    {
        title: "Undergraduate Teaching/Course Assistant",
        company_name: "Boston University Department of Computer Science",
        icon: "https://upload.wikimedia.org/wikipedia/commons/3/31/Boston_University_wordmark.svg",
        iconBg: "#CC0000",
        date: "Sep 2022 - Dec 2022; Jan 2024 - May 2024",
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
        link: 'https://github.com/rhl-wex',
    },
    {
        name: 'LinkedIn',
        iconUrl: icons.linkedin,
        link: 'https://www.linkedin.com/in/ruihang-liu',
    }
]

export const projects = [
    {
        iconUrl: cloudcomputing,
        theme: 'btn-back-red',
        name: 'Concurrency AI Server',
        description: 'Created AI text-to-image models and 2D-to-3D models with StableDiffusion, TrioSR and ComfyUI. Integrate AI models to scalable backend servers with Celery workers and Prometheus stats for higher throughput. Developed APIs using Python Flask for frontend CRUD, enabling image uploads and prompt submission for appropriate models, job queueing, worker allocation, result retrieval, and endpoint monitoring. Modified ComfyUI system code to work with backend task assignment and job status update. Wrote detailed deployment documentations and API documentations for future maintainability.',
        link: 'https://github.com/rhl-wex/Concurrent-AI-Backend-Server',
    },
    {
        iconUrl: icons.ai,
        theme: 'btn-back-blue',
        name: 'F1Tenth Autonomous Racing Car',
        description: 'Developed a ROS-based autonomous racing car using a LIDAR sensor and a camera. Built a Unity-based simulation for the autonomous racing car to streamline reinforcement learning workflows. Researched Gaussian Splatting and reinforcement learning algorithms to optimize race car\'s driving performance. ',
    },
    {
        iconUrl: icons.ai,
        theme: 'btn-back-blue',
        name: 'ChessMS',
        description: 'Developed ChessMS, a chess AI agent on SMS Text, which won at BostonHack 2022. Designed and deployed a serverless database using CockroachDB and connected a local Flask server with Twilio clients using ngrok and WebHook.',
        link: 'https://devpost.com/software/chessms-8ta6j9',
    },
    {
        iconUrl: icons.doodlejump,
        theme: 'btn-back-green',
        name: 'Doodle Jump AI',
        description: 'Created an AI agent to play Doodle Jump using the NEAT algorithm, a genetic AI algorithm. Explored various input features and reward systems, adjusting NEAT algorithm parameters for optimal results.',
        link: 'https://github.com/alexjmiller5/DoodleJump-NEAT-AI',
    },
    {
        iconUrl: icons.ai,
        theme: 'btn-back-pink',
        name: 'AI Ball Balancing Robot',
        description: 'Leveraged reinforcement learning techniques to train an AI agent for real-time ball balancing on a robot. Engineered bespoke mechanisms with signal processing capabilities, using UART communication to translate AI predictions into precise robotic arm movements.'
    },
    {
        iconUrl: icons.moviedate,
        theme: 'btn-back-yellow',
        name: 'MovieDate',
        description: 'Architected backend server and wrote HTTP RESTFUL API for a social media application. Enhanced relational database performance with indexes, foreign keys, and database design, balancing storage and speed. Deployed CockroachDB for high availability and throughput.',
        link: 'https://github.com/rhl-wex/MovieDate/tree/main/backend',
    },
    {
        iconUrl: cloudcomputing,
        theme: 'btn-back-red',
        name: 'Distributed Data Processing Systems',
        description: 'Developed a custom MapReduce system in Go, strategically employing parallel computation to optimize distributed data processing, thereby significantly enhancing availability and throughput. Engineered a RAFT-based distributed systems in Go, verified by MIT 6.824 testing script, for robust log consensus in a distributed setting.'
    },
    {
        iconUrl: cloudcomputing,
        theme: 'btn-back-blue',
        name: 'Smart Operator Placement for Stream Processing at the Edge',
        description: 'Optimized Flink scheduler for operator placement on Raspberry Pis and cloud, reducing bandwidth and latency. Designed query parsing and cost models for dynamic workload distribution. Validated performance through experiments on a heterogeneous edge-cloud computing cluster.'
    },
    {
        iconUrl: icons.multithreading,
        theme: 'btn-back-orange',
        name: 'SQL Database Query System',
        description: 'Developed an SQL Query System with provenance support, explaining query results via where-, how-, and why-provenance through metadata propagation. Engineered multi-threaded query execution by strategically identifying parallelizable operators, optimizing load distribution, and efficiently merging results, achieving a 50% speedup. Designed comprehensive unit tests, including edge cases, to ensure program correctness and robustness.'
    }
]