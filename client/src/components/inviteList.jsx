function InviteList(props) {

console.log("https://ui-avatars.com/api/?name="+props.by);
    return (<div className="flex-row flex-center flex-space p-01 pl-01 pr-01">
        <div className="flex-row flex-center">
        <img className="b-r-01" src={props.image?props.image:"https://ui-avatars.com/api/?name="+props.track} alt="" width="50" height="50" srcSet=""/>
        <div className="pl-1">
            <h4>{props.track}</h4>
            <h6 className="opacity-6">{props.by}</h6>
        </div>
    </div>
        <div className="addPlayList bg-blue btn pt-01 pl-1 ml-1 mt-01">
    Invite
        </div>
    </div>)
}
export default InviteList;