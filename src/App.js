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
        setTracks((prevTracks).filter((currentTrack) => currentTrack.id !== track.id));
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
            <h1>jammming</h1>
            <h3>create custom playlists and save to spotify</h3>
            <div className='App' >
                <SearchBar onSearch={search} />
                <div className='App-Playlist'>
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