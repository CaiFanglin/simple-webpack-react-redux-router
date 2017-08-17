import * as constant from '../constant.js';

const initState = {
    list: ["a", "b", "c", "d", "e", "f", "g"]
}

export default function list (state = initState, action) {
    switch (action.type) {
        case constant.LIST_TYPE:
            return Object.assign({}, state, action.item);
        default:
            return state;
    }
}