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
                   <p className='button'>Cancel button flexibility</p>
                   <p className='button'>Type of place</p>
                   <p className='button'>Price</p>
                   <p className='button'>Rooms and Beds</p>
                   <p className='button'>More filters</p>
               </div>
           </section>

       </main>
       <Footer/>
    </div>
  )
}

export default search