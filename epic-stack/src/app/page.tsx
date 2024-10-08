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

export default async function HomePage() {
  return (
    <div className="min-h-dvh grid place-content-center px-4 py-16">
      <div className="grid place-content-center items-center gap-12 sm:gap-16 xl:gap-x-24 xl:gap-y-4 xl:grid-cols-[auto_1fr] max-w-6xl">
        <div className="text-center grid items-center mx-auto xl:order-2 xl:text-left xl:grid-cols-[auto_1fr] xl:grid-rows-subgrid xl:gap-4 xl:row-span-2 xl:row-start-3 xl:col-start-2">
          <EpicStackLogo
            className={clsx(
              'size-20 animate-slide-top xl:animate-slide-left xl:[animation-delay:0.5s] justify-self-center xl:justify-self-start',
            )}
          />
          <h1
            className={clsx(
              'mt-6 md:mt-8 xl:mt-0 text-4xl sm:text-4.5xl md:text-5xl font-medium',
              'animate-slide-top [animation-delay:0.3s]',
              'xl:animate-slide-left xl:[animation-delay:0.8s]',
            )}>
            The <span className="text-highlight">Epic</span> Stack
          </h1>
          <p
            className={clsx(
              'mt-4 md:mt-6 xl:mt-0 text-base sm:text-lg md:text-xl text-slate-600 xl:col-span-2 max-w-md xl:max-w-full',
              'animate-slide-top [animation-delay:0.8s]',
              'xl:animate-slide-left xl:[animation-delay:1.3s]',
            )}>
            Check the{' '}
            <a
              href="https://github.com/BinarySenseiii/next-clean"
              className="text-black underline hover:no-underline focus:outline-0 focus:ring-2 focus:ring-highlight"
              target="_blank">
              Getting Started
            </a>{' '}
            guide file for how to get your project off the ground!
          </p>
        </div>

        <ul className="flex max-w-2xl lg:max-w-3xl mx-auto flex-wrap justify-center gap-2 sm:gap-4 xl:grid xl:grid-cols-5 xl:grid-rows-subgrid xl:row-span-6 xl:grid-flow-col">
          {logos.map((logo, index) => (
            <li
              style={{ '--loop-index': index } as React.CSSProperties}
              key={logo.href}
              className={clsx(
                columnClasses[logo.column],
                rowClasses[logo.row],
                'motion-safe:animate-roll-reveal animate-fade-in',
                'motion-safe:[animation-delay:calc(0.07s*var(--loop-index))]',
              )}>
              <a
                target="_blank"
                href={logo.href}
                className="size-20 sm:size-24 grid place-content-center transition hover:-rotate-6 bg-highlight/[7%] hover:bg-highlight/10 rounded-2xl p-4 focus:outline-0 focus:ring-2 focus:ring-highlight focus:ring-offset-2">
                <Image src={logo.src} alt={logo.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
