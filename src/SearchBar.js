import React, { useState, useCallback } from 'react';

import './SearchBar.css';


export default function SearchBar(props) {
    const [song, setSong] = useState('');

    const handleSongChange = useCallback((event) => {
        setSong(event.target.value);
    }, []);


    const searchSong = useCallback((event) => {
        props.onSearch(song);
    }, [props.onSearch, song]);


    return(
        <div className ='SearchBar' >
            <input placeholder ='Search for a song' onChange ={handleSongChange} />
            <button className="SearchButton" onClick={search}>
                SEARCH
            </button>
        </div>
    );


};