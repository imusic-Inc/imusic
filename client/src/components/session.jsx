function Session(props) {
    return (
        <div className="flex-column p-1 btn playListcard card-column">
            <img className="b-r-1" src={props.image} title={props.name} alt="" width="200px"  srcSet=""/>
            <h4 className="pt-01 text-lefet">{ props.name}</h4>
            <small className="opacity-6 text-lefet pt-01">{
                
                props.info.substring(0,50)
            }</small>
        </div>
    )
}

export default Session;