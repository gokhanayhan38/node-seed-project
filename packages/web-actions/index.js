"use strict";
/* @flow */

const ControlPanelToggleRequested = require("./control-panel/toggle-requested");

const ViewSwitchViaViewNameRequested = require("./view/switch-via-view-name-requested");
const ViewSwitchViaAppStateRequested = require("./view/switch-via-app-state-requested");

const dvWebActions = {
    controlPanel: {
        ToggleRequested: ControlPanelToggleRequested
    },
    view: {
        SwitchViaViewNameRequested: ViewSwitchViaViewNameRequested,
        SwitchViaAppStateRequested: ViewSwitchViaAppStateRequested
    }
};

module.exports = webActions;
