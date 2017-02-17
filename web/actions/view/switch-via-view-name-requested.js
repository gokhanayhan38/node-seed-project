import ActionNames from "../../action-names";
class SwitchViaViewNameRequested {
    constructor(toViewName) {
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
export { SwitchViaViewNameRequested };
