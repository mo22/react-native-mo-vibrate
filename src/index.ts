import * as ios from './ios';
import * as android from './android';

export enum VibrateType {
  /*
   * just a tap
   */
  TAP = 'tap',

  /*
   * medium one time
   */
  MEDIUM = 'medium',
  HEAVY = 'heavy',
}

export class Vibrate {
  public static readonly Type = VibrateType;

  /*
   * Vibrate
   */
  public static vibrate(type: VibrateType) {
    if (ios.Module) {
      if (type === VibrateType.TAP) {
        ios.Module.vibrate(ios.VibrateType.ImpactLight);
      } else if (type === VibrateType.MEDIUM) {
        ios.Module.vibrate(ios.VibrateType.ImpactMedium);
      } else if (type === VibrateType.HEAVY) {
        ios.Module.vibrate(ios.VibrateType.ImpactHeavy);
      } else {
        ios.Module.vibrate(ios.VibrateType.ImpactLight);
      }
    } else if (android.Module) {
      if (type === VibrateType.TAP) {
        android.Module.vibrate(android.VibrateType.KEYBOARD_TAP);
      } else if (type === VibrateType.MEDIUM) {
        android.Module.vibrate(android.VibrateType.CONTEXT_CLICK);
      } else if (type === VibrateType.HEAVY) {
        android.Module.vibrate(android.VibrateType.REJECT);
      } else {
        android.Module.vibrate(android.VibrateType.KEYBOARD_TAP);
      }
    }
  }

}
