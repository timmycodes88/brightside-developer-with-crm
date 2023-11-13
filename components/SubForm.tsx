"use client"

import { useState } from "react"

import toast from "react-hot-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { cn, isEmail } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { sendEmails } from "@/lib/actions/resend.action"
import supabase from "@/lib/supabase"
import { Templates } from "@/constants/emails"
import useUserEmail from "@/hooks/useUserEmail"

export default function SubForm({ page, pageId, lightMode, white }: any) {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const router = useRouter()

  const { setUserEmail } = useUserEmail()

  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    if (!firstName) return toast.error("Please enter your first name")
    if (!email) return toast.error("Please enter your email")
    if (!isEmail(email)) return toast.error("Please enter a valid email")

    setLoading(true)

    try {
      // await sendEmails([email], { firstName }, Templates.Onboard)
      // const { data, error } = await supabase
      //   .from("Subscriber")
      //   .select("*")
      //   .eq("email", email)

      // if (data?.length) {
      //   const user = data[0]
      //   const tags = user.tags.includes(
      //     "link-up-conference-1 - 2023 Registerant"
      //   )
      //     ? user.tags
      //     : [...user.tags, "link-up-conference-1 - 2023 Registerant"]

      //   const page_id = user.page_id.includes(pageId)
      //     ? user.page_id
      //     : [...user.page_id, pageId]
      //   const { data: d2, error } = await supabase
      //     .from("Subscriber")
      //     .update({
      //       first_name: firstName,
      //       last_name: lastName,
      //       tags: tags,
      //       page_id,
      //     })
      //     .eq("email", email)
      // } else {
      //   const { data, error } = await supabase.from("Subscriber").insert([
      //     {
      //       email,
      //       first_name: firstName,
      //       last_name: lastName,
      //       page_id: [pageId],
      //       tags: ["link-up-conference-1 - 2023 Registerant"],
      //     },
      //   ])
      //   {
      //     const { data, error } = await supabase
      //       .from("Page")
      //       .update({ subscriptions: page.subscriptions + 1 })
      //       .eq("id", pageId)
      //   }
      // }
      const formData = new FormData()
      formData.append("u", "3")
      formData.append("f", "3")
      formData.append("s", "")
      formData.append("c", "0")
      formData.append("m", "0")
      formData.append("act", "sub")
      formData.append("v", "2")
      formData.append("or", "ee32e7969943fce27eac14e001cc3436")
      formData.append("firstname", firstName)
      formData.append("lastname", lastName)
      formData.append("email", email)

      const response = await fetch(
        "https://timvanlerberg24746.activehosted.com/proc.php?jsonp=true",
        {
          headers: {
            Accept: "application/json",
          },
          body: formData,
          method: "POST",
        }
      )
      setUserEmail(email)
      toast.success("Thank you for signing up!")
      router.push("/link-up-conference/success")
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong, please try again later")
      setLoading(false)
    } finally {
    }
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1">
        <label className={lightMode ? "text-white" : ""} htmlFor="fullname">
          First Name
        </label>
        <Input
          type="text"
          name="firstname"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder="First Name"
          className={lightMode ? "bg-white text-gray-900" : ""}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className={lightMode ? "text-white" : ""} htmlFor="fullname">
          Last Name
        </label>
        <Input
          type="text"
          name="lastname"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder="Last Name"
          className={lightMode ? "bg-white text-gray-900" : ""}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className={lightMode ? "text-white" : ""} htmlFor="email">
          Email
        </label>
        <Input
          type="text"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          className={lightMode ? "bg-white text-gray-900" : ""}
          required
        />
      </div>

      <Button
        disabled={loading}
        onClick={onSubmit}
        className={cn(
          "font-bold shadow-md text-xl py-10 px-8",
          white &&
            "bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-200"
        )}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 mx-auto animate-spin" />
        ) : (
          "Get Your FREE Ticket NOW!"
        )}
      </Button>
    </div>
  )
}
