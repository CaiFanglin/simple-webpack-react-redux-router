import * as constant from '../constant.js';

const initState = {
    'text': '咨询'
}

export default function win (state = initState, action) {
    switch (action.type) {
        case constant.WIN_TYPE:
            return (Object.assign({}, state, action.item));
        default:
            return state;
    }
}