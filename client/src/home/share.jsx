import { useState, useEffect } from "react"; 
function Share(props) {
    const [clip, setClip] = useState('');
    
    useEffect(() => {
        setClip(window.location.href);
    },[clip])

    function addToClib() {
        navigator.clipboard.writeText(clip);
        props.show();
    }


    return (<div className="share-contaner pr-2 pl-2 bg-default">
        <div className="flex-6 overflow-x pl-2 ml-1">
            <em className="search" >{ clip}</em>
        </div>
        <div onClick={addToClib} className="flex-1 p-2 btn search-btn">
            Copy
        </div>
    </div>);
}

export default Share;