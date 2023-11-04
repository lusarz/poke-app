import * as React from 'react';

import { ExpoCustomModuleViewProps } from './ExpoCustomModule.types';

export default function ExpoCustomModuleView(props: ExpoCustomModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
