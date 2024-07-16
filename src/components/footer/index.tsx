import React from 'react'

type Props = {}

const FooterSection = (props: Props) => {
    return (
        <footer className='my-10 px-4 text-center w-full text-gray-500 border-t-2 border-black/[0.05] dark:border-white/25'>
            <small className='my-4 block dark:border-white/80'>
                &copy; 2024 Manu H N. All Rights Reserved.
            </small>
            <div>
                <p className='text-justify md:text-center text-sm dark:border-white/80'>
                    Designed and developed in Visual Studio Code using React & Next.js, TypeScript, Tailwind CSS, Notistack, Framer Motion,
                    and React Email & Resend. Deployed on Vercel, with all text set in the Inter typeface.
                </p>
            </div>
        </footer>
    )
}

export default FooterSection;