
import { BsArrowRight, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { HiDownload, } from 'react-icons/hi';
import { GITHUB_MANU, INSTAGRAM_MANU, LINKEDIN_MANU, RESUME_MANU } from '@/constants/sociallinks';
import { motion } from "framer-motion";
import Link from 'next/link';
import React from 'react'
import { useAppDispatch } from '@/store/hooks';
import { updateLastTimeClicked, changeActiveSection } from '@/store/slice/themeSlice';



const SocialLinks = () => {
    const dispatch = useAppDispatch();
    return (
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
                        onClick={() => {
                            dispatch(updateLastTimeClicked(Date.now()));
                            dispatch(changeActiveSection('Contact'));
                        }}
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
    )
}

export default SocialLinks;