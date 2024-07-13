
import type { ProjectCardType } from '@/types/types';
import React from 'react';
import MobileProjectCard from './MobileProjectCard';
import LaptopProjectCard from './LaptopProjectCard';




const ProjectCard = ({ description, githubLink, liveLink, title, tags, imageUrl }: ProjectCardType) => {

    return (
        <>
            {/* For Mobile Devices */}

            <MobileProjectCard description={description} githubLink={githubLink} imageUrl={imageUrl} liveLink={liveLink}
                tags={tags} title={title}
            />

            {/* For Tab and Laptop Devices */}

            <LaptopProjectCard description={description} githubLink={githubLink} imageUrl={imageUrl} liveLink={liveLink}
                tags={tags} title={title} />
        </>
    )
}

export default ProjectCard;