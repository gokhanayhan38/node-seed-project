"use strict";

const actionNamesArr /*: Array<string> */ = [
    "VIEW_SWITCH_VIA_VIEW_NAME_REQUESTED",
    "VIEW_SWITCH_VIA_APP_STATE_REQUESTED"
];

const actionNames /*: {[key:string]: string} */ = actionNamesArr.reduce((memo, n) => {
    memo[n] = n;
    return memo;
}, {});

module.exports = actionNames;
