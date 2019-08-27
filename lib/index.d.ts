export declare enum VibrateType {
    /**
     * just a slight tap
     */
    TAP = "tap",
    /**
     * a little bit more
     */
    MEDIUM = "medium",
    /**
     * bang it!
     */
    HEAVY = "heavy"
}
export declare class Vibrate {
    static readonly Type: typeof VibrateType;
    /**
     * Vibrate. See Vibrate.Type
     */
    static vibrate(type: VibrateType): void;
}
