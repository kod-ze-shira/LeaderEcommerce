import { SET_NAME } from './actions'
import { SET_ITEMS_LIST } from './actions'
export default function reducer(state, action) {
    switch (action.type) {
        case SET_NAME:
            return { ...state, userName: action.payloud };

        case SET_ITEMS_LIST:
            return { ...state, list: action.payloud };

        default:
            return state;
    }
}