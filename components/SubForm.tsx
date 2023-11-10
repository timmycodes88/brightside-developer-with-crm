"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import toast from "react-hot-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { isEmail } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { sendEmails } from "@/lib/actions/resend.action"
import supabase from "@/lib/supabase"

export default function SubForm({
  buttonText = "Join Now",
  type = "default",
  page,
  pageId,
}: any) {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    if (!firstName) return toast.error("Please enter your first name")
    if (!email) return toast.error("Please enter your email")
    if (!isEmail(email)) return toast.error("Please enter a valid email")

    setLoading(true)

    try {
      await sendEmails([email], { firstName })
      const { data, error } = await supabase
        .from("Page")
        .update({ subscriptions: page.subscriptions + 1 })
        .eq("id", pageId)
      toast.success("Thank you for signing up!")
      router.push("/link-up-conference/success")
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong, please try again later")
    } finally {
      setTimeout(() => setLoading(false), 2000)
    }
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={type}
            className="rounded-md mx-auto shadow-md bg-red-500 hover:text-white text-white w-fit px-8 py-4 hover:bg-red-600"
          >
            {buttonText}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter the Metaverse - Online Event Ticket</DialogTitle>
            <DialogDescription>
              This is a once in a life time opportunity to accelerate your
              business into the technologies of the future!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-1">
                <label htmlFor="fullname">First Name</label>
                <Input
                  type="text"
                  name="firstname"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="fullname">Last Name</label>
                <Input
                  type="text"
                  name="lastname"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>

              <Button disabled={loading} onClick={onSubmit}>
                {loading ? (
                  <Loader2 className="w-4 h-4 mx-auto animate-spin" />
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
