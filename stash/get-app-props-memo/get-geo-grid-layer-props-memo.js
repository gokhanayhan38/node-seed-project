"use strict";

const {stateToGeoGridQueries} = require("state-to-dc-queries");
const {createGeoGridLayerProps} = require("create-app-props");

const Promise = require("promise");
const _ = require("underscore");

function getGeoGridLayerPropsMemo({
    newAppState /*: AppState */,
    geoMapName /*: string */,
    geoGridLayerName /*: string */,
    oldAppState /*: AppState */,
    oldAppProps /*: Object */}) /*: Promise */ {

    if (reusePossible({
        newAppState: newAppState,
        geoMapName: geoMapName,
        geoGridLayerName: geoGridLayerName,
        oldAppState: oldAppState
    })) {
        return Promise.resolve(
            oldAppProps.viewProps.geoMapPropsArr.find(gmp => gmp.name === geoMapName).
                geoGridLayerPropsArr.find(g => g.name == geoGridLayerName)
        );
    }
    else {
        return createGeoGridLayerProps({
            appState: newAppState,
            geoMapName: geoMapName,
            geoGridLayerName: geoGridLayerName
        });
    }
}

function reusePossible({
    newAppState /*: AppState */,
    geoMapName /*: string */,
    geoGridLayerName /*: string */,
    oldAppState /*: AppState */}) /*: boolean */ {

    const newVisibleViewState = newAppState.getVisibleViewState(),
        oldVisibleViewState = oldAppState.getVisibleViewState();

    if (newVisibleViewState.getName() !== oldVisibleViewState.getName()) {
        return false;
    }

    const newGeoMapState = newVisibleViewState.getGeoMapState(geoMapName),
        oldGeoMapState = oldVisibleViewState.getGeoMapState(geoMapName);

    const newGeoGridLayerState = newGeoMapState.getGeoGridLayerState(geoGridLayerName),
        oldGeoGridLayerState = oldGeoMapState.getGeoGridLayerState(geoGridLayerName);

    if (JSON.stringify(newGeoGridLayerState) !== JSON.stringify(oldGeoGridLayerState) ||
        !_.isEqual(
            stateToGeoGridQueries({
                viewState: newVisibleViewState,
                geoMapName: geoMapName,
                geoGridLayerName: geoGridLayerName
            }),
            stateToGeoGridQueries({
                viewState: oldVisibleViewState,
                geoMapName: geoMapName,
                geoGridLayerName: geoGridLayerName
            })
        )
    ) {
        return false;
    }

    return true;
}

module.exports = getGeoGridLayerPropsMemo;
