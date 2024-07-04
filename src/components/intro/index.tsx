'use client';
import Image from 'next/image';
import React from 'react';
import ManuHNImage from "@/assets/images/ManuHN - Copy.jpg";
import { motion } from "framer-motion";
import SelfTypingIntro from './elements/SelfTypingIntro';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { HiDownload, } from 'react-icons/hi';
import { GITHUB_MANU, INSTAGRAM_MANU, LINKEDIN_MANU, RESUME_MANU } from '@/constants/sociallinks';

type Props = {}

const Introduction = (props: Props) => {
    return (
        <section className='w-full flex flex-col justify-center '>
            <div className='flex items-center justify-center z-10'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 1, scale: 1, transition: {
                                duration: 0.75,
                                type: "tween"
                            }
                        }}
                    >
                        <Image alt='Manu H N' src={ManuHNImage} quality={100}
                            className='h-28 w-28 z-10 rounded-full object-cover border-[0.3rem] shadow-lg'
                            priority={true} />
                    </motion.div>

                    <motion.span className='text-3xl absolute bottom-0 right-0 '
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 1, scale: 1, transition: {
                                duration: 0.75,
                                type: "spring",
                                stiffness: 125,
                                delay: 0.1,


                            }
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <div className='text-xs mx-4 sm:mx-0 md:text-xl ' >
                    <motion.p className=''
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
                        className=''>I enjoy building sites & apps. My focus is Full Stack - (MERN & Next.js) </motion.p>
                </div>

            </div>
            <div className='w-full flex justify-evenly md:justify-center my-5'>
                <div className='w-full sm:h-2/3  md:w-full lg:w-2/4  flex flex-col md:flex-row justify-evenly items-center'>
                    {/* Contact Buttons */}
                    <motion.div className='social-container'
                        initial={{ opacity: 0, y: 100 }}
                        animate={{
                            opacity: 1, y: 0, transition: {
                                duration: 0.95
                            }
                        }} >
                        <Link href={'#contact'}
                            className='social-button bg-gray-900 text-white hover:bg-gray-950 transition group'>
                            Let&apos;s Connect <BsArrowRight className='text-white text-xl mx-2 opacity-80 group-hover:translate-x-1 transition' />
                        </Link>
                        <Link href={RESUME_MANU} target='_blank'
                            className='social-button bg-white text-black hover:bg-[#F8F8FF] group  
                        transition'>Get My CV <HiDownload className='text-lg mx-2 opacity-80 group-hover:translate-y-[2px] transition' />
                        </Link>

                    </motion.div>
                    {/* Social Links */}
                    <motion.div className='social-container'
                        initial={{ opacity: 0, y: 100 }}
                        animate={{
                            opacity: 1, y: 0, transition: {
                                duration: 0.95
                            }
                        }}
                    >
                        <Link href={LINKEDIN_MANU} target='_blank' className='social-links group:'>
                            <BsLinkedin className='text-xl ' />
                        </Link>
                        <Link href={INSTAGRAM_MANU} target='_blank' className='social-links'>
                            <BsInstagram className='text-xl' />
                        </Link>
                        <Link href={GITHUB_MANU} target='_blank' className='social-links'>
                            <BsGithub className='text-xl' />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Introduction;