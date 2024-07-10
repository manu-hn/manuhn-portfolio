'use client';

import React from 'react';
import HeadingSection from '@/components/heading';
import { motion } from "framer-motion";



type Props = {}

const AboutSection = (props: Props) => {

    return (
        <motion.section className='w-full flex flex-col justify-center items-center mt-12' id='about'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        >
           
            <HeadingSection classNames='text-[1.25em] md:text-3xl font-medium capitalize my-4 text-center'>About Me</HeadingSection>
            <div className='w-5/6 md:w-3/4 lg:w-2/4'>
                <p className='text-justify text-xs leading-6 md:text-lg my-3 '>
                    With an <span className='font-medium italic underline underline-offset-4'> Engineering </span>degree and a focus on <span>Full Stack Web Development</span> in the <span>MERN stack</span>,
                    I excel in JavaScript, <span className='font-medium '>
                        React, Redux, TypeScript, Next.js, Node.js, Express.js, Tailwind CSS,
                        Git, and MongoDB.
                    </span> My familiarity extends to Java, MySQL, Clerk CMS,Postman, and Firebase.
                    I am currently learning about <span className='font-medium'> GraphQL</span> to expand my skill set further
                    Currently working as a <span className='font-mono font-semibold'>Freelance Next.js Developer</span>, I am actively seeking a <span className='font-mono font-bold'>
                        Full-Time Software Developer</span> position to apply my skills and embrace new challenges.
                </p>
                <p className='text-justify text-xs leading-6 md:text-lg'>
                    When I&apos;m not coding, I enjoy diving into <span className='font-medium italic'>Books</span> and investing in the
                    <span className='font-medium italic'> Stock Market</span>,
                    always on the lookout for new learning opportunities and ways to expand my horizons.
                </p>
            </div>
        </motion.section>
    )
}

export default AboutSection;