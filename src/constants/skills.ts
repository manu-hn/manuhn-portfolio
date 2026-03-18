import HTML from "@/assets/logos/HTML.webp";
import CSS from "@/assets/logos/CSS.webp";
import JavaScript from "@/assets/logos/JavaScript.webp";
import TypeScript from "@/assets/logos/Typescript.webp";
import ReactRedux from "@/assets/logos/react-redux.webp";
import React from "@/assets/logos/React.webp";
import NextJS from "@/assets/logos/NextJS.webp";
import TailwindCSS from "@/assets/logos/Tailwindcss.webp";
import NodeJS from "@/assets/logos/NodeJS.webp";
import ExpressJS from "@/assets/logos/ExpressJS.webp";
import Java from "@/assets/logos/Java.webp";
import Git from "@/assets/logos/git.webp";
import MongoDB from "@/assets/logos/MongoDB.webp";
import MySQL from "@/assets/logos/MySQL.webp";

import Framer from "@/assets/familiar/Framer.webp";
import ShadCN from "@/assets/familiar/ShadCN UI.webp";
import Firebase from "@/assets/familiar/Firebase.webp";
import Clerk from "@/assets/familiar/Clerk.webp";
import Postman from "@/assets/familiar/Postman.webp";
import Render from "@/assets/familiar/Render.webp";
import Netlify from "@/assets/familiar/Netlify.webp";
import Vercel from "@/assets/familiar/Vercel.webp";
import { StaticImageData } from "next/image";
import Aws from "@/assets/familiar/aws.png";

// import Convex from "../../public/assets/familiar/Convex.webp";

const SKILL_IMAGE_HEIGHT: number = 100;
const SKILL_IMAGE_WIDTH: number = 60;

export type SKILLS_TYPE = {
    id: string;
    skill: string;
    // imageUrl?: StaticImageData;
    height: number;
    width: number;
}

export const skillsData = [
    { id: "s1", skill: "JavaScript", imageUrl: JavaScript, height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH, },
    { id: "s2", skill: "TypeScript", imageUrl: TypeScript, height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH, },
    { id: "s3", skill: "React", imageUrl: React, height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH, },
    { id: "s4", skill: "Next.js", imageUrl: NextJS, height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH, },
    { id: "s5", skill: "Zustand", imageUrl: Aws, height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH, },
    { id: "s6", skill: "TanStack Query", imageUrl: Aws, height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH, },
    { id: "s7", skill: "Redux Toolkit", imageUrl: ReactRedux, height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH, },
    { id: "s8", skill: "Tailwind CSS", imageUrl: TailwindCSS , height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH,},
    { id: "s9", skill: "WebSockets", imageUrl: WebSocket, height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH, },
];

export const otherToolsAndTechnologies = [
    { id: "t1", skill: "AWS", imageUrl: Aws, height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH, },
    { id: "t2", skill: "Nginx", imageUrl: Aws, height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH, },
    { id: "t3", skill: "PM2", imageUrl: Aws , height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH,},
    { id: "t4", skill: "GitHub Actions", imageUrl: Aws, height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH, },
    { id: "t5", skill: "Postman", imageUrl: Postman, height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH, },
    { id: "t6", skill: "Firebase", imageUrl: Firebase, height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH, },
    { id: "t7", skill: "Clerk", imageUrl: Clerk, height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH, },
    { id: "t8", skill: "Framer Motion", imageUrl: Framer, height: SKILL_IMAGE_HEIGHT, width: SKILL_IMAGE_WIDTH, },
];


export const HOW_I_BUILD = `I build production-ready applications with a focus on performance, scalability, and real-world usability. I start by understanding system requirements and data flow, then design clean, maintainable architectures. I prioritize efficient state management, API integration, and performance optimization. From development to deployment, I ensure reliability, continuously monitor, and iterate based on real usage.`;