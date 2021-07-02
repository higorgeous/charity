/** @jsxImportSource @emotion/react */
import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';

import GlobalTheme from '@atlaskit/theme/components';

import { borderWidth, getBaseStyles, themeStyles } from './styles';
import { Theme, ThemeTokens } from './theme';
import { Props, InternalProps } from './types';

const setSmartHeight = (el: HTMLTextAreaElement) => {
  const borderHeight = borderWidth;
  const paddingBoxHeight: number = el.scrollHeight;
  const borderBoxHeight: number = paddingBoxHeight + borderHeight * 2;
  el.style.height = `${borderBoxHeight}px`;
};

// eslint-disable-next-line react/display-name
const TextAreaWithTokens = forwardRef((props: InternalProps, ref) => {
  const ourRef = useRef<HTMLTextAreaElement | null>(null);

  const {
    resize = 'smart',
    appearance = 'standard',
    isCompact = false,
    isRequired = false,
    isReadOnly = false,
    isDisabled = false,
    isInvalid = false,
    isMonospaced = false,
    minimumRows = 1,
    theme,
    maxHeight = '50vh',
    onBlur,
    onFocus,
    onChange,
    tokens,
    ...rest
  } = props;

  useEffect(() => {
    const el: HTMLTextAreaElement | null = ourRef.current;
    if (resize === 'smart' && el) {
      setSmartHeight(el);
    }
  }, [resize]);

  const getTextAreaRef = (elementRef: HTMLTextAreaElement | null) => {
    ourRef.current = elementRef;
    if (ref && typeof ref === 'object') {
      // @ts-ignore
      ref.current = elementRef;
    }
    if (ref && typeof ref === 'function') {
      ref(elementRef);
    }
  };

  const handleOnChange: React.ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (e) => {
      const el: HTMLTextAreaElement | null = ourRef.current;
      if (resize === 'smart' && el) {
        el.style.height = 'auto';
        setSmartHeight(el);
      }
      onChange && onChange(e);
    },
    [onChange, resize],
  );

  const controlProps = {
    'data-invalid': isInvalid ? isInvalid : undefined,
    'data-compact': isCompact ? isCompact : undefined,
  };

  const baseStyles = useMemo(
    () =>
      getBaseStyles({
        minimumRows,
        resize,
        appearance,
        isMonospaced,
        maxHeight,
      }),
    [minimumRows, resize, appearance, isMonospaced, maxHeight],
  );

  const textAreaStyles = [
    baseStyles,
    // not memoizing themeStyles as `tokens` is an unstable reference
    themeStyles(tokens),
  ];

  return (
    <textarea
      {...controlProps}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      ref={getTextAreaRef}
      onChange={handleOnChange}
      css={textAreaStyles}
      {...rest}
    />
  );
});

const TextArea = memo(
  forwardRef<HTMLTextAreaElement, Props>(function TextArea(
    props: Props,
    ref: React.Ref<HTMLTextAreaElement>,
  ) {
    return (
      <GlobalTheme.Consumer>
        {() => (
          <Theme.Provider value={props.theme}>
            <Theme.Consumer appearance={props.appearance || 'standard'}>
              {(tokens: ThemeTokens) => (
                <TextAreaWithTokens ref={ref} {...props} tokens={tokens} />
              )}
            </Theme.Consumer>
          </Theme.Provider>
        )}
      </GlobalTheme.Consumer>
    );
  }),
);

TextArea.displayName = 'TextArea';

export default TextArea;
