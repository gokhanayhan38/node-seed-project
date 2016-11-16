"use strict";
/* @flow */

const ActionNames = require("web-action-names");

/*::
 type Options = {
 toViewName: string
 };
 */

class SwitchViaViewNameRequested {
    /*:: name: string */
    /*:: toViewName: string */

    constructor({toViewName} /*: Options */) {
        if (toViewName.length == 0) {
            const err = new Error("error in SwitchViaViewNameRequested constructor - empty arguments");

            console.error(err.message);
            throw err;
        }
        else {
            this.name = ActionNames.VIEW_SWITCH_VIA_VIEW_NAME_REQUESTED;
            this.toViewName = toViewName;
        }
    }
}

module.exports = SwitchViaViewNameRequested;
