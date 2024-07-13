import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    imageSrc: StaticImageData,
    alt: string,
    title: string,
    width: number,
    height: number,
}

const SkillsAndTools = ({ imageSrc, alt, title, height, width }: Props) => {
    return (
        <div className=' w-full flex flex-col items-center justify-between'>
            <Image alt={alt} src={imageSrc} width={width} height={height} className='h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20'/>
            <p className='text-center text-xs'>{title}</p>
        </div>
    )
}

export default SkillsAndTools;