import React, { useCallback } from 'react';


import './Playlist.css';


import Tracklist from './Tracklist';


export default function Playlist(props) {
    const handleNameChange = useCallback((event) => {
        props.onNameChange(event.target.value);
    }, [props.onNameChange]);

    return(
        <div className='Playlist' >
            <input onChange={handleNameChange} defaultValue={"new playlist"} />
            <Tracklist
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
            <button className='Save-Playlist' onClick={props.onSave} >
                save playlist to spotify
            </button>
        </div>
    );
};