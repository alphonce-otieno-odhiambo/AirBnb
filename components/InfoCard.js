import React from 'react';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/outline';
import { star, StarIcon } from '@heroicons/react/solid';

function InfoCard({img, location, price, description, star, title, total}) {
  return (
    <div className='flex pr-4 py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
        <div className=' relative h-24 w-40 md:w-80 md:h-52 flex-shrink-0'>
            <Image src={img} alt=""
            objectFit='cover'
            layout='fill'
            className='rounded-2xl'
            />
        </div>

        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex justify-between'>
                <p>{location} </p>
                <HeartIcon className='h-7 cursor-pointer'/>
            </div>

            <h4 className='text-xl'>{title} </h4>

            <div className='border-b w-10 pt-2'/>

            <p className='p-2 text-xs text-gray-500 flex-grow'>{description} </p>

            <div className='flex justify-between items-end pt-5'>
                <p className='flex items-center'>
                    <StarIcon className='h-5 text-red-500'/>
                   {star}
                </p>

                <div>
                    <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price} </p>
                    <p className='text-right font-extralight '>{total} </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard