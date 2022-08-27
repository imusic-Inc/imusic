import { useState } from "react";
import Notification from "../home/notification";
import Search from "../home/search";

function Auth() {
    const [searchClick, setSearchClick] = useState(false);
    const [NotificationClick, setNotificationClick] = useState(false);
    let searchElemt = searchClick ? <Search /> : <></>;
    let NotificationElemt = NotificationClick ? <Notification/> : <></>;
    return (<>
    <div className="flex-row flex-center account">
        <div onClick={() => {
            setSearchClick(!searchClick);
            setNotificationClick(false);
        }} className="cirle-2 bg-secondary btn">
                <svg style={{width:"34px",height:"34px"}} viewBox="0 0 24 24">
    <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
</svg>
        </div>
             <svg onClick={() => {
            setSearchClick(false);
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
         {searchElemt}
          {NotificationElemt}
    </>);
}

export default Auth;