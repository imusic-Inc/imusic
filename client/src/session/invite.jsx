import InviteList from "../components/inviteList";

function Invite(props) {
    return (<div className='invite bg-default'>
        <h1 className='text-right pr-1 pt-1 btn' >
            <svg  onClick={props.show} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"
                className="mercado-match" width="16" height="16" focusable="false">
                <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
            </svg>
        </h1>
        <div className='flex-6 p-1'>
            <div className="p-1">
                <h4>Invite a friend to join this music room</h4>
                <div className="flex-row flex-center flex-space" >
                    <input type="text" className="playSearch" placeholder="&#9835; Search by username or email" name="search" id="playSearch" />
                    <div className="addPlayList btn bg-danger">
                        Search
                    </div>
                </div>
            </div>
            <div className='playList-list-save'>
                <InviteList track="Kwaku the traveler" by="Black Sherif" image="../images/My project-1(1).png" />
                <InviteList track="Kwaku the traveler" by="Black Sherif" image="../images/My project-1(1).png" />
                <InviteList track="Kwaku the traveler" by="Black Sherif" image="../images/My project-1(1).png" />
                            
                <InviteList track="Kwaku the traveler" by="Black Sherif" image="../images/My project-1(1).png" />
            </div>
        </div>
    </div>);
}
export default Invite;