/** @jsx jsx */
import { jsx } from '@emotion/core';

import { colors } from '@discovr/core.theme';

import { gs, mq } from '../utils';

const { N300 } = colors;

export interface BylineProps {
  /* Text to be displayed in the body of the card. */
  text?: React.ReactNode;
  children?: React.ReactNode;
}

export const Byline = ({ text, children }: BylineProps) => (
  <span
    css={mq({
      fontSize: gs(1.5),
      lineHeight: gs(2.5),
      color: `${N300}`,
      fontWeight: 'normal',
      marginTop: gs(0.5),
      // Spec: only allow two lines MAX to be shown.
      display: '-webkit-box',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      wordBreak: 'break-word',
      // Fallback options.
      maxHeight: gs(5),
      whiteSpace: 'pre-line',
      // EDM-713: fixes copy-paste from renderer to editor for Firefox
      // due to HTML its unwrapping behaviour on paste.
      MozUserSelect: 'none',
    })}
  >
    {text || children}
  </span>
);
