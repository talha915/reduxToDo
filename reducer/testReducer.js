const initialState = {
    count: 0
}

export default function(state = initialState, actions) {
    switch(actions.type) {
        case 'ADD':
            return {
                count: state.count+1
            }
            break;
        case 'SUB':
            if(state.count>0){
                return {
                    count: state.count-1
                }
            }
            else{
                return state
            }
            break;
        default:
            return state;
    }
}