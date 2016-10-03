"use strict";

const {ActionDispatcher, ActionListener, actionDefs} = require("web");
const initialAppState = require("initial-app-state");

main();

function main() {
    const actionDispatcher = new ActionDispatcher();

    new ActionListener(actionDispatcher);

    actionDispatcher.dispatch(
        new actionDefs.view.InitRequested({
            initialAppState: initialAppState
        })
    );

}
