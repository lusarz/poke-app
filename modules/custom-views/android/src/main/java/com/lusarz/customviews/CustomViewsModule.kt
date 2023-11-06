package com.lusarz.customviews

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL

class CustomViewsModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("CustomViewsModule")

    View(PillView::class) {
      Prop("value") { view: PillView, value: Int ->
        view.setValue(value)
      }
    }
  }
}
