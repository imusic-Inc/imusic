import { memo } from "react";
import store from "../redux/store"
function PlayList(props) {
    const payload = {
        type: "current-play",
        payload: [{ ...props.values }]}
    function clicked() {
        store.dispatch(payload);
}
    return (<div onClick={clicked} className="flex-row flex-center  btn card p-01" >
        <div className="flex-1">
             <img className="b-r-01 bg-secondary ml-1"
            src={props.values.image} width="60px"
            height="50px" alt=""/>
       </div>
        <div className="pl-1 flex-5">
            <h5 className="opacity-8">{props.values.name.substring(0,60).trim()}</h5>
            <small className="opacity-6 font-size-08">{ props.values.auth}</small>
        </div>
        </div>)
}
export default memo(PlayList);