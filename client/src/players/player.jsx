import store from "../redux/store";
import { useState, useEffect,useRef } from "react"; 
import { memo } from "react";
import Lyrics from "../session/lyrics";
import Auth from "../auth/auth";
let tracks;
let audio = null;
let loginShow = true;
function Player() {
    const [track, setTrack] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [login, setLogin] = useState(false);
    const [notPaused, setNotPaused] = useState(true);
    const [index, setIndex] = useState(0);
    const ref = useRef(null);
    const [expandlyrics, setexpandlyrics] = useState(false);
    
    function showLogin() {
        setLogin(false);
    }

    useEffect(() => {
        store.subscribe(() => {
            tracks = store.getState();
            if (tracks.single) {
                setTrack(tracks.single);
                setIndex(0);
            }
        });

        

        audio = ref.current;

            // audio.addEventListener('ended', () => {
            //     setPlaying(false);
            //     setexpandlyrics(false);
               
            //     const next = index + 1 < track.length ? index + 1 : 0;
            //      console.log(next);
            //     setIndex(next);
            //     playOnload();
            //     if (loginShow) {
            //         setLogin(true);
            //         loginShow = false;
            //     }
            // });
console.log(audio);
            audio.onended = function() {
            alert("The audio has ended");
            }; 

            audio.onerror = function () {
                if (track.length > 0) {
                const next = index + 1 < track.length ? index + 1 : 0;
                setIndex(next);
                playOnload();
                }
               
            };
            audio.onplay = function () {
                setPlaying(true);
                setexpandlyrics(true);
                setNotPaused(true);
            }; 

             audio.onpause = function () {
                setPlaying(false);
                 setexpandlyrics(true);
                 setNotPaused(false);
        }; 
        
        playOnload();
    });

    function int() {
        if (track.length > 0) {
           try {
             audio.src = track[index].pre_view
            audio.load();
            if (notPaused) {
                audio.play();
            }
           } catch (error) {
            console.error(error);
           }
            
            
           
            document.title = track[index].name + " " + track[index].album;
        }
    }


    function playOnload() {
        if (playing) {
            audio.pause();
            int();
        } else {
            int();
        }
    }

    function dec() {
        if (tracks) {
            if (index > 1 && index < tracks.single.length) {
                setIndex(index - 1);
                playOnload();
            }
        }
       
    }


    function inc() {
        if (tracks) {
            if (index >= 0 && index < tracks.single.length - 1) {
                setIndex(index + 1)
                playOnload();
            }
        }
        
    }

const background = track.length > 0 ? `url(${track[index].image })` : "url(https://picsum.photos/200)";
  return (<>
    <div className="player pt-1 pb-1">
<div className="flex-row flex-center">
    <img className="b-r-01 play" src={track.length  > 0  & playing ? 'https://i.imgur.com/nYxJ5cV.gif': ""} style={{backgroundImage: background }} alt="" width="80" height="80" srcSet=""/>
    <div className="pl-1">
                  <h5>{ track.length > 0? track[index].name.substring(0,100):"" }</h5>
        <small className="opacity-6 font-size-08">{ track.length > 0 ? track[index].auth:"" }</small>
    </div>
</div>

<div className="flex-column flex-center">
    <div className="flex-row flex-center pt-1">
                  <div className="opacity-6 btn" >
            <svg style={{width:24, height:24}} viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M17,3L22.25,7.5L17,12L22.25,16.5L17,21V18H14.26L11.44,15.18L13.56,13.06L15.5,15H17V12L17,9H15.5L6.5,18H2V15H5.26L14.26,6H17V3M2,6H6.5L9.32,8.82L7.2,10.94L5.26,9H2V6Z" />
            </svg>
        </div>
<div className="pl-1 btn" onClick={() => {
                      dec();
        }}>
    <svg style={{width:34, height:34}} viewBox="0 0 24 24">
        <path fill="currentColor" d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" />
    </svg>
</div>
                  <div className="pl-1 btn" onClick={() => {
                      setexpandlyrics(!expandlyrics);
                 }}>
                      <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path fill="currentColor" d="M2 3C2.55 3 3 3.45 3 4V13H5V5C5 4.45 5.45 4 6 4C6.55 4 7 4.45 7 5V13H9V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V13H12.5C12.67 13 12.84 13 13 13.05V7C13 6.45 13.45 6 14 6C14.55 6 15 6.45 15 7V15.5C15 16.88 13.88 18 12.5 18H11.5C11.22 18 11 18.22 11 18.5C11 18.78 11.22 19 11.5 19H17V8C17 7.45 17.45 7 18 7C18.55 7 19 7.45 19 8V19H21V9C21 8.45 21.45 8 22 8C22.55 8 23 8.45 23 9V20C23 20.55 22.55 21 22 21H11.5C10.12 21 9 19.88 9 18.5C9 17.12 10.12 16 11.5 16H12.5C12.78 16 13 15.78 13 15.5C13 15.22 12.78 15 12.5 15H2C1.45 15 1 14.55 1 14V4C1 3.45 1.45 3 2 3Z" />
</svg>
                  </div>


<div className="pl-1 btn" onClick={() => {
                      inc();
        }}>
<svg style={{width:34, height:34}} viewBox="0 0 24 24">
    <path fill="currentColor" d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" />
</svg>
</div>
<div className="opacity-6 pl-1 btn">
    <svg role="img" height="20" width="20" viewBox="0 0 16 16" ><path fill="white" d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"></path></svg>
</div>
    </div>
    <div>

                  <audio ref={ref} controls={true} />
                  
                  {/* {track.length > 0 ? <PlayerConrols  trackUri={ track[index].name } />:<audio ref={ref} controls={true} />} */}



    </div>
</div>
      </div>
   {expandlyrics?<Lyrics  name={track.length > 0 ? track[index].name:""} album={track.length > 0 ? track[index].album:""} show = {setexpandlyrics} />:<></>}
   {login?<Auth show = {showLogin} />:<></>}
  </>
  );
}


export default memo(Player);