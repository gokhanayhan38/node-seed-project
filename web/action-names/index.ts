
const actionNamesArr: Array<string> = [
    "VIEW_SWITCH_VIA_VIEW_NAME_REQUESTED",
    "VIEW_SWITCH_VIA_APP_STATE_REQUESTED"
];

//: Array<string>
const actionNames = actionNamesArr.reduce((memo, n) => {
    memo[n] = n;
    return memo;
}, {});

// module.exports = actionNames;
export {
    actionNames
};
