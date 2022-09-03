import APIController from "../api/functons";
import { memo, useState } from "react"; 
import Session from "./session";
import {NavLink} from "react-router-dom";
import { SessionTrack } from "./loadingSession";
let a = 0;
function PublicSession(props) {
    const [playList, setPlayList] = useState([]);
    async function init() {
        let token = await APIController.getToken();
    const playlist = await APIController.getPlaylistByGenre(token,props.id,10);
        setPlayList(playlist);
    }
    
    if (a < 2) {
       init(); 
    }

    
    return (
        <>
            <h3 id="trending" className="pt-1">{props.name}</h3>
            
          <div className="flex-row p-session">
              { playList.length <1? <SessionTrack/> :playList.map(value => {
                  return  <NavLink to={"/room/"+value.id+'?type=public&name='+props.name}><Session name={value.name} info={value.description} image={value.images[0].url} key={value.id} /></NavLink> 
              })}
            </div>
        </>
    )
}

export default memo(PublicSession);