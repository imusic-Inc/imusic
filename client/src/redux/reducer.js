
function Reducer(state = {}, action) {
    switch (action.type) {
        case 'genre':
            state = {...state, genre:[...action.payload]}
            break;
        case 'current-play':
            if (state.single) {
                state = {...state, 'single':[...action.payload,...state.single]}
            } else {
                state = {...state, 'single':[...action.payload]}
            }
            
            break;
        default:
            break;
    }

    return state;
}

export default Reducer;