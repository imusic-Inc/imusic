import React, {useCallback,memo} from 'react';
import { useNavigate,useParams } from "react-router-dom";
import getData from '../api/backendcalls';
function LeaveCart({exit}) {
    const paths = useParams();
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => {
        exit();
        getData.leaveSession(`session/${paths.id + 3209}/leave`).then(value => {
            if (value.status !== 'error') {
                navigate('../home', { replace: true });
            }
        })
     }, [exit,navigate,paths.id]);


    return (<div onClick={handleOnClick}  className='btn btn-back flex-row flex-center p-01'>
         <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path fill="currentColor" d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z" />
</svg>
        <div className='pl-01 leave-chat'>
            Leave room
        </div>
    </div>);
}
export default memo(LeaveCart);