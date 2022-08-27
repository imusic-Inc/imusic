import LeaveCart from '../components/leaveCart';
import Members from '../home/members'
import MyMessage from '../message/myMessage'
import Player from '../players/player';
import Activeuserscart from './activeuserscart';
import AddToPlayList from './addToPlayList';
import { useState } from "react"; 
function Room() {
const [expand, setexpand] = useState(false);
    function showAndHide() {
        setexpand(!expand)
    }

    return (
        <>
            <div className='cart-room-board' >
                <div className='btn btn-back flex-row flex-center p-01' onClick={showAndHide}>
                    <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path fill="currentColor" d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
</svg>
                </div>
            </div>
            

             <div className='cart-room-invite' >
                 <div className='btn btn-back flex-row flex-center p-01' onClick={showAndHide}>
                    <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path fill="currentColor" d="M19 17V19H7V17S7 13 13 13 19 17 19 17M16 8A3 3 0 1 0 13 11A3 3 0 0 0 16 8M19.2 13.06A5.6 5.6 0 0 1 21 17V19H24V17S24 13.55 19.2 13.06M18 5A2.91 2.91 0 0 0 17.11 5.14A5 5 0 0 1 17.11 10.86A2.91 2.91 0 0 0 18 11A3 3 0 0 0 18 5M8 10H5V7H3V10H0V12H3V15H5V12H8Z" />
</svg>
                </div>
            </div>

            
            <div className='invite'>

            </div>


           {expand?<AddToPlayList show = {showAndHide} />:<></>} 
        <LeaveCart/>
       <Activeuserscart/>
            <Members/>
            <MyMessage />
            <Player/>
            
        </>
    )
}

export default Room;