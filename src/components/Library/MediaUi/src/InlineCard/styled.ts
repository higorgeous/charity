import { ComponentClass, HTMLAttributes } from 'react';
import styled from 'styled-components';

import { colors, themed } from '@discovr/core.theme';

const { B400, N200 } = colors;
const LINK_COLOR_DARK = '#4794FF';

// By default buttons will hide overflow and ellipsis content instead of wrapping.
// This basically turns the button back into inline content
export const IconStyledButton = styled.span<ComponentClass<HTMLAttributes<{}>>>`
  text-align: initial !important;
  display: inline !important;

  &:hover {
    /* Remove the text-decoration to match other inline card hover states*/
    text-decoration: none !important;
  }

  > span {
    display: inline;
    > span {
      overflow: initial;
      text-overflow: initial;
      white-space: initial;
    }
  }
`;

export const NoLinkAppearance = styled.span<ComponentClass<HTMLAttributes<{}>>>`
  color: ${themed({ light: N200, dark: LINK_COLOR_DARK })};
`;

export const LowercaseAppearance = styled.span`
  text-transform: lowercase;
`;

export const LinkAppearance = styled.span<ComponentClass<HTMLAttributes<{}>>>`
  color: ${themed({ light: B400, dark: LINK_COLOR_DARK })};
`;
