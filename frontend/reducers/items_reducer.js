// import { RECEIVE_ALL_ITEMS } from '../actions/item_actions'
import { RECEIVE_SINGLE_POKEMON } from './../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_SINGLE_POKEMON:
            debugger
            const items = Object.assign({}, state, action.pokemon.items)
            return items;
        default:
            return state;
  }
}

export default itemsReducer;