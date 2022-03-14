import React from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    GlobeIcon,
    UserCircleIcon,
    UsersIcon,
    MenuIcon,
    UserIcon
} from '@heroicons/react/solid';
import {useState} from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';
function Header() {
const [searchInput, setSearchInput] = useState("");
const [startDate,setStartDate ] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
const [noOfGuest, setNoOfGuest] = useState(1)
const router = useRouter()

const hundleSelect = (ranges)=>{
  setStartDate(ranges.selection.startDate);
  setEndDate(ranges.selection.endDate);
}

const resetInput = () => {
  setSearchInput("")
}

const selectionRange = {
  startDate :startDate,
  endDate :endDate,
  key :"selection"
}
const search = () => {
  router.push({
    pathname :'/search',
    query:{
      location:searchInput,
      startDate:startDate.toISOString(),
      endDate:endDate.toISOString(),
      noOfGuest,
    }
  });
}

  return (
    <header className=' sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 '>
       
       {/* left */}
       <div onClick={() => router.push("/")} className='relative  flex items-center h-10 cursor-pointer my-auto'>
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
       <div className='flex flex-col col-span-3 mx-auto'>
         <DateRangePicker
         ranges={[selectionRange]}
         minDate = {new Date()}
         rangeColors={["#FD5B61"]}
         onChange={hundleSelect}
         />
         <div className='flex items-center border-b mb-3'>
           <h2 className='text-2xl flex-grow font-semibold'> No. of guests</h2>
           <UserIcon className='h-5'/>
           <input 
           value={noOfGuest}
           onChange={(e)=> setNoOfGuest(e.target.value)}
           min={1}
           type="number" className='pl-2 w-12 text-lg outline-none text-red-400'/>
         </div>
         <div className='flex '>
           <button className='flex-grow text-gray-500'
           onClick={resetInput}
           >Cancel</button>
           <button onClick={search} className='flex-grow text-red-500' >Search</button>
         </div>
       </div>
       )}
       
    </header>
  )
}

export default Header