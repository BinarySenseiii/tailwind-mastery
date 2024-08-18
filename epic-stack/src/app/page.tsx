import Image from 'next/image'
import React from 'react'
import { EpicStackLogo } from '~/logos/epic-stack'
import { logos } from '~/logos/logos'

export default function HomePage() {
  return (
    <div className="min-h-dvh grid place-content-center px-4 py-16">
      <div className="grid place-content-center gap-12 sm:gap-16">
        <div className="text-center flex flex-col items-center max-w-md mx-auto">
          <EpicStackLogo className="size-20" />
          <h1 className="mt-6 md:mt-8 text-4xl sm:text-4.5xl md:text-5xl font-medium">
            The <span className="text-highlight">Epic</span> Stack
          </h1>
          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-slate-600">
            Check the{' '}
            <a href="#" className="text-black underline" target="_blank">
              Getting Started
            </a>{' '}
            guide file for how to get your project off the ground!
          </p>
        </div>

        <ul className="flex max-w-2xl mx-auto flex-wrap justify-center gap-2 sm:gap-4">
          {logos.map(logo => (
            <li key={logo.href}>
              <a
                target="_blank"
                href={logo.href}
                className="size-20 sm:size-24 grid place-content-center bg-highlight/[7%] rounded-2xl p-4">
                <Image src={logo.src} alt={logo.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
