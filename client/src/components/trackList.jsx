import { memo } from "react";
import store from "../redux/store";
function TrackList(props) {
    console.log(props);
    const payload = {
        type: "add-to-playlist",
        payload: [{
                "image": props.values.album.images[0].url,
                "name": props.values.name,
                "length": props.values.duration_ms,
                "auth": props.values.album.artists[0].name,
                "audio": props.values.uri,
                "album": props.values.album.name,
                "pre_view": props.values.preview_url
        }]
    }
    
    function clicked() {
        store.dispatch(payload);
}

    return (<div className="flex-row flex-center flex-space p-01">
        <div className="flex-row flex-center">
        <img className="b-r-01" src={props.values.album.images[0].url} alt={props.values.name} width="50" height="50" srcSet=""/>
        <div className="pl-1">
            <h4>{props.values.name}</h4>
            <h6 className="opacity-6">{props.values.album.artists[0].name}</h6>
        </div>
    </div>
        <div onClick={clicked} className="addPlayList btn ">
    Add
        </div>
    </div>)
}
export default memo(TrackList);