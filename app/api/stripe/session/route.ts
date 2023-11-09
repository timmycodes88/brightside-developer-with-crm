import { error } from "console"
import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    if (!id.startsWith("cs_")) throw error("Invalid session id")

    const session = await stripe.checkout.sessions.retrieve(id)

    return NextResponse.json(session)
  } catch (error) {
    console.log("[STRIPE_GET_ERROR]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
