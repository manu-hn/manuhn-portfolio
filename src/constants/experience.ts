import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { CAREER_HIGHLIGHTS_DATA } from "@/types/types";

export const experiencesData: Array<CAREER_HIGHLIGHTS_DATA> = [
    {
    id: "experience-3",
    title: "Frontend Developer",
    location: "Demetrix Infotech Pvt. Ltd, Bengaluru, India",
    description: [
        { id: 1, text: "Owned and architected the frontend for a real-time commodity trading platform with traceability using Next.js and TypeScript." },
        { id: 2, text: "Implemented WebSocket-based live updates and geospatial visualizations using Pigeon Maps for real-time tracking." },
        { id: 3, text: "Improved application performance by ~40% through code splitting, lazy loading, and optimized state management." },
        { id: 4, text: "Designed scalable data dashboards using Zustand and TanStack Query with efficient caching and API handling." },
        { id: 5, text: "Collaborated on API contracts with backend teams and handled production-level issues in a live environment." }
    ],
    icon: React.createElement(FaReact),
    date: "01/2025 - Present",
    workType: "Full-Time",
    link: "https://demetrix.in/"
},
   {
    id: "experience-2",
    title: "Junior Application Developer Intern",
    location: "Demetrix Infotech Pvt. Ltd, Bengaluru, India",
    description: [
        { id: 1, text: "Developed and maintained responsive web applications using React, Tailwind CSS, and TypeScript." },
        { id: 2, text: "Integrated APIs and collaborated with backend teams to ensure smooth data flow and application stability." },
        { id: 3, text: "Built data visualization dashboards and implemented geolocation-based features for real-world use cases." },
        { id: 4, text: "Worked on GHG accounting tools with Formik, Yup, and RTK Query for efficient validation and data synchronization." },
        { id: 5, text: "Gained hands-on experience in production workflows, debugging, and performance optimization." }
    ],
    icon: React.createElement(FaReact),
    date: "10/2024 - 12/2024",
    workType: "Internship",
    link: "https://demetrix.in/"
}
,    

   {
    id: "experience-1",
    title: "Next.js Developer (Freelance)",
    location: "Universal Rasikaas, Bengaluru, India",
    description: [
        { id: 1, text: "Developed SEO-optimized and reusable frontend components using Next.js, TypeScript, and Tailwind CSS." },
        { id: 2, text: "Reduced build size significantly (121.8kb → 41.2kb) through asset optimization and efficient code splitting." },
        { id: 3, text: "Delivered responsive and high-performance web pages aligned with design requirements." }
    ],
    icon: React.createElement(FaReact),
    date: "03/2024 - 09/2024",
    workType: "Freelance",
    link: "https://universalrasikaas.com/"
},
   
    // {
    //     id: "experience-0",
    //     title: "MERN Stack Development Training",
    //     location: "Bengaluru, India",
    //     description: [
    //         { id: 1, text: "Completed a comprehensive training program in MERN Stack Development." },
    //         { id: 2, text: "Gained hands-on experience with MongoDB, Express.js, React, and Node.js." },
    //         { id: 3, text: "Enhanced skills in full-stack development through practical projects and assignments." }
    //     ],
    //     icon: React.createElement(FaReact),
    //     date: "09/2022 - 10/2023",
    //     workType : "Boot Camp",
    //     link : "https://drive.google.com/drive/folders/1uvbShcvTmW9EwILd9ndGNqKc07DvCIwu?usp=sharing"
    // },
];