"use client"

import { Input } from "@/components/ui/input"
import supabase from "@/lib/supabase"
import { Fragment, useEffect, useState } from "react"
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
  const [search, setSearch] = useState("")
  const filteredUsers = users?.filter((user: any) =>
    user.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      {loading && <div>Loading...</div>}
      <Input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
        className="mb-10"
      />
      <div className="grid grid-cols-6 gap-4">
        <div className="font-bold">#</div>
        <div className="font-bold">Name</div>
        <div className="font-bold">Email</div>
        <div className="font-bold">VIP?</div>
        <div className="font-bold">Tags</div>
        <div className="font-bold">Page IDs</div>
        {users &&
          filteredUsers.map((user: any, index: number) => (
            <Fragment key={user.email}>
              <div>{index + 1}</div>
              <div>{user.first_name + " " + user.last_name}</div>
              <div>{user.email}</div>
              <div>{user.is_vip ? "Yes" : "No"}</div>
              <div>View Tags</div>
              <div>View Pages</div>
            </Fragment>
          ))}
      </div>
    </div>
  )
}
