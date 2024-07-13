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


// Career Highlights types

export type DESCRIPTION_LIST_TYPE={
    id : number;
    text : string;
}

export type CAREER_HIGHLIGHTS_DATA ={
    id : string;
    title : string;
    location : string;
    date : string;
    description : Array<DESCRIPTION_LIST_TYPE>;
    icon : React.ReactElement;
    workType : string;
}