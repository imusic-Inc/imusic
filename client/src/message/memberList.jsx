function MemberList(props) {
    return (<>
        <div className="flex-row flex-center btn card p-01 member-list" onClick={() => {
            props.showMessage(props.value._id, props.value.name)
        }}>
            <div className="flex-1">
 <img className="cirle-2 bg-secondary"
            src={"https://ui-avatars.com/api/?name="+props.value.name} width="60%"
            height="60%" alt=""/>
            </div>
            <div className="pl-1 text-left flex-6">
                <h5>{ props.value.name}</h5>
            <small>{ props.value.email}</small>
            </div>
        </div>
    </>)
}
export default MemberList;