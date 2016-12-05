"use strict";

const {stateToViewCountQuery} = require("state-to-dc-queries");
const {createViewInfoProps} = require("create-app-props");

const Promise = require("promise");
const _ = require("underscore");

function getViewInfoPropsMemo({
    newAppState /*: AppState */,
    oldAppState /*: AppState */,
    oldAppProps /*: Object */}) /*: Promise */ {

    if (reusePossible({
        newAppState: newAppState,
        oldAppState: oldAppState
    })) {
        return Promise.resolve(
            oldAppProps.viewProps.viewInfoProps
        );
    }
    else {
        return createViewInfoProps({
            appState: newAppState
        });
    }
}

function reusePossible({
    newAppState /*: AppState */,
    oldAppState /*: AppState */}) /*: boolean */ {

    const newVisibleViewState = newAppState.getVisibleViewState(),
        oldVisibleViewState = oldAppState.getVisibleViewState();

    if (newVisibleViewState.getName() !== oldVisibleViewState.getName()) {
        return false;
    }

    const newDcQuery = stateToViewCountQuery({
        viewState: newVisibleViewState
    });

    const oldDcQuery = stateToViewCountQuery({
        viewState: oldVisibleViewState
    });

    if (!_.isEqual(newDcQuery, oldDcQuery)) {
        return false;
    }

    return true;
}

module.exports = getViewInfoPropsMemo;
