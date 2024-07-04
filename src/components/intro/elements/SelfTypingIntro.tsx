import React from 'react';
import { TypeAnimation } from 'react-type-animation';

type Props = {}

const SelfTypingIntro = (props: Props) => {
    return (
        <>
            <TypeAnimation className='text-transparent bg-clip-text bg-gradient-to-l text-3xl from-blue-700 to-red-600 italic font-bold'
                sequence={[
                    'MERN Stack Developer', 1000,

                    'Frontend Developer', 2000,

                    'React Developer', 3000,

                    'Next.js Developer', 4000,

                    'Node.js Developer', 5000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', fontStyle : "italic", fontWeight : "bold", display: 'inline-block' }}
            />
        </>
    )
}

export default SelfTypingIntro