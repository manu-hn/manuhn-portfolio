import React from 'react';
import ProjectsHeading from "@/components/heading"
import { myProjectsData } from '@/constants/data';
import ProjectCard from './elements/ProjectCard';

type Props = {}

const ProjectSection = (props: Props) => {
    return (
        <section className='w-full flex justify-center flex-col items-center' id='projects'>
            <ProjectsHeading classNames='text-[1.25em] md:text-3xl font-medium capitalize my-12 md:mt-28 text-center'>Here&apos;s What I&apos;ve Built and Building</ProjectsHeading>
            <div className=''>
                {myProjectsData.map((project) => {
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