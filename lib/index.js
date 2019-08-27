import * as ios from './ios';
import * as android from './android';
export var VibrateType;
(function (VibrateType) {
    /**
     * just a slight tap
     */
    VibrateType["TAP"] = "tap";
    /**
     * a little bit more
     */
    VibrateType["MEDIUM"] = "medium";
    /**
     * bang it!
     */
    VibrateType["HEAVY"] = "heavy";
})(VibrateType || (VibrateType = {}));
export class Vibrate {
    /**
     * Vibrate. See Vibrate.Type
     */
    static vibrate(type) {
        if (ios.Module) {
            if (type === VibrateType.TAP) {
                ios.Module.vibrate(ios.VibrateType.ImpactLight);
            }
            else if (type === VibrateType.MEDIUM) {
                ios.Module.vibrate(ios.VibrateType.ImpactMedium);
            }
            else if (type === VibrateType.HEAVY) {
                ios.Module.vibrate(ios.VibrateType.ImpactHeavy);
            }
            else {
                ios.Module.vibrate(ios.VibrateType.ImpactLight);
            }
        }
        else if (android.Module) {
            if (type === VibrateType.TAP) {
                android.Module.vibrate(android.VibrateType.KEYBOARD_TAP);
            }
            else if (type === VibrateType.MEDIUM) {
                android.Module.vibrate(android.VibrateType.CONTEXT_CLICK);
            }
            else if (type === VibrateType.HEAVY) {
                android.Module.vibrate(android.VibrateType.REJECT);
            }
            else {
                android.Module.vibrate(android.VibrateType.KEYBOARD_TAP);
            }
        }
    }
}
Vibrate.Type = VibrateType;
//# sourceMappingURL=index.js.map