"use client";
import React from 'react';
import ProjectsHeading from "@/components/heading"
import { projectsData } from '@/constants/data';
import ProjectCard from './elements/ProjectCard';
import useIsSectionInView from '@/lib/hooks/useIsSectionInView';

type Props = {}

const ProjectSection = (props: Props) => {
    const { ref } = useIsSectionInView({ sectionName: "Projects", threshold : 0.5 });
    
    return (
        <section ref={ref} className='w-full flex justify-center flex-col items-center scroll-mt-28' id='projects'>
            <ProjectsHeading classNames='text-[1.25em] md:text-3xl font-medium capitalize mt-40 mb-10 md:mb-16 md:mt-44 k text-center'>Here&apos;s What I&apos;ve Built and Building</ProjectsHeading>
            <div className='grid'>
                {projectsData.map((project) => {
                    return (
                        <ProjectCard key={project.title}
                            description={project.description}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                            title={project.title}
                            tags={project.tags}
                            imageUrl={project.imageUrl}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectSection;