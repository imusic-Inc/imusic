import CreateSession from "../components/createSession";
import TableRow from "../components/playListTableRow";
import TrackList from "../components/trackList";
import { useState } from "react"; 
function Create() {
    const [showCreate, setshowCreate] = useState(false);
    function showCreatScreen() {
        setshowCreate(false);
    }
  return (
      <>
      <div className="flex-6 left-20 p-1">
<div className="session-board flex-row flex-center">
<img className="p-1" src="./images/My project-1(2).png" alt="" width="250px" height="200px" srcSet=""/>

<div className="p-1 ">
    <h4 className="p-2">Session Playlist</h4>
    <h1 contenteditable = 'true' className="">My Session 1#</h1>
</div>
</div>
<hr/>

<table className="p-1">
    <tr>
        <th className="opacity-6 text-left">No.</th>
        <th className="opacity-6 text-left">Title</th>
        <th className="opacity-6 text-left">album</th>
        <th className="opacity-6 text-left">
            <svg role="img" height="20" width="20" viewBox="0 0 16 16">
            <path fill="white" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path>
            <path fill="white" d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z"></path>
        </svg>
                  </th>
                  <th className="opacity-6 text-left">
            X
    </th>
    </tr>
<TableRow  number="1" image = "./images/My project-1(2).png"  name="Kwaku the traveler" by="Black Sherif" album="The time is now" len="3:4" />
<TableRow  number="2" image = "./images/My project-1(2).png"  name="Kwaku the traveler" by="Black Sherif" album="The time is now" len="3:4" />
<TableRow  number="3" image = "./images/My project-1(2).png"  name="Kwaku the traveler" by="Black Sherif" album="The time is now" len="3:4" />
<TableRow  number="4" image = "./images/My project-1(2).png"  name="Kwaku the traveler" by="Black Sherif" album="The time is now" len="3:4" />
</table>

<div className="p-1">
    <h4>Let's find something for your session</h4>
    <div className="flex-row flex-center flex-space" >
        <input type="text" className="playSearch" placeholder="&#9835; Search..." name="search" id="playSearch"/>
        <div onClick={()=>setshowCreate(true)} className="addPlayList btn bg-success">
            save
        </div>
    </div>
</div>

<div className="trackList">
    <TrackList  track="Kwaku the traveler" by="Black Sherif" image="./images/My project-1(1).png"/>
    <TrackList  track="Kwaku the traveler" by="Black Sherif" image="./images/My project-1(1).png"/>
    <TrackList  track="Kwaku the traveler" by="Black Sherif" image="./images/My project-1(1).png"/>
              </div>
              
              
          <br /><br />
          <br /><br />
      </div>

          
          {showCreate ? <CreateSession show={ showCreatScreen} />:<></>} 
      
      </>
      
  );
}

export default Create;