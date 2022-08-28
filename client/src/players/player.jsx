import store from "../redux/store";
import { useState, useEffect } from "react"; 
import { memo } from "react";
import MyPlayerFunctions from "./playerMethods";
import Lyrics from "../session/lyrics";
import Auth from "../auth/auth";
import Progress from "./progress";
let tracks;
const player = MyPlayerFunctions();
function Player() {
    const [track, setTrack] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [login, setLogin] = useState(false);
    const [index, setIndex] = useState(0);
    const [expandlyrics, setexpandlyrics] = useState(false);
    
    function showAndHideLyrics() {
        setexpandlyrics(!expandlyrics)
    }

    function showLogin() {
        setLogin(false);
    }

    useEffect(() => {
        store.subscribe(() => {
            tracks = store.getState();
            if (tracks.single) {
                setTrack(tracks.single);
                setIndex(0);
                playOnload();
            }
        });
    });


    useEffect(() => {
        tracks = store.getState();
        if (tracks && tracks.single) {
             playOnload();
        }
    });
    

    function setUrl() {
        player.setSrc(tracks.single[index].pre_view).then(() => {
        document.title = tracks.single[index].name +" "+ tracks.single[index].album;
    if (player.canPlay) {
        player.play(setPlaying,setIndex,playOnload,index,tracks.length,setLogin).then(() => {
            setPlaying(true);
            setexpandlyrics(true);
        })
            };
        });
    };

    function playOnload() {
        if (tracks && tracks.single) {
            if (playing) {
                setUrl();
            } else {
                player.pause();
                setUrl();
            };
            
        };
    }

    function dec() {
        if (tracks) {
            console.log(index > 1 && index < tracks.single.length);
            if (index > 1 && index < tracks.single.length) {
                setIndex(index - 1);
            }
        }
       
    }

    function inc() {
        if (tracks) {
            if (index >= 0 && index < tracks.single.length-1) {
                setIndex(index+1)
            }
        }
        
    }


  return (<>
    <div className="player p-1">
<div className="flex-row flex-center">
    <img className="b-r-01" src={ track.length > 0? track[index].image:"" } alt="" width="80" height="80" srcSet=""/>
    <div className="pl-1">
                  <h4>{ track.length > 0? track[index].name:"" }</h4>
        <h6 className="opacity-6">{ track.length > 0 ? track[index].name:"" }</h6>
    </div>
</div>

<div className="flex-column flex-center">
    <div className="flex-row flex-center">
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
                  {playing ? <div className="pl-1 btn" onClick={() => player.play(setPlaying,setIndex,playOnload,index,tracks.length,setLogin).then(() => {
     setPlaying(false);
})}>
    <svg style={{width:34, height:34}} viewBox="0 0 24 24">
                               <path fill="currentColor"
            d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
    </svg>
                  </div> : <div className="pl-1 btn" onClick={() => player.pause().then(() => {
                      setPlaying(true);
                      setexpandlyrics(true);
})}>
                          <svg style={{ width: 34, height: 34 }} viewBox="0 0 24 24">
                              <path fill="currentColor" d="M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
</svg>
</div>}


<div className="pl-1 btn" onClick={() => {
                      inc();
        }}>
<svg style={{width:34, height:34}} viewBox="0 0 24 24">
    <path fill="currentColor" d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" />
</svg>
</div>
<div className="opacity-6 pl-1 btn">
    <svg role="img" height="20" width="20" viewBox="0 0 16 16" class="Svg-ytk21e-0 jAKAlG"><path fill="white" d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"></path></svg>
</div>
    </div>
    <div>

                  <Progress index={index}  track={track} />
                  


    </div>
</div>
      </div>
   {expandlyrics?<Lyrics  name={track.length > 0 ? track[index].name:""} album={track.length > 0 ? track[index].album:""} show = {showAndHideLyrics} />:<></>}
   {login?<Auth show = {showLogin} />:<></>}
  </>
  );
}


export default memo(Player);