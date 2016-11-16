"use strict";
/* @flow */

const ViewState = require("./view-state");

/*::
 type Options = {
 logoContainerWidth: number,
 viewStates: Array<Object>
 };
 */

class AppState {
    /*:: _logoContainerWidth: number */
    /*:: _viewStates: Array<Object> */

    constructor(options /*: Options */) {
        var {
            logoContainerWidth,viewStates
            } = options;

        if (viewStates.length == 0) {
            const err = new Error(`error in AppState constructor - invalid 'viewStates' argument:${viewStates}`);

            console.error(err);
            throw err;
        }
        else {
            this._logoContainerWidth = logoContainerWidth;
            this._viewStates = viewStates.map(vs => {
                return vs instanceof ViewState ? vs : new ViewState(vs);
            });
        }
    }

    _shallowCopy() /*: this */ {
        return new AppState({
            logoContainerWidth: this._logoContainerWidth,
            viewStates: this._viewStates
        });
    }

    getLogoContainerWidth() /*: number */ {
        return this._logoContainerWidth;
    }

    getViewStates() /*: Array<ViewState> */ {
        return this._viewStates;
    }

    getViewState(viewName /*: string */) /*: ViewState */ {
        return this._viewStates.find(v => v.getName() === viewName);
    }

    setViewState(viewName /*: string */, viewState /*: ?ViewState */) /*: this */ {
        return Object.assign(
            this._shallowCopy(),
            {
                _viewStates: this._viewStates.map(v => {
                    return v.getName() === viewName ? viewState : v;
                })
            }
        );
    }

    getVisibleViewState() /*: ViewState */ {
        return this._viewStates.find(vs => vs.getVisibility());
    }

    setVisibleViewState(visibleViewName /*: ?string */) /*: this */ {
        const oldVisibleViewName = this.getVisibleViewState() && this.getVisibleViewState().getName();

        return Object.assign(
            this._shallowCopy(),
            {
                _viewStates: this._viewStates.map(v => {
                    switch(v.getName()) {
                        case oldVisibleViewName:
                            return v.setVisibility(false);

                        case visibleViewName:
                            return v.setVisibility(true);

                        default:
                            return v;
                    }
                })
            }
        );
    }
}

module.exports = AppState;
