package de.mxs.reactnativemovibrate;

import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageManager;
import android.os.VibrationEffect;
import android.os.Vibrator;
import android.util.Log;
import android.view.HapticFeedbackConstants;
import android.view.View;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;

import java.util.Arrays;

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

    @SuppressWarnings("unused")
    @ReactMethod
    public void vibratePattern(ReadableMap args) {
        Log.i("XXX", "hello1 " + args);
        long[] pattern;
        {
            ReadableArray tmp = args.getArray("pattern");
            if (tmp == null) {
                throw new RuntimeException("pattern is required");
            }
            pattern = new long[tmp.size()];
            for (int i=0; i<pattern.length; i++) {
                pattern[i] = tmp.getInt(i);
            }
        }
        int[] amplitude = new int[pattern.length];
        {
            ReadableArray tmp = args.getArray("amplitude");
            if (tmp == null || tmp.size() != amplitude.length) {
                throw new RuntimeException("amplitude is required and must have same length as pattern");
            }
            for (int i=0; i<amplitude.length; i++) {
                amplitude[i] = tmp.getInt(i);
            }
        }
        int repeat = args.getInt("repeat");
        Vibrator vibrator = (Vibrator)getReactApplicationContext().getSystemService(Context.VIBRATOR_SERVICE);
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
            Log.i("XXX", "go with waveform");
//            VibrationEffect vibe = VibrationEffect.createWaveform(pattern, amplitude, repeat);
            VibrationEffect vibe = VibrationEffect.createOneShot(1000, 255);
            Log.i("XXX", "vibe=" + vibe);
            // run this in background?
            if (getReactApplicationContext().checkSelfPermission(android.Manifest.permission.VIBRATE) == PackageManager.PERMISSION_GRANTED) {
                Log.i("XXX", "go vibrate");
                vibrator.vibrate(vibe);
            } else {
                Log.i("XXX", "no permission");
            }
            Log.i("XXX", "yeah");
        } else {
            Log.i("XXX", "go with vibrate");
            vibrator.vibrate(pattern, repeat);
        }
        Log.i("XXX", "done");
    }

}