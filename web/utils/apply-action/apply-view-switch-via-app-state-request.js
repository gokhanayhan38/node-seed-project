"use strict";

const adjustAppState = require("./utils/adjust-app-state");

function applyViewSwitchViaAppStateRequest(action /*: ActionDef */, appState /*: AppState */) /*: AppState */ {
    const {toAppState={} /*: AppState */} = action;
    return adjustAppState(toAppState);
}

module.exports = applyViewSwitchViaAppStateRequest;
