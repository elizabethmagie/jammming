import React from 'react';


import './SearchResults.css';


import Tracklist from './Tracklist.js';


export default function SearchResults(props) {
    return(
        <div Classname='SearchResults' >
            <h1>all tracks</h1>
            <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
        </div>
    );
};