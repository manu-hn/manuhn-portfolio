"use client";
import { motion } from "framer-motion";
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CAREER_HIGHLIGHTS_DATA } from '@/types/types';
import ExperienceHeading from "@/components/heading";


const ExperienceList = ({ date, description, icon, id, location, title, workType }: CAREER_HIGHLIGHTS_DATA) => {
  return (
    <div className='w-[92.5%] md:w-full flex flex-col md:flex-row md:justify-between md:items-start items-center dark:bg-white/5 my-3 p-2 rounded-lg mx-4 '>
      <motion.div className='w-5/6 md:w-2/4 h-full flex flex-col'
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }} 
      >
        <ExperienceHeading classNames='text-[1.05rem] md:text-lg mt-4 font-semibold w-full'>{title}</ExperienceHeading>
        <p className='text-xs md:text-sm'>{workType}</p>
        <p className='text-xs md:text-sm'>{location}</p>
      </motion.div>
      <motion.div className='w-5/6 md:w-2/4  p-5 '
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
        viewport={{ once: false }} 
      >
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className=''>
            <AccordionTrigger className='text-sm md:text-[1rem]'>{date}</AccordionTrigger>
            <AccordionContent>
              <ul className='list-decimal'>
                {description.map((item) => (
                  <li key={item?.id} className='text-justify border-b border-black/[0.1] my-3 md:my-1'>{item?.text}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
}

export default ExperienceList;