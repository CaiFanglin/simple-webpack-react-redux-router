import * as constant from '../constant.js';

const initState = {
    type: 'password',
    placeholder: '请输入……'
}

export default function change (state = initState, action) {
    switch (action.type) {
        case constant.CHANGE_TYPE:
            return (Object.assign({}, state, action.item));
        default:
            return state;
    }
}