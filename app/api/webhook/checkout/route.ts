import Stripe from "stripe"
import Cors from "micro-cors"
import { NextRequest, NextResponse } from "next/server"
import { headers } from "next/headers"
import { Resend } from "resend"
import Email1 from "@/emails/Email1"
import { vip } from "@/lib/actions/subscriptions.actions"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST!)

const cors = Cors({
  allowMethods: ["POST", "HEAD"],
})

const resend = new Resend(process.env.RESEND_API_KEY!)
export async function POST(req: NextRequest) {
  try {
    const body = await req.text()

    const signature = headers().get("stripe-signature")
    if (!signature) throw new Error("Stripe signature missing")

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    if (event.type === "checkout.session.completed") {
      console.log("Checkout session completed")

      // vip('link-up-conference-1', '')
      console.log(event, "event")

      // const data = await resend.emails.send({
      //   from: "Tim <tim@brightsidedeveloper.com>",
      //   to,
      //   subject: "Hello world",
      //   react: Email1(),
      // })
    } else {
      console.log("Unhandled event type", event.type)
    }

    return NextResponse.json({ result: event, ok: true })
  } catch (error) {
    console.log("[STRIPE_WEBHOOK_ERROR]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
