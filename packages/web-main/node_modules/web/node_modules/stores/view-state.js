"use strict";

const Immutable = require("seamless-immutable");
const PropTypes = require("prop-types");
const _ = require("underscore");

const propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    visibility: PropTypes.bool
};

const defaultProps = {
    visibility: false
};

class ViewState extends Immutable {
    constructor(props={} /*: object */) {
        props = _.defaults(props.asMutable ? props.asMutable() : props, defaultProps);
        PropTypes.validateWithErrors(propTypes, props, "ViewState");

        const {name, title, visibility} = props;


        super({
            _name: name,
            _title: title,
            _visibility: visibility
        }, {prototype: ViewState.prototype});

    }

    name() /*: string */ {
        return this._name;
    }

    title() /*: string */ {
        return this._title;
    }

    visibility(visibility) /*: boolean | ViewState */ {
        if (typeof visibility === "undefined") {
            return this._visibility;
        }
        else {
            return this.set("_visibility", visibility);
        }
    }

    toJSON() /*: object */ {
        return {
            name: this._name,
            title: this._title,
            visibility: this._visibility
        };
    }
}

module.exports = ViewState;
