import React from 'react';

import './SearchResults.css';

// Import Tracklist component to render the tracks from tracklist in SearchResults
import Tracklist from './Tracklist.js';


export default function SearchResults(props) {
    return(
        <div Classname='SearchResults' >
            <h1>all tracks</h1>
            <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
        </div>
    );
};