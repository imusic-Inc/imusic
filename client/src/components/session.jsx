function Session(props) {
    return (
        <div class="flex-column p-1 btn playListcard card-column">
            <img class="b-r-1" src={props.image} title={props.name} alt="" width="200px"  srcset=""/>
            <h4 class="pt-01 text-lefet">{ props.name}</h4>
            <small class="opacity-6 text-lefet pt-01">{
                
                props.info.substring(0,50)
            }</small>
        </div>
    )
}

export default Session;