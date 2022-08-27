import LeaveCart from '../components/leaveCart';
import Members from '../home/members'
import MyMessage from '../message/myMessage'
import Player from '../players/player';
import Activeuserscart from './activeuserscart';
import AddToPlayList from './addToPlayList';
import { useState } from "react"; 
function Room() {

    function showAndHide() {
        
    }

    return (
        <>
            <div className='cart-room-board'>
                <div className='btn btn-back flex-row flex-center p-01'>
                    <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path fill="currentColor" d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
</svg>
                </div>
            </div>
            

        <AddToPlayList/>
        <LeaveCart/>
       <Activeuserscart/>
            <Members/>
            <MyMessage />
            <Player/>
            
        </>
    )
}

export default Room;