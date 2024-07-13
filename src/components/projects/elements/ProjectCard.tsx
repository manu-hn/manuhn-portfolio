
import type { ProjectCardType } from '@/types/types';
import React from 'react';
import MobileProjectCard from './MobileProjectCard';
import LaptopProjectCard from './LaptopProjectCard';
import useIsSectionInView from '@/lib/hooks/useIsSectionInView';




const ProjectCard = ({ description, githubLink, liveLink, title, tags, imageUrl }: ProjectCardType) => {
    const { ref } = useIsSectionInView({ sectionName: "Projects", threshold : 0.5 });
    return (
        <section ref={ref}>
            {/* For Mobile Devices */}

            <MobileProjectCard description={description} githubLink={githubLink} imageUrl={imageUrl} liveLink={liveLink}
                tags={tags} title={title}
            />

            {/* For Tab and Laptop Devices */}

            <LaptopProjectCard description={description} githubLink={githubLink} imageUrl={imageUrl} liveLink={liveLink}
                tags={tags} title={title} />
        </section>
    )
}

export default ProjectCard;