"use server"

import { Templates } from "@/constants/emails"
import Onboard from "@/emails/Onboard"
import Test from "@/emails/Test"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

const TEMPLATES = {
  [Templates.Onboard]: Onboard,
  [Templates.Test]: Test,
}

export async function sendEmails(
  emails: string[],
  props: any = {},
  template: Templates
) {
  try {
    await resend.emails.send({
      from: "Tim <tim@brightsidedeveloper.com>",
      to: emails,
      subject: `Congratulations, ${props.firstName} you received your event ticket!`,
      react: TEMPLATES[template](props),
    })

    return { success: true }
  } catch (e: any) {
    console.log("Send Email Error", e)
    return { error: e.message }
  }
}
