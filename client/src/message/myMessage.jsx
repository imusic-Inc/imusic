import { useState } from "react";
import NewMessage from "./newMessage";

function MyMessage() {
    const [expand, setexpand] = useState("50px");
    const [iconShow, seticonShow] = useState(true);
    const [showNewMessage, setshowNewMessage] = useState(false);
  return (
      <>
      <div className="messaging" style={{ height: expand }}>
    <div className="flex-row flex-center flex-space">
        <div className="flex-row flex-center">
            <img className="cirle-2 bg-secondary ml-1"
                src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="100%"
                height="100%" alt=""/>
            <p className="p-1">Messaging</p>
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
              <div className="flex-row flex-center btn card p-1" onClick={() => setshowNewMessage(true)}>
        <img className="cirle-2 bg-secondary ml-1"
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="60%"
            height="60%" alt=""/>
        <div className="pl-1">
            <h4>John Dzikunu</h4>
            <h6>dzikunujohn36@gmail.com</h6>
        </div>
              </div>
              
               <div className="flex-row flex-center btn card p-1">
        <img className="cirle-2 bg-secondary ml-1"
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="60%"
            height="60%" alt=""/>
        <div className="pl-1">
            <h4>John Dzikunu</h4>
            <h6>dzikunujohn36@gmail.com</h6>
        </div>
    </div>

               <div className="flex-row flex-center btn card p-1">
        <img className="cirle-2 bg-secondary ml-1"
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="60%"
            height="60%" alt=""/>
        <div className="pl-1">
            <h4>John Dzikunu</h4>
            <h6>dzikunujohn36@gmail.com</h6>
        </div>
              </div>
               <div className="flex-row flex-center btn card p-1">
        <img className="cirle-2 bg-secondary ml-1"
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="60%"
            height="60%" alt=""/>
        <div className="pl-1">
            <h4>John Dzikunu</h4>
            <h6>dzikunujohn36@gmail.com</h6>
        </div>
    </div>
     <div className="flex-row flex-center btn card p-1">
        <img className="cirle-2 bg-secondary ml-1"
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="60%"
            height="60%" alt=""/>
        <div className="pl-1">
            <h4>John Dzikunu</h4>
            <h6>dzikunujohn36@gmail.com</h6>
        </div>
              </div>
               <div className="flex-row flex-center btn card p-1">
        <img className="cirle-2 bg-secondary ml-1"
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="60%"
            height="60%" alt=""/>
        <div className="pl-1">
            <h4>John Dzikunu</h4>
            <h6>dzikunujohn36@gmail.com</h6>
        </div>
    </div>
     <div className="flex-row flex-center btn card p-1">
        <img className="cirle-2 bg-secondary ml-1"
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="60%"
            height="60%" alt=""/>
        <div className="pl-1">
            <h4>John Dzikunu</h4>
            <h6>dzikunujohn36@gmail.com</h6>
        </div>
    </div>
     <div className="flex-row flex-center btn card p-1">
        <img className="cirle-2 bg-secondary ml-1"
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="60%"
            height="60%" alt=""/>
        <div className="pl-1">
            <h4>John Dzikunu</h4>
            <h6>dzikunujohn36@gmail.com</h6>
        </div>
    </div>
     <div className="flex-row flex-center btn card p-1">
        <img className="cirle-2 bg-secondary ml-1"
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="60%"
            height="60%" alt=""/>
        <div className="pl-1">
            <h4>John Dzikunu</h4>
            <h6>dzikunujohn36@gmail.com</h6>
        </div>
    </div>
     <div className="flex-row flex-center btn card p-1">
        <img className="cirle-2 bg-secondary ml-1"
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="60%"
            height="60%" alt=""/>
        <div className="pl-1">
            <h4>John Dzikunu</h4>
            <h6>dzikunujohn36@gmail.com</h6>
        </div>
    </div>
     <div className="flex-row flex-center btn card p-1">
        <img className="cirle-2 bg-secondary ml-1"
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="60%"
            height="60%" alt=""/>
        <div className="pl-1">
            <h4>John Dzikunu</h4>
            <h6>dzikunujohn36@gmail.com</h6>
        </div>
    </div>
     <div className="flex-row flex-center btn card p-1">
        <img className="cirle-2 bg-secondary ml-1"
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="60%"
            height="60%" alt=""/>
        <div className="pl-1">
            <h4>John Dzikunu</h4>
            <h6>dzikunujohn36@gmail.com</h6>
        </div>
    </div>
     <div className="flex-row flex-center btn card p-1">
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
          {showNewMessage ? <NewMessage show={showNewMessage} />:<></>}
      </>
  );
}

export default MyMessage;