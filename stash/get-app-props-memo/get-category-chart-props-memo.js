"use strict";

const {stateToCategoryChartQueries} = require("state-to-dc-queries");
const {createCategoryChartProps} = require("create-app-props");

const Promise = require("promise");
const _ = require("underscore");

function getCategoryChartPropsMemo({
    newAppState /*: AppState */,
    categoryChartName /*: string */,
    oldAppState /*: AppState */,
    oldAppProps /*: Object */,
    cacheHolder /*: ?CacheHolder */}) /*: Promise */ {

    if (reusePossible({
        newAppState: newAppState,
        categoryChartName: categoryChartName,
        oldAppState: oldAppState
    })) {
        return Promise.resolve(
            oldAppProps.viewProps.categoryChartPropsArr.find(ccp => ccp.name === categoryChartName),
            {
                divWidth: newAppState.getCategoryChartDivWidth(),
                svgMargin: newAppState.getCategoryChartSvgMargin()
            }
        );
    }
    else {
        return createCategoryChartProps({
            appState: newAppState,
            categoryChartName: categoryChartName,
            cacheHolder: cacheHolder
        });
    }
}

function reusePossible({
    newAppState /*: AppState */,
    categoryChartName /*: string */,
    oldAppState /*: AppState */}) /*: boolean */ {

    const newVisibleViewState = newAppState.getVisibleViewState(),
        oldVisibleViewState = oldAppState.getVisibleViewState();

    if (newVisibleViewState.getName() !== oldVisibleViewState.getName() ||
        newVisibleViewState.getGeoShapeSumEnabledInCharts() !== oldVisibleViewState.getGeoShapeSumEnabledInCharts()
    ) {
        return false;
    }

    const newCategoryChartState = newVisibleViewState.getCategoryChartState(categoryChartName),
        oldCategoryChartState = oldVisibleViewState.getCategoryChartState(categoryChartName);

    if (JSON.stringify(newCategoryChartState) !== JSON.stringify(oldCategoryChartState) ||
        !_.isEqual(
            stateToCategoryChartQueries({
                viewState: newVisibleViewState,
                categoryChartName: categoryChartName
            }),
            stateToCategoryChartQueries({
                viewState: oldVisibleViewState,
                categoryChartName: categoryChartName
            })
        )
    ) {
        return false;
    }

    return true;
}

module.exports = getCategoryChartPropsMemo;
