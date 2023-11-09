import React from "react"
import { Img } from "@react-email/img"
import { Html } from "@react-email/html"
import { Head } from "@react-email/head"
import { Preview } from "@react-email/preview"
import { Tailwind } from "@react-email/tailwind"
import Image from "next/image"

export default function Onboard({ firstName }: any) {
  return (
    <Html>
      <Head></Head>
      <Preview>Why {firstName} should attend!!</Preview>
      <Tailwind>
        <Img src="https://i.ibb.co/X3n0Xmj/logo.png" alt="" />
        <p className="text-2xl">Hello {firstName}, so happy this worked!</p>
        <p className="text-lg">Woohoo</p>
      </Tailwind>
    </Html>
  )
}

export function OnboardSample({ firstName = "FIRSTNAME" }: any) {
  return (
    <div className="max-w-[500px] mt-10 mx-auto">
      <Image
        src="https://i.ibb.co/X3n0Xmj/logo.png"
        alt=""
        width={500}
        height={150}
      />
      <p className="text-2xl">Hello {firstName}, so happy this worked!</p>
      <p className="text-lg">Woohoo</p>
    </div>
  )
}
