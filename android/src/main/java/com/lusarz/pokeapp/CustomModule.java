package com.lusarz.pokeapp;

import android.app.Activity;
import android.graphics.Color;
import android.view.Gravity;
import android.widget.FrameLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CustomModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  CustomModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @NonNull
  @Override
  public String getName() {
    return "CustomModule";
  }

  @ReactMethod
  public void showCustomView() {
    Activity currentActivity = getCurrentActivity();

    if (currentActivity != null) {
      // Create a TextView for the label
      TextView labelView = new TextView(currentActivity);
      labelView.setText("Hello from Custom View!");
      labelView.setTextSize(24);
      labelView.setTextColor(Color.BLACK);
      labelView.setGravity(Gravity.CENTER);

      // Create a FrameLayout to hold the TextView
      FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(
        FrameLayout.LayoutParams.MATCH_PARENT,
        FrameLayout.LayoutParams.MATCH_PARENT
      );

      FrameLayout frameLayout = new FrameLayout(currentActivity);
      frameLayout.setLayoutParams(layoutParams);
      frameLayout.addView(labelView);

      // Add the custom view to the current activity's content view
      currentActivity.addContentView(frameLayout, layoutParams);
    }
  }
}
