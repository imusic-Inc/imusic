import LeaveCart from '../components/leaveCart';
import Members from '../home/members'
import MyMessage from '../message/myMessage'
import Player from '../players/player';
import Activeuserscart from './activeuserscart';
import AddToPlayList from './addToPlayList';
import { useState, useEffect,memo } from "react"; 
import {useParams} from "react-router-dom";
import Invite from './invite';
import Share from '../home/share';
import APIController from '../api/functons';
import store from "../redux/store";
let token;

function Room() {
const [expand, setexpand] = useState(false);
const [expandInvite, setExpandInvite] = useState(false);
    const [expandShare, setexpandShare] = useState(false);
    const [playList, setplayList] = useState([]);
     const paths = useParams();

    async function init(id) {
        if (!token) {
      APIController.getToken().then(value => {
          token = value;
        APIController.getPlayList(token,id).then((values) => {
            setplayList(values);
          })
        });
      }
    }

    useEffect(() => {
       
    if (paths.id) {
        if (paths.id.indexOf('imusic') < 0) {
            init(paths.id);
        }
    }
        
    })

    function deletedPlayListDraft() {
        const payload = {
            type: "delete-Draft-Playlist",
            payload:'addToPlayList'
        }
         store.dispatch(payload);
    }


    function showAndHide() {
        setexpand(!expand);
        deletedPlayListDraft();
    }
    function showAndHideInvite() {
        setExpandInvite(!expandInvite)
    }
function showAndHideShare() {
        setexpandShare(!expandShare)
    }
    return (
        <>
            <div className='controls flex-row' >
                <div className='btn btn-back flex-row flex-center p-01' onClick={showAndHide}>
                    <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path fill="currentColor" d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
</svg>
                </div>
 <div className='btn btn-back flex-row flex-center p-01' onClick={showAndHideInvite}>
                    <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path fill="currentColor" d="M19 17V19H7V17S7 13 13 13 19 17 19 17M16 8A3 3 0 1 0 13 11A3 3 0 0 0 16 8M19.2 13.06A5.6 5.6 0 0 1 21 17V19H24V17S24 13.55 19.2 13.06M18 5A2.91 2.91 0 0 0 17.11 5.14A5 5 0 0 1 17.11 10.86A2.91 2.91 0 0 0 18 11A3 3 0 0 0 18 5M8 10H5V7H3V10H0V12H3V15H5V12H8Z" />
</svg>
</div>
<div className='btn btn-back flex-row flex-center p-01' onClick={showAndHideShare}>
                    <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
</svg>
                </div>
                
                <div>
                    <h5 className='p-01 text-center'>Allow Invite</h5>
                    <div className="flex-row flex-center">
                   <div className="pr-1" >YES</div>  <input type="checkbox"  id="switch" /><label id="switched" htmlFor="switch">Toggle</label> <div className="pl-1" >NO</div>
                </div>
                 </div>

            </div>
            

           
           
            

           




            {expandShare?<Share show = {showAndHideShare} />:<></>}
            {expandInvite?<Invite show = {showAndHideInvite} />:<></>}
           {expand?<AddToPlayList show = {showAndHide} />:<></>} 
        <LeaveCart/>
       <Activeuserscart/>
            <Members/>
            <MyMessage value={ playList } />
            <Player/>
            
        </>
    )
}

export default memo(Room);