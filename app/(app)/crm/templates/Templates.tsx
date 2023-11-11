"use client"

import { useMemo, useState } from "react"
import { ComboBox } from "./ComboBox"
import Onboard, { OnboardSample } from "@/emails/Onboard"

export const emails = [
  {
    value: "onboarding",
    label: "Onboarding",
    component: OnboardSample,
    subject: "Welcome to my app!",
    previewText: "Isn't this great?",
    email: Onboard,
  },
]

export default function Templates() {
  const [template, setTemplate] = useState<any>("")

  const Email = useMemo(
    () => emails.find(({ value }) => value === template),
    [template]
  )

  return (
    <div>
      <ComboBox template={template} setTemplate={setTemplate} />
      <div className="border-b h-6" />
      {Email && (
        <div className="max-w-[650px] p-4 mx-auto mt-6 ">
          <p>
            <span className="font-bold">Subject: </span>
            {Email.subject}
          </p>
          <p>
            <span className="font-bold">Preview Text: </span>
            {Email.previewText}
          </p>
          <div className="bg-white border p-4 text-black">
            <Email.component />
          </div>
        </div>
      )}
    </div>
  )
}
