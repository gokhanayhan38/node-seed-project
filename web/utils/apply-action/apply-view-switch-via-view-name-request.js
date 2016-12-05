"use strict";

const adjustAppState = require("./utils/adjust-app-state");

function applyViewSwitchViaViewNameRequest(action /*: ActionDef */, appState /*: AppState */) /*: AppState */ {
    const {toViewName /*: string */} = action;
    //return adjustAppState(appState.setVisibleViewState(toViewName));
}

module.exports = applyViewSwitchViaViewNameRequest;
