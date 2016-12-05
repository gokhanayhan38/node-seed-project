"use strict";

//TODO değişecek kendime göre
const createAppProps = require("create-app-props"),
    {createViewSelectionProps, createControlPanelProps} = require("create-app-props");
const getViewPropsMemo = require("./get-view-props-memo");

const Promise = require("promise");

function getAppPropsMemo({
    newAppState /*: AppState */,
    oldAppState /*: ?AppState */,
    oldAppProps /*: ?Object */,
    cacheHolder /*: ?CacheHolder */}) /*: Promise */ {

    if (!oldAppState || !oldAppProps) {
        return createAppProps({
            appState: newAppState,
            cacheHolder: cacheHolder
        });
    }
    else {
        const newVisibleViewState = newAppState.getVisibleViewState();

        return Promise.all([
            getViewPropsMemo({
                newAppState: newAppState,
                viewName: newVisibleViewState.getName(),
                oldAppState: oldAppState,
                oldAppProps: oldAppProps,
                cacheHolder: cacheHolder
            }),

            createViewSelectionProps({
                appState: newAppState
            }),

            createControlPanelProps({
                appState: newAppState
            })
        ]).then(([
            viewProps,
            viewSelectionProps,
            controlPanelProps
            ]) => {

            console.log("getAppPropsMemo - success");

            return {
                viewProps: viewProps,
                viewSelectionProps: viewSelectionProps,
                controlPanelProps: controlPanelProps
            };
        }).catch(err => {
            const newErr = new Error(`getAppPropsMemo - newVisibleViewState.name: ${newVisibleViewState && newVisibleViewState.getName()}
                , error message: ${err.message}`);

            console.error(newErr);
            throw newErr;
        });
    }
}

module.exports = getAppPropsMemo;
