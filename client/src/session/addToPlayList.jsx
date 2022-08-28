import TableRow from '../components/playListTableRow';
import TrackList from '../components/trackList';
import { useState } from "react";
function AddToPlayList(props) {
    const [expand, setexpand] = useState("50px");

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
<TableRow  number="1" image = "../images/My project-1(2).png"  name="Kwaku the traveler" by="Black Sherif" album="The time is now" len="3:4" />
<TableRow  number="2" image = "../images/My project-1(2).png"  name="Kwaku the traveler" by="Black Sherif" album="The time is now" len="3:4" />
<TableRow  number="3" image = "../images/My project-1(2).png"  name="Kwaku the traveler" by="Black Sherif" album="The time is now" len="3:4" />
<TableRow  number="4" image = "../images/My project-1(2).png"  name="Kwaku the traveler" by="Black Sherif" album="The time is now" len="3:4" />
</table>
                        </div>
                        
                    </div>
                    <div className='flex-6 p-1'>
                        <div className="p-1">
    <h4>Let's find something for your room</h4>
    <div className="flex-row flex-center flex-space" >
        <input type="text" className="playSearch" placeholder="&#9835; Search..." name="search" id="playSearch"/>
        <div  className="addPlayList btn bg-danger">
            Search
        </div>
    </div>
</div>
                        <div className='playList-list-save'>
                            <TrackList track="Kwaku the traveler" by="Black Sherif" image="../images/My project-1(1).png" />
                            <TrackList track="Kwaku the traveler" by="Black Sherif" image="../images/My project-1(1).png" />
                            <TrackList track="Kwaku the traveler" by="Black Sherif" image="../images/My project-1(1).png" />
                            
                            <TrackList  track="Kwaku the traveler" by="Black Sherif" image="../images/My project-1(1).png"/>
</div>
                    </div>
                </div>
            </div>
    </>)
}

export default AddToPlayList;