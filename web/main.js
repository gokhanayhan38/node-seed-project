"use strict";
import renderApp from "./render-app";
import { applyAction } from  = require("./utils").applyAction;
import { Dispatcher } from "flux";
import CacheHolder from "@yavuzmester/cacheholder";
class WebMain {
    constructor() {
        this.appProps = undefined;
        this.actionDispatcher = new Dispatcher();
        this.cacheHolder = new CacheHolder(10);
        this.onAction = this.onAction.bind(this);
        this.actionDispatcher.register(this.onAction);
        this.appState = {};
        this.actionDispatcher.dispatch(new actions.view.SwitchViaViewNameRequested({
            toViewName: "view-app-start"
        }));
    }
    createAppContext() {
        return {
            actionDispatcher: this.actionDispatcher
        };
    }
    onAction(action) {
        console.log(action);
        const oldAppState = this.appState, oldAppProps = this.appProps, newAppState = this.appState = applyAction(action, oldAppState);
        console.log(newAppState);
        renderApp({}, this.createAppContext());
    }
}
new WebMain();
