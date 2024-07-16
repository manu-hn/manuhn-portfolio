"use server";
import { formSchema } from "@/constants/actions";
import { z } from "zod";
import { Resend } from "resend";
import EmailComponent from "@/components/email/Email";

const resend = new Resend(process?.env?.RESEND_API_KEY);

export async function sendEmail({ message, userEmail }: z.infer<typeof formSchema>) {
    try {

        const { data, error } = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "connectwith.manu05@gmail.com", // send to the user's email
            subject: `Message From ${userEmail}`,
            reply_to: userEmail,
            // text: message,
            react: <EmailComponent senderEmail={ userEmail } message = { message } />,
        });

    if (error) {
        return {
            statusCode: 404,
            message: "Something went wrong, please try again later",
        };
    }
    if (data) {
        return {
            statusCode: 200,
            message: "Message Sent Successfully !",
        };
    }

} catch (error) {
    console.error("Error sending email:", error);
}
}
