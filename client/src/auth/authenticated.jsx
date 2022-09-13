import { useState,useEffect } from "react";
import Notification from "../components/notification";
import Cookies from 'universal-cookie';
import getData from "../api/backendcalls";
import { notificationShow } from "../api/notification";

function Auth() {
    const [NotificationClick, setNotificationClick] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [notification, setNotification] = useState([]);
    const search = new URLSearchParams(window.location.search);
    let NotificationElemt = NotificationClick ? <Notification notification={notification} hideNot={hideNot} /> : <></>;
    const cookies = new Cookies();
  
  
  // get user notification
    useEffect(() => {
        getData.getNotification('notification').then(value => {
          setNotification(value);
          if (!search.get('n')) {
            notificationShow('hello there you have about '+value.length+' new notifications','New Message');
          } else {
            setNotificationClick(true);
          }
    });
    }, []);
    
    

     useEffect(() => {
        const name = cookies.get("name");
         const emil = cookies.get("email");
         setEmail(emil);
         setName(name);
     }, []);
    
    function hideNot() {
        setNotificationClick(false);
    }
    
    return (<>
    <div className="flex-row flex-center account">       
       <svg  className="btn" style={{width:"30px",height:"30px"}} onClick={() => {setNotificationClick(!NotificationClick)}} stroke-width="1.5" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.1336 11C18.7155 16.3755 21 18 21 18H3C3 18 6 15.8667 6 8.4C6 6.70261 6.63214 5.07475 7.75736 3.87452C8.88258 2.67428 10.4087 2 12 2C12.3373 2 12.6717 2.0303 13 2.08949"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="white"></path>
              <path
                d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
                stroke="red" stroke-linecap="round" stroke-linejoin="round" fill={notification.length < 1?'currentColor':'red'}></path>
              <path
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="white"></path>
            </svg>
        <div className="flex-row flex-center justify-center btn">
            <img className="cirle-3 bg-secondary ml-1" src="https://ui-avatars.com/api/?background=random" width="100%" height="100%" alt="" />
            <div className="pl-1">
                    <h4>{ name }</h4>
                    <small>{ email }</small>
            </div>
        </div>
        </div>
          {NotificationElemt}
    </>);
}

export default Auth;