function TableRow(props) {
    return (<tr>
        <td>{ props.number}</td>
    <td> 
        <div className="flex-row flex-center">
            <img className="b-r-01" src={props.image} alt="" width="50" height="50" srcSet=""/>
            <div className="p-1">
                    <h4>{ props.name}</h4>
                    <h6 className="opacity-6">{ props.by}</h6>
            </div>
        </div>
    </td>
        <td>{ props.album}</td>
        <td>{ props.len}</td>
    <td className="btn text-danger">X</td>
</tr>)
}
export default TableRow;