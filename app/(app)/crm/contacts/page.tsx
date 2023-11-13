"use client"

import supabase from "@/lib/supabase"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function Contacts() {
  const [users, setUsers] = useState<any>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      const { data, error } = await supabase.from("Subscriber").select("*")
      if (error) toast.error(error.message)
      setUsers(data)
      setLoading(false)
    }
    getUsers()
  }, [])

  return (
    <div>
      {loading && <div>Loading...</div>}
      {users &&
        users.map((user: any) => (
          <div key={user.email} className="mb-10">
            {JSON.stringify(user)}
          </div>
        ))}
    </div>
  )
}
