import * as base from './test';
export declare enum NativeVibrateType {
    ImpactLight = "ImpactLight",
    ImpactMedium = "ImpactMedium",
    ImpactHeavy = "ImpactHeavy",
    NotificationError = "NotificationError",
    NotificationWarning = "NotificationWarning",
    NotificationSuccess = "NotificationSuccess",
    SelectionChanged = "SelectionChanged",
    System = "System"
}
export interface NativeModule {
    vibrate(type: NativeVibrateType): void;
}
export declare const NativeModule: NativeModule;
export declare class Vibrate extends base.Vibrate {
    static vibrate(type: base.VibrateType): void;
}
