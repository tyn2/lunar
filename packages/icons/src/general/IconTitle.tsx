import React from 'react';
import withIcon, { Props } from '../withIcon';

function IconTitle(props: Props) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M5 4v3h5.5v12h3V7H19V4z" />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </svg>
  );
}

export default withIcon('IconTitle')(IconTitle);
