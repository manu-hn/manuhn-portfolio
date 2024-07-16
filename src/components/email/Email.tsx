import React from 'react';
import type { EMAIL_PROPS } from '@/types/types';
import { Tailwind } from '@react-email/tailwind';
import { Html,  Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";


const EmailComponent = ({ message, senderEmail }: EMAIL_PROPS) => {
    return (
        <Html>
            <Head />
            <Preview>Inbox Update: Message from Your Portfolio</Preview>
            <Tailwind>
                <Body className='bg-gray-200 border border-black/[0.2] text-black'>
                    <Container>
                        <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                            <Heading className='leading-tight'>Portfolio Contact Form: You&apos;ve Got a New Message!</Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>
                            Message Sent From: {senderEmail}
                            </Text>
                        </Section>
                    </Container>

                </Body>
            </Tailwind>
        </Html>
    )
}

export default EmailComponent;