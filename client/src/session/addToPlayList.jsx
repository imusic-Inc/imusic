import TableRow from '../components/playListTableRow';
import TrackList from '../components/trackList';
function AddToPlayList() {
    return (
        <>
            <div className='addToPlayList'>
                <div className='flex-row '>
                    <div className='flex-4'>
<div className="p-1">
        <div className="flex-row flex-center pl-1">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" data-supported-dps="16x16"
                    fill="currentColor" className="mercado-match btn" width="16" height="16" focusable="false">
                   <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
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