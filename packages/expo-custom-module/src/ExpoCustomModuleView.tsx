import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoCustomModuleViewProps } from './ExpoCustomModule.types';

const NativeView: React.ComponentType<ExpoCustomModuleViewProps> =
  requireNativeViewManager('ExpoCustomModule');

export default function ExpoCustomModuleView(props: ExpoCustomModuleViewProps) {
  return <NativeView {...props} />;
}
