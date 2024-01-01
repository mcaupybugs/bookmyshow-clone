import React from 'react';
import SearchBar from './searchBar';
import Location from './location';
import Image from 'next/image'
import '../globals.css'
import Login from './login';
import Drawer from './drawer';

const Header = () => {
    return (
        <div className='flex flex-row'>
            <div className='basis-1/6'>
                <Image src='/bms-logo.png' alt='Using bms logo' width={200} height={100}/>
            </div>
            <div className='basis-2/6'>
                <SearchBar></SearchBar>
            </div>
            <div className='basis-1/6'>
                <Location></Location>
            </div>
            <div className='basis-1/6'>
                <Login></Login>
            </div>
            <div className='basis-1/6'>
                <Drawer></Drawer>
            </div>
        </div>
    )
}

export default Header;