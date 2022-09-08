import { useState, useEffect,useRef } from "react"
import SpotifyPlayer from 'react-spotify-web-playback';
// import { useSearchParams } from 'react-router-dom';
import store from "../redux/store";
import Cookies from 'universal-cookie';
import Lyrics from "../session/lyrics";
import getData from "../api/backendcalls";
let at = 'paused';
let nowPlaying = '';
export default function PlayerConrols(props) {
  const [track, setTrack] = useState([{
  "image": "https://i.scdn.co/image/ab67616d000048516b93b86e8411c1eae6686497",
  "name": "Introduction",
  "auth": "Samargl",
  "audio": "spotify:track:4WUKvuiIgKtTiuhpnAw01W",
  "album": "Away Message",
  }]);
  const [lyris, setLyris] = useState([]);
  const [isplaying, setIsPlaying] = useState(false);
  const [token, setToken] = useState("");
  const cookies = new Cookies();
  const tokened = cookies.get('access_token');
  const ref = useRef(null);
  let chcek = true;
  useEffect(() => {
    if (tokened && tokened.length > 10) {
      setToken(tokened)
    } else {
      setToken('error')
    }
  },[setToken,tokened]);



  useEffect(() => {
    if (props.current.length > 0 && props.current[0].image && props.current[0].image.length>10) {
      setTrack(props.current)
    }
  }, [props]);

  function show() {
    setIsPlaying(false)
  }

// streaming the music
  useEffect(() => {
    console.log(props.type==='private'?props.isAdmin?true:false:false,props);
   if (props.type==='private'?props.isAdmin?true:false:false) {
    const interval = setInterval(() => {
    if (at === 'paused' && chcek) {
      chcek = false;
      const NowPlaying = track.find(value => value.audio === nowPlaying && value.audio !== 'spotify:track:4WUKvuiIgKtTiuhpnAw01W');
      console.log(NowPlaying,at);
      if (NowPlaying) {
          getData.PlayList_nowPlaying(props.id, {'now_playing':{...NowPlaying,at:-1} }).then(value => {
           console.log(value);
        })
      }
      
    } else {
      if (typeof (at) === 'number') {
        at += 47832;
        const NowPlaying = track.find(value => {
          console.log(nowPlaying);
         return value.audio === nowPlaying && value.audio !== 'spotify:track:4WUKvuiIgKtTiuhpnAw01W'

        });
        console.log(NowPlaying,at);
        if (NowPlaying) {
         getData.PlayList_nowPlaying(props.id, {'now_playing':{...NowPlaying,at} }).then(value => {
           console.log(value);
        })
        }
         chcek = true;
      }
     
    } 
  }, 5000);
  return () => clearInterval(interval);
  }
  }, [props]);

  function clearLogins() {
    getData.refreshToken().then((value) => {
      getData.logOut('users/logout').then(value => {
      cookies.set("name", null);
      cookies.set("access_token", null);
      cookies.set("refresh_token", null);
      cookies.set("email", null);
      cookies.set("setDate", null);
      cookies.set("uid", null);
      cookies.set("jwt", null);
      cookies.set("photo", null);
      cookies.set("product", null);
    });
    });
  }

  
   useEffect(() => {
        store.subscribe(() => {
           const tracks = store.getState();
            if (tracks.single) {
                setTrack(tracks.single);
            }
        });

   }, [track, track]);
  
  function startLyris(url) {
    const newTrack = track.filter(value => {
      return value.audio === url;
    });
    setLyris(newTrack);
   
  }
  
  console.log(track);

  // if (!token) return props.auth(false);
  return (
    <div className="player pt-1 pb-1">

      {token? token==="error"?props.auth(false):<SpotifyPlayer
        ref={ref}
        autoPlay={true}
        token={token}
        uris={track.length > 0 ? [...track.map(value => value.audio)] : []}
        showSaveIcon
        callback={state => {
          if (state.isPlaying) {
            document.title = state.track.name;
            nowPlaying = state.track.uri;
            at = state.progressMs;
            startLyris(state.track.uri);
            setIsPlaying(true);
          }else{
            at = 'paused';
            setIsPlaying(false);
          }
        if (state.error) {
          clearLogins();
          at = 'paused';
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
      
      {isplaying?<Lyrics  name={lyris.length > 0 ? lyris[0].name:""} auth={lyris.length > 0 ? lyris[0].auth:""} show = {show} />:<></>}
    </div>
    
  )
}
