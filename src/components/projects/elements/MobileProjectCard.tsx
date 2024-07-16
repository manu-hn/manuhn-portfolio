"use client";
import { ProjectCardType } from '@/types/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { HiOutlineExternalLink } from "react-icons/hi";




const MobileProjectCard = ({ description, githubLink, imageUrl, liveLink, tags, title }: ProjectCardType) => {
    const scrollRef = useRef<HTMLElement>(null)
    const {  scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["0 1", "1.33 1"]

    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.65, 1]);

    return (
        <>
            <motion.section className='project-card group block md:hidden dark:bg-white/10 dark:hover:bg-white/20 ' ref={scrollRef}
                style={{
                    scale: scaleProgress, opacity: opacityProgress
                }}

            >
                <div className='w-full '>
                    <Image alt={`${title}`} src={imageUrl}
                        className='  w-full  rounded-t-lg shadow-xl
            
            h-full' />
                    <div className=' flex items-center px-2'>
                        <h3 className='text-sm  sm:text-xl font-semibold dark:text-white/85 my-3'>{title}</h3>
                        <Link href={liveLink} target='_blank'>
                            <HiOutlineExternalLink className='text-xl mx-5 text-blue-600 hover:text-orange-500  cursor-pointer' />
                        </Link>
                    </div>
                    <p className='text-justify text-xs sm:text-sm px-2'>{description}</p>
                    <ul className='flex flex-wrap gap-3 my-5 px-2' >
                        {
                            tags?.map((tag) => (
                                <li key={tag?.id} className='project-tags'>{tag?.skill}</li>
                            ))
                        }
                    </ul>
                </div>

            </motion.section>

        </>
    )
}

export default MobileProjectCard