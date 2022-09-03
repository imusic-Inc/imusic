import { memo, useState,useEffect } from "react"; 
import Session from "./session";
import {NavLink} from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import getData from '../api/backendcalls';
import PassCode from "./passcode";
function IMusicSessions(props) {
    const [sessions, setSessions] = useState([]);
    const [showpass, setShowpass] = useState(false);
    const [passCode, setPassCode] = useState(false);
    useEffect(() => {
        int();
    });

    function show(pass) {
        setShowpass(!showpass);
        setPassCode(pass);
    }

    function int() {
    getData.getSessionByType('session',props.type).then((value => {
        setSessions(value);
    }))}


    return (
        <>
            {sessions.length < 1 ? null :<div>
            <h3 id="trending" className="pt-1">{props.name}</h3>
            <div className="flex-row p-session">
                {sessions.map(value => {
                    return props.type === 'private' ? <div onClick={() => { 
                        show('1234');
                    }}> <Session name={value.name} info={value.description} image={value.photo} key={value.id} /></div>: <NavLink to={"/room/"+value.id+'?type='+props.type+'&name='+value.name}><Session name={value.name} info={value.description} image={value.photo} key={value.id} /></NavLink> 
              })}
            </div>
            </div>}
            
            {showpass?<PassCode pass={passCode} show = {show} link={sessions.map(value => {
                  return "/room/"+value.id+'?type='+props.type+'&name='+value.name
              })} />:null}
        </>
    )
}

export default memo(IMusicSessions);