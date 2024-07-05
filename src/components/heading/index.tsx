import React from 'react'

type Props = {
    children: React.ReactNode;
    classNames: string;

}

const HeadingSection = ({ children, classNames }: Props) => {
    return (
        <h2 className={`${classNames}`}>{children}</h2>
    )
}

export default HeadingSection;