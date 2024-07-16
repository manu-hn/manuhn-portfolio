'use client';
import { navLinks } from '@/constants/data';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { changeActiveSection, updateLastTimeClicked } from '@/store/slice/themeSlice';

type Props = {
}

const NavBar = (props: Props) => {
    const dispatch = useAppDispatch();
    const { activeSection, } = useAppSelector((store) => store?.theme);

    return (
        <nav className='w-full h-full'>
            <ul className='w-full h-full flex flex-wrap justify-evenly items-center '>
                {
                    navLinks.map((link, index) => (
                        <motion.li
                            key={link.id}
                            className={clsx(`hover:text-gray-950 dark:text-gray-600 dark:hover:text-gray-300  
                                hover:font-semibold transition text-xs xxs:text-sm sm:text-sm lg:text-lg relative`,
                                {
                                    "text-gray-950 dark:text-white  px-4 rounded-lg": activeSection === link.name,

                                }
                            )}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{
                                y: 0, opacity: 1, transition: {
                                    duration: 0.75
                                }
                            }}
                            onClick={() => {
                                dispatch(changeActiveSection(link.name));
                                dispatch(updateLastTimeClicked(Date.now()));
                            }}
                        >
                            <Link href={link.id}>{link.name}
                                {
                                    link.name === activeSection && (
                                        <motion.span className='bg-gray-200 dark:bg-gray-700 rounded-full absolute inset-0 -z-10'
                                            layoutId={`activeSection`}
                                            transition={{
                                                type: "spring",
                                                stiffness: "300",
                                                damping: "20"
                                            }}
                                        ></motion.span>
                                    )
                                }
                            </Link>
                        </motion.li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavBar;