import store from "../redux/store";
import { useState } from "react"; 
import { memo } from "react";
import MyPlayerFunctions from "./playerMethods";
let tracks;
const player = MyPlayerFunctions();
function Player() {
    const [track, setTrack] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [index, setIndex] = useState(0);
    store.subscribe(() => {
        tracks = store.getState();
        if (tracks.single) {
            setTrack(tracks.single);
            setIndex(0);
        }
    });

    function playOnload() {
        if (tracks && playing) {
        let at = index < tracks.length ? index : tracks.length - 1;
        console.log(index);
        player.clean();
        player.setSrc(tracks.single[index].audio);
    if (player.canPlay) {
        player.play(setPlaying,setIndex,playOnload,index).then(() => {
            setPlaying(true);
        })
    }
       
    } else {
        if (tracks) {
            player.pause();
        }
    }
    }

    playOnload();
    
   
  return (
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
        <div className="opacity-6 btn">
            <svg style={{width:24, height:24}} viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M17,3L22.25,7.5L17,12L22.25,16.5L17,21V18H14.26L11.44,15.18L13.56,13.06L15.5,15H17V12L17,9H15.5L6.5,18H2V15H5.26L14.26,6H17V3M2,6H6.5L9.32,8.82L7.2,10.94L5.26,9H2V6Z" />
            </svg>
        </div>
<div className="pl-1 btn">
    <svg style={{width:34, height:34}} viewBox="0 0 24 24">
        <path fill="currentColor" d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" />
    </svg>
</div>
                  {playing ? <div className="pl-1 btn" onClick={() => player.play(setPlaying,setIndex,playOnload,index).then(() => {
     setPlaying(false);
})}>
    <svg style={{width:34, height:34}} viewBox="0 0 24 24">
       
    <path fill="currentColor" d="M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
    </svg>
                  </div> : <div className="pl-1 btn" onClick={() => player.pause().then(() => {
                      setPlaying(true);
})}>
                          <svg style={{ width: 34, height: 34 }} viewBox="0 0 24 24">
                               <path fill="currentColor"
            d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
</svg>
</div>}


<div className="pl-1 btn">
<svg style={{width:34, height:34}} viewBox="0 0 24 24">
    <path fill="currentColor" d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" />
</svg>
</div>
<div className="opacity-6 pl-1 btn">
    <svg style={{width:24, height:24}} viewBox="0 0 24 24">
        <path fill="currentColor"
            d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
    </svg>
</div>
    </div>
    <div>
<div className="flex-row flex-center ">
    <div className="pr-1">0:0</div>
    <div className="progress-contaner btn">
        <div className="progress" style={{width: "00%"}}></div>
    </div>
    <div className="pl-1">{ track.length > 0?String(Number(track[index].length)/(1000*60)).substring(0,5):"" }</div>
</div>
    </div>
</div>
</div>
  );
}


export default memo(Player);