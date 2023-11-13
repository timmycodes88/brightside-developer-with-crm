"use client"
import { Button } from "@/components/ui/button"
import PRODUCTS from "@/constants/products"
import { getStripe } from "@/lib/getStripe"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import toast from "react-hot-toast"

const pageId = "link-up-conference-1"
export default function Page() {
  const [loading, setLoading] = useState(false)

  const goVIP = async () => {
    try {
      setLoading(true)
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
      setLoading(false)
    } finally {
    }
  }

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Thank You!</h1>

      {/* Steps Section */}
      <div className="max-w-md p-6 bg-white shadow-lg rounded-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Next Steps:</h2>
        <ol className="list-decimal pl-5">
          <li className="mb-2">
            Step 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li className="mb-2">
            Step 2: Duis aute irure dolor in reprehenderit in voluptate velit.
          </li>
          <li>Step 3: Excepteur sint occaecat cupidatat non proident.</li>
        </ol>
      </div>

      {/* Upsell Section */}
      <div className="max-w-md p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold mb-4">Upgrade to VIP!</h2>
        <p className="mb-4">
          For only $47, you can upgrade to VIP. This is for those who really
          want to get the most out of the Metaverse and Web3 Technology!
        </p>
        <p className="mb-4">Benefits of VIP Upgrade:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Included Q/A Session</li>
          <li>Priority seating in future events</li>
          <li>Special discounts on upcoming products</li>
        </ul>
        <Button
          onClick={goVIP}
          disabled={loading}
          className="bg-red-500 text-white hover:bg-red-600"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 mx-auto animate-spin" />
          ) : (
            "Upgrade to VIP"
          )}
        </Button>
      </div>
    </div>
  )
}
