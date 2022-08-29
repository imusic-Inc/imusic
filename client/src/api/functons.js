import keys from "./keys";

const APIController = (function() {
    
    const clientId = keys.Client_ID;
    const clientSecret = keys.Client_Secret;

    // private methods
    const _getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }
    
    const _getGenres = async (token) => {

        const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.categories.items;
    }
     const _getGenre = async (token,genreId) => {

        const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.categories.items;
    }

    const _getPlaylistByGenre = async (token, genreId,limit) => {
        const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.playlists.items;
    }

    const _getTracks = async (token, tracksEndPoint) => {
        const path = `https://api.spotify.com/v1/playlists/${tracksEndPoint}`
        const result = await fetch(path, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data;
    }
          
    const _getPlayList = async (token, tracksEndPoint) => {
        const path = `https://api.spotify.com/v1/playlists/${tracksEndPoint}/tracks?offset=0&limit=30&locale=en-US,en;q=0.5`
        const result = await fetch(path, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.items;
    }

     const _getSearch = async (token, tracksEndPoint) => {
        const path = `https://api.spotify.com/v1/search?q=${tracksEndPoint}&type=track&limit=30&offset=0`
        const result = await fetch(path, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

         const data = await result.json();
        return data.tracks.items;
     }
    
    const _getTrack = async (token, trackEndPoint) => {

        const result = await fetch(`https://api.spotify.com/v1/me/player/currently-playing`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        console.log(`https://api.spotify.com/track/${trackEndPoint}`);
        
        const data = await result.json();
        return data;
    }

    return {
        getToken() {
            return _getToken();
        },
        getGenres(token) {
            return _getGenres(token);
        },
         getGenre(token,genreId) {
            return _getGenre(token,genreId);
        },
        getPlaylistByGenre(token, genreId,limit) {
            return _getPlaylistByGenre(token, genreId,limit);
        },
        getTracks(token, tracksEndPoint) {
            return _getTracks(token, tracksEndPoint);
        },
         getPlayList(token, tracksEndPoint) {
            return _getPlayList(token, tracksEndPoint);
        },
        getTrack(token, trackEndPoint) {
            return _getTrack(token, trackEndPoint);
        },
        getSearch(token, trackEndPoint) {
             return  _getSearch(token, trackEndPoint);
         }
    }
})();
export default APIController;