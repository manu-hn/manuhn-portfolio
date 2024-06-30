import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const navLinks = [
    {
        id: "#home",
        name: "Home",
    },
    {
        id: "#about",
        name: "About",
    },
    {
        id: "#projects",
        name: "Projects",
    },
    {
        id: "#skills",
        name: "Skills",
    },
    {
        id: "#experience",
        name: "Experience",
    },
    {
        id: "#contact",
        name: "Contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Web Developer Intern",
        location: "Bengaluru, India",
        description:
            "I worked as a Web Developer Intern for 1 month . I also up-killed to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "09/2023 - 10/2023",
    },
    {
        title: "Full-Stack Developer",
        location: "Bengaluru, India",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "03/2024 - present",
    },
]

// export const projectsData = [
//     {
//         title: "CorpComment",
//         description:
//             "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//         tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//         imageUrl: corpcommentImg,
//     },
//     {
//         title: "rmtDev",
//         description:
//             "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//         tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//         imageUrl: rmtdevImg,
//     },
//     {
//         title: "Word Analytics",
//         description:
//             "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//         tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//         imageUrl: wordanalyticsImg,
//     },
// ]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Java",
    "Git",
    "Tailwind",
    "MongoDB",
    "Redux",
    "MySQL",
    "POSTMAN",
    "Clerk",
    "Framer Motion",
] 