"use strict";

//const modifyLessVars = require("./modify-less-vars");
const renderApp = require("./render-app.jsx");
//const exportView = require("./export-view");
//const {actionDefs, ActionNames, AppState} = require("web"),
//    {applyAction, getAppPropsMemo} = require("web").webUtils;
const {SwitchViaViewNameRequested} = require("./actions");
const actions = require("./actions");
const {AppState} = require("./stores");
const {applyAction} = require("./utils").applyAction;
//const {getAppsPropsMemo} = require("./utils").getAppsPropsMemo;

const $ = require("jquery");

const {Dispatcher} = require("flux");
const CacheHolder = require("@yavuzmester/cacheholder");
const fetch = require("node-fetch");

class WebMain {
    constructor() {
        this.appProps = undefined;
        //Dispatcher
        this.actionDispatcher = new Dispatcher();
        this.cacheHolder = new CacheHolder(10);

        //this.onAppShareBtnClick = this.onAppShareBtnClick.bind(this);
        this.onAction = this.onAction.bind(this);

        this.actionDispatcher.register(this.onAction);

        this.appState = {};

        this.actionDispatcher.dispatch(
            new actions.view.SwitchViaViewNameRequested({
                toViewName: "view-app-start"
            })
        );
    }

    createAppContext() {
        return {
            actionDispatcher: this.actionDispatcher
        };
    }

    onAction(action /* Action */) {
        console.log(action);

        const oldAppState = this.appState,
            oldAppProps = this.appProps,
            newAppState = this.appState = applyAction(action, oldAppState);

        console.log(newAppState);

        //modifyLessVars(newAppState);

            renderApp({}, this.createAppContext());

        //getAppPropsMemo({
        //    newAppState: newAppState,
        //    oldAppState: oldAppState,
        //    oldAppProps: oldAppProps,
        //    cacheHolder: this.cacheHolder
        //}).then(appProps => {
        //    this.appProps = appProps;
        //
        //    renderApp(appProps, this.createAppContext());
        //
        //});
    }
}

new WebMain();
