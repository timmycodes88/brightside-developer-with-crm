"use client"

import Image from "next/image"
import LinkParticles from "@/components/LinkParticles"
import SubForm from "@/components/SubForm"
import DialogForm from "@/components/DialogForm"
import ViewPage from "@/components/ViewPage"
import { useEffect, useState } from "react"
import supabase from "@/lib/supabase"
import Link from "next/link"

import { Roboto_Mono } from "next/font/google"
import { cn } from "@/lib/utils"

const font1 = Roboto_Mono({ subsets: ["latin"], weight: ["400", "700"] })

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
      <h2
        className={cn(
          "mt-16 text-4xl md:text-6xl font-bold text-gray-900 max-w-4xl mx-auto text-center uppercase"
        )}
      >
        Be the first to enter the <span className="underline">Metaverse</span>
      </h2>
      <h2
        className={cn(
          "mb-16 text-4xl md:text-6xl font-bold text-red-600 max-w-4xl mx-auto text-center uppercase"
        )}
      >
        and make bank doing it
      </h2>
      <div className="flex flex-col items-center md:flex-row gap-10 max-w-7xl mx-auto md:justify-around mb-10">
        <div className="w-[90%] md:w-[50%] aspect-[16/9] relative border-[10px]  border-white shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Y7pqLD8fibY?si=iu-8ryda2r0L-GDn"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
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
      <div className={cn(font1.className, "bg-red-500 mb-10 p-16 text-white")}>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl mb-10 text-center font-bold">
            What you will learn in this conference:
          </h3>
          <div className="w-fit mx-auto">
            <ul className="list-disc text-2xl max-w-5xl flex flex-col gap-8">
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
