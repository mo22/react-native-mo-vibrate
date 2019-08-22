import * as base from './test';
export declare enum NativeVibrateType {
    LONG_PRESS = 0,
    VIRTUAL_KEY = 1,
    KEYBOARD_TAP = 3,
    CLOCK_TICK = 4,
    CALENDAR_DATE = 5,
    CONTEXT_CLICK = 6,
    KEYBOARD_RELEASE = 7,
    VIRTUAL_KEY_RELEASE = 8,
    TEXT_HANDLE_MOVE = 9,
    ENTRY_BUMP = 10,
    DRAG_CROSSING = 11,
    GESTURE_START = 12,
    GESTURE_END = 13,
    EDGE_SQUEEZE = 14,
    EDGE_RELEASE = 15,
    CONFIRM = 16,
    REJECT = 17
}
export interface NativeModule {
    vibrate(type: NativeVibrateType): void;
}
export declare const NativeModule: NativeModule;
export declare class Vibrate extends base.Vibrate {
    static vibrate(type: base.VibrateType): void;
}
