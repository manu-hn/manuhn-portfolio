import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ManuHN from "../../public/ManuHN.png";

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
//         title: "Pixify AI",
//         description:
//             "PixifyAI is an innovative project harnessing AI tools, specifically Cloudinary AI, for advanced image editing and manipulation capabilities.",
//         tags: ["Next.js", "Clerk", "MongoDB", "Tailwind", "Stripe", "Shadcn Ui", "Cloudinary AI"],
//         // imageUrl: corpcommentImg,
//     },

//     // {
//     //     title: "FlowCraft AI",
//     //     description:
//     //         "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     //     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     //     // imageUrl: rmtdevImg,
//     // },
//     // {
//     //     title: "AstralCV",
//     //     description:
//     //         "easyEstates is a modern Real Estate platform leveraging the MERN Stack and Tailwind CSS, allowing users to list, search, and contact property owners effortlessly.",
//     //     tags: ["React", "TypeScript", "Node.js", "Express.js", "Tailwind", "Redux", "Firebase", "OAuth"],
//     //     // imageUrl: rmtdevImg,
//     // },
//     {
//         title: "easyEstates",
//         description:
//             "easyEstates is a modern Real Estate platform leveraging the MERN Stack and Tailwind CSS, allowing users to list, search, and contact property owners effortlessly.",
//         tags: ["React", "TypeScript", "Node.js", "Express.js", "Tailwind", "Redux", "Firebase", "OAuth"],
//         // imageUrl: rmtdevImg,
//     },
//     {
//         title: "Netflix Clone",
//         description:
//             "Built with React Vite and styled with Tailwind CSS, my Netflix Clone offers a seamless user experience, powered by Firebase for data management and Formik for form handling.",
//         tags: ["React", "Tailwind CSS", "Firebase", "Formik",
//         // imageUrl: wordanalyticsImg,
//     },
// ]

export const myProjectsData = [
    {
        title: "Pixify AI",
        liveLink: "",
        githubLink: "",
        description:
            "PixifyAI is an innovative project harnessing AI tools, specifically Cloudinary AI, for advanced image editing and manipulation capabilities.",
        tags: [{
            id: "pixify-ai-skill-1",
            skill: "Next.js"
        },
        {
            id: "pixify-ai-skill-2",
            skill: "Clerk",
        },
        {
            id: "pixify-ai-skill-3",
            skill: "MongoDB",

        },
     
        {
            id: "pixify-ai-skill-4",
            skill: "Tailwind",
        },
        {
            id: "pixify-ai-skill-5",
            skill: "Shadcn Ui",
        },
        {
            id: "pixify-ai-skill-6",
            skill: "Stripe",
        },
      
        {
            id: "pixify-ai-skill-7",
            skill: "Cloudinary AI",
        },
        ],
        imageUrl: ManuHN,
    },
    {
        title: "easyEstates",
        liveLink: "",
        githubLink: "",
        description:
            "easyEstates is a modern Real Estate platform leveraging the MERN Stack and Tailwind CSS, allowing users to list, search, and contact property owners effortlessly.",
        tags: [
            {
                id: "easyestates-skill-1",
                skill: "React",
            },
            {
                id: "easyestates-skill-2",
                skill: "Node.js",
            },
            {
                id: "easyestates-skill-3",
                skill: "Redux",
            },
            {
                id: "easyestates-skill-4",
                skill: "TypeScript",
            },
            {
                id: "easyestates-skill-5",
                skill: "Tailwind",
            },

            {
                id: "easyestates-skill-6",
                skill: "Express",
            },
         

            {
                id: "easyestates-skill-7",
                skill: "Firebase",
            },
            {
                id: "easyestates-skill-8",
                skill: "OAuth",
            }
        ],
        imageUrl: ManuHN,
    },
    {
        title: "Netflix Clone",
        liveLink: "",
        githubLink: "",
        description:
            "Built with React Vite and styled with Tailwind CSS, my Netflix Clone offers a seamless user experience, powered by Firebase for data management and Formik for form handling.",
        tags: [
            {
                id: "netflixclone-skill-1",
                skill: "React",
            },
            {
                id: "netflixclone-skill-2",
                skill: "Formik",
            },
           
            {
                id: "netflixclone-skill-3",
                skill: "Firebase",
            },
           
            {
                id: "netflixclone-skill-4",
                skill: "Tailwind",
            },
        ],
        imageUrl: ManuHN,
    },
];

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