import { useState } from "react";
import Notification from "./notification";
import Search from "./search";

function Members() {
    const [searchClick, setSearchClick] = useState(false);
    const [NotificationClick, setNotificationClick] = useState(false);
    let searchElemt = searchClick ? <Search /> : <></>;
    let NotificationElemt = NotificationClick ? <Notification/> : <></>;
  return (
      <>
      <div className="flex-4 p-1 fixed right bg-primary">
    <div className="flex-row flex-center ">
        <div onClick={() => {
                      setSearchClick(!searchClick);
                      setNotificationClick(false);
                  }}  className="cirle-2 bg-secondary btn">
            <img src="./images/magnify.svg" width="24" height="24" alt=""/>
        </div>
                  <img onClick={() => {
                      setSearchClick(false);
                      setNotificationClick(!NotificationClick);
                  }} className="pl-1 btn" src="./images/bell-badge.svg" width="34" height="34" alt="" />
        <div className="flex-row flex-center justify-center btn">
                <img className="cirle-3 bg-secondary ml-1" src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="100%" height="100%" alt=""/>
            <div className="pl-1">
                <h4>John Dzikunu</h4>
                <h6>dzikunujohn36@gmail.com</h6>
            </div>
        </div>
    </div>
<div className="play-section">
    <div className="play-board bg-secondary p-1">
        <h3 className="pb-1">Session members</h3>
    <div className="flex-row flex-center btn">
        <img className="cirle-2 bg-secondary ml-1"
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="60%"
            height="60%" alt=""/>
        <div className="pl-1">
            <h4>John Dzikunu</h4>
            <h6>dzikunujohn36@gmail.com</h6>
        </div>
    </div>
    </div>
</div>
          </div>
          {searchElemt}
          {NotificationElemt}
      </>
  );
}

export default Members;