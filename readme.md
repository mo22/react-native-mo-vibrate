# react-native-mo-vibrate

Lets you vibrate your phone from react-native

## Usage

```ts
import { Vibrate } from 'react-native-mo-vibrate';

Vibrate.vibrate(Vibrate.Type.TAP);
```

## Advanced

```ts
import { Vibrate } from 'react-native-mo-vibrate';

if (Vibrate.android) {
  Vibrate.android.vibrate(Vibrate.android.VibrateType.DRAG_CROSSING);
}
```

## TODO
- [ ] check https://developer.apple.com/documentation/uikit/uinotificationfeedbacktype?language=objc
- [ ] check https://proandroiddev.com/using-vibrate-in-android-b0e3ef5d5e07
