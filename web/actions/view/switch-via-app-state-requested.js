import ActionNames from "../../action-names";
class SwitchViaAppStateRequested {
    constructor(options) {
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
export { SwitchViaAppStateRequested };
