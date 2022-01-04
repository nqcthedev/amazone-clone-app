import React from 'react'
import {
    MenuIcon
} from '@heroicons/react/outline'
function HeaderBottom() {
    return (
        <div className="flex justify-between items-center  bg-amazon_blue-light text-white text-sm">
        <div className='flex items-center space-x-3 p-2 pl-6'>
         <p className='link flex items-center font-extrabold'>
             <MenuIcon className='h-6 mr-1'/>
             All
         </p>
         <p className='link'>Today's Deals</p>
         <p className='link'>Customer Service</p>
         <p className='link'>Gift cards</p>
         <p className='link hidden lg:inline-flex'>Buy Again</p>
         <p className='link hidden lg:inline-flex'>Registry</p>
         <p className='link hidden lg:inline-flex'>Sell</p>
        </div>
        <div className='flex link'>
             <p className='mr-1 hidden lg:inline-flex'>Amazon's response to</p>
             <p className='mr-6 font-extrabold hidden lg:inline-flex'>Covid-19</p>
         </div>
        </div>
    )
}

export default HeaderBottom