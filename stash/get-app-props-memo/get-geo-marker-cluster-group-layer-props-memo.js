"use strict";

const {createGeoMarkerClusterGroupLayerProps} = require("create-app-props");

const _ = require("underscore");

function getGeoMarkerClusterGroupLayerPropsMemo({
    newAppState /*: AppState */,
    geoMapName /*: string */,
    geoMarkerClusterGroupLayerName /*: string */,
    oldAppState /*: AppState */,
    oldAppProps /*: Object */,
    cacheHolder /*: ?CacheHolder */}) /*: Promise */ {

    if (reusePossible({
        newAppState: newAppState,
        geoMapName: geoMapName,
        geoMarkerClusterGroupLayerName: geoMarkerClusterGroupLayerName,
        oldAppState: oldAppState
    })) {
        const newGeoMarkerClusterGroupLayerState = newAppState.getVisibleViewState().getGeoMapState(geoMapName).
            getGeoMarkerClusterGroupLayerState(geoMarkerClusterGroupLayerName);

        return Promise.resolve(
            Object.assign(
                oldAppProps.viewProps.geoMapPropsArr.find(gmp => gmp.name === geoMapName).
                    geoMarkerClusterGroupLayerPropsArr.find(g => g.name === geoMarkerClusterGroupLayerName),
                {
                    visibility: newGeoMarkerClusterGroupLayerState.getVisibility()
                }
            )
        );
    }
    else {
        return createGeoMarkerClusterGroupLayerProps({
            appState: newAppState,
            geoMapName: geoMapName,
            geoMarkerClusterGroupLayerName: geoMarkerClusterGroupLayerName,
            cacheHolder: cacheHolder
        });
    }
}

function reusePossible({
    newAppState /*: AppState */,
    geoMapName /*: string */,
    geoMarkerClusterGroupLayerName /*: string */,
    oldAppState /*: AppState */}) /*: boolean */ {

    const newVisibleViewState = newAppState.getVisibleViewState(),
        oldVisibleViewState = oldAppState.getVisibleViewState();

    if (newVisibleViewState.getName() !== oldVisibleViewState.getName()) {
        return false;
    }

    const newGeoMarkerClusterGroupLayerState = newVisibleViewState.getGeoMapState(geoMapName).
            getGeoMarkerClusterGroupLayerState(geoMarkerClusterGroupLayerName),
        oldGeoMarkerClusterGroupLayerState = oldVisibleViewState.getGeoMapState(geoMapName).
            getGeoMarkerClusterGroupLayerState(geoMarkerClusterGroupLayerName);

    const replacer = function(key, value) {
        return key !== "visibility" ? value : undefined;
    };

    if (JSON.stringify(newGeoMarkerClusterGroupLayerState,replacer) !==
            JSON.stringify(oldGeoMarkerClusterGroupLayerState, replacer)) {
        return false;
    }
    else {
        return true;
    }
}

module.exports = getGeoMarkerClusterGroupLayerPropsMemo;
