
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';


function search({searchResults}) {
    console.log(searchResults)
    const router =useRouter();
    const {location, startDate, endDate, noOfGuest} = router.query

     const formattedStartDate = format(new Date("26-Jan-2021 06:02 PM GMT+0530"),"dd-MMM-yy HH:mm");
     const formattedEndDate = format(new Date("26-Jan-2021 06:02 PM GMT+0530"),"dd-MMM-yy HH:mm");
    const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div className='h-screen'>
       <Header placeholder={`${location} | ${range} | ${noOfGuest} guests`}/>
       <main className='flex'>
           <section className='flex-grow pt-14 px-6'>
               <p className='text-xm'>300+ stays - {range} - for {noOfGuest}  guests</p>
               <h1 className='text-3xl font-semibold mb-6 mt-2'> Stays in {location}</h1>

               <div className='hidden lg:inline-flex mb-3 space-x-3 text-gray-800 whitespace-nowrap'>
                   <p className='button'>Cancel button flexibility</p>
                   <p className='button'>Type of place</p>
                   <p className='button'>Price</p>
                   <p className='button'>Rooms and Beds</p>
                   <p className='button'>More filters</p>
               </div>
               {searchResults.map(({img, location, price, description, star, title, total})=> (
                   <InfoCard 
                   key={img}
                   img={img}
                   price={price}
                   description={description}
                   star={star}
                   title={title}
                   total={total}
                   location={location}

                   />
               ))}
           </section>

       </main>
       <Footer/>
    </div>
  )
}

export default search;

export async function getServerSideProps(){
    const searchResults = await fetch("https://links.papareact.com/isz").
    then(
      (res) => res.json()
    );
    
    return {
      props : {
        searchResults,
        
      }
    }
  }