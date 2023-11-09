"use client"
import { Button } from "@/components/ui/button"
import PRODUCTS from "@/constants/products"
import { getStripe } from "@/lib/getStripe"
import toast from "react-hot-toast"

const pageId = "link-up-conference-1"
export default function page() {
  const goVIP = async () => {
    try {
      // Create Checkout Session
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        body: JSON.stringify({
          items: [{ price: PRODUCTS.RoadmapPDF, quantity: 1 }],
        }),
      })

      const { id } = await res.json()

      //Redirect to Checkout
      const stripe = await getStripe()
      if (!stripe) throw new Error("Stripe not found")
      stripe.redirectToCheckout({ sessionId: id })
    } catch (error: any) {
      console.log(error)
      toast.error(
        "Something went wrong, with the purchase. Please try again later"
      )
    }
  }

  return (
    <div>
      Thank You!
      <br />
      <Button onClick={goVIP}>Go VIP!</Button>
    </div>
  )
}
