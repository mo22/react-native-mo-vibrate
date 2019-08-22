export declare enum VibrateType {
    TAP = "tap",
    MEDIUM = "medium",
    HEAVY = "heavy"
}
export declare class Vibrate {
    static readonly Type: typeof VibrateType;
    static vibrate(type: VibrateType): void;
}
