import React from 'react';
import '../globals.css'
import styles from './searchBar.module.css'

const SearchBar = () =>{
    return (
        <input className={styles.searchbar} type='search'></input>
    )
}

export default SearchBar;