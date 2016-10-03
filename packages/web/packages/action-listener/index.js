"use strict";

const ActionNames = require("action-names");
const componentPropsFactory = require("component-props-factory");
const ReactDOM = require("react-dom");
const React = require("react");
const {App} = require("components");
//const SiteTour = require("site-tour");
const applyViewInitRequest = require("./apply-view-init-request");
const applySiteTourStartRequest = require("./apply-site-tour-start-request");
const applySiteTourEndRequest = require("./apply-site-tour-end-request");

class ActionListener {
    constructor(actionDispatcher /*: ActionDispatcher */) {
        this._actionDispatcher = actionDispatcher;
        this._appState = null;
        this._siteTour = null;
        this.onAction = this.onAction.bind(this);

        this._actionDispatcher.register(this.onAction);
    }

    onAction(action={} /*: object */) {
        this._applyActionToAppState(action);

        this._modifyLessVars();
        this._renderView();
    } //end of onAction function def

    _applyActionToAppState(action) {
        switch(action.name) {
            case ActionNames.VIEW_INIT_REQUESTED:
                this._appState = applyViewInitRequest(action);
                break;

            //case ActionNames.SITE_TOUR_START_REQUESTED:
            //    this._appState = applySiteTourStartRequest(action, this._appState);
            //    break;
            //
            //case ActionNames.SITE_TOUR_END_REQUESTED:
            //    this._appState = applySiteTourEndRequest(action, this._appState);
            //    break;

            default:
                throw new Error(`error in action listener - unexpected action: ${JSON.stringify(action)}`);
        }
    } //end of _applyActionToAppState method def

    _modifyLessVars() {
        //less.modifyVars({
        //    logoContainerWidth: this._appState.logoContainerWidth() + "px"
        //});
    }

    _renderView() {
        //componentPropsFactory.createAppProps({appState: this._appState}).then(appProps => {
        //    ReactDOM.render(
        //        React.createElement(App, Object.assign({actionDispatcher: this._actionDispatcher}, appProps)),
        //        document.getElementById("root")
        //    );
        //});
        ReactDOM.render(
            React.createElement(App, Object.assign({actionDispatcher: this._actionDispatcher})),
            document.getElementById("root")
        );
    }

    _updateHistory(replaceState /*: ?boolean */) {
        const url = window.encodeURI(`http://${window.location.host + window.location.pathname}?store=${this._appState.toJSON()}`),
            state = {url: url},
            title = this._appState.visibleViewState().title();

        if (replaceState) {
            window.history.replaceState(state, title, url);
        }
        else {
            window.history.pushState(state, title, url);
        }
    }
}

module.exports = ActionListener;
