import React from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    
} from '@heroicons/react/solid';
function Header() {
  return (
    <header className=' sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 '>
       
       {/* left */}
       <div className='relative  flex items-center h-10 cursor-pointer my-auto'>
           <Image 
           src="https://links.papareact.com/qd3"
           layout="fill"
           objectFit='contain'
           objectPosition='left'
           />
       </div>
       {/* middle */}
       <div className='flex items-center md:border-2 py-2 rounded-full md:shadow-sm'>
           <input className='pl-5 bg-transparent outline-none flex-grow' type="text" placeholder='Search'/>
           <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white md:mx-2 rounded-full cursor-pointer p-2'/>
       </div>
       {/* right */}
       <div></div>
    </header>
  )
}

export default Header