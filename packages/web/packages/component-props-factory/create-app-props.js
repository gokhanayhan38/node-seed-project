"use strict";

const Promise = require("promise");

function createAppProps({appState /*: AppState */}) /*: Promise */ {
    const visibleViewState = appState.visibleViewState();

    return Promise.all([

    ]).then(([]) => {
        return {

        };
    }).catch(err => {
        throw new Error(`createAppProps - err for viewState: ${JSON.stringify(visibleViewState.toJSON())}
            , error message: ${err.message}`);
    });
}

module.exports = createAppProps;
