"use strict";

const {stateToTimeGraphQueries} = require("state-to-dc-queries");
const {createTimeGraphProps} = require("create-app-props");

const Promise = require("promise");
const _ = require("underscore");

function getTimeGraphPropsMemo({
    newAppState /*: AppState */,
    timeGraphName /*: string */,
    oldAppState /*: AppState */,
    oldAppProps /*: Object */}) /*: Promise */ {

    if (reusePossible({
            newAppState: newAppState,
            timeGraphName: timeGraphName,
            oldAppState: oldAppState
        })) {
        return Promise.resolve(
            oldAppProps.viewProps.timeGraphPropsArr.find(tgp => tgp.name === timeGraphName),
            {
                divWidth: newAppState.getTimeGraphDivWidth(),
                divHeight: newAppState.getTimeGraphDivHeight(),
                contextDivHeight: newAppState.getTimeGraphContextDivHeight(),
                svgMargin: newAppState.getTimeGraphSvgMargin(),
                contextSvgMargin: newAppState.getTimeGraphContextSvgMargin()
            }
        );
    }
    else {
        return createTimeGraphProps({
            appState: newAppState,
            timeGraphName: timeGraphName
        });
    }
}

function reusePossible({
    newAppState /*: AppState */,
    timeGraphName /*: string */,
    oldAppState /*: AppState */}) /*: boolean */ {

    const newVisibleViewState = newAppState.getVisibleViewState(),
        oldVisibleViewState = oldAppState.getVisibleViewState();

    if (newVisibleViewState.getName() !== oldVisibleViewState.getName() ||
        newVisibleViewState.getGeoShapeSumEnabledInCharts() !== oldVisibleViewState.getGeoShapeSumEnabledInCharts()
    ) {
        return false;
    }

    const newTimeGraphState = newVisibleViewState.getTimeGraphState(timeGraphName),
        oldTimeGraphState = oldVisibleViewState.getTimeGraphState(timeGraphName);

    if (JSON.stringify(newTimeGraphState) !== JSON.stringify(oldTimeGraphState) ||
        !_.isEqual(
            stateToTimeGraphQueries({
                viewState: newVisibleViewState,
                timeGraphName: timeGraphName
            }),
            stateToTimeGraphQueries({
                viewState: oldVisibleViewState,
                timeGraphName: timeGraphName
            })
        )
    ) {
        return false;
    }

    return true;
}

module.exports = getTimeGraphPropsMemo;
