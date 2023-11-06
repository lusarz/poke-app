import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { PillViewProps } from './CustomViews.types';

const NativeView: React.ComponentType<PillViewProps> = requireNativeViewManager("CustomViewsModule");

export default function PillView(props: PillViewProps) {
  return <NativeView {...props} />;
}
