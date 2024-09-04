
import ManuHN from "@/assets/images/ManuHN.png";
import EasyEstate from "@/assets/projects/easyestates.png"
import FitFlex from "@/assets/projects/FitFlex.png"
import NetClone from "@/assets/projects/netclone.png"

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




export const myProjectsData = [
    {
        title: "FlowCraft AI",
        liveLink: "",
        githubLink: "https://github.com/manu-hn/FlowCraft-AI",
        description:
            "FlowCraft AI is a cutting-edge project leveraging AI-driven tools for streamlined workflow automation and process optimization, enhancing productivity and efficiency across various industries.",
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
            skill: "Postgres",

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
            skill: "RazorPay",
        },

      
        ],
        imageUrl: ManuHN,
    },
    {
        title: "easyEstates",
        liveLink: "https://easy-estates.netlify.app/",
        githubLink: "https://github.com/manu-hn/EasyEstate-Frontend",
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
        imageUrl: EasyEstate,
    },
    {
        title: "Netflix Clone",
        liveLink: "https://manu-net-clone.netlify.app",
        githubLink: "https://github.com/manu-hn/Netflix-Clone",
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
        imageUrl: NetClone,
    },
    {
        title: "Portfolio(Old)",
        liveLink: "https://manu-net-clone.netlify.app",
        githubLink: "https://github.com/manu-hn/Netflix-Clone",
        description:
            "Developed using Next.js and styled with Tailwind CSS, my portfolio showcases dynamic and responsive design, ensuring a smooth user experience.",
        tags: [
            {
                id: "portfolio-skill-1",
                skill: "Next.js",
            },
            {
                id: "portfolio-skill-2",
                skill: "Tailwind",
            },

            {
                id: "portfolio-skill-3",
                skill: "JavaScript",
            },

        ],
        imageUrl: ManuHN,
    },
];



