import React from 'react';
import '../globals.css'
import Image from 'next/image'

const SearchBar = () =>{
    return (
        <div className='container'>
            <div className='flex flex-row'>
                <Image className='basis-1/12 w-4 h-4' src='/search.png' alt='searchicon' width={10} height={20}></Image>
                <input className='w-80 h-8 m-2 border rounded basis-11/12' type='search'></input>
            </div>
        </div>
    )
}

export default SearchBar;