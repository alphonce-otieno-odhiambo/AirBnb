import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';


function search() {
  return (
    <div className='h-screen'>
       <Header/>
       <main className='flex'>
           <section>
               <p className='text-xm'>300+ stays for 5number of guests</p>
               <h1 className='text-3xl font-semibold mb-6 mt-2'> Stays in Mars</h1>

               <div className=''>
                   <p className='px-4 border py-4 active:scale-95 active:bg-gray-200 transition transform duration-200 ease-out rounded-full cursor-pointer hover:shadow-lg'>Cancel button flexibility</p>
               </div>
           </section>

       </main>
       <Footer/>
    </div>
  )
}

export default search