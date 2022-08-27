function TrackList(props) {
    return (<div className="flex-row flex-center flex-space p-01">
        <div className="flex-row flex-center">
        <img className="b-r-01" src={props.image} alt="" width="50" height="50" srcSet=""/>
        <div className="pl-1">
            <h4>{props.track}</h4>
            <h6 className="opacity-6">{props.by}</h6>
        </div>
    </div>
        <div className="addPlayList btn ">
    Add
        </div>
    </div>)
}
export default TrackList;