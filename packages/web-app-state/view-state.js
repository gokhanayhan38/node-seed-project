"use strict";
/* @flow */

const GeoMapState = require("./geo-map-state");

const _ = require("underscore");

/*::
 type Options = {
 name: string,
 title: string,
 controlPanelVisility?: ?boolean,
 visibility?: ?boolean,
 idFieldNames?: ?Array<string>,
 geoMapStates?: ?Array<Object>
 };
 */

class ViewState {
    /*:: _name: string */
    /*:: _title: string */
    /*:: _controlPanelVisibility: boolean */
    /*:: _visibility: boolean */
    /*:: _idFieldNames: Array<string> */
    /*:: _geoMapStates: Array<Object> */

    constructor(options /*: Options */) {
        var {
            name, title,controlPanelVisibility, visibility, idFieldNames,geoMapStates
            } = options;
        controlPanelVisibility = controlPanelVisibility != null ? controlPanelVisibility : false;
        visibility = visibility != null ? visibility : false;
        idFieldNames = idFieldNames != null ? idFieldNames : [];
        geoMapStates = geoMapStates != null ? geoMapStates : [];

        if (geoMapStates.length == 0) {
            const err = new Error(`error in ViewState constructor - invalid 'geoMapStates' argument:${geoMapStates}`);

            console.error(err);
            throw err;
        }
        else {
            this._name = name;
            this._title = title;
            this._controlPanelVisibility = controlPanelVisibility;
            this._visibility = visibility;
            this._idFieldNames = idFieldNames;
            this._geoMapStates = geoMapStates.map(gms => {
                return gms instanceof GeoMapState ? gms : new GeoMapState(gms);
            });
        }
    }

    _shallowCopy() /*: this */ {
        return new ViewState({
            name: this._name,
            title: this._title,
            controlPanelVisibility: this._controlPanelVisibility,
            visibility: this._visibility,
            idFieldNames: this._idFieldNames,
            geoMapStates: this._geoMapStates
        });
    }

    getName() /*: string */ {
        return this._name;
    }

    getTitle() /*: string */ {
        return this._title;
    }

    getControlPanelVisibility() /*: boolean */ {
        return this._controlPanelVisibility;
    }

    setControlPanelVisibility(controlPanelVisibility /*: boolean */) /*: this */ {
        return Object.assign(
            this._shallowCopy(),
            {
                _controlPanelVisibility: controlPanelVisibility
            }
        );

    }

    toggleControlPanelVisibility() /*: this */ {
        return this.setControlPanelVisibility(
            !this.getControlPanelVisibility()
        );
    }

    getVisibility() /*: boolean */ {
        return this._visibility;
    }

    setVisibility(visibility /*: boolean */) /*: this */ {
        return Object.assign(
            this._shallowCopy(),
            {
                _visibility: visibility
            }
        );
    }

    getIdFieldNames() /*: Array<string> */ {
        return this._idFieldNames;
    }

    getGeoMapStates() /*: Array<GeoMapState>  */ {
        return this._geoMapStates;
    }

    setGeoMapStates(geoMapStates /*: ?Array<GeoMapState> */) /*: this */ {
        return Object.assign(
            this._shallowCopy(),
            {
                _geoMapStates: geoMapStates
            }
        );
    }

    getVisibleGeoMapStates() /*: Array<GeoMapState> */ {
        return this._geoMapStates;
    }

    getCategoryChartState(categoryChartName /*: string */) /*: CategoryChartState */ {
        return this._categoryChartStates.find(c => c.getName() === categoryChartName);
    }

    setCategoryChartState(categoryChartName /*: string */, categoryChartState /*: CategoryChartState */) /*: this */ {
        return Object.assign(
            this._shallowCopy(),
            {
                _categoryChartStates: this._categoryChartStates.map(c => {
                    return c.getName() === categoryChartName ? categoryChartState : c;
                })
            }
        );
    }

    getGeoMapState(geoMapName /*: string */) /*: GeoMapState */ {
        return this._geoMapStates.find(g => g.getName() === geoMapName);
    }

    setGeoMapState(geoMapName /*: string */, geoMapState /*: ?GeoMapState */) /*: this */ {
        return Object.assign(
            this._shallowCopy(),
            {
                _geoMapStates: this._geoMapStates.map(g => {
                    return g.getName() === geoMapName ? geoMapState : g;
                })
            }
        );
    }
}

module.exports = ViewState;
