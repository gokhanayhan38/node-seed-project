"use strict";

//const ViewState = require("./view-state"); //TODO relative path ver
//const {Record} = require("immutable");

//const AppStateRecord = Record({
//    viewStates: []
//});

//extends Record({a: 1})

class AppState {
    //constructor(options /*: Object */) {
    //    if (options.viewStates.length == 0) {
    //        const err = new Error(`error in AppState constructor - invalid 'viewStates' argument:${options.viewStates}`);
    //
    //        console.error(err);
    //        throw err;
    //    }
    //    else {
    //        super(options);
    //    }
    //}
    //
    //static fromJson(obj /*: Object */) /*: AppState */ {
    //    return new AppState({
    //        viewStates: obj.viewStates.map(v => ViewState.fromJson(v))
    //    });
    //}
}

module.exports = AppState;
