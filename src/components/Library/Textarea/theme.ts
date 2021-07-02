import { createTheme } from '@context/Theme';

import * as componentTokens from './component-tokens';

const disabledRules = {
  backgroundColor: componentTokens.disabledBackgroundColor,
  backgroundColorFocus: componentTokens.disabledBackgroundColor,
  backgroundColorHover: componentTokens.disabledBackgroundColor,
  borderColor: componentTokens.defaultBorderColor,
  borderColorFocus: componentTokens.defaultBorderColorFocus,
  textColor: componentTokens.disabledTextColor,
};

const invalidRules = {
  borderColor: componentTokens.invalidBorderColor,
  borderColorFocus: componentTokens.defaultBorderColorFocus,
  backgroundColor: componentTokens.defaultBackgroundColor,
  backgroundColorFocus: componentTokens.defaultBackgroundColorFocus,
  backgroundColorHover: componentTokens.defaultBackgroundColorHover,
};

// The following do not yet have a darkmode 'map': N20A, N10
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

export type ThemeAppearance = 'standard' | 'subtle' | 'none';
export type ThemeProps = {
  appearance: ThemeAppearance;
};
export type ThemeTokens = {
  borderColor: string;
  borderColorFocus: string;
  backgroundColor: string;
  backgroundColorFocus: string;
  backgroundColorHover: string;
  disabledRules: {
    backgroundColor: string;
    backgroundColorFocus: string;
    backgroundColorHover: string;
    borderColor: string;
    borderColorFocus: string;
    textColor: string;
  };
  invalidRules: {
    borderColor: string;
    borderColorFocus: string;
    backgroundColor: string;
    backgroundColorFocus: string;
    backgroundColorHover: string;
  };
  textColor: string;
  placeholderTextColor: string;
};

export const themeTokens = {
  borderColor,
  borderColorFocus,
  backgroundColor,
  backgroundColorFocus,
  backgroundColorHover,
  disabledRules,
  invalidRules,
  textColor: componentTokens.textColor,
  placeholderTextColor: componentTokens.placeholderTextColor,
};

export const Theme = createTheme<ThemeTokens, ThemeProps>(
  ({ appearance }: ThemeProps): ThemeTokens => ({
    borderColor: borderColor[appearance],
    borderColorFocus: borderColorFocus[appearance],
    backgroundColorHover: backgroundColorHover[appearance],
    backgroundColorFocus: backgroundColorFocus[appearance],
    backgroundColor: backgroundColor[appearance],
    disabledRules: disabledRules,
    invalidRules: invalidRules,
    textColor: componentTokens.textColor,
    placeholderTextColor: componentTokens.placeholderTextColor,
  }),
);
