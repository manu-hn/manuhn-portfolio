'use client';
import Image from 'next/image';
import React from 'react';
import ManuHNImage from "@/assets/images/ManuHN - Copy.jpg";
import { motion } from "framer-motion";

type Props = {}

const Introduction = (props: Props) => {
    return (
        <section className='w-full'>
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
                        animate={{ opacity: 1, scale: 1, transition: {
                            duration: 0.75,
                            type: "spring",
                            stiffness : 125,
                            delay : 0.1,
                            

                        } }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
        </section>
    )
}

export default Introduction;