import { navLinks } from '@/constants/data';
import Link from 'next/link';
import React from 'react';

import { motion } from "framer-motion";

type Props = {}

const NavBar = (props: Props) => {
    return (
        <nav className='w-full h-full'>
            <ul className='w-full h-full flex flex-wrap justify-evenly items-center'>
                {
                    navLinks.map((link) => (
                        <motion.li
                            key={link.id}
                            className='hover:text-gray-950  hover:font-semibold transition text-xs sm:text-lg xxs:text-sm'
                            initial={{ x: -1500, opacity: 0 }}
                            animate={{
                                x: 0, opacity: 1, transition: {
                                    duration: 0.75
                                }
                            }}
                        >
                            <Link href={link.id}>{link.name}</Link>
                        </motion.li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavBar;