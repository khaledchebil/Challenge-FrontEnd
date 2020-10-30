const defaultState = {
    users:[],
}


function Reducer(state=defaultState, action) {
    switch(action.type) {
        case 'USERS':
            return {
                ...state,
                users: action.payload
            };
    }
}

export default Reducer