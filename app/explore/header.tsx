import React from 'react';
import SearchBar from './searchBar';
import '../globals.css'

const Header = () => {
    return (
        <div className='ml-20 mt-5 mr-20 grid grid-col-5'>
            <div className='w-32 h-12 col-start-1 border-2'>
                <img src='bms-logo.png'></img>
            </div>
            <div className='col-start-2 col-end-4 border-2'>
                <SearchBar></SearchBar>
            </div>
            <div className='col-start-4 col-end-5 border-2'>
            </div>
            <div className='col-start-5 border-2'>
            </div>
        </div>
    )
}

export default Header;