function PlayListHead(props) {
    return (<div className="session-board">
                  <div className=" flex-row flex-center pl-2 pr-2 pt-2">
<img className="p-1" src={ props.values.images[0].url} alt="" width="250px" height="200px" srcSet=""/>

<div className=" ">
    <h4 className="p-1">Session Playlist</h4>
                <h1 className="p-1">{ props.values.name}</h1>
                <p className="opacity-6 p-1">{ props.values.description}</p>
                <span className="pl-1 opacity-6">Session created by { props.values.owner.display_name}</span>
</div>
                  </div>
                  <div className="pl-2 pr-2 pt-2 btn flex-row flex-center">
                     <svg style={{width:54,height:54}} viewBox="0 0 24 24">
    <path fill="blue" d="M13,2.05V4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03V2.05M5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37L5.67,19.74M7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74M5.69,7.1L4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1M4.06,13H2.06C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13M10,16.5L16,12L10,7.5V16.5Z" />
                      </svg>
                      
                      <small className="pl-3">{ props.values.followers.total} people</small> <small className="p-01"> Joined</small>
                  </div>
</div>)
}

export default PlayListHead;