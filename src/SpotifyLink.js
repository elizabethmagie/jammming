// Spotify API info
const clientID = '860e55e457004da382f412a82bb28d86';

// Access tokens from Spotify are only valid for 1 hr, will need to acquire new
let accessToken;

export default function SpotifyLink() {

    // Function to obtain new Spotify access token
    function newAcessToken() {

        // If access token already exists, return
        if (accessToken) {
            return accessToken;
        };

        // Else, need to retrieve new access token

        // curl -X POST "https://accounts.spotify.com/api/token" \
        //      -H "Content-Type: application/x-www-form-urlencoded" \
        //      -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"
    
    };


    // Search function to query Spotify
    function search(song) {
        const accessToken = SpotifyLink.newAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${song}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`
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
    };


    // Function to save playlists to Spotify
    function savePlaylist(...) {

    };

};