// server 72px
// channel 240

import Image from 'next/image'

// main
const page = () => {
  return (
    <div className='flex h-screen text-white'>
      <div className='bg-gray-800 p-4 shrink-0'>
        <div className='bg-white text-gray-500 size-12 rounded-full flex items-center justify-center'>
          <Image
            src='https://avatar.iran.liara.run/public/3'
            alt='discord user'
            height={48}
            width={48}
            className='rounded-full object-cover'
          />
        </div>
      </div>
      <div className='bg-gray-700 w-60 flex flex-col'>
        <div className='h-12 grid place-content-center'>Tailwind CodeCamp</div>
        <div className='bg-black p-4 flex-1'>Channel Selector</div>
      </div>
      <main className='bg-gray-600 flex-1 flex flex-col'>
        <div className='h-12 grid place-content-center'>Ganeral</div>
        <div className='bg-indigo-100 p-4 flex-1'>Messages</div>
      </main>
    </div>
  )
}

export default page
