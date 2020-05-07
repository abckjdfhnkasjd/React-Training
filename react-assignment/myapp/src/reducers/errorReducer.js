import { GET_ERRORS } from "../actions/types";


const initialState = {
    errors: {}
};
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS: {
            console.log(action.payload);
            return action.payload;
        }
        default: return state;
    }
    return state;
}