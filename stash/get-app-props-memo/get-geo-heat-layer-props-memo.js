"use strict";

const {stateToGeoHeatQueries} = require("state-to-dc-queries");
const {createGeoHeatLayerProps} = require("create-app-props");

const Promise = require("promise");
const _ = require("underscore");

function getGeoHeatLayerPropsMemo({
    newAppState /*: AppState */,
    geoMapName /*: string */,
    geoHeatLayerName /*: string */,
    oldAppState /*: AppState */,
    oldAppProps /*: Object */}) /*: Promise */ {

    if (reusePossible({
        newAppState: newAppState,
        geoMapName: geoMapName,
        geoHeatLayerName: geoHeatLayerName,
        oldAppState: oldAppState
    })) {
        return Promise.resolve(
            oldAppProps.viewProps.geoMapPropsArr.find(gmp => gmp.name === geoMapName).
                geoHeatLayerPropsArr.find(g => g.name == geoHeatLayerName)
        );
    }
    else {
        return createGeoHeatLayerProps({
            appState: newAppState,
            geoMapName: geoMapName,
            geoHeatLayerName: geoHeatLayerName
        });
    }
}

function reusePossible({
    newAppState /*: AppState */,
    geoMapName /*: string */,
    geoHeatLayerName /*: string */,
    oldAppState /*: AppState */}) /*: boolean */ {

    const newVisibleViewState = newAppState.getVisibleViewState(),
        oldVisibleViewState = oldAppState.getVisibleViewState();

    if (newVisibleViewState.getName() !== oldVisibleViewState.getName()) {
        return false;
    }

    const newGeoMapState = newVisibleViewState.getGeoMapState(geoMapName),
        oldGeoMapState = oldVisibleViewState.getGeoMapState(geoMapName);

    const newGeoHeatLayerState = newGeoMapState.getGeoHeatLayerState(geoHeatLayerName),
        oldGeoHeatLayerState = oldGeoMapState.getGeoHeatLayerState(geoHeatLayerName);

    if (JSON.stringify(newGeoHeatLayerState) !== JSON.stringify(oldGeoHeatLayerState) ||
        !_.isEqual(
            stateToGeoHeatQueries({
                viewState: newVisibleViewState,
                geoMapName: geoMapName,
                geoHeatLayerName: geoHeatLayerName
            }),
            stateToGeoHeatQueries({
                viewState: oldVisibleViewState,
                geoMapName: geoMapName,
                geoHeatLayerName: geoHeatLayerName
            })
        )
    ) {
        return false;
    }

    return true;
}

module.exports = getGeoHeatLayerPropsMemo;
