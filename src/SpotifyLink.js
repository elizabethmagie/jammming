// Spotify API info
const clientID = '860e55e457004da382f412a82bb28d86';
const redirectUri = 'http://localhost:3000/';

// Access tokens from Spotify are only valid for 1 hr, will need to acquire new
let accessToken;

const SpotifyLink = {

    // Function to obtain new Spotify access token
    newAccessToken() {

        // If access token already definied, return
        if (accessToken) {
            return accessToken;
        };

        // Check if access token already exists, access it through URL
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        // Else, need to retrieve new access token
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
          };
    },


    // Search function to query Spotify
    search(song) {
        const accessToken = SpotifyLink.newAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${song}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
            }).then((response) => {
                return response.json();
            }).then(jsonResponse => {
                if (!jsonResponse.tracks) {
                  return [];
                }
                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }));
        });
    },


    // Function to save playlists to Spotify
    savePlaylist(name, trackUris) {

        // Check that a name and trackUris are provided
        if (!name || !trackUris.length) {
            return;
        }
      
        const accessToken = SpotifyLink.newAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };
        let userId;
      
        return fetch('https://api.spotify.com/v1/me', {headers: headers}
        ).then(response => response.json()
        ).then(jsonResponse => {
          userId = jsonResponse.id;
          return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({name: name})
          }).then(response => response.json()
          ).then(jsonResponse => {
            const playlistId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
              headers: headers,
              method: 'POST',
              body: JSON.stringify({uris: trackUris})
            });
          });
        });
    }
};


export default SpotifyLink;