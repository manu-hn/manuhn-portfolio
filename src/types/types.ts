import { navLinks } from "@/constants/data";
import { StaticImageData } from "next/image";

//Type for Header and Section Names
export type SectionName = (typeof navLinks)[number]["name"];


// Project and Project Card types
export type TAG_TYPE = {
    id: string,
    skill: string
}
export type ProjectCardType = {
    title: string;
    liveLink: string;
    githubLink: string,
    description: string;
    tags: Array<TAG_TYPE>;
    imageUrl: StaticImageData;

}