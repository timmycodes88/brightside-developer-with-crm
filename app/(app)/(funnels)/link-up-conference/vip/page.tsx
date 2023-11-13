"use client"

import useUserEmail from "@/hooks/useUserEmail"
import { useEffect } from "react"

const pageId = "link-up-conference-1"
export default function Page() {
  const { checkForEmail, userEmail } = useUserEmail()

  useEffect(() => {
    checkForEmail()
    const activeCampaign = async () => {
      const formData = new FormData()
      formData.append("u", "4")
      formData.append("f", "4")
      formData.append("s", "")
      formData.append("c", "0")
      formData.append("m", "0")
      formData.append("act", "sub")
      formData.append("v", "2")
      formData.append("or", "fd2824f6d6ecf82b928d9dbc057d4164")
      formData.append("email", userEmail)

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
    }
    if (userEmail) activeCampaign()
  }, [userEmail])
  return <div>Welcome to VIP</div>
}
