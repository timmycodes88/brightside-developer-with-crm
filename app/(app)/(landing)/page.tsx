'use client'
import Image from 'next/image'
import TypewriterComponent from 'typewriter-effect'
import LinkParticles from '@/components/LinkParticles'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ModeToggle } from '@/components/ui/mode-toggle'
// import ViewPage from "@/components/ViewPage"

export default function Landing() {
  return (
    <>
      {/* <ViewPage pageId="Landing" /> */}
      <nav className='p-4 sticky top-0 shadow-md bg-secondary/20 backdrop-blur flex items-center justify-between'>
        <div className='flex gap-5 items-center'>
          <div className='relative w-12 h-8 sm:w-[4.5rem] sm:h-10'>
            <Image fill alt='Logo' src='/logo.png' />
          </div>
          <h1 className='text-2xl font-bold'>BrightSide Developer</h1>
        </div>
        <div className='flex items-center gap-x-4'>
          <ModeToggle />
          <Link href='/link-up-conference'>
            <Button variant='outline' className='rounded-full'>
              Get Started
            </Button>
          </Link>
        </div>
      </nav>
      <div className='font-bold py-24 text-center space-y-5'>
        <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
          <h1>
            Enter <span className='underline'>LinkUP</span>
          </h1>
          <div className='text-transparent min-h-[95px] bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            <TypewriterComponent
              options={{
                strings: [
                  'Enter the Metaverse',
                  'Launch Your Own NFTs',
                  'Give Your NFT Utility',
                  'Build Powerful Community',
                  'Ultimate Social Network',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className='text-sm md:text-xl font-light text-muted-foreground'>
          Join us for The Big Reveal - Opportunity to be the first to Enter the
          Metaverse!
        </div>
        <div>
          <Link href='/link-up-conference'>
            <Button className='rounded-full'>
              Register Your FREE Space Now
            </Button>
          </Link>
        </div>
        <div className='text-muted-foreground text-xs md:text-sm font-normal'>
          Limited Seats.
        </div>
      </div>
      <div className='px-10 pb-20'>
        <h2 className='text-center text-4xl font-extrabold mb-10'>
          Our Partners
        </h2>
        <div className='flex items-center justify-center md:justify-around flex-wrap gap-4 '></div>
      </div>
      <div className='px-10 pb-20'>
        <div className='flex items-center justify-center flex-wrap gap-28'>
          <Image
            src='/assets/metaimg.jpeg'
            alt='Metaverse Image'
            width={500}
            height={333}
            className='rounded-lg shadow-md'
          />
          <div className='flex flex-col gap-8 bg-secondary/50 shadow-md h-[333px] w-[500px] p-4 rounded-lg'>
            <h3 className='text-5xl'>Our Mission</h3>
            <ul className='list-disc ml-5 text-lg'>
              <li className='pb-3'>
                Make Hosting and Launching your own NFTs EASY
              </li>
              <li className='pb-3'>
                Create and Manage your Community All in ONE Place
              </li>
              <li className='pb-3'>Offer your community Utility and Service</li>
              <li className='pb-3'>
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
