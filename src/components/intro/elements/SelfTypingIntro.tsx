import { useAppSelector } from '@/store/hooks';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

type Props = {}

const SelfTypingIntro = (props: Props) => {

    
    return (
        <>
            <TypeAnimation 
            className='text-transparent bg-clip-text bg-gradient-to-l text-xs md:text-3xl from-blue-700 to-red-600 italic font-bold dark:from-[#F5F5F5] dark:to-[#DDDDDD]'
                sequence={[
                    'MERN Stack Developer', 1000,

                    'Frontend Developer', 1000,

                    'React Developer', 1000,

                    'Next.js Developer', 1000,

                    'Node.js Developer', 1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', fontStyle: "italic", fontWeight: "bold", display: 'inline-block' }}
            />
        </>
    )
}

export default SelfTypingIntro