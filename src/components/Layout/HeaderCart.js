import React from 'react'
import {
    ShoppingCartIcon,
} from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectedItem } from '../../store/cart-slice'


function HeaderCart() {

    const cartQuantity = useSelector(selectedItem)
    return (
        <Link to='/checkout'>
            <div className='relative link flex items-center'>
             <span className='absolute top-0 right-0 md:right-7 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>{cartQuantity.length}</span>
            <ShoppingCartIcon className="h-10"/>
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Cart</p>
        </div>
        </Link>
    )
}

export default HeaderCart
