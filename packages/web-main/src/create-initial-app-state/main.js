"use strict";
/* @flow */

const createInitialAppState = require("./create-initial-app-state");
const modifyLessVars = require("./modify-less-vars");
const renderApp = require("./render-app");
const exportView = require("./export-view");
const {actionDefs, ActionNames, AppState} = require("web"),
    {applyAction, getAppPropsMemo} = require("web").webUtils;
//const $ = require("jquery");

const {Dispatcher} = require("flux");
const CacheHolder = require("@yavuzmester/cacheholder");
const {parseQueryString} = require("@yavuzmester/url-utils");
const fetch = require("node-fetch");

class WebMain {
    constructor() {
        this.appProps = null;
        this.actionDispatcher = new Dispatcher();
        this.cacheHolder = new CacheHolder(10);
        //this.onAppShareBtnClick = this.onAppShareBtnClick.bind(this);
        this.onAction = this.onAction.bind(this);

        this.actionDispatcher.register(this.onAction);

        this.actionDispatcher.dispatch(
                new actionDefs.view.SwitchViaViewNameRequested({
                    toViewName: "view-app-start"
                })
            );

        //const urlQueryVars = parseQueryString(window.location.href),
        //    shareKey = typeof urlQueryVars === "object" ?
        //        urlQueryVars.shareKey :
        //        undefined;
        //
        //if (typeof shareKey !== "string" || shareKey.length == 0) {
        //    this.appState = createInitialAppState();
        //
        //    this.actionDispatcher.dispatch(
        //        new actionDefs.view.SwitchViaViewNameRequested({
        //            toViewName: "view-speedtest"
        //        })
        //    );
        //}
        //else {
        //    fetch(
        //        `${dvConstants.DV_WS_ORIGIN}/shared-app/${shareKey}`,
        //        {timeout: 5000}
        //    ).then(response => {
        //            return response.json();
        //        }).then((appState /*: Object */) => {
        //            this.actionDispatcher.dispatch(
        //                new actionDefs.view.SwitchViaAppStateRequested({
        //                    toAppState: new AppState(appState)
        //                })
        //            );
        //        })
        //}
    }

    //onAppShareBtnClick() {
    //    fetch(
    //        `${dvConstants.DV_WS_ORIGIN}/share-app`,
    //        {
    //            method: "POST",
    //            body: JSON.stringify({
    //                appState: this.appState,
    //                shareKey: $("#app-share-name-input").val()
    //            }),
    //            timeout: 5000
    //        }
    //    ).then(response => {
    //            if (response.ok) {
    //                return response.json();
    //            }
    //            else {
    //                return response;
    //            }
    //        }).then(response => {
    //            if (!response.hasOwnProperty("ok")) {
    //                const resultingShareKey /*: string */ = response.shareKey,
    //                    appShareUrl = `${dvConstants.DV_WEB_HTTP_SERVER_ORIGIN}?shareKey=${resultingShareKey}`;
    //
    //                $("#app-share-url-input").val(appShareUrl);
    //            }
    //            else {
    //                console.error(`error in /share-app - status:${response.status}, statusText:${response.statusText}`);
    //            }
    //        }).catch(err => {
    //            console.error("error in /share-app - error:" + err.message);
    //        });
    //}

    createAppContext() /*: Object */ {
        return {
            actionDispatcher: this.actionDispatcher,
            geoShapeCountQuery: this.geoShapeCountQuery,
            onAppShareBtnClick: this.onAppShareBtnClick
        };
    }

    onAction(action /*: Action */) {
        const oldAppState = this.appState,
            oldAppProps = this.appProps,
            newAppState = this.appState = applyAction(action, oldAppState);

        modifyLessVars(newAppState);

        getAppPropsMemo({
            newAppState: newAppState,
            oldAppState: oldAppState,
            oldAppProps: oldAppProps,
            cacheHolder: this.cacheHolder
        }).then(appProps => {
            this.appProps = appProps;

            renderApp(appProps, this.createAppContext());

            if (action.name === ActionNames.VIEW_EXPORT_REQUESTED) {
                exportView({
                    viewExportRequestedAction: action,
                    appState: this.appState,
                    actionDispatcher: this.actionDispatcher
                });
            }
        });
    }
}

new WebMain();
