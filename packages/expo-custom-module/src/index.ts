import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoCustomModule.web.ts
// and on native platforms to ExpoCustomModule.ts
import ExpoCustomModule from './ExpoCustomModule';
import ExpoCustomModuleView from './ExpoCustomModuleView';
import { ChangeEventPayload, ExpoCustomModuleViewProps } from './ExpoCustomModule.types';

// Get the native constant value.
export const PI = ExpoCustomModule.PI;

export function hello(): string {
  return ExpoCustomModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoCustomModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoCustomModule ?? NativeModulesProxy.ExpoCustomModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoCustomModuleView, ExpoCustomModuleViewProps, ChangeEventPayload };
