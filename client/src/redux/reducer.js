
function Reducer(state = {}, action) {
    switch (action.type) {
        case 'current-play':
            if (state.single) {
                const set  = new Set([...action.payload,...state.single])
                state = {...state, 'single':[...set]}
            } else {
                const set = new Set([...action.payload]);
                state = {...state, 'single':[...set]}
            }
            break;
        case 'add-to-playlist':
            if (state.addToPlayList) {
             const set =  new Set([...action.payload, ...state.addToPlayList]);
                state = {...state, 'addToPlayList': [...set]}
            } else {
                const set =  new Set([...action.payload]);
                state = {...state, 'addToPlayList':[...set]}
            }
            break;
        case 'delete-Draft-Playlist':
            state = {...state, 'addToPlayList': []}
            break;
        default:
            break;
    }

    return state;
}

export default Reducer;