"use strict";

//TODO değişecek kendime göre
const createViewProps = require("./create-view-props");
const createViewSelectionProps = require("./create-view-selection-props");
const createControlPanelProps = require("./create-control-panel-props");

const Promise = require("promise");

function createAppProps({
    appState /*: AppState */,
    cacheHolder /*: ?CacheHolder */}) /*: Promise */ {

    const visibleViewState = appState.getVisibleViewState();

    return Promise.all([
        createViewProps({
            appState: appState,
            viewName: visibleViewState.getName(),
            cacheHolder: cacheHolder
        }),

        createViewSelectionProps({
            appState: appState
        }),

        createControlPanelProps({
            appState: appState
        })
    ]).then(([
        viewProps,
        viewSelectionProps,
        controlPanelProps
        ]) => {

        console.log("createAppProps - success");

        return {
            viewProps: viewProps,
            viewSelectionProps: viewSelectionProps,
            controlPanelProps: controlPanelProps
        };
    }).catch(err => {
        const newErr = new Error(`createAppProps - visibleViewState name: ${visibleViewState && visibleViewState.getName()}
            , error message: ${err.message}`);

        console.error(newErr);
        throw newErr;
    });
}

const createViewInfoProps = require("./create-view-info-props");
const createCategoryChartProps = require("./create-category-chart-props");
const createTimeGraphProps = require("./create-time-graph-props");
const createGeoMapProps = require("./create-geo-map-props");
const createGeoTileLayerProps = require("./create-geo-tile-layer-props");
const createGeoGridLayerProps = require("./create-geo-grid-layer-props");
const createGeoHeatLayerProps = require("./create-geo-heat-layer-props");
const createGeoChoroplethLayerProps = require("./create-geo-choropleth-layer-props");
const createGeoMarkerClusterGroupLayerProps = require("./create-geo-marker-cluster-group-layer-props");

Object.assign(
    createAppProps,
    {
        createViewSelectionProps,
        createControlPanelProps,
        createViewProps,
        createViewInfoProps,
        createCategoryChartProps,
        createTimeGraphProps,
        createGeoMapProps,
        createGeoTileLayerProps,
        createGeoGridLayerProps,
        createGeoHeatLayerProps,
        createGeoChoroplethLayerProps,
        createGeoMarkerClusterGroupLayerProps
    }
);

module.exports = createAppProps;
