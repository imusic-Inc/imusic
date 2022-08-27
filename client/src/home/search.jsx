function Search() {
    return (<div className="search-contaner pr-2 pl-2">
        <div className="flex-6 pl-2 ml-1">
            <input type="search" className="search bg-primary" placeholder="&#9835; Search..." name="search" id="search"/>
        </div>
        <div className="flex-1 p-2 btn search-btn">
            seach
        </div>
    </div>);
}

export default Search;