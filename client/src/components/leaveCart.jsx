import React, {useCallback} from 'react';
import { useNavigate } from "react-router-dom";
function LeaveCart(props) {

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => {
        props.exit();
        navigate('../home', { replace: true });
     }, [navigate]);


    return (<div onClick={handleOnClick}  className='btn btn-back flex-row flex-center p-01'>
         <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path fill="currentColor" d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z" />
</svg>
        <div className='pl-01 leave-chat'>
            Leave room
        </div>
    </div>);
}
export default LeaveCart;