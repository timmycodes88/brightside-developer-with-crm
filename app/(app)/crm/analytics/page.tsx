"use client"

import supabase from "@/lib/supabase"
import { Loader2 } from "lucide-react"
import { Fragment, useEffect, useState } from "react"
import { PageAnalytics } from "./types"

export default function Analytics() {
  const [data, setData] = useState<any>()

  useEffect(() => {
    supabase
      .from("Page")
      .select()
      .then(({ data, error }) => {
        if (error) console.log(error)
        else setData(data)
      })
  }, [])

  if (!data)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    )

  return (
    <>
      {data.map(
        ({
          id,
          views,
          subscriptions,
          add_to_carts,
          purchases,
        }: PageAnalytics) => (
          <Fragment key={id}>
            <h3 className="text-2xl mb-4">{id}</h3>
            <div className="grid grid-cols-4">
              <div className="font-bold">Views</div>
              <div className="font-bold">Subscriptions</div>
              <div className="font-bold">Add To Carts</div>
              <div className="font-bold">Purchases</div>
              <div>{views}</div>
              <div>{subscriptions}</div>
              <div>{add_to_carts}</div>
              <div>{purchases}</div>
            </div>
          </Fragment>
        )
      )}
    </>
  )
}
