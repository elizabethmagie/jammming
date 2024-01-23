import React, { useCallback } from 'react';

import './Playlist.css';

// Import Tracklist component to use to create Playlists
import Tracklist from './Tracklist';


export default function Playlist(props) {

    // Using useCallback so Playlist only re-renders when the playlist name is changed. Handles playlist
    // name when user inputs a playlist name.
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