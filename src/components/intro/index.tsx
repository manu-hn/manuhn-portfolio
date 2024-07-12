'use client';
import React from 'react';
import { motion } from "framer-motion";
import SelfTypingIntro from './elements/SelfTypingIntro';
import SelfImage from './elements/SelfImage';
import SocialLinks from './elements/SocialLinks';
import useIsSectionInView from '@/lib/hooks/useIsSectionInView';

type Props = {}

const Introduction = (props: Props) => {
    const { ref } = useIsSectionInView({ sectionName: "Home", threshold : 0.5 });

    return (
        <section ref={ref} className='w-full flex flex-col justify-center '>
            <SelfImage />
            <div className='w-full flex justify-center '>
                <div className='text-xs mx-2 sm:mx-0 md:text-xl ' >
                    <motion.p className='w-full  leading-7'
                        initial={{ opacity: 0, y: 100 }}
                        animate={{
                            opacity: 1, y: 0, transition: {
                                duration: 0.65
                            }
                        }}
                    >
                        Hello, I am <span className='font-bold'>Manu H N</span>,  I&apos;m a <SelfTypingIntro />
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        animate={{
                            opacity: 1, y: 0, transition: {
                                duration: 0.75
                            }
                        }}
                        className='leading-7'>I enjoy building sites & apps. My focus is Full Stack - (MERN & Next.js) </motion.p>
                </div>

            </div>
            <SocialLinks />
        </section>
    )
}

export default Introduction;