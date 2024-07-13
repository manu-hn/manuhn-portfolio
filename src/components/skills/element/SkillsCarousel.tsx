import React from 'react';
import SkillsHeading from "@/components/heading";
import { SKILLS_TYPE } from '@/constants/skills';
import { motion } from "framer-motion";

type Props = {
    skillsAndTools: Array<SKILLS_TYPE>;
    headingText: string;
    delay: number
}

const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index : number)=>({ opacity: 1, y: 0 , transition : { delay : 0.05 * index}}),

}
const SkillsCarousel = ({ skillsAndTools, headingText, delay }: Props) => {
    return (
        <>
            <SkillsHeading classNames={`text-[1.05em] md:text-xl font-medium capitalize my-4 md:mt-8 text-left`}>
                {headingText}</SkillsHeading>
            {/* <Carousel opts={{
                align: "start", loop: true,
            }}
                plugins={[
                    Autoplay({ delay: delay, }),
                ]}
                className=' w-full '>
                <CarouselContent className='w-full '>
                    {
                        skillsAndTools.map((skill) => {
                            return (
                                <CarouselItem key={skill?.id} className='basis-[35%] xs:basis-[25%] sm:basis-[20%] md:basis-[20%] flex justify-center'>
                                    <SkillsAndTools alt='' height={skill?.height} title={skill?.skill} width={skill?.width}
                                        imageSrc={skill?.imageUrl}
                                    />
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
            </Carousel> */}
            <ul className='flex flex-wrap justify-center gap-2 text-xs md:text-lg text-gray-800'>
                {
                    skillsAndTools?.map((skill, index) => {
                        return <motion.li key={skill?.id}
                            className='bg-white border border-black/[0.1] rounded-xl px-5 py-3'
                            variants={fadeInAnimationVariants}
                            initial="initial" whileInView="animate" viewport={{ once: true }} custom={index}
                        >{skill?.skill}</motion.li>
                    })
                }
            </ul>
        </>
    )
}

export default SkillsCarousel;