"use strict";

const {stateToGeoChoroplethQuery} = require("state-to-dc-queries");
const {createGeoChoroplethLayerProps} = require("create-app-props");

const Promise = require("promise");
const _ = require("underscore");

function getGeoChoroplethLayerPropsMemo({
    newAppState /*: AppState */,
    geoMapName /*: string */,
    geoChoroplethLayerName /*: string */,
    oldAppState /*: AppState */,
    oldAppProps /*: Object */,
    cacheHolder /*: ?CacheHolder */}) /*: Promise */ {

    if (reusePossible({
        newAppState: newAppState,
        geoMapName: geoMapName,
        geoChoroplethLayerName: geoChoroplethLayerName,
        oldAppState: oldAppState
    })) {
        return Promise.resolve(
            oldAppProps.viewProps.geoMapPropsArr.find(gmp => gmp.name === geoMapName).
                geoChoroplethLayerPropsArr.find(g => g.name == geoChoroplethLayerName)
        );
    }
    else {
        return createGeoChoroplethLayerProps({
            appState: newAppState,
            geoMapName: geoMapName,
            geoChoroplethLayerName: geoChoroplethLayerName,
            cacheHolder: cacheHolder
        });
    }
}

function reusePossible({
    newAppState /*: AppState */,
    geoMapName /*: string */,
    geoChoroplethLayerName /*: string */,
    oldAppState /*: AppState */}) /*: boolean */ {

    const newVisibleViewState = newAppState.getVisibleViewState(),
        oldVisibleViewState = oldAppState.getVisibleViewState();

    if (newVisibleViewState.getName() !== oldVisibleViewState.getName()) {
        return false;
    }

    const newGeoChoroplethLayerState = newVisibleViewState.getGeoMapState(geoMapName).getGeoChoroplethLayerState(geoChoroplethLayerName),
        oldGeoChoroplethLayerState = oldVisibleViewState.getGeoMapState(geoMapName).getGeoChoroplethLayerState(geoChoroplethLayerName);

    if (JSON.stringify(newGeoChoroplethLayerState) !== JSON.stringify(oldGeoChoroplethLayerState) ||
        !_.isEqual(
            stateToGeoChoroplethQuery({
                viewState: newVisibleViewState,
                geoMapName: geoMapName,
                geoChoroplethLayerName: geoChoroplethLayerName
            }),
            stateToGeoChoroplethQuery({
                viewState: oldVisibleViewState,
                geoMapName: geoMapName,
                geoChoroplethLayerName: geoChoroplethLayerName
            })
        )
    ) {
        return false;
    }

    const newCategoryChartState = newVisibleViewState.getCategoryChartStates().
            find(ccs => ccs.getCategoryFieldName() === newGeoChoroplethLayerState.getCategoryFieldName()),
        oldCategoryChartState = oldVisibleViewState.getCategoryChartStates().
            find(ccs => ccs.getCategoryFieldName() === oldGeoChoroplethLayerState.getCategoryFieldName());

    if (!_.isEqual(newCategoryChartState.getSelection(), oldCategoryChartState.getSelection())) {
        return false;
    }

    return true;
}

module.exports = getGeoChoroplethLayerPropsMemo;
