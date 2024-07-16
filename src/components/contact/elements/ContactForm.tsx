"use client";
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { formSchema } from '@/constants/actions';
import { motion } from "framer-motion";
import { sendEmail } from '@/actions/sendEmail.tsx';
import { useToast } from '@/components/ui/use-toast';
import SubmitButton from './SubmitButton';
import { enqueueSnackbar } from 'notistack'



const ContactForm = () => {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userEmail: "",
            message: "",
        },
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const returnData = await sendEmail(values);

            if (returnData?.statusCode === 404) {
                (() => {
                    enqueueSnackbar(returnData?.message, {
                        autoHideDuration: 3000, variant: "error", anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left'
                        }
                    })
                })();
            } else {
                (() => {
                    enqueueSnackbar(returnData?.message, {
                        autoHideDuration: 3000, variant: "success",anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'right'
                          }
                    })
                })();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <motion.div className='w-5/6 md:w-2/3 text-center overflow-hidden py-2' initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="userEmail"
                        render={({ field }) => (
                            <FormItem className='my-3'>
                                <FormControl>
                                    <Input type='email' placeholder="Enter Email" {...field} className='' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className='my-3'>
                                <FormControl>
                                    <Textarea placeholder="Enter Message..." {...field} rows={6} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <SubmitButton />
                </form>
            </Form>

        </motion.div>
    );
};

export default ContactForm;
