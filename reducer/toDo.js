const initialState = {
    data: ['A']
}

export default function(state=initialState, actions){
    switch(actions.type) {
        case 'INSERT':
            return {
                ...state,
                data: state.data.concat(actions.data)
            }
            break;
        case 'DELETE':
            return {
                ...state,
                tempdata: state.data.splice(actions.data, 1),
                data: state.data
            }
        case 'SHOW':
            if(state.data === []) {
                return {
                    data: 'NOTHING TO SHOW'
                }
            }
            else{
                return {
                    data: state.data
                }
            }
        default:
            return state
    }
}