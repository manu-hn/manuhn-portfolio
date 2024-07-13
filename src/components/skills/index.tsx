"use client"
import React from 'react';
import SkillsHeading from "@/components/heading";
import { HOW_I_BUILD, skillsData, otherToolsAndTechnologies } from '@/constants/skills';
import SkillsCarousel from './element/SkillsCarousel';
import useIsSectionInView from '@/lib/hooks/useIsSectionInView';



type Props = {}

const SkillsSection = (props: Props) => {
    const { ref } = useIsSectionInView({ sectionName: "Skills", threshold : 0.5 });
    return (
        <section id='skills' className='w-full md:max-w-3xl   flex flex-col items-center ' ref={ref}>
            <SkillsHeading classNames={`text-[1.25em] md:text-3xl font-medium capitalize my-12 md:mt-28 text-center`}>
                How I Build & What I Use</SkillsHeading>
            <div className='w-5/6 md:w-full '>
                <SkillsHeading classNames={`text-[1.05em] md:text-xl font-medium capitalize my-4 md:mt-8 text-left`}>
                    How I Build</SkillsHeading>
                <p className='text-justify text-xs leading-6 md:text-lg my-3 font-sans'>
                    {HOW_I_BUILD}
                </p>
            </div>

            <div className='flex w-5/6 md:w-full flex-col justify-evenly '>
               
                <SkillsCarousel skillsAndTools={skillsData} headingText='What I Use' delay={750}/>
                <SkillsCarousel skillsAndTools={otherToolsAndTechnologies} headingText='Additional Tech and Tools' delay={500}/>
            
            </div>
        </section>
    )
}

export default SkillsSection;