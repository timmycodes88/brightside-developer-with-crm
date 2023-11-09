"use client"

import useUserStore from "@/hooks/useUserStore"
import supabase from "@/lib/supabase"
import { Loader2 } from "lucide-react"
import { use, useEffect, useState } from "react"

export default function layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const { setUser } = useUserStore()
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(session)
      if (session?.user) {
        supabase
          .from("Account")
          .select("*")
          .eq("id", session.user.id)
          .single()
          .then(({ data, error }) => {
            if (error) console.log(error)
            setUser(data)
            setLoading(false)
          })
      }
    })
    return () => subscription.unsubscribe()
  }, [])

  return loading ? (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loader2 className="w-20 h-20 animate-spin" />
    </div>
  ) : (
    children
  )
}
