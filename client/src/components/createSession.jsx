import {NavLink} from "react-router-dom";
import generateRandomString from "../api/keygen";
import { useState } from "react";
function CreateSession(props) {
    const [name, setName] = useState('');
    const [dis, setDis] = useState('');
    const [tags, setTags] = useState('');
    const [visibility, setVisibility] = useState(true);


    const type = visibility ? 'private' : 'public';

    return (<div className="createSession bg-default p-1">
        <div className="flex-row flex-center flex-space">
    <div className="flex-row flex-center">
        <h4 className="pl-1">Let setup your iMusic Room</h4>
    </div>


    <div className="flex-row flex-center">
        <div className="p-1 btn" onClick={props.show}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"
            className="mercado-match close" width="16" height="16" focusable="false">
            <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
        </svg>
        </div>
    </div>
</div>
              <div className="form-control p-1">
            <div className="pr-1 pl-1 ">
                <label htmlFor="name" className="opacity-6">iMusic Room name</label>
                <input type="text" onChange={event => setName(event.target.value)}  className="playSearch w-100 " placeholder="Room name" name="name" />
            </div>
            <div className="pr-1 pl-1 pt-01">
                <label htmlFor="description" className="opacity-6">iMusic Room description</label>
                <textarea  className="playSearch-textArea w-100" onChange={event => setDis(event.target.value)} rows={3} placeholder="Room description" name="description"></textarea>
            </div>
            <div className="pr-1 pl-1 pt-01">
                <label htmlFor="tags" className="opacity-6">iMusic Room tags</label>
                <input type="text" className="playSearch p-1 w-100 mt-1" onChange={event => setTags(event.target.value)} placeholder="Room tags" name="tags" />
            </div>

            <div className="pr-1 pl-1 pt-01 flex-row flex-center">
                <label htmlFor="" className="pr-1 opacity-6"  >Is your iMusic Room private?</label>
                <div className="flex-row flex-center">
                   <div className="pr-1" >NO</div>  <input type="checkbox" onChange={event => setVisibility(event.target.value)} id="switch" /><label id="switched" for="switch">Toggle</label> <div className="pl-1" >YES</div>
                </div>
            </div>
            

            <NavLink  to={'../room/'+generateRandomString(50)+'imusicroom?name='+name+'&admin=true&type='+type}>
            <div className="btn flex-row bg-danger pl-2 p-1 flex-center mt-1 flex-center-justify text-center">
                    Create Session
                </div>
            </NavLink>
        </div>
        
          </div>)
}

export default CreateSession;