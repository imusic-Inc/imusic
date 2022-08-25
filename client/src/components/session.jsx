function Session(props) {
    return (
        <div class="flex-column p-1 btn playListcard">
            <img class="b-r-1" src={props.image} title={props.name} alt="" width="200px"  srcset=""/>
            <h4 class="pt-01">{ props.name}</h4>
            <h6 class="opacity-6">{
                
                props.info.substring(0,50)
            }</h6>
        </div>
    )
}

export default Session;