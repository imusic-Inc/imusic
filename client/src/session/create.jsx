function Create() {
  return (
    <div className="flex-6 left-20 p-1">
<div className="session-board flex-row flex-center">
<img className="p-1" src="./images/My project-1(2).png" alt="" width="250px" height="200px" srcset=""/>

<div className="p-1 ">
    <h4 className="p-2">Playlist</h4>
    <h1 contenteditable = 'true' className="">My Playlist 1#</h1>
</div>
</div>
<hr/>

<table className="p-1">
    <tr>
        <th className="opacity-6">No.</th>
        <th className="opacity-6">Title</th>
        <th className="opacity-6">album</th>
        <th className="opacity-6">
            <svg role="img" height="20" width="20" viewBox="0 0 16 16">
            <path fill="white" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path>
            <path fill="white" d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z"></path>
        </svg>
    </th>
    </tr>
<tr>
    <td># 1</td>
    <td> 
        <div className="flex-row flex-center">
            <img className="b-r-01" src="./images/My project-1(2).png" alt="" width="50" height="50" srcset=""/>
            <div className="p-1">
                <h4>Kofi the Traveler</h4>
                <h6 className="opacity-6">Black Shaif</h6>
            </div>
        </div>
    </td>
    <td>Maria Anders</td>
    <td>2:51</td>
</tr>
</table>

<div className="p-1">
    <h4>Let's find something for your playlist</h4>
    <div className="flex-row flex-center flex-space" >
        <input type="text" className="playSearch" placeholder="&#9835; Search..." name="search" id="playSearch"/>
        <div className="addPlayList btn bg-success">
            save
        </div>
    </div>
</div>

<div className="flex-row flex-center flex-space pt-1">
    <div className="flex-row flex-center">
        <img className="b-r-01" src="./images/My project-1(1).png" alt="" width="50" height="50" srcset=""/>
        <div className="pl-1">
            <h4>Kofi the Traveler</h4>
            <h6 className="opacity-6">Black Shaif</h6>
        </div>
    </div>
<div className="addPlayList btn ">
    Add
</div>
          </div>
          <br /><br />
      </div>
      
  );
}

export default Create;