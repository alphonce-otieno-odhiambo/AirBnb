import React from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    GlobeIcon,
    UserCircleIcon,
    UsersIcon,
    MenuIcon
} from '@heroicons/react/solid';
import {useState} from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
function Header() {
const [searchInput, setSearchInput] = useState("")

  return (
    <header className=' sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 '>
       
       {/* left */}
       <div className='relative  flex items-center h-10 cursor-pointer my-auto'>
           <Image 
           src="https://links.papareact.com/qd3"
           layout="fill"
           objectFit='contain'
           objectPosition='left'
           alt=''
           />
       </div>
       {/* middle */}
       <div className='flex items-center md:border-2 py-2 rounded-full md:shadow-sm'>
           <input 
           onChange={(e)=> setSearchInput(e.target.value)}
           value={searchInput}
           className='pl-5 bg-transparent outline-none flex-grow' type="text" placeholder='Search'/>
           <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white md:mx-2 rounded-full cursor-pointer p-2'/>
       </div>
       {/* right */}
       <div className='flex space-x-3 items-center justify-end text-gray-400'>
           <p className='hidden md:inline cursor-pointer'> beacome a host</p>
           <GlobeIcon className='h-6 cursor-pointer'/>
           <div className='flex items-center space-x-2 rounded-full border-2 p-2'>
           <MenuIcon className='h-6'/>
           <UserCircleIcon className='h-6'/>
           </div>
           
       </div>
       {searchInput && (
       <div></div>
       )}
       
    </header>
  )
}

export default Header