import React from 'react';
import SearchBar from './searchBar';
import Image from 'next/image'
import '../globals.css'

const Header = () => {
    return (
        <div className='ml-24 mt-3 mr-20 grid grid-col-12'>
            <div className='w-32 h-12 col-start-1 border-2'>
                <Image src='/bms-logo.png' alt='Using bms logo' width={200} height={100}/>
            </div>
            <div className='col-start-2 col-end-8 border-2'>
                <SearchBar></SearchBar>
            </div>
            <div className='col-start-8 col-end-10 border-2'>
            </div>
            <div className='col-start-10 border-2'>
            </div>
        </div>
    )
}

export default Header;