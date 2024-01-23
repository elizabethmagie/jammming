import React from 'react';

import './Tracklist.css';

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