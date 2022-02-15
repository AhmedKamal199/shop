import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'
const uuid  = require('uuid')
const initialState = {
    items:[
        {id:uuid.v4(),name:"Eggs"},
        {id:uuid.v4(),name:"Milk"},
        {id:uuid.v4(),name:"Steak"},
        {id:uuid.v4(),name:"Candy"}
]
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state
            };
         case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case ADD_ITEM:
            return{
             ...state,
            items : [action.payload, ...state.items]
            }
        default:
            return state;
    }
}