import React, { useState, useCallback } from 'react';

import './App.css';

// Import other components
import SpotifyLink from './SpotifyLink';
import SearchBar from './SearchBar.js';
import SearchResults from './SearchResults.js';
import Playlist from './Playlist.js';


export default function App() {

    // State variables for search, tracks, and playlist name. Use naming convention from relevant components.
    const [searchResults, setSearchResults] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [playlistName, setPlaylistName] = useState('new playlist');

    // Uses SpotifyLink.search to search for entered song and set state variable searchResults
    const search = useCallback((song) => {
        SpotifyLink.search(song).then(setSearchResults);
    }, []);

    // Set state variable playlistName to entered playlist name
    const newPlaylistName = useCallback((name) => {
        setPlaylistName(name)
    }, []);
    
    // Add or remove tracks and update state variables
    const addTrack = useCallback((track) => {
        if (tracks.some((savedTrack) => savedTrack.id === track.id)){
            return;
        };
        setTracks((prevTracks) => [...prevTracks, track]);
    }, [tracks]);

    const removeTrack = useCallback((track) => {
        setTracks((prevTracks) =>
            prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
        );
    }, []);


    // Save playlist to Spotify via SpotifyLink
    const savePlaylist = useCallback(() => {
        const trackUris = tracks.map((track) => track.uri);
        SpotifyLink.savePlaylist(playlistName, trackUris).then(() => {
            setPlaylistName('new playlist');
            setTracks([]);
        });
    }, [playlistName, tracks]);


    // App render
    return (
        <div>
            <div className='app-title' >
                <h1><i>jammming</i></h1>
                <h4>create custom playlists and save to spotify</h4>
            </div>
            <div className='app-search-bar' >
                <SearchBar onSearch={search} />
            </div>
            <div className='app' >
                <div className='app-playlist'>
                    <SearchResults searchResults={searchResults} onAdd={addTrack} />
                    <Playlist
                        playlistName={playlistName}
                        playlistTracks={tracks}
                        onNameChange={newPlaylistName}
                        onRemove={removeTrack}
                        onSave={savePlaylist}
                    />
                </div>
            </div>
        </div>
    );
};