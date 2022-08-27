function  CreateSession(props) {
    return (<div className="createSession p-1">
        <div className="flex-row flex-center flex-space">
    <div className="flex-row flex-center">
        <p className="pl-1">Let setup your session</p>
    </div>


    <div className="flex-row flex-center">
        <div className="p-1 btn" onClick={props.show}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"
            className="mercado-match" width="16" height="16" focusable="false">
            <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
        </svg>
        </div>
    </div>
</div>
              <div className="form-control p-1">
            <input type="text" className="playSearch p-1 w-100 mt-1" placeholder="Session name" name="search" />
<select name="visibility" className="playSearch p-1 w-100 mt-1">
  <option value="">Session visibility</option>
  <option value="Public">Public</option>
  <option value="Private">Private</option>
</select>
            <textarea  className="playSearch-textArea p-1 w-100 mt-1" rows={3} placeholder="Session description" name="search"></textarea>
            
             <div className="btn flex-row bg-danger p-1 flex-center mt-1 flex-center-justify text-center">
                    Create Session
                </div>
        </div>
        
          </div>)
}

export default CreateSession;