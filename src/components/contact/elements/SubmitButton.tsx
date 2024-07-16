"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';


type Props = {}

const SubmitButton = (props: Props) => {
    const { pending } = useFormStatus()
    
    return (
        <Button type="submit"
            className='group hover:scale-105 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:opacity-65 dark:hover:bg-white/75'
            disabled={pending}>
            {pending ?
                (<>
                    <div className='flex gap-2'>
                        <span className='block animate-spin h-6 w-6 border-b-2 border-white rounded-full'></span>
                        Sending
                    </div>
                </>)
                :
                (<>
                    Submit
                    <FaPaperPlane className='mx-2 group-hover:translate-x-1 group-hover:-translate-y-1 ' />
                </>)}
        </Button>
    )
}

export default SubmitButton