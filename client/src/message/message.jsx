function Message(props) {
    return ( <div className="message-card p-01">
<p>John Dzikunu</p>
                    <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti blanditiis laudantium eum ipsam cupiditate ratione voluptas aliquam libero quia magni!</small>
   {props.children?props.children:<></>}
    </div>
    
    );
}

export default Message;