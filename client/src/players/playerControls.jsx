import { useState, useEffect,useRef } from "react"
import SpotifyPlayer from 'react-spotify-web-playback';
// import { useSearchParams } from 'react-router-dom';
import store from "../redux/store";
import Cookies from 'universal-cookie';
import Lyrics from "../session/lyrics";
import getData from "../api/backendcalls";
import APIController from "../api/spotifyApi";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let nowPlaying = 'spotify:track:4WUKvuiIgKtTiuhpnAw01W';
export default function PlayerConrols(props) {
  const [track, setTrack] = useState([{
  "image": "https://i.scdn.co/image/ab67616d000048516b93b86e8411c1eae6686497",
  "name": "Introduction",
  "auth": "Samargl",
  "audio": "spotify:track:4WUKvuiIgKtTiuhpnAw01W",
  "album": "Away Message",
  }]);
  const notify = (message) => {
        toast.info(message, {
            autoClose: 2000,
        });
    };
  const [lyris, setLyris] = useState("");
  const [isplaying, setIsPlaying] = useState(false);
  const [token, setToken] = useState("");
  const cookies = new Cookies();
  const tokened = cookies.get('access_token');
  const ref = useRef(null);
  useEffect(() => {
    if (tokened && tokened.length > 10) {
      setToken(tokened)
    } else {
      setToken('error')
    }
  }, [setToken, tokened]);
  
  useEffect(() => {
    if (props.current.length > 0 && props.current[0].image && props.current[0].image.length>10) {
      setTrack(props.current)
    }
  }, [props]);

  function show() {
    setIsPlaying(false)
  }

// streaming the music
  function changState(state) {
    if (props.isAdmin) {
    if (props.type === 'private' ? props.isAdmin===props.uid ? true : false : false) {
       const NowPlaying = track.find(value => value.audio === nowPlaying && value.audio !== 'spotify:track:4WUKvuiIgKtTiuhpnAw01W');
    if (NowPlaying) {
      const playingNow = { ...NowPlaying, pre_view: tokened, at: state ? "play" : "paused" };
      getData.PlayList_nowPlaying(props.id, {now_playing: playingNow });
      }
    } else if (props.type === 'private' ? props.isAdmin === props.uid ? false : true : false) {
         getData.getSessionById('session', props.id).then(value => {
           const Admintoken = value.now_playing.pre_view;
        const state = value.now_playing.at;
           const setPlayList = value.playlist;
           setTrack({ ...value.now_playing });
           if (state === 'pause') {
             APIController.getPause(token);
           } else {
             getAdminState(Admintoken,setPlayList);
           }
      });
      }
    }
  }
   
  useEffect(() => {
if (props.type === 'private' ? props.isAdmin === props.uid ? false : true : false) {
      const interval = setInterval(() => {
        changState(isplaying);
  }, 1000*60*4);
    return () => clearInterval(interval);
    }

     //chceck if is streaming
    if (props.type === 'private' ? props.isAdmin === props.uid ? false : true : false) {
  setTimeout(() => {
      changState(isplaying); 
  }, 5000);
    };
}, []);

 

  function getAdminState(Admintoken,setPlayList) {
    APIController.getPlayState('BQBX2wMYnTny-n_3CUL7Gp8nXF6nNvYu8o_xJc1AwLPC5XujvyKgXf3tZRWktckutHTZvP6BhN1uuHl7TIkImgXOImS8z8M08PLj_KE2bEZPhXYKC2N2Gk-O-3Y3s_Jf_1BzaAlnNl4F5IVu_eNWV9BI9x1aLCFjE2J6axwvF_2Se_-fEPuWI300ixK5-dd8dWxpq2d7nf_rmfK_P8l5J1Pgvs13OvHgNQMAS8XmYWk3_5j8zA').then(value => {
      const time_ms = value.progress_ms;
      const newList = setPlayList.filter(value1 => value1.audio === value.item.uri)
      if (newList.length > 0) {
        const track = {
          "image": value.item.image,
          "name": value.item.name,
          "auth": value.item.auth,
          "audio": value.item.uri,
          "album": value.item.album.name,
        };
const payload  =  {
                 "uris": [track.audio],
                 "position_ms": time_ms
               }
               APIController.getPlay(token,payload);
               } else {
                 notify('looks like the admin is not playing any song right now1');
               }
               
             }).catch(error => {
               console.error(error);
               notify('looks like the admin is not playing any song right now2');
             });
  }



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

  // if (!token) return props.auth(false);
  return (


<>
 <ToastContainer
position="top-left"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    
    <div className="player pt-1 pb-1">

      {token? token==="error"?props.auth(false):<SpotifyPlayer
        ref={ref}
        autoPlay={true}
          token={token}
        uris={track.length > 0 ? [...track.map(value => value.audio)] : []}
        showSaveIcon
        callback={state => {
          changState(state.isPlaying);
          if (state.isPlaying) {
            document.title = state.track.name;
            nowPlaying = state.track.uri;
            startLyris(state.track.uri);
            setIsPlaying(true);
          }else{
            setIsPlaying(false);
          }
        if (state.error) {
          clearLogins();
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
</>
   
    
  )
}
