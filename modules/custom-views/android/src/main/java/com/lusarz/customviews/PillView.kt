package com.lusarz.customviews

import android.content.Context
import android.graphics.Color
import android.graphics.Typeface
import android.widget.TextView
import android.util.TypedValue
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView

class PillView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {
  internal val textView = TextView(context).also {
      it.textSize = 24f
      it.setTextColor(Color.BLUE)
      it.setBackgroundColor(Color.YELLOW)
      it.setPadding(25, 25, 25, 35)
      addView(it)
    }

    fun setValue(value: Int?) {
      textView.text = value?.toString() ?: ""
    }
}
