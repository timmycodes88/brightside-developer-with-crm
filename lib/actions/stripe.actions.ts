import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST!)

export async function startCheckout(items: any) {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: items ?? [],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/link-up-conference/vip`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/link-up-conference/success`,
    })
    return session.id
  } catch (error) {
    console.log("[STRIPE_CHECKOUT_ERROR]", error)
  }
}
