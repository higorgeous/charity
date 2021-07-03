import { AnchorHTMLAttributes, ComponentClass } from 'react';
import styled from 'styled-components';

import { colors, constants, elevation, themed } from '@discovr/core.theme';

export interface WrapperProps {
  isSelected?: boolean;
  isInteractive?: boolean;
  withoutBackground?: boolean;
}

const { B100, B400, B50, N20 } = colors;
const { borderRadius: dbBorderRadius } = constants;
const { e100 } = elevation;

const BACKGROUND_COLOR_DARK = '#262B31';

const selected = `
  cursor: pointer;
  box-shadow: 0 0 0 2px ${B100};
  outline: none;
  user-select: none;
  &, :hover, :focus, :active {
    text-decoration: none;
  }
`;

const isInteractive = ({ isInteractive }: WrapperProps) => {
  if (isInteractive) {
    return `
      cursor: pointer;
      :hover {
        background-color: ${themed({
          light: N20,
          dark: BACKGROUND_COLOR_DARK,
        })};
        text-decoration: none;
      }
      :active {
        background-color: ${themed({
          light: B50,
          dark: BACKGROUND_COLOR_DARK,
        })};
        text-decoration: none;
      }
      :focus {
        ${selected}
        text-decoration: none;
      }
    `;
  } else {
    return '';
  }
};

const isSelected = ({ isSelected }: WrapperProps) => {
  if (isSelected) {
    return selected;
  } else {
    return 'user-select: text';
  }
};

/*
  Inline smart cards should have the following layout:
  ------------------------------------
  | icon | title | action OR lozenge |
  ------------------------------------
  The aim is to ensure (1) all children are
  in line with each other, (2) are vertically
  centered.
*/
// NB: `padding` consistent with @mentions.
// NB: `display: inline` required for `box-decoration-break` to work.
// NB: `box-decoration-break` required for retaining properties (border-radius) on wrap.
export const Wrapper = styled.a<any>`
  line-height: 16px;
  padding: 1px 0.24em 2px 0.24em;
  display: inline;
  box-decoration-break: clone;
  border-radius: ${dbBorderRadius()}px;
  color: ${themed({ light: B400, dark: '#4794FF' })};
  background-color: ${(props) =>
    props.withoutBackground
      ? ''
      : themed({ light: 'white', dark: BACKGROUND_COLOR_DARK })};
  ${(props) => (props.withoutBackground ? '' : e100())};
  ${isInteractive}
  ${isSelected};
  transition: 0.1s all ease-in-out;
  -moz-user-select: none;
`;
