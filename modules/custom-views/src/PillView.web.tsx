import * as React from 'react';

import { PillViewProps } from './CustomViews.types';

export default function PillView(props: PillViewProps) {
  return (
    <div>
      <span>{props.value}</span>
    </div>
  );
}
