import React, { useState, useCallback } from 'react';

import './SearchBar.css';


export default function SearchBar(props) {
    const [song, setSong] = useState('');

    // Using useCallback and empty dependency array so SearchBar only renders on first render. Handles new song
    // when user inputs a song name.
    const handleNewSong = useCallback((event) => {
        setSong(event.target.value);
    }, []);

    // Using useCallback so Searchbar only re-renders when props.onSearch or 'song' state changes. Sets up search for
    // song on button click.
    const searchSong = useCallback((event) => {
        props.onSearch(song);
    }, [props.onSearch, song]);


    return(
        <div className='search-bar' >
            <input placeholder ='search for a song' onChange ={handleNewSong} />
            <button className="search-button" onClick={searchSong}>
                search
            </button>
        </div>
    );
};