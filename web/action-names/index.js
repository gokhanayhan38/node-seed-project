const actionNamesArr = [
    "VIEW_SWITCH_VIA_VIEW_NAME_REQUESTED",
    "VIEW_SWITCH_VIA_APP_STATE_REQUESTED"
];
const actionNames = actionNamesArr.reduce((memo, n) => {
    memo[n] = n;
    return memo;
}, {});
export { actionNames };
