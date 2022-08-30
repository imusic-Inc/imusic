import Message from "../message/message";

function Activeuserscart() {
    return (<div className='active-users'>
        
 <div className="flex-row flex-center flex-space">
        <div className="flex-row flex-center">
           
            <h4 className="p-1">Live cart</h4>
        </div>


        <div title="Send" className="pr-2 btn" >
                <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
</svg>
            </div>
      </div>

        
                <div className='active-list p-01'>

        <div className="list">
          <Message/>
</div>
                    
                

                    

<div className="chat-send-active">
<hr/>
<textarea className="char-textarea  bg-secondary" name="message" id="message"  placeholder="Write a comment..." rows="4"></textarea>
</div>
                </div>
        </div>);
}

export default Activeuserscart;