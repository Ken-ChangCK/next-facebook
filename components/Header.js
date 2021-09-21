import React from 'react'
import Image from 'next/image'
import { BellIcon, ChatIcon, ChevronDownIcon, HeartIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid'
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import HeaderIcon from "./HeaderIcon"
import { signOut, useSession } from "next-auth/client";

const Header = () => {
  const [session] = useSession();
  
  return (
    <div className='static top-0 z-500 bg-white flex items-center p-2 lg:px-5 shadow-md'>

      {/* left */}
      <div className='flex items-center'>
        <Image 
          src="https://links.papareact.com/5me" 
          alt='fb'
          width={40} 
          height={40} 
          layout={'fixed'}>
        </Image>
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className="h-6 text-gray-600"/>
          <input className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' type='text' placeholder='search facebook'>
          </input>
        </div>
      </div>

      {/* center */}
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* right */}
      <div className='flex items-center sm:space-x-2 justify-end'>
        {/* profile img */}
         <Image
            alt='user'
            onClick={() => signOut()}
            className="rounded-full cursor-pointer"
            // src={session?.user?.image}
            src='https://images.unsplash.com/photo-1542309667-2a115d1f54c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80'
            width="40"
            height="40"
            layout="fixed"
        />
        <p className='whitespace-nowrap font-semibold pr-3'>Sunny Wang</p>
        <ViewGridIcon className='icon'/>
        <ChatIcon className='icon'/>
        <BellIcon className='icon'/>
        <ChevronDownIcon className='icon'/>
      </div>
    </div>
  )
}

export default Header
