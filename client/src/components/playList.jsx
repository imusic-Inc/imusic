import { memo } from "react";
import store from "../redux/store"



function PlayList(props) {
    const payload = {
        type: "current-play",
        payload: [{
                "image": props.values.track.album.images[0].url,
                "name": props.values.track.name,
                "len": props.values.track.duration_ms,
                "auth": props.values.track.album.artists[0].name,
                "audio": props.values.track.uri,
                "album": props.values.track.album.name,
                "pre_view": props.values.track.preview_url
        }]}
    function clicked() {
        store.dispatch(payload);
}
    return (props.values.track ?<div onClick={clicked} className="flex-row flex-center  btn card p-01" >
        <div className="flex-1">
             <img className="b-r-01 bg-secondary ml-1"
            src={props.values.track.album.images[0].url} width="60px"
            height="50px" alt=""/>
       </div>
        <div className="pl-1 flex-5">
            <h5>{props.values.track.name.substring(0,100).trim()}</h5>
            <h6 className="opacity-6">{ props.values.track.album.artists[0].name}</h6>
        </div>
        </div>:<></>)
}
export default memo(PlayList);