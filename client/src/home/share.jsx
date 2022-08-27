import { useState } from "react"; 
function Share(props) {
const [clip, setClip] = useState('');
    function addToClib() {
        setClip("https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#source-code")
        navigator.clipboard.writeText(clip);
        props.show();
    }


    return (<div className="share-contaner pr-2 pl-2 bg-default">
        <div className="flex-6 pl-2 ml-1">
            <em  className="search" >https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#source-code</em>
        </div>
        <div onClick={addToClib} className="flex-1 p-2 btn search-btn">
            Copy
        </div>
    </div>);
}

export default Share;