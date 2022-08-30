import JoinList from "./joinList";

function Join(props) {
  return (
    <div className="join-session">
<div className="flex-row flex-center flex-space">
    <div className="flex-row flex-center">
        <h4 className="pl-1">Join session</h4>
    </div>


    <div className="flex-row flex-center" onClick={()=>props.onClick()}>
       
        <div className="p-1 btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"
                className="mercado-match close" width="16" height="16" focusable="false">
                <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z">
                </path>
            </svg>
        </div>
    </div>
</div>
<hr className="bg-primary"/>


<div className="join-list">

     <JoinList/>  
     <JoinList/>  
     <JoinList/>  
     <JoinList/>  

</div>

</div>

  );
}

export default Join;