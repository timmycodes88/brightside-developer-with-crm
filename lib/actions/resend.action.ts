"use server"

import Onboard from "@/emails/Onboard"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function sendEmails(emails: string[], props: any) {
  try {
    await resend.emails.send({
      from: "Tim <tim@brightsidedeveloper.com>",
      to: emails,
      subject: `Congratulations, ${props.firstName} you received your event ticket!`,
      react: Onboard(props),
    })

    return { success: true }
  } catch (e: any) {
    console.log("Send Email Error", e)
    return { error: e.message }
  }
}
