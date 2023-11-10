"use client"

import { PageAnalytics } from "@/app/(app)/crm/analytics/types"
import supabase from "@/lib/supabase"
import { useCallback, useEffect, useRef } from "react"

interface ViewPageProps {
  pageId: string
  page: PageAnalytics
}

export default function ViewPage({ pageId, page }: ViewPageProps) {
  const viewed = useRef(false)

  const view = useCallback(async () => {
    const { data, error } = await supabase
      .from("Page")
      .update({ views: page.views + 1 })
      .eq("id", pageId)
  }, [])

  useEffect(() => {
    if (!viewed.current) {
      viewed.current = true
      console.log("TEST", page)
      view()
    }
  }, [])
  return <></>
}
