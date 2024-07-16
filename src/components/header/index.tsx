'use client';
import React from 'react';
import { motion } from "framer-motion";
import NavBar from './elements/NavBar';

type Props = {}

const HeaderComponent = (props: Props) => {

    return (
        <header className='z-[999] relative flex justify-center w-full items-center dark:text-gray-800'>

            <motion.div className='bg-white fixed top-5  h-[3rem]   sm:flex justify-center items-center  rounded-full
            w-[92%] border border-white border-opacity-40 bg-opacity-80 
             shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 
             sm:h-[3.25rem]  sm:w-3/4 md:3/6  sm:rounded-full  dark:bg-gray-900 dark:border-black/40 dark:bg-opacity-70'
                initial={{ y: -150, opacity: 0 }}
                animate={{
                    y: 0, opacity: 1, transition: {
                        duration: 0.5
                    }
                }}
            >
                <NavBar />
            </motion.div>

        </header>
    )
}

export default HeaderComponent;