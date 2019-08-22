import { NativeModules } from 'react-native';
import * as base from './test';

export enum NativeVibrateType {
  ImpactLight = 'ImpactLight',
  ImpactMedium = 'ImpactMedium',
  ImpactHeavy = 'ImpactHeavy',
  NotificationError = 'NotificationError',
  NotificationWarning = 'NotificationWarning',
  NotificationSuccess = 'NotificationSuccess',
  SelectionChanged = 'SelectionChanged',
  System = 'System',
}

export interface NativeModule {
  vibrate(type: NativeVibrateType): void;
}

export const NativeModule = NativeModules.ReactNativeMoVibrate as NativeModule;

export class Vibrate extends base.Vibrate {

  public static vibrate(type: base.VibrateType) {
    if (type === base.VibrateType.TAP) {
      NativeModule.vibrate(NativeVibrateType.ImpactLight);
    } else if (type === base.VibrateType.MEDIUM) {
      NativeModule.vibrate(NativeVibrateType.ImpactMedium);
    } else if (type === base.VibrateType.HEAVY) {
      NativeModule.vibrate(NativeVibrateType.ImpactHeavy);
    } else {
      NativeModule.vibrate(NativeVibrateType.ImpactLight);
    }
  }

}
