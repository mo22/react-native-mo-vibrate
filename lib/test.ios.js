import { NativeModules } from 'react-native';
import * as base from './test';
export var NativeVibrateType;
(function (NativeVibrateType) {
    NativeVibrateType["ImpactLight"] = "ImpactLight";
    NativeVibrateType["ImpactMedium"] = "ImpactMedium";
    NativeVibrateType["ImpactHeavy"] = "ImpactHeavy";
    NativeVibrateType["NotificationError"] = "NotificationError";
    NativeVibrateType["NotificationWarning"] = "NotificationWarning";
    NativeVibrateType["NotificationSuccess"] = "NotificationSuccess";
    NativeVibrateType["SelectionChanged"] = "SelectionChanged";
    NativeVibrateType["System"] = "System";
})(NativeVibrateType || (NativeVibrateType = {}));
export const NativeModule = NativeModules.ReactNativeMoVibrate;
export class Vibrate extends base.Vibrate {
    static vibrate(type) {
        if (type === base.VibrateType.TAP) {
            NativeModule.vibrate(NativeVibrateType.ImpactLight);
        }
        else if (type === base.VibrateType.MEDIUM) {
            NativeModule.vibrate(NativeVibrateType.ImpactMedium);
        }
        else if (type === base.VibrateType.HEAVY) {
            NativeModule.vibrate(NativeVibrateType.ImpactHeavy);
        }
        else {
            NativeModule.vibrate(NativeVibrateType.ImpactLight);
        }
    }
}
//# sourceMappingURL=test.ios.js.map