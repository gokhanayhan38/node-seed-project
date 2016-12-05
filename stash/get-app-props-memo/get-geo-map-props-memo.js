"use strict";

const {createGeoTileLayerProps} = require("create-app-props");
const getGeoGridLayerPropsMemo = require("./get-geo-grid-layer-props-memo");
const getGeoHeatLayerPropsMemo = require("./get-geo-heat-layer-props-memo");
const getGeoChoroplethLayerPropsMemo = require("./get-geo-choropleth-layer-props-memo");
const getGeoMarkerClusterGroupLayerPropsMemo = require("./get-geo-marker-cluster-group-layer-props-memo");

const Promise = require("promise");

function getGeoMapPropsMemo({
    newAppState /*: AppState */,
    geoMapName /*: string */,
    oldAppState /*: AppState */,
    oldAppProps /*: Object */,
    cacheHolder /*: ?CacheHolder */}) /*: Promise */ {

    const newVisibleViewState = newAppState.getVisibleViewState(),
        newGeoMapState = newVisibleViewState.getGeoMapState(geoMapName);

    return Promise.all([
        Promise.all(
            newGeoMapState.getGeoTileLayerStates().map(geoTileLayerState => {
                return createGeoTileLayerProps({
                    appState: newAppState,
                    geoMapName: geoMapName,
                    geoTileLayerName: geoTileLayerState.getName()
                })
            })
        ).catch(err => {
            const newErr = new Error(`get geo tile layer props memo arr - error message: ${err.message}`);

            console.error(newErr);
            throw newErr;
        }),

        Promise.all(
            newGeoMapState.getGeoGridLayerStates().map(geoGridLayerState => {
                return getGeoGridLayerPropsMemo({
                    newAppState: newAppState,
                    geoMapName: geoMapName,
                    geoGridLayerName: geoGridLayerState.getName(),
                    oldAppState: oldAppState,
                    oldAppProps: oldAppProps
                })
            })
        ).catch(err => {
            const newErr = new Error(`get geo grid layer props memo arr - error message: ${err.message}`);

            console.error(newErr);
            throw newErr;
        }),

        Promise.all(
            newGeoMapState.getGeoHeatLayerStates().map(geoHeatLayerState => {
                return getGeoHeatLayerPropsMemo({
                    newAppState: newAppState,
                    geoMapName: geoMapName,
                    geoHeatLayerName: geoHeatLayerState.getName(),
                    oldAppState: oldAppState,
                    oldAppProps: oldAppProps
                })
            })
        ).catch(err => {
            const newErr = new Error(`get geo heat layer props memo arr - error message: ${err.message}`);

            console.error(newErr);
            throw newErr;
        }),

        Promise.all(
            newGeoMapState.getGeoChoroplethLayerStates().map(geoChoroplethLayerState => {
                return getGeoChoroplethLayerPropsMemo({
                    newAppState: newAppState,
                    geoMapName: geoMapName,
                    geoChoroplethLayerName: geoChoroplethLayerState.getName(),
                    oldAppState: oldAppState,
                    oldAppProps: oldAppProps,
                    cacheHolder: cacheHolder
                });
            })
        ).catch(err => {
            const newErr = new Error(`get geo choropleth layer props memo arr - error message: ${err.message}`);

            console.error(newErr);
            throw newErr;
        }),

        Promise.all(
            newGeoMapState.getGeoMarkerClusterGroupLayerStates().map(geoMarkerClusterGroupLayerState => {
                return getGeoMarkerClusterGroupLayerPropsMemo({
                    newAppState: newAppState,
                    geoMapName: geoMapName,
                    geoMarkerClusterGroupLayerName: geoMarkerClusterGroupLayerState.getName(),
                    oldAppState: oldAppState,
                    oldAppProps: oldAppProps,
                    cacheHolder: cacheHolder
                })
            })
        ).catch(err => {
            const newErr = new Error(`get geo marker cluster group layer props memo arr - error message: ${err.message}`);

            console.error(newErr);
            throw newErr;
        })
    ]).then(
        ([
            geoTileLayerPropsArr,
            geoGridLayerPropsArr,
            geoHeatLayerPropsArr,
            geoChoroplethLayerPropsArr,
            geoMarkerClusterGroupLayerPropsArr
            ]) => {

            return Promise.resolve({
                viewName: newVisibleViewState.getName(),
                name: newGeoMapState.getName(),
                spaceFieldName: newGeoMapState.getSpaceFieldName(),
                bounds: newGeoMapState.getBounds(),
                zoom: newGeoMapState.getZoom(),
                maxZoom: newGeoMapState.getMaxZoom(),
                geoTileLayerPropsArr: geoTileLayerPropsArr,
                geoGridLayerPropsArr: geoGridLayerPropsArr,
                geoHeatLayerPropsArr: geoHeatLayerPropsArr,
                geoChoroplethLayerPropsArr: geoChoroplethLayerPropsArr,
                geoMarkerClusterGroupLayerPropsArr: geoMarkerClusterGroupLayerPropsArr,
                nextGeoShapeColor: newVisibleViewState.getNextGeoShapeLayerColor(),
                shapes: newGeoMapState.getGeoShapeLayerStates().map(g => {
                    return {
                        bounds: g.getBounds(),
                        color: g.getColor(),
                        type: g.getType()
                    };
                })
            });
        }
    ).catch(err => {
        const newErr = new Error(`getGeoMapPropsMemo - geoMapName: ${geoMapName}, error message: ${err.message}`);

        console.error(newErr);
        throw newErr;
    });
}

module.exports = getGeoMapPropsMemo;
