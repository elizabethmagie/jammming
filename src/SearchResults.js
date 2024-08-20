import React from 'react';

import './SearchResults.css';

// Import Tracklist component to render the tracks from tracklist in SearchResults
import Tracklist from './Tracklist.js';


export default function SearchResults(props) {
    return(
        <div className='search-results' >
            <div className='search-results-title' >
                <h5>all tracks</h5>
            </div>
            <div className='search-results-tracklist' >
                <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
            </div>
        </div>
    );
};