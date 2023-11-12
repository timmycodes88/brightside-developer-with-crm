"use client"

import Image from "next/image"
import LinkParticles from "@/components/LinkParticles"
import SubForm from "@/components/SubForm"
import DialogForm from "@/components/DialogForm"
import ViewPage from "@/components/ViewPage"
import { useEffect, useState } from "react"
import supabase from "@/lib/supabase"
import Link from "next/link"

const partners = [
  {
    name: "IAmVerse",
    img: "data:image/png;base64,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",
  },
  {
    name: "IAmVerse",
    img: "data:image/png;base64,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",
  },
  {
    name: "IAmVerse",
    img: "data:image/png;base64,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",
  },
]

const pageId = "linkup-conference-1"
export default function Page() {
  const [page, setPage] = useState(null)

  useEffect(() => {
    supabase
      .from("Page")
      .select("*")
      .eq("id", pageId)
      .single()
      .then(({ data, error }) => {
        if (!data) console.log("Page not found", error)
        setPage(data)
      })
  }, [])

  return (
    <div className="h-screen w-screen bg-gray-100 overflow-y-auto">
      {page && <ViewPage pageId={pageId} page={page} />}
      <nav className="p-4 sticky z-10 top-0 shadow-md bg-white/20 backdrop-blur flex items-center justify-between">
        <div className="flex gap-5 items-center">
          <Link href="/">
            <div className="relative w-12 h-8 sm:w-[4.5rem] sm:h-10">
              <Image fill alt="Logo" src="/logo.png" />
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-red-500">
            BrightSide Developer
          </h1>
        </div>
        <div className="flex items-center gap-x-4">
          <DialogForm
            page={page}
            pageId={pageId}
            type="outline"
            buttonText="Get Started"
          />
        </div>
      </nav>
      <h2 className="mt-16 text-4xl md:text-6xl font-bold text-gray-900 max-w-4xl mx-auto text-center uppercase">
        Be the first to enter the <span className="underline">Metaverse</span>
      </h2>
      <h2 className="mb-16 text-4xl md:text-6xl font-bold text-red-600 max-w-4xl mx-auto text-center uppercase">
        and make bank doing it
      </h2>
      <div className="flex flex-col items-center md:flex-row gap-10 max-w-7xl mx-auto md:justify-around mb-10">
        <div className="w-[90%] md:w-[40%] relative border-[10px] aspect-square border-white shadow-lg">
          <Image src={"/nft.png"} fill alt="NFT" className="" />
        </div>
        <div className="flex flex-col gap-4 w-[90%] md:w-[40%] p-4 bg-white shadow-lg">
          <p className="text-red-600 font-bold text-lg">
            Have you ever heard of NFTs or the Metaverse or have you ever wanted
            to create your own community, expand your business, or make a living
            doing what you love?
          </p>
          <p className="text-gray-900 text-lg font-bold">
            Or even if you don&apos;t know anything about it, but want to become
            educated in the future of technology...
          </p>
          <p className="text-gray-900 text-lg">
            If you answered, yes, to any of these questions, this conference is
            for you. We are delving deep into the technology that is already
            here and rolling out in the coming years! And you can be one of the
            first to leverage this knowledge and create an abundance in the
            Metaverse. All you have to do is click here for your free ticket and
            join us [date] to get in on this life-changing opportunity.
          </p>
          {page && (
            <DialogForm
              pageId={pageId}
              buttonText="Register your FREE space NOW!"
              page={page}
              large
            />
          )}
        </div>
      </div>
      <div className="bg-red-500 mb-10 p-10 text-white font-bold">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl mb-10 text-center ">
            What you will learn in this conference:
          </h3>
          <div className="w-fit mx-auto">
            <ul className="list-disc text-2xl max-w-5xl flex flex-col gap-4">
              <li>
                ✨ How to leverage NFTs to create abundance, and develop a
                community around your passion
              </li>
              <li>
                🚀 How to bring your community, business and passion into the
                Metaverse to expand your business and the potential of your life
              </li>
              <li>
                📱 How you can take action right now, to invest in the future of
                technology, and be the first to make a killing in the digital
                era
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row gap-10 max-w-7xl mx-auto md:justify-around mb-10">
        <div className="flex flex-col gap-4 w-[90%] md:w-[40%] p-4 bg-white shadow-lg text-gray-900 text-lg">
          <h4 className="font-bold text-2xl">About your speaker:</h4>
          <p className="">
            I am Tim Van Lerberg, the founder and CEO of Brightside developer. A
            rising tech company aimed to bring positivity, community and wealth
            to the world. Through innovative technology!
          </p>
          <p>
            I got into technology already at the age of 14 and I have been
            passionate since! Some would even call me a prodigy. I have been
            working with some of the biggest companies.
          </p>
        </div>
        <div className="w-[90%] md:w-[40%] relative border-[10px] aspect-square border-white shadow-lg">
          <Image src={"/me.JPG"} fill alt="Me" className="" />
        </div>
      </div>
      <div className="bg-red-500 mb-10 p-10 text-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl text-white text-center uppercase font-bold mb-10 underline">
            Get your ticket NOW completely FREE
          </h3>
          <div className="max-w-lg mx-auto">
            {page && <SubForm pageId={pageId} page={page} lightMode white />}
          </div>
        </div>
      </div>
      <p className="text-gray-500 mb-4 text-center">
        © 2023 All rights reserved. BrightSideDeveloper.com
      </p>
      <LinkParticles />
    </div>
  )
}
