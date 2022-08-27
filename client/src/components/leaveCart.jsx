import { Link } from "react-router-dom";
// import React, {useCallback} from 'react';useNavigate

function LeaveCart(params) {

    // const navigate = useNavigate();
    //  const handleOnClick = useCallback(() => navigate('/room', {replace: true}), [navigate]);


    return (<Link  to="/home" className='btn btn-back flex-row flex-center'>
        <i>
            <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 21H17V13.5C17 11.57 15.43 10 13.5 10H11V14L4 8L11 2V6H13.5C17.64 6 21 9.36 21 13.5V21Z" />
            </svg>
        </i>
        <div className='p-01'>
            Leave room
        </div>
    </Link>);
}
export default LeaveCart;