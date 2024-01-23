import React from 'react';

import './Tracklist.css';

// Import Track component to use when creating Tracklists
import Track from './Track.js';


export default function Tracklist(props) {
    return(
        <div Classname='Tracklist' >
            {props.tracks.map((track) => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        isRemoval={props.isRemoval}
                        onRemove={props.onRemove}
                    />
                );
            })};
        </div>
    );
};