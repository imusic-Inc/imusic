function Session(props) {
    return (
        <div class="flex-column p-1 btn">
            <img class="b-r-1" src={props.image} title={props.name} alt="" width="170px" height="170px" srcset=""/>
            <h4 class="pt-01">{ props.name}</h4>
            <h6 class="opacity-6">By: {props.by?props.by: "IMusic public session"}</h6>
        </div>
    )
}

export default Session;