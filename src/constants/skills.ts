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
import Git from "@/assets/logos/Git.webp";
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
// import Convex from "../../public/assets/familiar/Convex.webp";

const SKILL_IMAGE_HEIGHT: number = 100;
const SKILL_IMAGE_WIDTH: number = 60;

export type SKILLS_TYPE = {
    id: string;
    skill: string;
    imageUrl: StaticImageData;
    height: number;
    width: number;
}

export const skillsData: Array<SKILLS_TYPE> = [
    {
        id: "skill-1",
        skill: "HTML",
        imageUrl: HTML,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "skill-2",
        skill: "CSS",
        imageUrl: CSS,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "skill-3",
        skill: "JavaScript",
        imageUrl: JavaScript,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "skill-4",
        skill: "TypeScript",
        imageUrl: TypeScript,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "skills-5",
        skill: "Redux",
        imageUrl: ReactRedux,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "skill-6",
        skill: "React",
        imageUrl: React,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "skill-7",
        skill: "Next.js",
        imageUrl: NextJS,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "skill-8",
        skill: "Tailwind",
        imageUrl: TailwindCSS,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "skill-9",
        skill: "Node.js",
        imageUrl: NodeJS,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    }, {
        id: "skill-10",
        skill: "Express.js",
        imageUrl: ExpressJS,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    }, {
        id: "skill-11",
        skill: "Java",
        imageUrl: Java,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "skill-12",
        skill: "Git",
        imageUrl: Git,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "skill-13",
        skill: "MongoDB",
        imageUrl: MongoDB,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "skill-14",
        skill: "MySQL",
        imageUrl: MySQL,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
] as const;

export const otherToolsAndTechnologies: Array<SKILLS_TYPE> = [
    {
        id: "tool-1",
        skill: "Shad CN",
        imageUrl: ShadCN,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "tool-2",
        skill: "Framer Motion",
        imageUrl: Framer,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "tool-3",
        skill: "Firebase",
        imageUrl: Firebase,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "tool-4",
        skill: "Clerk",
        imageUrl: Clerk,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "tool-5",
        skill: "Postman",
        imageUrl: Postman,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "tool-6",
        skill: "Render",
        imageUrl: Render,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "tool-7",
        skill: "Netlify",
        imageUrl: Netlify,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    {
        id: "tool-8",
        skill: "Vercel",
        imageUrl: Vercel,
        height: SKILL_IMAGE_HEIGHT,
        width: SKILL_IMAGE_WIDTH,
    },
    // {
    //     id: "tool-9",
    //     tool: "Convex",
    //     imageUrl : Convex,
    // },

] as const;


export const HOW_I_BUILD = `From concept to completion, my development process is methodical and iterative. I begin by understanding the project requirements, followed by careful planning and designing. My coding phase is driven by clean, maintainable code. Deployment is seamless, and I continuously optimize and refine the product.`;