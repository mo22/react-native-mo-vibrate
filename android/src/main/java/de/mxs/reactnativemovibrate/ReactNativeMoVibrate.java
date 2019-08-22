package de.mxs.reactnativemovibrate;

import android.app.Activity;
import android.view.HapticFeedbackConstants;
import android.view.View;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class ReactNativeMoVibrate extends ReactContextBaseJavaModule {

    ReactNativeMoVibrate(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public @Nonnull
    String getName() {
        return "ReactNativeMoVibrate";
    }

    @SuppressWarnings("unused")
    @ReactMethod
    public void vibrate(int type) {
        // https://developer.android.com/reference/android/view/HapticFeedbackConstants
        Activity activity = getReactApplicationContext().getCurrentActivity();
        if (activity == null) return;
        View view = activity.getWindow().getDecorView();
        view.performHapticFeedback(type, HapticFeedbackConstants.FLAG_IGNORE_VIEW_SETTING);
    }

}