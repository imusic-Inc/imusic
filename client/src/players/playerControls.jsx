import { useState, useEffect,useRef } from "react"
import SpotifyPlayer from 'react-spotify-web-playback';
import { useSearchParams } from 'react-router-dom';
import store from "../redux/store";
import Cookies from 'universal-cookie';
export default function PlayerConrols(props) {
  const [track, setTrack] = useState([]);
  const [index, setIndex] = useState(0);
  const [searchParams] = useSearchParams();
  const [token, setToken] = useState("");

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get('access_token');
    if (token && token.length > 10) {
      setToken(token)
    } else {
      setToken('error')
    }
  }, []);

  const ref = useRef(null);
   useEffect(() => {
        store.subscribe(() => {
           const tracks = store.getState();
            if (tracks.single) {
                setTrack(tracks.single);
              setIndex(0);
              
            }
        });

   }, [track, index]);
  
  console.log(token);
  
  // if (!token) return props.auth(false);
  return (
    <div className="player p-1">

      {token? token==="error"?props.auth(false):<SpotifyPlayer
        ref={ref}
        autoPlay={true}
        token={token}
        uris={track.length > 0 ? [...track.map(value => value.audio)] : []}
        showSaveIcon
       callback={state => {
        // if (!state.isPlaying) setPlay(false);
        if (state.error) {
          props.auth(false);
        }
      }}

        styles={{
    activeColor: '#3e5a17',
    bgColor: '#201D1D',
    color: '#fff',
    loaderColor: '#fff',
    sliderColor: '#0d71dc',
    trackArtistColor: '#ccc',
    trackNameColor: '#fff',
  }}
      />:<>Loading...</>}
      
    </div>
    
  )
}
