import React from 'react';

import './SearchResults.css';

// Import Tracklist component to render the tracks from tracklist in SearchResults
import Tracklist from './Tracklist.js';


export default function SearchResults(props) {
    return(
        <div className='SearchResults' >
            <div className='SearchResults-Title' >
                <h5>all tracks</h5>
            </div>
            <div className='SearchResults-Tracklist' >
                <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
            </div>
        </div>
    );
};