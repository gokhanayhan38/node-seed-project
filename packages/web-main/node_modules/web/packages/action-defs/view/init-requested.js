"use strict";

const Immutable = require("seamless-immutable");
const PropTypes = require("prop-types");
const ActionNames = require("action-names");

const propTypes = {
    initialAppState: PropTypes.object,
    url: PropTypes.string
};

class InitRequested extends Immutable {
    constructor(props={} /*: ?object */) {
        PropTypes.validateWithErrors(propTypes, props, "actionDefs.view.InitRequested");

        const {initialAppState, url} = props;

        if ((!initialAppState || Object.keys(initialAppState).length == 0) && (!url || url.length == 0)) {
            throw new Error("error in actionDefs.view.InitRequested constructor - initialAppState or url must be provided");
        }
        else {
            const {initialAppState /*: ?object */, url /*: ?string */} = props;

            super({
                name: ActionNames.VIEW_INIT_REQUESTED,
                initialAppState: initialAppState,
                url: url,
                replaceState: true
            }, {prototype: InitRequested.prototype});
        }
    }
}

module.exports = InitRequested;
