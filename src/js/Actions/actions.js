import * as constant from '../constant.js';

export function chanInput (item) {
    return {
        type: constant.CHANGE_TYPE,
        item
    }
}

export function chanBtn (item) {
    return {
        type: constant.WIN_TYPE,
        item
    }
}

export function chanList (item) {
    return {
        type: constant.LIST_TYPE,
        item
    }
}