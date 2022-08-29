import { useState } from "react";
import PlayList from "../components/playList";
import store from "../redux/store"
function MyMessage({value}) {
   
    const [expand, setexpand] = useState("50px");
    const [iconShow, seticonShow] = useState(true);
    
   async function addAll() {
        if (value.length > 0) {
            const getPlayList = await value.map((value => {
                return {
                    "image": value.track.album.images[0].url,
                    "name": value.track.name,
                    "len": value.track.duration_ms,
                    "auth": value.track.album.artists[0].name,
                    "audio": value.track.uri,
                    "album": value.track.album.name,
                    "pre_view": value.track.preview_url
                };
            }));
            const payload = {
        type: "current-play",
        payload: [...getPlayList]
            }
        store.dispatch(payload);
        }
    }

  return (
      <>
      <div className="messaging" style={{ height: expand }}>
    <div className="flex-row flex-center flex-space">
        <div className="flex-row flex-center pb-1 pt-01">
            <img className="b-r-01 bg-secondary ml-1"
                src="https://ui-avatars.com/api/?background=random" width="40px"
                height="40px" alt=""/>
            <p className="p-01">Room playlist</p>
        </div>


        <div className="flex-row flex-center">



                  <div onClick={() => {
                      setexpand("70vh");
                      seticonShow(!iconShow);
                  }} className="pr-2 btn" style={{ display: !iconShow ? "none" : "block" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                    fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                    <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                </svg>
            </div>

                  <div onClick={() => {
                      setexpand("50px");
                      seticonShow(!iconShow);
                  }} className="pr-2 btn" style={{ display: iconShow ? "none" : "block" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                    fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                    <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
                </svg>
            </div>

        </div>
    </div>
          <hr className="bg-primary" />
          
              <div className="messages-list"> 
                  
                  <div onClick={addAll} className="bg-danger p-1 text-center btn">
                      Add All To Query
                  </div>


                  {value.map(values => {
                      return values.track? <PlayList key={values.track.uri} values={values}/>:<></>
                     })}

    
          </div>
          </div>
         
      </>
  );
}

export default MyMessage;