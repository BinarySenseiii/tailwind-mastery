import Image from 'next/image'
import React from 'react'
import { EpicStackLogo } from '~/logos/epic-stack'
import { logos } from '~/logos/logos'

export default function HomePage() {
  return (
    <div>
      <EpicStackLogo className="size-20" />
      {/*
				🐨 Wrap the word "Epic" in a span, and set its text color
				to "highlight", to verify our new color works.
			*/}
      <h1>
        The <span className="text-highlight">Epic</span> Stack
      </h1>
      <p>
        Check the <a href="#">Getting Started</a> guide file for how to get your project
        off the ground!
      </p>
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
  )
}
