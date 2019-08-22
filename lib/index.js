import * as ios from './ios';
import * as android from './android';
export class Vibrate {
    static vibrate(type) {
        if (ios.Module) {
            if (type === Vibrate.TAP) {
                ios.Module.vibrate(ios.VibrateType.ImpactLight);
            }
            else if (type === Vibrate.MEDIUM) {
                ios.Module.vibrate(ios.VibrateType.ImpactMedium);
            }
            else if (type === Vibrate.HEAVY) {
                ios.Module.vibrate(ios.VibrateType.ImpactHeavy);
            }
            else {
                ios.Module.vibrate(ios.VibrateType.ImpactLight);
            }
        }
        else if (android.Module) {
            if (type === Vibrate.TAP) {
                android.Module.vibrate(android.VibrateType.KEYBOARD_TAP);
            }
            else if (type === Vibrate.MEDIUM) {
                android.Module.vibrate(android.VibrateType.CONTEXT_CLICK);
            }
            else if (type === Vibrate.HEAVY) {
                android.Module.vibrate(android.VibrateType.REJECT);
            }
            else {
                android.Module.vibrate(android.VibrateType.KEYBOARD_TAP);
            }
        }
    }
}
Vibrate.TAP = 'tap';
Vibrate.MEDIUM = 'medium';
Vibrate.HEAVY = 'heavy';
//# sourceMappingURL=index.js.map