import Image from 'next/image'

const page = () => {
  return (
    <div className='flex h-screen text-white'>
      <div className='bg-gray-800 p-3 shrink-0 space-y-2 overflow-y-scroll scrollbar-none'>
        {[...Array(40)].map((_, index) => (
          <div
            key={index}
            className='bg-white text-gray-500 size-12 rounded-full flex items-center justify-center'>
            <Image
              src='https://avatar.iran.liara.run/public/3'
              alt='discord user'
              height={48}
              width={48}
              className='rounded-full object-cover'
            />
          </div>
        ))}
      </div>
      <div className='bg-gray-700 w-60 flex flex-col'>
        <div className='h-12 px-3 flex items-center'>Tailwind CodeCamp</div>
        <div className='bg-black p-3 flex-1 overflow-y-scroll scrollbar-none space-y-2'>
          {[...Array(50)].map((_, index) => (
            <h1 key={index}>Channel Selector</h1>
          ))}
        </div>
      </div>
      <main className='bg-gray-600 flex-1 flex flex-col'>
        <div className='h-12 px-3 flex items-center'>General</div>
        <div className='p-3 flex-1 overflow-y-scroll scrollbar-none space-y-4'>
          {[...Array(50)].map((_, index) => (
            <p key={index}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laboriosam eos
              voluptatibus doloremque dolore sunt vitae consequuntur porro, ab quae molestias
              consequatur amet saepe nesciunt libero odio, et optio veniam.
            </p>
          ))}
        </div>
      </main>
    </div>
  )
}

export default page
