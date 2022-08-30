// import lyricsSearcher from "lyrics-searcher";
import { useEffect, useState} from "react";

function Lyrics(props) {
    const [lyrics, setLyrics] = useState('');
    return (<div className='lyrics p-01'>
        <div className="text-p-01 p-1 text-right btn" onClick={() => { props.show(false) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"
            className="mercado-match close" width="16" height="16" focusable="false">
            <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
        </svg>
          </div>
                <div className='lyrics-tex p-1t text-center'>
<h2 className="text-md">{props.name + " " + props.album}</h2>
                </div>

            </div>)
}
export default Lyrics;