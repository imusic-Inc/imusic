import { useState } from "react";
import Notification from "../home/notification";

function Auth() {
    const [NotificationClick, setNotificationClick] = useState(false);
    let NotificationElemt = NotificationClick ? <Notification/> : <></>;
    return (<>
    <div className="flex-row flex-center account">
       
             <svg onClick={() => {
            setNotificationClick(!NotificationClick);
            }} className="pl-1 btn" style={{width:"34px",height:"34px"}} viewBox="0 0 24 24">
    <path fill="currentColor" d="M21 6.5C21 8.43 19.43 10 17.5 10S14 8.43 14 6.5 15.57 3 17.5 3 21 4.57 21 6.5M19 11.79C18.5 11.92 18 12 17.5 12C14.47 12 12 9.53 12 6.5C12 5.03 12.58 3.7 13.5 2.71C13.15 2.28 12.61 2 12 2C10.9 2 10 2.9 10 4V4.29C7.03 5.17 5 7.9 5 11V17L3 19V20H21V19L19 17V11.79M12 23C13.11 23 14 22.11 14 21H10C10 22.11 10.9 23 12 23Z" />
</svg>
        <div className="flex-row flex-center justify-center btn">
            <img className="cirle-3 bg-secondary ml-1" src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="100%" height="100%" alt="" />
            <div className="pl-1">
                <h4>John Dzikunu</h4>
                <h6>dzikunujohn36@gmail.com</h6>
            </div>
        </div>
        </div>
          {NotificationElemt}
    </>);
}

export default Auth;