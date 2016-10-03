"use strict";

const Immutable = require("seamless-immutable");
const PropTypes = require("prop-types");
const ViewState = require("./view-state");

const propTypes = {
    logoContainerWidth: PropTypes.number.isRequired,
    viewStates: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired
};

class AppState extends Immutable {
    constructor(props={} /*: object */) {
        PropTypes.validateWithErrors(propTypes, props, "AppState");

        const {logoContainerWidth, viewStates} = props;

        if (viewStates.length == 0) {
            throw new Error(`error in AppState constructor - invalid 'viewStates' argument:${viewStates}`);
        }
        else {
            super({
                _logoContainerWidth: logoContainerWidth,
                _viewStates: Immutable.from(
                    viewStates.map(vs => {
                        return vs instanceof ViewState ? vs : new ViewState(vs);
                    })
                )
            }, {prototype: AppState.prototype});
        }
    }

    logoContainerWidth() /*: number */ {
        return this._logoContainerWidth;
    }

    viewStates() /*: array<ViewState> */ {
        return this._viewStates;
    }

    viewState(viewName /*: string */, viewState /*: ?ViewState */) /*: ViewState | AppState */ {
        if (typeof viewState === "undefined") {
            return this._viewStates.find(v => v.name() === viewName);
        }
        else {
            return this._viewStates.update(
                this._viewStates.findIndex(v => v.name() === viewName),
                    v => viewState
            );
        }
    }

    visibleViewState(visibleViewName /*: ?string */) /*: ViewState | AppState */ {
        if (typeof visibleViewName === "undefined") {
            return this._viewStates.find(vs => vs.visibility());
        }
        else {
            const oldVisibleViewName = this.visibleViewState().name();

            return this.set("_viewStates",
                this.viewStates().filter(vs => vs.name() !== oldVisibleViewName && vs.name() !== visibleViewName).
                    concat([this.visibleViewState().visibility(false)]).
                    concat([this.viewState(visibleViewName).visibility(true)])
            );
        }
    }

    toJSON() /*: object */ {
        return {
            logoContainerWidth: this._logoContainerWidth,
            viewStates: this._viewStates.map(vs => vs.toJSON())
        };
    }
}

Object.assign(
    AppState,
    {
        ViewState: ViewState
    }
);

module.exports = AppState;
