import { useState } from "react";
import MemberList from "../message/memberList";
import NewMessage from "../message/newMessage";
function Members() {
    const [expand, setexpand] = useState("50px");
    const [iconShow, seticonShow] = useState(true);
    const [showNewMessage, setshowNewMessage] = useState(false);
    function hideManasession() {
        setshowNewMessage(false);
    }
    function showManasession() {
        setshowNewMessage(true);
    }
  return (<>
      <div className="messaging-members " style={{ height: expand }}>
                      <div className="flex-row flex-center flex-space">
        <div className="flex-row flex-center">
           
            <p className="p-1">iMusic Room Members</p>
        </div>


        <div className="flex-row flex-center ">



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
      <input type="text" className="playSearch w-100 p-1" placeholder="&#8486; Username or Email" name="name"/>
          <hr className="opacity-6 mb-1" />
          <div className="messages-list"> 
              
              <MemberList showMessage={ showManasession} />
         

        

        
          </div>
    
      </div>
       {showNewMessage ? <NewMessage show={hideManasession} />:<></>}
      </>
  );
}

export default Members;