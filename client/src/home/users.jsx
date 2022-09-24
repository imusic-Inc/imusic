import { useEffect } from "react";
import { useState } from "react";
import getData from "../api/backendcalls";
import NotFound from "../components/404";
import MemberList from "../message/memberList";
import NewMessage from "../message/newMessage";
function Users(props) {
    const [expand, setexpand] = useState("50px");
    const [iconShow, seticonShow] = useState(true);
    const [showNewMessage, setshowNewMessage] = useState(false);
    const [NewMessageId, setNewMessageId] = useState('');
    const [searced, SetSearced] = useState([]);
    const [source, SetSource] = useState([]);
    const [search, SetSearch] = useState('');
    const [NewMessageReciever, setNewMessageReciever] = useState('');

    useEffect(() => {
        getData.getUser('users').then(value => {
            SetSource(value);
            SetSearced(value);
        });
    },[]);

    function hideManasession() {
        setshowNewMessage(false);
    }
    
    function showManasession(messageId,name) {
        setshowNewMessage(true);
         setNewMessageId(messageId);
        setNewMessageReciever(name);
    };

useEffect(() => {
        if (search.length > 3) {
            const se = source.filter(value => value.name.toLowerCase().indexOf(search.toLowerCase()) >= 0 || value.email.toLowerCase().indexOf(search.toLowerCase()) >= 0);
            SetSearced(se);
            
        } else {
            SetSearced(source);
        }
    }, [search]);


    const bot = window.screen.availWidth > 600 ? '0px' : '70px';
    return (<>
      
      <div className="messaging-members " style={{ height: expand,bottom:  bot, }}>
        <div className="flex-row flex-center flex-space p-01 pt-01">
        <h4 className="flex-5 ">
            iMusic Members
        </h4>


        <div className="flex-1 text-right">
                  <div onClick={() => {
                      setexpand("75%");
                      seticonShow(!iconShow);
                  }} className=" btn" style={{ display: !iconShow ? "none" : "block" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                    fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                    <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                </svg>
            </div>

                  <div onClick={() => {
                      setexpand("50px");
                      seticonShow(!iconShow);
                  }} className=" btn" style={{ display: iconShow ? "none" : "block" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                    fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                    <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
                </svg>
            </div>

        </div>
      </div>
     <div className="pr-1 pl-01">
        <input type="text" className="playSearch w-100 p-1" onChange={(event)=>SetSearch(event.currentTarget.value)} placeholder=" &#128269; Search members" name="name"/>
    </div>
          
          <div className="messages-list"> 
              {searced.length > 0 ? searced.map((value,index) =>
              {/* showing only 20 users */
                  if (index < 20) {
                      return <MemberList key={value._id} value={value} showMessage={showManasession} />
                  }
              }
              
              ) : <NotFound/>}
          </div>
      </div>


      {showNewMessage ? <NewMessage show={hideManasession} home={'home'} id={NewMessageId} name={NewMessageReciever} />:<></>}
      </>
  );
}

export default Users;