import React, { useCallback } from 'react';

import './Track.css';


export default function Track(props) {

    // Using useCallback so Track only re-renders when props.onAdd or props.track changes. Handles adding
    // a track to use in handleAddOrRemove
    const addTrack = useCallback((event) => {
        props.onAdd(props.track);
    },[props.onAdd, props.track]);

    // Using useCallback so Track only re-renders when props.onRemove or props.track changes. Handles removing
    // a track to use in handleAddOrRemove
    const removeTrack = useCallback((event) => {
        props.onRemove(props.track);
    }, [props.onRemove, props.track]);

    // Creates Add and Remove buttons to add or remove a track 
    function handleAddOrRemove() {
        if (props.isRemoval) {
            return (
                <button className ='handleAddOrRemove' onClick ={removeTrack} >
                    remove
                </button>
            )
        }
        return (
            <button className = 'handleAddOrRemove' onClick ={addTrack} >
                add
            </button>
        );
    };

    return(
        <div className='Track'>
            <div className="Track-Details">
                <h2>{props.track.name}</h2>
                <h4>by {props.track.artist} on {props.track.album}</h4>
            </div>
            {handleAddOrRemove()}
        </div>
    );
};