const page = () => {
  return (
    <div className='flex h-screen text-white'>
      <div className='bg-grey-500 p-3 shrink-0 space-y-2 overflow-y-scroll scrollbar-none'>
        <div className='bg-grey-400 text-grey-200 size-12 rounded-3xl flex items-center justify-center transition-all duration-200 hover:bg-brand hover:text-white cursor-pointer hover:rounded-2xl'>
          <DiscordIcon className='size-7' />
        </div>
        {/* {[...Array(40)].map((_, index) => (
          <div
            key={index}
            className='bg-white size-12 rounded-full flex items-center justify-center'>
            <Image
              src='https://avatar.iran.liara.run/public/3'
              alt='discord user'
              height={48}
              width={48}
              className='rounded-full object-cover'
            />
          </div>
        ))} */}
      </div>
      <div className='bg-grey-400 w-60 flex flex-col'>
        <div className='h-12 px-3 flex items-center'>Tailwind CodeCamp</div>
        <div className=' p-3 flex-1 overflow-y-scroll scrollbar-none space-y-2'>
          {[...Array(50)].map((_, index) => (
            <h1 key={index}>Channel Selector</h1>
          ))}
        </div>
      </div>
      <main className='bg-grey-300 flex-1 flex flex-col'>
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

function DiscordIcon(props: {className: string}) {
  return (
    <svg
      aria-hidden='true'
      fill='none'
      viewBox='0 0 24 24'
      {...props}>
      <path
        fill='currentColor'
        d='M19.73 4.87a18.2 18.2 0 00-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 00.96 17.7a18.43 18.43 0 005.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83zM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27z'
      />
    </svg>
  )
}
