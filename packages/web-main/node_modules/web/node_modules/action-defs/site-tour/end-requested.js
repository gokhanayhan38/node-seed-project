"use strict";

const Immutable = require("seamless-immutable");
const ActionNames = require("action-names");

class EndRequested extends Immutable {
    constructor() {
        super({
            name: ActionNames.SITE_TOUR_END_REQUESTED
        }, {prototype: EndRequested.prototype});
    }
}

module.exports = EndRequested;
