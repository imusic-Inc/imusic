import { memo, useState,useEffect } from "react"; 
import Session from "./session";
import {NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import getData from '../api/backendcalls';
import PassCode from "./passcode";
function IMusicSessions(props) {
    const [sessions, setSessions] = useState([]);
    const [showpass, setShowpass] = useState(false);
    const [passCode, setPassCode] = useState('');
     const navigate = useNavigate();
    useEffect(() => {
        int();
    },[sessions]);

    function show(id) {     
        setShowpass(!showpass);
        setPassCode(id);
    }

    function joinsession(link,id) {
        getData.joinPublicSession(`session/${id}/session`).then(value => {
            if (value.status) {
                navigate(link, { replace: false });
            }
        })
      
    }

    function int() {
    getData.getSessionByType('session',props.type).then((value => {
        setSessions(value);
    }))}


    return (
        <>
            {sessions.length < 1 ? null :<div>
            <h3 className="pt-1">{props.name}</h3>
            <div className="flex-row p-session">
                {sessions.map(value => {
                    return props.type === 'private' ? <div onClick={() => { 
                        show(value.id);
                    }}> <Session name={value.name} info={value.description} image={value.photo} key={value.id} /></div>: <div  onClick={()=>joinsession("/room/"+value.id+'?type='+props.type+'&name='+value.name,value.id)} ><Session name={value.name} info={value.description} image={value.photo} key={value.id} /></div> 
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