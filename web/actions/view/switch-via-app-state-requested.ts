
// const ActionNames = require("../../action-names");
import ActionNames from "../../action-names";

class SwitchViaAppStateRequested {
    /*:: name:string
         toAppState: AppState
     */
    constructor(options /*: {toAppState: AppState} */) {
        if (Object.keys(options.toAppState).length == 0) {
            const err = new Error("error in SwitchViaAppStateRequested constructor - empty arguments");

            console.error(err.message);
            throw err;
        }
        else {
            this.name = ActionNames.VIEW_SWITCH_VIA_APP_STATE_REQUESTED;
            this.toAppState = options.toAppState;
        }
    }
}

// module.exports = SwitchViaAppStateRequested;
export {
    SwitchViaAppStateRequested
};