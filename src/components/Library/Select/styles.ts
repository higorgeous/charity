import { StylesConfig, ValidationState } from './types';

const BORDER_WIDTH = 2;
const ICON_PADDING = 2;
const paddingExcludingBorder = 8 - BORDER_WIDTH;

export default function baseStyles<Option, IsMulti extends boolean>(
  validationState: ValidationState,
  isCompact: boolean,
): StylesConfig<Option, IsMulti> {
  return {
    container: (css, { isDisabled }) => ({
      ...css,
      // react-select disables pointer events when isDisabled is true.
      // We override this and make the inner container turn it off instead.
      pointerEvents: 'all',
      cursor: isDisabled ? 'not-allowed' : undefined,
    }),
    input: (css) => ({
      ...css,
      color: 'var(--color-color-primary)',
    }),
    control: (css, { isFocused, isDisabled }) => {
      let borderColor = isFocused
        ? 'var(--color-input-disabled)'
        : 'var(--color-input-border)';
      let backgroundColor = isFocused
        ? 'var(--color-input-backgroundFocus)'
        : 'var(--color-input-background)';

      if (isDisabled) {
        backgroundColor = 'var(--color-input-disabled)';
      }

      if (validationState === 'error') {
        borderColor = 'var(--color-text-error)';
      }
      if (validationState === 'success') {
        borderColor = 'var(--color-button-primary)';
      }

      let borderColorHover = isFocused
        ? 'var(--color-input-borderFocus)'
        : 'var(--color-input-border)';

      if (validationState === 'error') {
        borderColorHover = 'var(--color-text-error)';
      }
      if (validationState === 'success') {
        borderColorHover = 'var(--color-button-primary)';
      }

      const transitionDuration = '200ms';

      return {
        ...css,
        // Turn pointer events off when disabled - this makes it so hover etc don't work.
        pointerEvents: isDisabled ? 'none' : undefined,
        backgroundColor,
        borderColor,
        borderStyle: 'solid',
        borderRadius: '3px',
        borderWidth: '2px',
        boxShadow: 'none',
        minHeight: isCompact ? 8 * 4 : 8 * 5,
        padding: 0,
        transition: `background-color ${transitionDuration} ease-in-out,
        border-color ${transitionDuration} ease-in-out`,
        '::-webkit-scrollbar': {
          height: 8,
          width: 8,
        },
        '::-webkit-scrollbar-corner': {
          display: 'none',
        },
        ':hover': {
          '::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0.2)',
          },
          cursor: 'pointer',
          backgroundColor: isFocused
            ? 'var(--color-input-backgroundHover)'
            : 'var(--color-input-backgroundHover)',
          borderColor: borderColorHover,
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'rgba(0,0,0,0.4)',
        },
      };
    },
    menu: (css) => ({
      ...css,
      backgroundColor: '#ffffff',
      borderRadius: 4,
      boxShadow: `0 5px 25px rgb(0 17 36 / 15%)`,
      maxWidth: `440px`,
      minWidth: `220px`,
      zIndex: 98,
    }),
    valueContainer: (css) => ({
      ...css,
      paddingLeft: paddingExcludingBorder,
      paddingRight: paddingExcludingBorder,
      paddingBottom: isCompact ? 0 : 2,
      paddingTop: isCompact ? 0 : 2,
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    clearIndicator: (css) => ({
      ...css,
      color: 'var(--color-text-primary)',
      paddingLeft: ICON_PADDING,

      paddingRight: ICON_PADDING,

      paddingBottom: isCompact ? 0 : 6,

      paddingTop: isCompact ? 0 : 6,

      ':hover': {
        color: 'var(--color-text-secondary)',
      },
    }),
    loadingIndicator: (css) => ({
      ...css,
      paddingBottom: isCompact ? 0 : 6,
      paddingTop: isCompact ? 0 : 6,
    }),
    dropdownIndicator: (css, { isDisabled }) => {
      let color = 'var(--color-text-secondary)';

      if (isDisabled) {
        color = 'var(--color-text-secondary)';
      }

      return {
        ...css,
        color,
        paddingLeft: ICON_PADDING,
        paddingRight: ICON_PADDING,
        paddingBottom: isCompact ? 0 : 6,
        paddingTop: isCompact ? 0 : 6,
        ':hover': {
          color: 'var(--color-text-primary)',
        },
      };
    },
    indicatorsContainer: (css) => ({
      ...css,
      paddingRight: paddingExcludingBorder - ICON_PADDING,
    }),
    option: (css, { isFocused, isSelected, isDisabled }) => {
      let color = '#002358';
      if (isDisabled) {
        color = '#002358';
      } else if (isSelected) {
        color = '#002358';
      }

      let backgroundColor;
      if (isDisabled) {
        backgroundColor = undefined;
      } else if (isSelected) {
        backgroundColor = '#d4e1f3';
      } else if (isFocused) {
        backgroundColor = '#d4e1f3';
      }

      const cursor = isDisabled ? 'not-allowed' : undefined;

      return {
        ...css,
        paddingTop: '6px',
        paddingBottom: '6px',
        backgroundColor,
        color,
        cursor,
      };
    },
    placeholder: (css) => ({ ...css, color: 'var(--color-text-secondary)' }),
    singleValue: (css, { isDisabled }) => ({
      ...css,
      color: isDisabled
        ? 'var(--color-text-secondary)'
        : 'var(--color-text-primary)',
      lineHeight: `${8 * 2}px`, // 16px
    }),
    menuList: (css) => ({
      ...css,
      paddingTop: 8,
      paddingBottom: 8,
    }),
    multiValue: (css) => ({
      ...css,
      borderRadius: '2px',
      backgroundColor: 'var(--color-bg-element)',
      color: '#002358',
      maxWidth: '100%',
    }),
    multiValueLabel: (css) => ({
      ...css,
      padding: '2px',
      paddingRight: '2px',
    }),
    multiValueRemove: (
      css,
      {
        // @ts-ignore: missing in @types/react-select
        isFocused,
      },
    ) => ({
      ...css,
      backgroundColor: isFocused && 'var(--color-text-error)',
      color: isFocused && 'var(--color-text-primary)',
      paddingLeft: '2px',
      paddingRight: '2px',
      borderRadius: '0px 2px 2px 0px',
      ':hover': {
        color: 'var(--color-text-error)',
        backgroundColor: 'var(--color-text-primary)',
      },
    }),
  };
}
