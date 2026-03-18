'use client';

import React from 'react';
import HeadingSection from '@/components/heading';
import { motion } from "framer-motion";
import useIsSectionInView from '@/lib/hooks/useIsSectionInView';



type Props = {}

const AboutSection = (props: Props) => {
    const { ref } = useIsSectionInView({ sectionName: "About", threshold: 0.8 });

    return (
        <motion.section className='w-full flex flex-col justify-center items-center scroll-mt-28' id='about'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
            ref={ref}
        >

            <HeadingSection classNames='text-[1.25em] md:text-3xl font-medium capitalize my-4 text-center'>About Me</HeadingSection>
            <div className='w-5/6 md:w-3/4 lg:w-2/4'>
                <p className='text-justify text-xs leading-6 md:text-lg my-3'>
                    I’m a <span className='font-semibold'>Full Stack Developer</span> focused on building
                    <span className='font-medium'> scalable, production-grade web applications</span> with strong expertise in frontend engineering.
                    I primarily work with
                    <span className='font-medium'> React, Next.js, and TypeScript</span>, and have hands-on experience developing
                    <span className='font-medium'> real-time systems, data-intensive dashboards, and performance-optimized user interfaces</span>.
                </p>

                <p className='text-justify text-xs leading-6 md:text-lg my-3'>
                    Currently working as a
                    <span className='font-mono font-semibold'> Frontend Developer at Demetrix Infotech</span>,
                    I’ve contributed to live production platforms including a
                    <span className='font-medium'> real-time commodity trading system with traceability</span>.
                    I implemented
                    <span className='font-medium'> WebSocket-based live updates, geospatial visualizations</span>, and improved performance through
                    <span className='font-medium'> optimized architecture and state management</span>.
                </p>

                <p className='text-justify text-xs leading-6 md:text-lg'>
                    I focus on writing
                    <span className='font-medium'> clean, maintainable code</span> and designing systems that scale.
                    From API integration to deployment, I approach development with an emphasis on
                    <span className='font-medium'> performance, reliability, and real-world usability</span>.
                </p>

                <p className='text-justify text-xs leading-6 md:text-lg mt-3'>
                    When I&apos;m not coding, I spend time reading and exploring the
                    <span className='font-medium italic'> stock market</span>, constantly learning and refining my thinking.
                </p>
            </div>
        </motion.section>
    )
}

export default AboutSection;