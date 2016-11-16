"use strict";
/* @flow */

const ActionNames = require("web-action-names");

class ToggleRequested {
    /*:: name: string */

    constructor() {
        this.name = ActionNames.CONTROL_PANEL_TOGGLE_REQUESTED;
    }
}

module.exports = ToggleRequested;
