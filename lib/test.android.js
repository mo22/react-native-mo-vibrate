import { NativeModules } from 'react-native';
import * as base from './test';
export var NativeVibrateType;
(function (NativeVibrateType) {
    NativeVibrateType[NativeVibrateType["LONG_PRESS"] = 0] = "LONG_PRESS";
    NativeVibrateType[NativeVibrateType["VIRTUAL_KEY"] = 1] = "VIRTUAL_KEY";
    NativeVibrateType[NativeVibrateType["KEYBOARD_TAP"] = 3] = "KEYBOARD_TAP";
    NativeVibrateType[NativeVibrateType["CLOCK_TICK"] = 4] = "CLOCK_TICK";
    NativeVibrateType[NativeVibrateType["CALENDAR_DATE"] = 5] = "CALENDAR_DATE";
    NativeVibrateType[NativeVibrateType["CONTEXT_CLICK"] = 6] = "CONTEXT_CLICK";
    NativeVibrateType[NativeVibrateType["KEYBOARD_RELEASE"] = 7] = "KEYBOARD_RELEASE";
    NativeVibrateType[NativeVibrateType["VIRTUAL_KEY_RELEASE"] = 8] = "VIRTUAL_KEY_RELEASE";
    NativeVibrateType[NativeVibrateType["TEXT_HANDLE_MOVE"] = 9] = "TEXT_HANDLE_MOVE";
    NativeVibrateType[NativeVibrateType["ENTRY_BUMP"] = 10] = "ENTRY_BUMP";
    NativeVibrateType[NativeVibrateType["DRAG_CROSSING"] = 11] = "DRAG_CROSSING";
    NativeVibrateType[NativeVibrateType["GESTURE_START"] = 12] = "GESTURE_START";
    NativeVibrateType[NativeVibrateType["GESTURE_END"] = 13] = "GESTURE_END";
    NativeVibrateType[NativeVibrateType["EDGE_SQUEEZE"] = 14] = "EDGE_SQUEEZE";
    NativeVibrateType[NativeVibrateType["EDGE_RELEASE"] = 15] = "EDGE_RELEASE";
    NativeVibrateType[NativeVibrateType["CONFIRM"] = 16] = "CONFIRM";
    NativeVibrateType[NativeVibrateType["REJECT"] = 17] = "REJECT";
})(NativeVibrateType || (NativeVibrateType = {}));
export const NativeModule = NativeModules.ReactNativeMoVibrate;
export class Vibrate extends base.Vibrate {
    static vibrate(type) {
        if (type === base.VibrateType.TAP) {
            NativeModule.vibrate(NativeVibrateType.KEYBOARD_TAP);
        }
        else if (type === base.VibrateType.MEDIUM) {
            NativeModule.vibrate(NativeVibrateType.CONTEXT_CLICK);
        }
        else if (type === base.VibrateType.HEAVY) {
            NativeModule.vibrate(NativeVibrateType.REJECT);
        }
        else {
            NativeModule.vibrate(NativeVibrateType.KEYBOARD_TAP);
        }
    }
}
//# sourceMappingURL=test.android.js.map