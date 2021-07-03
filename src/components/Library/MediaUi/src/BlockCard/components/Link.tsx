/** @jsx jsx */
import { jsx } from '@emotion/core';

import { colors } from '@discovr/core.theme';

export interface LinkProps {
  url: string;
}

const { B400 } = colors;

export const Link = ({ url }: LinkProps) => {
  return <span css={{ color: B400, wordBreak: 'break-all' }}>{url}</span>;
};
