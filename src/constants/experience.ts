import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { CAREER_HIGHLIGHTS_DATA } from "@/types/types";



export const experiencesData: Array<CAREER_HIGHLIGHTS_DATA> = [

    {
        id: "experience-1",
        title: "Next.js Developer - Frontend",
        location: "Bengaluru, India",
        description: [
            { id: 1, text: "Developed and implemented SEO-friendly, reusable components using Next.js, TypeScript, and Tailwind CSS." },
            { id: 2, text: "Optimized images and streamlined code, reducing the build size from 121.8kb to 41.2kb." },
            { id: 3, text: "Ensured optimal performance and responsiveness of web applications across various devices and platforms." },
            { id: 4, text: "Collaborated with the design team to translate UI/UX wire-frames into functional and visually appealing web pages." }
        ],
        icon: React.createElement(FaReact),
        date: "03/2024 - Present",
        workType : "Freelance",
    },
    {
        id: "experience-2",
        title: "Web Developer Intern",
        location: "Remote",
        description: [
            { id: 1, text: "Effectively resolved front-end issues to ensure smooth functionality and user experience." },
            { id: 2, text: "Collaborated with teams to promptly address reported bugs, enhancing teamwork and project efficiency." },
            { id: 3, text: "Contributed to code reviews, providing insights that improved code quality and system stability." }
        ],
        icon: React.createElement(CgWorkAlt),
        date: "09/2023 - 10/2023",
        workType : "Internship",
    },
    {
        id: "experience-0",
        title: "MERN Stack Development Training",
        location: "Bengaluru, India",
        description: [
            { id: 1, text: "Completed a comprehensive training program in MERN Stack Development." },
            { id: 2, text: "Gained hands-on experience with MongoDB, Express.js, React, and Node.js." },
            { id: 3, text: "Enhanced skills in full-stack development through practical projects and assignments." }
        ],
        icon: React.createElement(FaReact),
        date: "09/2022 - 10/2023",
        workType : "Boot Camp",
    },
];