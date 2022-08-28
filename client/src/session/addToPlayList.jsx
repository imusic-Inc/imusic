import TableRow from '../components/playListTableRow';
import TrackList from '../components/trackList';
import { useState,useEffect } from "react";
import APIController from '../api/functons';
import store from "../redux/store";
let token;
var addPlayList;
function AddToPlayList(props) {
    const [tracks, setTracks] = useState([]);
    const [playlist, setPlaylist] = useState([]);
    const [message, setMessage] = useState('');



    async function getSearch() {
        setTracks([]);
        if (!token) {
      APIController.getToken().then(value => {
          token = value;
          if (message.length > 3) {
               APIController.getSearch(token,message).then((values) => {
                   setTracks(values);
          })
          }
        });
        } else {
             if (message.length > 3) {
               APIController.getSearch(token,message).then((values) => {
                   setTracks(values);
          })
          }
        }
        
    }

     
useEffect(() => {
       store.subscribe(() => {
         addPlayList = store.getState();
            if (addPlayList.addToPlayList) {
                setPlaylist([...addPlayList.addToPlayList]);
                
            }
       });
     addPlayList = store.getState();
    });

    return (
        <>
            <div className='addToPlayList bg-default' >
                <div className='flex-row '>
                    <div className='flex-4'>
<div className="p-1">
        <div className="flex-row flex-center pl-1">
            <svg xmlns="http://www.w3.org/2000/svg"  onClick={props.show} viewBox="0 0 16 16" data-supported-dps="16x16"
                    fill="currentColor" className="mercado-match btn" width="16" height="16" focusable="false">
                   <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                </svg>
            <p className="p-1">Playlist Manager</p>
                            </div>

     <div className="flex-row flex-center flex-space">
                                <p className="p-1">Playlist Manager</p>
                                <div className='btn btn-default p-01 bg-success'>
                                Save
                                </div>
        </div>
                        </div>
                        
                        <div className='playList-list-save'>
                           <table className="p-1">
    <tr>
        <th className="opacity-6 text-left">Title</th>
        <th className="opacity-6 text-left">album</th>
                  <th className="opacity-6 text-left">
            X
    </th>
                                </tr>
                                {playlist.length > 0 ? playlist.map((value,index) => {
                                   return <TableRow  number={index} image = {value.image}  name={value.name} by={value.auth} album={value.album} len={value.length} />
                               }):<></>}
</table>
                        </div>
                        
                    </div>
                    <div className='flex-6 p-1'>
                        <div className="p-1">

    <h4>Let's find something for your room</h4>
    <div className="flex-row flex-center flex-space" >
        <input type="text" onChange={event => setMessage(event.target.value)} className="playSearch" placeholder="&#9835; Search..." name="search" id="playSearch"/>
        <div onClick={getSearch}  className="addPlayList btn bg-danger">
            Search
        </div>
    </div>
</div>
                        <div className='playList-list-save'>
                            {tracks.length > 0 ? tracks.map(value => {
                                return <TrackList values={value} />
                               
                             }) :<></>}
                           
</div>
                    </div>
                </div>
            </div>
    </>)
}

export default AddToPlayList;