import React from 'react';
import withIcon, { Props } from '../withIcon';

function IconNotes(props: Props) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </svg>
  );
}

export default withIcon('IconNotes')(IconNotes);
