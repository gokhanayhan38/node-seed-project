"use strict";

const getViewInfoPropsMemo = require("./get-view-info-props-memo");
const getCategoryChartPropsMemo = require("./get-category-chart-props-memo");
const getTimeGraphPropsMemo = require("./get-time-graph-props-memo");
const getGeoMapPropsMemo = require("./get-geo-map-props-memo");

const Promise = require("promise");

function getViewPropsMemo({
    newAppState /*: AppState */,
    viewName /*: string */,
    oldAppState /*: AppState */,
    oldAppProps /*: Object */,
    cacheHolder /*: ?CacheHolder */}) /*: Promise */ {

    const newViewState = newAppState.getViewState(viewName);

    return Promise.all([
        getViewInfoPropsMemo({
            newAppState: newAppState,
            oldAppState: oldAppState,
            oldAppProps: oldAppProps
        }),

        Promise.all(
            newViewState.getVisibleCategoryChartStates().map(ccs => {
                return getCategoryChartPropsMemo({
                    newAppState: newAppState,
                    categoryChartName: ccs.getName(),
                    oldAppState: oldAppState,
                    oldAppProps: oldAppProps,
                    cacheHolder: cacheHolder
                });
            })
        ).catch(err => {
            const newErr = new Error(`get category chart props memo arr - error message: ${err.message}`);

            console.error(newErr);
            throw newErr;
        }),

        Promise.all(
            newViewState.getVisibleTimeGraphStates().map(tgs => {
                return getTimeGraphPropsMemo({
                    newAppState: newAppState,
                    timeGraphName: tgs.getName(),
                    oldAppState: oldAppState,
                    oldAppProps: oldAppProps
                });
            })
        ).catch(err => {
            const newErr = new Error(`get time graph props memo arr - error message: ${err.message}`);

            console.error(newErr);
            throw newErr;
        }),

        Promise.all(
            newViewState.getVisibleGeoMapStates().map(gms => {
                return getGeoMapPropsMemo({
                    newAppState: newAppState,
                    geoMapName: gms.getName(),
                    oldAppState: oldAppState,
                    oldAppProps: oldAppProps,
                    cacheHolder: cacheHolder
                });
            })
        ).catch(err => {
            const newErr = new Error(`get geo map props memo arr - error message: ${err.message}`);

            console.error(newErr);
            throw newErr;
        })
    ]).then(([
        viewInfoProps,
        categoryChartPropsArr,
        timeGraphPropsArr,
        geoMapPropsArr
        ]) => {

        return {
            name: newViewState.getName(),
            viewInfoProps: viewInfoProps,
            categoryChartPropsArr: categoryChartPropsArr,
            timeGraphPropsArr: timeGraphPropsArr,
            geoMapPropsArr: geoMapPropsArr
        };
    }).catch(err => {
        const newErr = new Error(`getViewPropsMemo - error message: ${err.message}`);

        console.error(newErr);
        throw newErr;
    });
}

module.exports = getViewPropsMemo;
