import Image from 'next/image'
import React from 'react'
import { EpicStackLogo } from '~/logos/epic-stack'
import { logos } from '~/logos/logos'

export default function HomePage() {
  return (
    <div className="min-h-dvh grid place-content-center px-4 py-16">
      <div className="grid place-content-center gap-12">
        <div className="text-center flex flex-col items-center max-w-md mx-auto">
          <EpicStackLogo className="size-20" />
          <h1 className="mt-6 text-4xl font-medium">
            The <span className="text-highlight">Epic</span> Stack
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Check the <a href="#">Getting Started</a> guide file for how to get your
            project off the ground!
          </p>
        </div>

        <ul>
          {logos.map(logo => (
            <li key={logo.href}>
              <a href={logo.href}>
                <Image src={logo.src} alt={logo.alt} className="w-16" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
