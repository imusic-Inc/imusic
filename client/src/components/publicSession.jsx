import APIController from "../api/functons";
import { useState } from "react"; 
import Session from "./session";
import { SessionTrack } from "./loadingSession";

function PublicSession(props) {
    const [playList, setPlayList] = useState([]);
    async function init() {
        let token = await APIController.getToken();
    const playlist = await APIController.getPlaylistByGenre(token,props.id);
        setPlayList(playlist);
    }

    init();
    return (
        <>
            <a href={"/"+props.id+"/"+props.name}><h3 id="trending" class="pt-1">{props.name}</h3></a>
          <div class="flex-row p-session">
              { playList.length <1? <SessionTrack/> :playList.map(value => {
                  return <Session name={value.name} info={value.description} image={value.images[0].url} key={value.id} />
              })}
            </div>
        </>
    )
}

export default PublicSession;