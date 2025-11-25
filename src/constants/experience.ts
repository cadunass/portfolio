import type { Experience } from "@/types";

export const EXPERIENCE: Experience[] = [
  {
    id: "alore",
    title: "Software Engineer",
    company: "Alore",
    location: "Remote",
    startDate: "2022-04",
    endDate: "Present",
    summary:
      "Core engineer driving technical direction at a startup, building advanced Web3 and AI solutions from the ground up. Working remotely with distributed international teams, I led development of a cryptographically secure Wallet-as-a-Service API in Rust, architected complete authentication systems, and contributed to a generative AI tool for law firms. Specialized in implementing CI/CD workflows, delivering decentralized applications, and providing freelance consulting for blockchain integrations. Experience includes smart contract development, API design, and full-stack TypeScript/React applications.",
    technologies: [
      "Rust",
      "TypeScript",
      "Next.js",
      "React",
      "Web3",
      "CI/CD",
      "Blockchain",
    ],
    links: [
      { label: "bealore", url: "https://bealore.com" },
      {
        label: "joori",
        url: "https://joori.ai",
      },
    ],
  },
  {
    id: "taric-full-stack",
    title: "Full Stack Developer",
    company: "Taric",
    location: "Joinville, SC",
    startDate: "2021-09",
    endDate: "2022-04",
    summary:
      "Led full stack development and expansion of an electronic medical record system using Java Spring and Vue.js. As a experienced developer, I implemented complex features, conducted code reviews, contributed to the company's core framework, and mentored junior developers. Specialized in backend API development, database optimization, and responsive frontend applications for healthcare systems.",
    technologies: ["Java", "Vue.js", "Spring", "SQL"],
  },
  {
    id: "taric-analyst",
    title: "Programming Analyst",
    company: "Taric",
    location: "Joinville, SC",
    startDate: "2021-06",
    endDate: "2021-09",
    summary:
      "Developed backend logic and database interactions for a rapidly expanding EMR system using Java, Spring, and SQL. Implemented features for a healthcare platform used by clinics while contributing to frontend development with Vue.js.",
    technologies: ["Java", "Spring", "SQL", "Vue.js"],
  },
  {
    id: "zitrus-analyst",
    title: "Programming Analyst",
    company: "Zitrus",
    location: "Joinville, SC",
    startDate: "2020-10",
    endDate: "2021-06",
    summary:
      "Led initial frontend development of an electronic medical record system using Vue.js, building core UI components and features. Proactively expanded into backend development with Java, Spring, and SQL, contributing across the full stack.",
    technologies: ["Vue.js", "Java", "Spring", "SQL"],
  },
  {
    id: "zitrus-intern",
    title: "Web Development Intern",
    company: "Zitrus",
    location: "Joinville, SC",
    startDate: "2019-11",
    endDate: "2020-10",
    summary:
      "Rapidly acquired proficiency in Vue.js and contributed significantly to the MVP frontend of a critical electronic medical record system. Demonstrated strong initiative learning Java, Spring, and SQL, leading to a full-time Programming Analyst position.",
    technologies: ["Vue.js", "Java", "Spring", "SQL"],
  },
  {
    id: "dalmark-intern",
    title: "Web Development Intern",
    company: "Dalmark",
    location: "Joinville, SC",
    startDate: "2019-02",
    endDate: "2019-11",
    summary:
      "Gained foundational professional web development experience with React, Node.js, and Groovy. Developed a clock-in/clock-out system with geolocation-based verification, contributing to both frontend and backend development.",
    technologies: ["React", "Node.js", "Groovy"],
  },
];
