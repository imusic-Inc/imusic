import { useState } from "react";
import NewMessage from "./newMessage";

function MyMessage() {
    const [expand, setexpand] = useState("50px");
    const [iconShow, seticonShow] = useState(true);
    
    function showPlayList() {
        setexpand("500px");
        seticonShow(false);
    }

  return (
      <>
      <div className="messaging" style={{ height: expand }}>
    <div className="flex-row flex-center flex-space">
        <div className="flex-row flex-center">
            <img className="b-r-01 bg-secondary ml-1"
                src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="40px"
                height="40px" alt=""/>
            <p className="p-1">Room playlist</p>
        </div>


        <div className="flex-row flex-center">



                  <div onClick={() => {
                      setexpand("500px");
                      seticonShow(!iconShow);
                  }} className="pr-2 btn" style={{ display: !iconShow ? "none" : "block" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                    fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                    <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                </svg>
            </div>

                  <div onClick={() => {
                      setexpand("50px");
                      seticonShow(!iconShow);
                  }} className="pr-2 btn" style={{ display: iconShow ? "none" : "block" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                    fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                    <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
                </svg>
            </div>

        </div>
    </div>
          <hr className="bg-primary" />
          
          <div className="messages-list"> 
              <div className="flex-row flex-center flex-space btn card p-01" >
        <img className="b-r-01 bg-secondary ml-1"
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="60px"
            height="50px" alt=""/>
        <div className="pl-1">
            <h5>John Dzikunu Dzikunu Dzikunu</h5>
            <h6 className="opacity-6">dzikunujohn36@gmail.com</h6>
        </div>
              </div>
              
               <div className="flex-row flex-center btn card p-01">
        <img className="b-r-01  ml-1" style={{ backgroundImage: `url('../images/My project-1(2).png'`,backgroundPosition: 'center',
  backgroundSize: 'cover'}}
            src="https://i.imgur.com/nYxJ5cV.gif" width="50px"
            height="40px" alt=""/>
        <div className="pl-1">
            <h5>John Dzikunu Dzikunu Dzikunu Dzikunu</h5>
            <h6 className="opacity-6">dzikunujohn36@gmail.com</h6>
                      </div>
                      <div className="pl-1">
        </div>
    </div>

    
          </div>
          </div>
         
      </>
  );
}

export default MyMessage;