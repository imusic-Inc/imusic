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
        <div className="flex-row flex-center flex-space  pt-01">
        <h5 className="flex-5 p-01">
            iMusic Room Members
        </h5>


        <div className="flex-1 text-right">
                  <div onClick={() => {
                      setexpand("75vh");
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
          <hr className="opacity-6" />
          <div className="messages-list"> 
              
              <MemberList showMessage={ showManasession} />
         

        

        
          </div>
    
      </div>
       {showNewMessage ? <NewMessage show={hideManasession} />:<></>}
      </>
  );
}

export default Members;