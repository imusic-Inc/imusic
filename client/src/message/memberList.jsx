function MemberList(props) {
    return (<>
        <div className="flex-row flex-center btn card p-01 member-list" onClick={props.showMessage}>
            <div className="">
 <img className="cirle-2 bg-secondary"
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" width="60%"
            height="60%" alt=""/>
            </div>
            <div className="pl-1 text-left">
            <h5>John Dzikunu</h5>
            <small>dzikunujohn36@gmail.com</small>
            </div>
        </div>
    </>)
}
export default MemberList;