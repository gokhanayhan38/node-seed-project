"use strict";

const applyCategoryChartSelectionChangeRequest = require("./apply-category-chart-selection-change-request");
const applyViewSwitchViaViewNameRequest = require("./apply-view-switch-via-view-name-request");
const applyViewSwitchViaAppStateRequest = require("./apply-view-switch-via-app-state-request");

const ActionNames = require("../../action-names");

function applyAction(action /*: Action */, appState /*: AppState */) /*: AppState */ {
    switch(action.name) {
        case ActionNames.VIEW_SWITCH_VIA_VIEW_NAME_REQUESTED:
            return applyViewSwitchViaViewNameRequest(action, appState);

        case ActionNames.VIEW_SWITCH_VIA_APP_STATE_REQUESTED:
            return applyViewSwitchViaAppStateRequest(action, appState);

        //case ActionNames.CATEGORY_CHART_SELECTION_CHANGE_REQUESTED:
        //    return applyCategoryChartSelectionChangeRequest(action, appState);

        default:
            const err = new Error(`error in applyAction - unexpected action: ${JSON.stringify(action)}`);

            console.error(err);
            throw err;
    }
}

module.exports = applyAction;
