"use client";
import React from 'react';
import ContactMeHeading from "@/components/heading";
import Link from 'next/link';
import ContactForm from './elements/ContactForm';
import useIsSectionInView from '@/lib/hooks/useIsSectionInView';

type Props = {}

const ContactMeSection = (props: Props) => {
    const { ref } = useIsSectionInView({ sectionName: "Contact", threshold : 0.5 });
    return (
        <section ref={ref} className='scroll-mt-28 w-full md:max-w-3xl flex flex-col justify-center items-center' id='contact'>
            <ContactMeHeading classNames='text-[1.25em] md:text-3xl font-medium capitalize my-12 md:mt-28 text-center'>Let&apos;s Connect</ContactMeHeading>

            <p className="text-center text-sm md:text-[1rem]">
                Direct contact{" "}
                <Link href="mailto:your.email@example.com" className="text-blue-500 underline underline-offset-2">via email</Link>{" "}
                or form submission, both work to reach me.
            </p>
            <ContactForm />
        </section>
    )
}

export default ContactMeSection;