
function Reducer(state = {}, action) {
    switch (action.type) {
        case 'genre':
            state = {...state, genre:[...action.payload]}
            break;
        default:
            break;
    }

    return state;
}

export default Reducer;