"use strict";

const Immutable = require("seamless-immutable");
const ActionNames = require("action-names");

class StartRequested extends Immutable {
    constructor() {
        super({
            name: ActionNames.SITE_TOUR_START_REQUESTED
        }, {prototype: StartRequested.prototype});
    }
}

module.exports = StartRequested;
