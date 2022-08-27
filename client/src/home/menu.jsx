import Discover from "../home/discover";
import { useState } from "react";
import Join from "../session/join";
import SignUp from "../auth/signup";
import {Routes as Switch,Route,Link} from "react-router-dom";
import SignIn from "../auth/signin";
import MySession from "../session/mysession";
import CreateSession from "../components/createSession";


function Menu() {
    const [Manasession, setManasession] = useState("");
    const [create, setCreate] = useState(false);
    let managSession = <></>;

     if (Manasession === "Join") {
        managSession = <Join onClick = {hideManasession} />;
    } else {
         managSession = <></>;
     }
    
    function hideCreate() {
        setCreate(false);
    }
    
    function hideManasession() {
        setManasession("");
    }

    return (
      <>
      <div className="flex-2 bg-secondary p-1 fixed left"> 
<img src="./images/logo.png" alt="IMusic" width="60%"  srcSet=""/>
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

    <Link to="/room" >
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


<div  onClick={()=>setCreate(!create)} className="flex-row flex-center pt-1 btn opacity-6 " >
<svg style={{width:24,height:24}} viewBox="0 0 24 24">
    <path fill="currentColor"
        d="M16,16.92C15.67,16.97 15.34,17 15,17C14.66,17 14.33,16.97 14,16.92V13.41L11.5,15.89C11,15.5 10.5,15 10.11,14.5L12.59,12H9.08C9.03,11.67 9,11.34 9,11C9,10.66 9.03,10.33 9.08,10H12.59L10.11,7.5C10.3,7.25 10.5,7 10.76,6.76V6.76C11,6.5 11.25,6.3 11.5,6.11L14,8.59V5.08C14.33,5.03 14.66,5 15,5C15.34,5 15.67,5.03 16,5.08V8.59L18.5,6.11C19,6.5 19.5,7 19.89,7.5L17.41,10H20.92C20.97,10.33 21,10.66 21,11C21,11.34 20.97,11.67 20.92,12H17.41L19.89,14.5C19.7,14.75 19.5,15 19.24,15.24V15.24C19,15.5 18.75,15.7 18.5,15.89L16,13.41V16.92H16V16.92M5,19A2,2 0 0,1 7,17A2,2 0 0,1 9,19A2,2 0 0,1 7,21A2,2 0 0,1 5,19H5Z" />
</svg>

<p className="btn pl-01">Create Session</p>
</div>


<div onClick={() => setManasession("Join")} className="flex-row flex-center pt-1 btn opacity-6 ">
<svg style={{width:24,height:24}} viewBox="0 0 24 24">
    <path fill="currentColor"
        d="M9,5A7,7 0 0,0 2,12A7,7 0 0,0 9,19C10.04,19 11.06,18.76 12,18.32C12.94,18.76 13.96,19 15,19A7,7 0 0,0 22,12A7,7 0 0,0 15,5C13.96,5 12.94,5.24 12,5.68C11.06,5.24 10.04,5 9,5M9,7C9.34,7 9.67,7.03 10,7.1C8.72,8.41 8,10.17 8,12C8,13.83 8.72,15.59 10,16.89C9.67,16.96 9.34,17 9,17A5,5 0 0,1 4,12A5,5 0 0,1 9,7M15,7A5,5 0 0,1 20,12A5,5 0 0,1 15,17C14.66,17 14.33,16.97 14,16.9C15.28,15.59 16,13.83 16,12C16,10.17 15.28,8.41 14,7.11C14.33,7.04 14.66,7 15,7Z" />
</svg>

    <p className=" btn pl-01">Join Session</p>
</div>


                
                <div to="/sign-up">
                     <div className="flex-row flex-center btn opacity-8 btn pt-4 ">
    <svg style={{width:24,height:24}} viewBox="0 0 24 24">
        <path fill="currentColor"
            d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" />
    </svg>

<h3 className=" btn pl-01">Log out</h3>
</div>
                </div>
                
                <Link to="/sign-up">
                     <div className="flex-row flex-center btn opacity-8 btn pt-4 ">
   <svg style={{width:24,height:24}} viewBox="0 0 24 24">
    <path fill="currentColor" d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
</svg>

<h3 className=" btn pl-01">Log in</h3>
</div>
               </Link>
            </div> 
{managSession}
            {create ? <CreateSession show={ hideCreate } />:<></>}
    
        <Switch>
        <Route path="/discover" element={<Discover />}/>
        <Route path="/my-session" element={<MySession />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Discover />}/>
        <Route path="/session/:id/" element={<MySession/>}/>
                
        </Switch>
 
     </>
         
  );
}

export default Menu;