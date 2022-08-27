import Discover from "../home/discover";
import { useState } from "react";
import Join from "../session/join";
import Disable from "../session/disable";
import SignUp from "../auth/signup";
import {BrowserRouter as Router,Routes as Switch,Route,Link} from "react-router-dom";
import SignIn from "../auth/signin";
import MySession from "../session/mysession";
import Create from "../session/create";


function Menu() {
    const [Manasession, setManasession] = useState("");
    let managSession = <></>;

     if (Manasession === "Join") {
        managSession = <Join onClick = {hideManasession} />;
    } else if (Manasession === "Disable") {
         managSession = < Disable onClick = {hideManasession}/>;
     } else {
         managSession = <></>;
     }
    
    function hideManasession() {
        setManasession("");
    }

    return (
      <Router>
      <div className="flex-2 bg-secondary p-1 fixed left"> 
<img src="./images/logo.png" alt="IMusic" width="60%" height="40px" srcSet=""/>
<div className="flex-row flex-center pt-3 opacity-8">
    <svg style={{width:24,height:24}} viewBox="0 0 24 24">
        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
    </svg>

    <h5 className=" pl-1"> MENU</h5>
</div>


<Link to="/discover">
            <div  className="flex-row flex-center pt-1 btn opacity-6">
<svg style={{width:24,height:24}} viewBox="0 0 24 24">
    <path fill="currentColor"
        d="M5 20V12H2L12 3L22 12H19V20H5M12 5.69L7 10.19V18H17V10.19L12 5.69M11 17V16H13V17H11M11 15C10.72 15 10.5 14.78 10.5 14.5V13.6C9.6 13.08 9 12.11 9 11C9 9.34 10.34 8 12 8C13.66 8 15 9.34 15 11C15 12.11 14.4 13.08 13.5 13.6V14.5C13.5 14.78 13.28 15 13 15H11Z" />
</svg>

    <p className="pl-01">Discover</p>
</div>
</Link>

    <Link to="/my-session" >
                    <div  className="flex-row flex-center pt-1 btn opacity-6" >
<svg style={{width:24,height:24}} viewBox="0 0 24 24">
    <path fill="currentColor"
        d="M17.36,20.2V14.82H19.15V22H3V14.82H4.8V20.2H17.36M6.77,14.32L7.14,12.56L15.93,14.41L15.56,16.17L6.77,14.32M7.93,10.11L8.69,8.5L16.83,12.28L16.07,13.9L7.93,10.11M10.19,6.12L11.34,4.74L18.24,10.5L17.09,11.87L10.19,6.12M14.64,1.87L20,9.08L18.56,10.15L13.2,2.94L14.64,1.87M6.59,18.41V16.61H15.57V18.41H6.59Z" />
</svg>

<p className="pl-01 btn">My Session</p>
</div>
</Link>
<div className="flex-row flex-center pt-3 opacity-8 ">
    <svg style={{width:24,height:24}} viewBox="0 0 24 24">
        <path fill="currentColor"
            d="M6,2A4,4 0 0,1 10,6V8H14V6A4,4 0 0,1 18,2A4,4 0 0,1 22,6A4,4 0 0,1 18,10H16V14H18A4,4 0 0,1 22,18A4,4 0 0,1 18,22A4,4 0 0,1 14,18V16H10V18A4,4 0 0,1 6,22A4,4 0 0,1 2,18A4,4 0 0,1 6,14H8V10H6A4,4 0 0,1 2,6A4,4 0 0,1 6,2M16,18A2,2 0 0,0 18,20A2,2 0 0,0 20,18A2,2 0 0,0 18,16H16V18M14,10H10V14H14V10M6,16A2,2 0 0,0 4,18A2,2 0 0,0 6,20A2,2 0 0,0 8,18V16H6M8,6A2,2 0 0,0 6,4A2,2 0 0,0 4,6A2,2 0 0,0 6,8H8V6M18,8A2,2 0 0,0 20,6A2,2 0 0,0 18,4A2,2 0 0,0 16,6V8H18Z" />
    </svg>

    <h5 className="pl-1">MANAGE SESSION</h5>
</div>


<Link to="/create"  className="flex-row flex-center pt-1 btn opacity-6 " >
<svg style={{width:24,height:24}} viewBox="0 0 24 24">
    <path fill="currentColor"
        d="M16,16.92C15.67,16.97 15.34,17 15,17C14.66,17 14.33,16.97 14,16.92V13.41L11.5,15.89C11,15.5 10.5,15 10.11,14.5L12.59,12H9.08C9.03,11.67 9,11.34 9,11C9,10.66 9.03,10.33 9.08,10H12.59L10.11,7.5C10.3,7.25 10.5,7 10.76,6.76V6.76C11,6.5 11.25,6.3 11.5,6.11L14,8.59V5.08C14.33,5.03 14.66,5 15,5C15.34,5 15.67,5.03 16,5.08V8.59L18.5,6.11C19,6.5 19.5,7 19.89,7.5L17.41,10H20.92C20.97,10.33 21,10.66 21,11C21,11.34 20.97,11.67 20.92,12H17.41L19.89,14.5C19.7,14.75 19.5,15 19.24,15.24V15.24C19,15.5 18.75,15.7 18.5,15.89L16,13.41V16.92H16V16.92M5,19A2,2 0 0,1 7,17A2,2 0 0,1 9,19A2,2 0 0,1 7,21A2,2 0 0,1 5,19H5Z" />
</svg>

<p className="btn pl-01">Create</p>
</Link>


<div onClick={() => setManasession("Join")} className="flex-row flex-center pt-1 btn opacity-6 ">
<svg style={{width:24,height:24}} viewBox="0 0 24 24">
    <path fill="currentColor"
        d="M9,5A7,7 0 0,0 2,12A7,7 0 0,0 9,19C10.04,19 11.06,18.76 12,18.32C12.94,18.76 13.96,19 15,19A7,7 0 0,0 22,12A7,7 0 0,0 15,5C13.96,5 12.94,5.24 12,5.68C11.06,5.24 10.04,5 9,5M9,7C9.34,7 9.67,7.03 10,7.1C8.72,8.41 8,10.17 8,12C8,13.83 8.72,15.59 10,16.89C9.67,16.96 9.34,17 9,17A5,5 0 0,1 4,12A5,5 0 0,1 9,7M15,7A5,5 0 0,1 20,12A5,5 0 0,1 15,17C14.66,17 14.33,16.97 14,16.9C15.28,15.59 16,13.83 16,12C16,10.17 15.28,8.41 14,7.11C14.33,7.04 14.66,7 15,7Z" />
</svg>

    <p className=" btn pl-01">Join</p>
</div>

<div onClick={() => setManasession("Disable")} className="flex-row flex-center pt-1 btn opacity-6 ">
    <svg style={{width:24,height:24}} viewBox="0 0 24 24">
    <path fill="currentColor" d="M13.54 22H10C9.75 22 9.54 21.82 9.5 21.58L9.13 18.93C8.5 18.68 7.96 18.34 7.44 17.94L4.95 18.95C4.73 19.03 4.46 18.95 4.34 18.73L2.34 15.27C2.21 15.05 2.27 14.78 2.46 14.63L4.57 12.97L4.5 12L4.57 11L2.46 9.37C2.27 9.22 2.21 8.95 2.34 8.73L4.34 5.27C4.46 5.05 4.73 4.96 4.95 5.05L7.44 6.05C7.96 5.66 8.5 5.32 9.13 5.07L9.5 2.42C9.54 2.18 9.75 2 10 2H14C14.25 2 14.46 2.18 14.5 2.42L14.87 5.07C15.5 5.32 16.04 5.66 16.56 6.05L19.05 5.05C19.27 4.96 19.54 5.05 19.66 5.27L21.66 8.73C21.79 8.95 21.73 9.22 21.54 9.37L19.43 11L19.5 12V12.19C19 12.07 18.5 12 18 12C17.83 12 17.66 12 17.5 12.03C17.5 11.41 17.4 10.79 17.2 10.2L19.31 8.65L18.56 7.35L16.15 8.39C15.38 7.5 14.32 6.86 13.12 6.62L12.75 4H11.25L10.88 6.61C9.68 6.86 8.62 7.5 7.85 8.39L5.44 7.35L4.69 8.65L6.8 10.2C6.4 11.37 6.4 12.64 6.8 13.8L4.68 15.36L5.43 16.66L7.86 15.62C8.63 16.5 9.68 17.14 10.87 17.38L11.24 20H12.35C12.61 20.75 13 21.42 13.54 22M15.96 12.36C16 12.24 16 12.12 16 12C16 9.79 14.21 8 12 8S8 9.79 8 12 9.79 16 12 16C12.12 16 12.24 16 12.36 15.96C12.97 14.29 14.29 12.97 15.96 12.36M12 14C10.9 14 10 13.11 10 12S10.9 10 12 10 14 10.9 14 12 13.11 14 12 14M16 15V21L21 18L16 15Z" />
</svg>

    <p className="  btn pl-01">Control</p>
</div>
                
                <Link to="/sign-up">
                     <div className="flex-row flex-center btn opacity-8 btn pt-4 ">
    <svg style={{width:24,height:24}} viewBox="0 0 24 24">
        <path fill="currentColor"
            d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" />
    </svg>

<h3 className=" btn pl-01">Log in</h3>
</div>
               </Link>
            </div> 
{managSession}

    
        <Switch>
        <Route path="/discover" element={<Discover />}/>
        <Route path="/my-session" element={<MySession />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Discover />}/>
        <Route path="/session/:id/" element={<MySession/>}/>
                
        </Switch>
 
     </Router>
         
  );
}

export default Menu;