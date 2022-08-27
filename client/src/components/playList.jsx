import { memo } from "react";
import APIController from "../api/functons"
import store from "../redux/store"



function PlayList(props) {
    const payload = {
        type: "current-play",
        payload: [{
                "image": props.values.track.album.images[0].url,
                "name": props.values.track.name,
                "length": props.values.track.duration_ms,
                "auth": props.values.track.album.artists[0].name,
                "audio": props.values.track.preview_url
        }]}
    function clicked() {
        store.dispatch(payload);
}
    return ( props.values.track?<tr >
        <td>{props.id}</td>
    <td className="btn"> 
        <div className="flex-row flex-center">
            <img className="b-r-01" src={props.values.track.album.images[0].url} alt="" width="50" height="50" srcSet=""/>
            <div className="p-1">
                    <h5>{props.values.track.name.substring(0,20).trim()}</h5>
                    <h6 className="opacity-6">{props.values.track.album.artists.map(value => {
                        return <span>{value.name}, </span>
                    })}</h6>
            </div>
        </div>
    </td>
        <td>{ props.values.track.album.artists[0].name}</td>
        <td>{ APIController.timeSince(Date.now() - (new Date() - new Date(props.values.added_at)))}</td>
        <td>{String(Number(props.values.track.duration_ms)/(1000*60)).substring(0,5)} m</td>
    <td className="btn text-danger" onClick={clicked} ><svg style={{width:"34px",height:"34px"}} viewBox="0 0 24 24">
    <path fill="red" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z" />
</svg></td>
    <td className="btn text-danger">X</td>
</tr>:<></>)
}
export default memo(PlayList);