import * as ios from './ios';
import * as android from './android';



export class Vibrate {
  public static readonly TAP = 'tap';
  public static readonly MEDIUM = 'medium';
  public static readonly HEAVY = 'heavy';

  public static vibrate(type: Vibrate) {
    if (ios.Module) {
      if (type === Vibrate.TAP) {
        ios.Module.vibrate(ios.VibrateType.ImpactLight);
      } else if (type === Vibrate.MEDIUM) {
        ios.Module.vibrate(ios.VibrateType.ImpactMedium);
      } else if (type === Vibrate.HEAVY) {
        ios.Module.vibrate(ios.VibrateType.ImpactHeavy);
      } else {
        ios.Module.vibrate(ios.VibrateType.ImpactLight);
      }
    } else if (android.Module) {
      if (type === Vibrate.TAP) {
        android.Module.vibrate(android.VibrateType.KEYBOARD_TAP);
      } else if (type === Vibrate.MEDIUM) {
        android.Module.vibrate(android.VibrateType.CONTEXT_CLICK);
      } else if (type === Vibrate.HEAVY) {
        android.Module.vibrate(android.VibrateType.REJECT);
      } else {
        android.Module.vibrate(android.VibrateType.KEYBOARD_TAP);
      }
    }
  }

}
