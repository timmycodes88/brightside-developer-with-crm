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
      <Preview>
        Unlock the Power of the Metaverse with LinkUP - Join Us for an Exclusive
        Event!
      </Preview>
      <Tailwind>
        <Img src="https://i.ibb.co/X3n0Xmj/logo.png" alt="" />
        <p className="text-2xl">Hello {firstName}, </p>
        <p className="text-lg">
          Are you ready to embark on a journey that will redefine success and
          abundance in both business and life? Your decision to sign up for our
          upcoming conference is your ticket to discovering the limitless
          possibilities of the metaverse, and we can't wait to share the
          exciting details with you.
        </p>
        <ul>
          <li>
            <span className="font-bold">
              🌐 LinkUP - The Bridge into the Metaverse
            </span>
            <br />
            In this exclusive presentation, we will delve into the revolutionary
            concepts of the metaverse, NFTs, and the groundbreaking LinkUP app.
            Here's a sneak peek at what awaits you:
          </li>
          <li>
            <span className="font-bold">
              ✨ Empowering Your Path to Success:
            </span>
            <br />
            Uncover the secrets to creating unprecedented success and abundance
            in both your business and personal life within the metaverse.
          </li>

          <li>
            <span className="font-bold">
              🚀 The Power of NFTs - Utility and Community:
            </span>
            <br />
            Explore how NFTs transcend traditional boundaries, unlocking
            unparalleled utility and fostering thriving communities within the
            metaverse.
          </li>
          <li>
            <span className="font-bold">
              📱 LinkUP App - Your Gateway to a Connected Metaverse:
            </span>
            <br />
            Immerse yourself in the future of social media, messaging, and
            community building. Discover how LinkUP seamlessly integrates with
            the metaverse, providing a unique NFT marketplace and minting
            platform for real-world and virtual connections.
          </li>
        </ul>

        <h4>Event Details: </h4>
        <ul>
          <li>Date: [Event Date]</li>
          <li>Time: [Event Time]</li>
          <li>Location: [Zoom Link]</li>
          <li>Spaces are limited, so be sure to reserve your spot now!</li>
        </ul>
        <button className="bg-blue-600 mx-auto w-fit text-white text-xl font-bold rounded-2xl px-6 py-2">
          Join Call
        </button>
        <p className="text-center">⬆️ Join 15 minutes early! ⬆️</p>
        <p>
          Join us for an unforgettable experience that could transform the way
          you perceive and navigate the metaverse. Your journey into this new
          frontier begins with LinkUP.
          <br />
          <br />
          Thank you for your enthusiasm and anticipation. We look forward to
          connecting with you soon!
          <br />
          <br />
          Best Regards,
          <br />
          <br />
          Tim Van Lerberg <br /> LinkUP by BrightSide Developer
        </p>
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
