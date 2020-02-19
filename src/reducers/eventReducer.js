import {GET_DATA, UPDATE_DATA} from "../actions/index";

const initialState = {
    events: [],
    isFetchingData: false
}


export const eventsReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return{
                ...state,
                isFetchingData: true,
                events: []
            };
            case UPDATE_DATA:
                return{
                    ...state,
                    events: action.payload,
                    isFetchingData: false
                }
            default:
                return state;

    }
    
        
}