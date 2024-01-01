import React from 'react';
import SearchBar from './searchBar';
import Location from './location';
import Image from 'next/image'
import '../globals.css'
import Login from './login';
import Drawer from './drawer';

const Header = () => {
    return (
        <div className='flex flex-row mx-14 border-2 h-20'>
            <div className='basis-2/12 border-2 h-20'>
                <Image src='/bms-logo.png' alt='Using bms logo' width={120} height={30}/>
            </div>
            <div className='basis-7/12 border-2 h-20'>
                <SearchBar></SearchBar>
            </div>
            <div className='basis-1/12'>
                <Location></Location>
            </div>
            <div className='basis-1/12'>
                <Login></Login>
            </div>
            <div className='basis-1/12'>
                <Drawer></Drawer>
            </div>
        </div>
    )
}

export default Header;