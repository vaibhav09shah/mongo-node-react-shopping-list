import * as types from '../actions/types';


const intialState = {
    items: [],
    loading: false
};

export default function(state = intialState, action ){
    switch(action.type) {
        case types.GET_ITEMS : 
            return {
                ...state,
                items: action.payload,
                loading: false
            }

        case types.DELETE_ITEMS: 
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }

        case types.ADD_ITEM: 
            return {
                ...state,
                items: [action.payload,...state.items]
            }
        
        case types.ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}

