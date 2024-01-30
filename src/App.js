import React, { useState, useCallback } from 'react';

import './App.css';

// Import other components
import SpotifyLink from './SpotifyLink';
import SearchBar from './SearchBar.js';
import SearchRestults from './SearchResults.js';
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


    // Save playlist to Spotify via SpotifyLink
};