import Image from 'next/image'
import React from 'react'
import { EpicStackLogo } from '~/logos/epic-stack'
import { logos } from '~/logos/logos'

function clsx(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const columnClasses: Record<(typeof logos)[number]['column'], string> = {
  1: 'xl:col-start-1',
  2: 'xl:col-start-2',
  3: 'xl:col-start-3',
  4: 'xl:col-start-4',
  5: 'xl:col-start-5',
}
const rowClasses: Record<(typeof logos)[number]['row'], string> = {
  1: 'xl:row-start-1',
  2: 'xl:row-start-2',
  3: 'xl:row-start-3',
  4: 'xl:row-start-4',
  5: 'xl:row-start-5',
  6: 'xl:row-start-6',
}

export default function HomePage() {
  return (
    <div className="min-h-dvh grid place-content-center px-4 py-16">
      <div className="grid place-content-center items-center gap-12 sm:gap-16 xl:gap-24 xl:grid-cols-[auto_1fr]">
        <div className="text-center flex flex-col items-center max-w-md mx-auto xl:order-2 xl:items-start xl:text-left">
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

        <ul className="flex max-w-2xl lg:max-w-3xl mx-auto flex-wrap justify-center gap-2 sm:gap-4 xl:grid xl:grid-cols-5 xl:grid-rows-6 xl:grid-flow-col">
          {logos.map(logo => (
            <li
              key={logo.href}
              className={clsx(columnClasses[logo.column], rowClasses[logo.row])}>
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
