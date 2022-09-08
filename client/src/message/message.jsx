function Message(props) {
    return ( <div className="message-card p-01">
        <h5>{props.value.user?props.value.user.name:'Anonymous'}</h5>
                    <small>{props.value.message}</small>
   {props.children?props.children:<></>}
    </div>
    
    );
}

export default Message;