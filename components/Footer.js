import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 bg-gray-100 text-gray-600 py-14'>
        <div className='space-y-3 text-xm text-gray-800'>
            <h5 className='font-bold'> ABOUT</h5>
            <p>How Airbnb works </p>
            <p>Newsroom</p>
            <p>Ivestors</p>
            <p>Airbnb plus</p>
            <p>Airbnb luxe</p>          
        </div>
        <div className='space-y-3 text-xm text-gray-800'>
            <h5 className='font-bold'> COMMUNITY</h5>
            <p>Accessibility </p>
            <p>Aint a real site</p>
            <p>Awesome clone</p>
            <p>Refferals accepted</p>
            <p>Romaniaali</p>          
        </div>
        <div className='space-y-3 text-xm text-gray-800'>
            <h5 className='font-bold'> HOST</h5>
            <p>Alphonce</p>
            <p>Presents</p>
            <p>React</p>
            <p>Projects</p>
            <p>Django</p>          
        </div>
        <div className='space-y-3 text-xm text-gray-800'>
            <h5 className='font-bold'> SUPPORT</h5>
            <p>Help center</p>
            <p>Safty & trust</p>
            <p>Follow</p>
            <p>Ice n ice </p>
            <p>Airbnb luxe</p>          
        </div>
        <div></div>
    </div>
  )
}

export default Footer