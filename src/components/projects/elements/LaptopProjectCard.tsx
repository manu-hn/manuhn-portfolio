"use client";
import { ProjectCardType } from '@/types/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { HiOutlineExternalLink } from "react-icons/hi";


const LaptopProjectCard = ({description, githubLink,imageUrl, liveLink, tags, title}: ProjectCardType) => {
    const scrollRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["0 1", "1.33 1"]

    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.65, 1]);
  return (
    <>
    <motion.section className='project-card group hidden md:block' ref={scrollRef}
                style={{
                    scale: scaleProgress, opacity: opacityProgress
                }}>
                <div className='project-text-data group-even:ml-[10.5rem] sm:group-even:ml-[21rem]'>
                    <div className=' flex items-center'>
                        <h3 className='text-sm  sm:text-xl font-semibold '>{title}</h3>
                        <Link href={liveLink} target='_blank'>
                            <HiOutlineExternalLink className='text-xl mx-5 text-blue-600 hover:text-orange-500  cursor-pointer' />
                        </Link>
                    </div>
                    <p className='text-justify text-xs sm:text-sm'>{description}</p>
                    <ul className='flex flex-wrap gap-3 my-5'>
                        {
                            tags?.map((tag) => (
                                <li key={tag?.id} className='project-tags'>{tag?.skill}</li>
                            ))
                        }
                    </ul>
                </div>
                <Image alt={`${title}`} src={imageUrl}
                    className='absolute top-8 -right-24 sm:-right-40 w-[15rem] sm:w-[29rem] rounded-t-lg shadow-xl
             group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-3 transition md:group-hover:scale-[1.05]
             group-even:group-hover:translate-x-3  group-even:group-hover:translate-y-3  group-even:group-hover:rotate-3
             group-even:right-[initial] group-even:-left-20 sm:group-even:-left-40 
            h-full' />

            </motion.section>
    
    </>
  )
}

export default LaptopProjectCard;