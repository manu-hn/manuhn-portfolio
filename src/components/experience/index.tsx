"use client";
import React from 'react';
import ExperienceHeading from "@/components/heading";
import { experiencesData } from '@/constants/experience';
import ExperienceList from './elements/ExperienceList';
import useIsSectionInView from '@/lib/hooks/useIsSectionInView';

type Props = {}

const ExperienceSection = (props: Props) => {
  const { ref } = useIsSectionInView({ sectionName: "Experience", threshold : 0.5 });

  return (
    <section ref={ref} id='experience' className='w-full md:max-w-3xl flex flex-col items-center scroll-mt-28'>
      <ExperienceHeading classNames='text-[1.25em] md:text-3xl font-medium capitalize my-12 md:mt-28 text-center'>
        Career Journey
      </ExperienceHeading>

      <div className='w-full '>
      {
        experiencesData?.map((exp) => (
          <ExperienceList key={exp?.id}
            date={exp?.date}
            description={exp?.description}
            icon={exp?.icon}
            title={exp?.title}
            location={exp?.location}
            id={exp?.id}
            workType={exp?.workType}
          />


        ))
      }
      </div>
    </section>
  )
}

export default ExperienceSection;
