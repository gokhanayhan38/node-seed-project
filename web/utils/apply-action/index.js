"use strict";

const applyAction = require("./apply-action");
const applyCategoryChartSelectionChangeRequest = require("./apply-category-chart-selection-change-request");
const applyViewSwitchViaViewNameRequest = require("./apply-view-switch-via-view-name-request");
const applyViewSwitchViaAppStateRequest = require("./apply-view-switch-via-app-state-request");

module.exports = {
    applyAction,
    applyCategoryChartSelectionChangeRequest,
    applyViewSwitchViaViewNameRequest,
    applyViewSwitchViaAppStateRequest
};
