import React from 'react';
import Image from 'next/image';

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:[600px] 2xl:h-[700px]'>
        <Image 
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'       
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg'>Not sure where to go</p>
        </div>
    </div>
  )
}

export default Banner