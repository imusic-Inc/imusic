import Message from "./message";

function NewMessage(props) {
    return (
    <div className="message">
<div className="flex-row flex-center flex-space">
    <div className="flex-row flex-center">
        <h4 className="pl-1">James Mensah</h4>
    </div>


    <div className="flex-row flex-center">
<div className="p-1 btn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"
        className="mercado-match" width="16" height="16" focusable="false">
        <path
            d="M15 2.53a1.51 1.51 0 01-.44 1L9.15 9 6 10l1-3.12 5.44-5.44A1.5 1.5 0 0115 2.53zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8h-2z">
        </path>
    </svg>
</div>
        <div className="p-1 btn" onClick={props.show}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"
            className="mercado-match  close" width="16" height="16" focusable="false">
            <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
        </svg>
        </div>
    </div>
</div>
<hr className="bg-primary"/>

            <div className="income-messages-list">

                <Message><hr className="opacity-6" /></Message>
                <Message><hr className="opacity-6" /></Message>
                <Message><hr className="opacity-6" /></Message>
                <Message><hr className="opacity-6" /></Message>
                <Message><hr className="opacity-6" /></Message>
                <Message><hr className="opacity-6" /></Message>
                <Message><hr className="opacity-6" /></Message>
                <Message><hr className="opacity-6" /></Message>
                <Message><hr className="opacity-6" /></Message>
                
                
            </div>


<div className="chat-send">
<hr/>
<textarea className="char-textarea  bg-default" name="message" id="message" cols="30" placeholder="Write a message..." rows="3"></textarea>
</div>
</div>
  );
}

export default NewMessage;