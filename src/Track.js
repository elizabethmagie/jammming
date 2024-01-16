import React, { useCallback } from 'react';

import './Track.css';


export default function Track(props) {

    const addTrack = useCallback((event) => {
        props.onAdd(props.track);
    },[props.onAdd, props.track]);


    const removeTrack = useCallback((event) => {
        props.onRemove(props.track);
    }, [props.onRemove, props.track]);


    function addOrRemove() {
        if (props.isRemoval) {
            return (
                <button className ='Activity' onClick ={removeTrack} >
                    -
                </button>
            )
        }
        return (
            <button className = 'Activity' onClick ={addTrack} >
                +
            </button>
        );
    };

    return(
        <div className = 'Track'>
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    );
};