"use client"
import Image from "next/image"
import TypewriterComponent from "typewriter-effect"
import LinkParticles from "@/components/LinkParticles"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "@/components/ui/mode-toggle"
// import ViewPage from "@/components/ViewPage"

const partners = [
  {
    name: "IAmVerse",
    img: "data:image/png;base64,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",
  },
  {
    name: "IAmVerse2",
    img: "data:image/png;base64,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",
  },
  {
    name: "IAmVerse3",
    img: "data:image/png;base64,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",
  },
]
export default function Landing() {
  return (
    <>
      {/* <ViewPage pageId="Landing" /> */}
      <nav className="p-4 sticky top-0 shadow-md bg-secondary/20 backdrop-blur flex items-center justify-between">
        <div className="flex gap-5 items-center">
          <div className="relative w-12 h-8 sm:w-[4.5rem] sm:h-10">
            <Image fill alt="Logo" src="/assets/logo.png" />
          </div>
          <h1 className="text-2xl font-bold">BrightSide Developer</h1>
        </div>
        <div className="flex items-center gap-x-4">
          <ModeToggle />
          <Link href="/link-up-conference">
            <Button variant="outline" className="rounded-full">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>
      <div className="font-bold py-24 text-center space-y-5">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
          <h1>
            Enter <span className="underline">LinkUP</span>
          </h1>
          <div className="text-transparent min-h-[95px] bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <TypewriterComponent
              options={{
                strings: [
                  "Enter the Metaverse",
                  "Launch Your Own NFTs",
                  "Give Your NFT Utility",
                  "Build Powerful Community",
                  "Ultimate Social Network",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="text-sm md:text-xl font-light text-muted-foreground">
          Join us for The Big Reveal - Opportunity to be the first to Enter the
          Metaverse!
        </div>
        <div>
          <Link href="/link-up-conference">
            <Button className="rounded-full">
              Register Your FREE Space Now
            </Button>
          </Link>
        </div>
        <div className="text-muted-foreground text-xs md:text-sm font-normal">
          Limited Seats.
        </div>
      </div>
      <div className="px-10 pb-20">
        <h2 className="text-center text-4xl font-extrabold mb-10">
          Our Partners
        </h2>
        <div className="flex items-center justify-center md:justify-around flex-wrap gap-4 ">
          {partners.map(({ name, img }) => (
            <div
              key={name}
              className="bg-secondary/50 border-none w-fit rounded-lg"
            >
              <p className="text-lg text-center py-2">{name}</p>
              <Image src={img} alt="Partner Image" width={250} height={250} />
            </div>
          ))}
        </div>
      </div>
      <div className="px-10 pb-20">
        <div className="flex items-center justify-center flex-wrap gap-28">
          <Image
            src="/assets/metaimg.jpeg"
            alt="Metaverse Image"
            width={500}
            height={333}
            className="rounded-lg shadow-md"
          />
          <div className="flex flex-col gap-8 bg-secondary/50 shadow-md h-[333px] w-[500px] p-4 rounded-lg">
            <h3 className="text-5xl">Our Mission</h3>
            <ul className="list-disc ml-5 text-lg">
              <li className="pb-3">
                Make Hosting and Launching your own NFTs EASY
              </li>
              <li className="pb-3">
                Create and Manage your Community All in ONE Place
              </li>
              <li className="pb-3">Offer your community Utility and Service</li>
              <li className="pb-3">
                Bridge the gap between Web 2 Social Media and The Technology of
                the Future
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LinkParticles />
    </>
  )
}
