import {Link} from "react-router-dom";
function CreateSession(props) {
    return (<div className="createSession p-1">
        <div className="flex-row flex-center flex-space">
    <div className="flex-row flex-center">
        <p className="pl-1">Let setup your iMusic Room</p>
    </div>


    <div className="flex-row flex-center">
        <div className="p-1 btn" onClick={props.show}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"
            className="mercado-match" width="16" height="16" focusable="false">
            <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
        </svg>
        </div>
    </div>
</div>
              <div className="form-control p-1">
            <div className="pl-1 pr-1">
                <label htmlFor="name">iMusic Room name</label>
                <input type="text" className="playSearch w-100 " placeholder="iMusic Room name" name="name" />
            </div>
            <div className="pl-1 pr-1">
                <label htmlFor="description">iMusic Room name</label>
                <textarea  className="playSearch-textArea w-100" rows={3} placeholder="iMusic Room description" name="description"></textarea>
            </div>
            <div className="pl-1 pr-1">
                <label htmlFor="tags">iMusic Room tags</label>
                <input type="text" className="playSearch p-1 w-100 mt-1" placeholder="iMusic Room tags" name="tags" />
            </div>

            <div className="pr-1 pl-1 pt-1 flex-row flex-center">
                <label htmlFor="" className="pr-1">Is your iMusic Room private?</label>
                <div className="flex-row flex-center">
                   <div className="pr-1" >YES</div>  <input type="checkbox" id="switch" /><label id="switched" for="switch">Toggle</label> <div className="pl-1" >NO</div>
                </div>
            </div>
            

            <Link  to="room">
            <div className="btn flex-row bg-danger p-1 flex-center mt-1 flex-center-justify text-center">
                    Create Session
                </div>
            </Link>
        </div>
        
          </div>)
}

export default CreateSession;