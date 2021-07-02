import { CSSObject } from '@emotion/core';

import * as componentTokens from './component-tokens';
import { Appearance } from './types';

const disabledRules = {
  backgroundColor: componentTokens.defaultBackgroundColor,
  backgroundColorFocus: componentTokens.disabledBackgroundColor,
  backgroundColorHover: componentTokens.disabledBackgroundColor,
  // same as bg, appears as no border
  borderColor: componentTokens.defaultBackgroundColor,
  borderColorFocus: componentTokens.defaultBorderColorFocus,
  textColor: componentTokens.disabledTextColor,
};
const invalidRules = {
  backgroundColor: componentTokens.defaultBackgroundColor,
  backgroundColorFocus: componentTokens.defaultBackgroundColorFocus,
  backgroundColorHover: componentTokens.defaultBackgroundColorHover,
  borderColor: componentTokens.invalidBorderColor,
  borderColorFocus: componentTokens.defaultBorderColorFocus,
};
const backgroundColor = {
  standard: componentTokens.defaultBackgroundColor,
  subtle: componentTokens.transparent,
  none: componentTokens.transparent,
};
const backgroundColorFocus = {
  standard: componentTokens.defaultBackgroundColorFocus,
  subtle: componentTokens.defaultBackgroundColorFocus,
  none: componentTokens.transparent,
};
const backgroundColorHover = {
  standard: componentTokens.defaultBackgroundColorHover,
  subtle: componentTokens.defaultBackgroundColorHover,
  none: componentTokens.transparent,
};
const borderColor = {
  standard: componentTokens.defaultBorderColor,
  subtle: componentTokens.transparent,
  none: componentTokens.transparent,
};
const borderColorFocus = {
  standard: componentTokens.defaultBorderColorFocus,
  subtle: componentTokens.defaultBorderColorFocus,
  none: componentTokens.transparent,
};

const getContainerTextBgAndBorderColor = (appearance: Appearance) => ({
  backgroundColor: backgroundColor[appearance],
  borderColor: borderColor[appearance],
  color: componentTokens.textColor,
  cursor: 'text',
  '&:hover': {
    backgroundColor: backgroundColorHover[appearance],
  },
  '&:focus-within': {
    backgroundColor: backgroundColorFocus[appearance],
    borderColor: borderColorFocus[appearance],
  },
  '&[data-disabled]': {
    backgroundColor: disabledRules.backgroundColor,
    borderColor: disabledRules.borderColor,
    color: disabledRules.textColor,
    cursor: 'not-allowed',
  },
  '&[data-disabled]:focus-within': {
    backgroundColor: disabledRules.backgroundColorFocus,
    borderColor: disabledRules.borderColorFocus,
  },
  '&[data-disabled]:hover': {
    backgroundColor: disabledRules.backgroundColorHover,
  },
  '&[data-invalid]': {
    backgroundColor: invalidRules.backgroundColor,
    borderColor: invalidRules.borderColor,
  },
  '&[data-invalid]:focus-within': {
    backgroundColor: invalidRules.backgroundColorFocus,
    borderColor: invalidRules.borderColorFocus,
  },
  '&[data-invalid]:hover': {
    backgroundColor: invalidRules.backgroundColorHover,
  },
});

const widthMap: { [key: string]: number } = {
  xsmall: 80,
  small: 160,
  medium: 240,
  large: 320,
  xlarge: 480,
};

const getMaxWidth = (width: string | number | undefined): number | string =>
  !width ? `100%` : width in widthMap ? widthMap[width] : +width;

export const containerStyles = (
  appearance: Appearance,
  width?: string | number,
): CSSObject => ({
  alignItems: 'center',
  ...getContainerTextBgAndBorderColor(appearance),
  borderRadius: 3,
  borderWidth: 2,
  borderStyle: appearance === 'none' ? 'none' : 'solid',
  boxSizing: 'border-box',
  display: 'flex',
  flex: '1 1 100%',
  fontFamily: 'inherit',
  fontSize: '15px',
  justifyContent: 'space-between',
  maxWidth: getMaxWidth(width),
  overflow: 'hidden',
  transition: `background-color 0.2s ease-in-out, border-color 0.2s ease-in-out`,
  wordWrap: 'break-word',
  verticalAlign: 'top',
  pointerEvents: 'auto',
});

export const inputStyles = (): CSSObject => ({
  backgroundColor: 'transparent',
  border: 0,
  boxSizing: 'border-box',
  color: 'inherit',
  cursor: 'inherit',
  fontFamily: 'inherit',
  fontSize: '15px',
  minWidth: '0',
  outline: 'none',
  width: '100%',
  lineHeight: '1.5',
  '&[data-compact]': {
    padding: '4px 6px',
    height: '2em',
  },
  '&:not([data-compact])': {
    padding: '8px 6px',
    height: '2.57em',
  },
  '&[disabled]': {
    // Safari (WebKit) adds a -webkit-text-fill-color style to disabled inputs
    // which takes priority over color and makes the text unreadable. Need to
    // override it with the color we want.
    WebkitTextFillColor: disabledRules.textColor,
  },
  // Hide the clear indicator on Edge (Windows only)
  '&::-ms-clear': {
    display: 'none',
  },
  '&:invalid': {
    boxShadow: 'none',
  },
  '&::placeholder': {
    color: componentTokens.placeholderTextColor,
    '&:disabled': {
      color: disabledRules.textColor,
    },
  },
});

export const TextFieldColors = {
  backgroundColor,
  backgroundColorFocus,
  backgroundColorHover,
  borderColor,
  borderColorFocus,
  placeholderTextColor: componentTokens.placeholderTextColor,
  textColor: componentTokens.textColor,
  invalidRules,
  disabledRules,
};
