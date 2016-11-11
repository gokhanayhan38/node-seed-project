"use strict";
/* @flow */

const less = require("less");

function modifyLessVars(appState /*: Object */) {
    less.modifyVars({
        controlPanelVisibility: appState.getVisibleViewState().getControlPanelVisibility(),
        logoContainerWidth: appState.getLogoContainerWidth() + "px"
    });
}

module.exports = modifyLessVars;
