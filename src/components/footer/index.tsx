import React from 'react'

type Props = {}

const FooterSection = (props: Props) => {
    return (
        <footer className='my-10 px-4 text-center w-full text-gray-500 border-t-2 border-black/[0.05] dark:border-white/25'>
            <small className='my-4 block'>
                © {new Date().getFullYear()} Manu H N. All rights reserved.
            </small>

            <p className='text-sm md:text-center'>
                Built with a focus on performance, scalability, and clean design.
            </p>
        </footer>
    )
}

export default FooterSection;