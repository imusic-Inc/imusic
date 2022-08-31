import { useState, useEffect,useRef } from "react"
import SpotifyPlayer from 'react-spotify-web-playback';
import { useSearchParams } from 'react-router-dom';
import store from "../redux/store";
const token = "BQCcDLXjVIcT6r6gDPq6eXTlwP1TT_4BQ1oVTdYjWj1ThCeBZHbUhkvFliQeWPlgyEXXJk8qWTH2k0Ke7OJOq0eJNN-FaxmWF1YmMndYufZoYa6KFuA0_FYPqLZjPmn3H7qekOZNXWr4j-71Tej3uPflwNT27ywgZrVaX2UAlQqQJ_MCmv4L1ADjWJtDOmkD-8jkBpsHWBODd0zHcz-RautjQEc";
export default function PlayerConrols(props) {
  const [track, setTrack] = useState([]);
  const [index, setIndex] = useState(0);
 const [searchParams] = useSearchParams();
  const ref = useRef(null);
   useEffect(() => {
        store.subscribe(() => {
           const tracks = store.getState();
            if (tracks.single) {
                setTrack(tracks.single);
              setIndex(0);
              
            }
        },[track]);

   });
  
  console.log(ref);
  
  if (!token) return null
  return (
    <div className="player p-1">

      <SpotifyPlayer
        ref={ref}
        autoPlay={true}
        token="BQD3b4Y1alXjWkJPV1EO_Qb-ltK829t6XemnRTwp85MjLulCgVm9m3_ktR6jCK6BeJ21w_hKb4S6AG3m4tz9jHnO3qzOOya4MvDt3QTYgLPfAU469ZFmcYCFTqlGi79vvTrrqzJRlV4tR81ReaAyXIxZRjbxsJ6HUYE7gx6tECxHKZaIBknTFIPLmI4i7qhVQiBWKWZvQDSJgf8iM5DrbRLV-HLcDeJPNlwvIwC0RlRI9N0W6D07Bw"
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
      />
      
    </div>
    
  )
}
