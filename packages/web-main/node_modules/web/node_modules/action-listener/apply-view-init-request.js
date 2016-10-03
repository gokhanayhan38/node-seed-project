"use strict";

const AppState = require("stores");

function applyViewInitRequest(action /*: ActionDef */) /*: AppState */ {
    const {initialAppState /*: ?object */, url /*: ?string */} = action;

    return new AppState(initialAppState);
}

module.exports = applyViewInitRequest;
