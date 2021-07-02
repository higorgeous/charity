/** @jsxImportSource @emotion/react */
import React, { forwardRef, memo, useCallback, useMemo, useRef } from 'react';

import GlobalTheme from '@atlaskit/theme/components';

import {
  containerStyles as getContainerStyles,
  inputStyles as getInputStyles,
} from './styles';
import { InternalProps, PublicProps } from './types';

// eslint-disable-next-line react/display-name
const TextfieldWithMode = forwardRef((props: InternalProps, ref) => {
  const input = useRef<HTMLInputElement | null>(null);

  const {
    appearance = 'standard',
    isCompact = false,
    isDisabled = false,
    isInvalid = false,
    isRequired = false,
    isReadOnly = false,
    isMonospaced = false,
    width,
    elemAfterInput,
    elemBeforeInput,
    onFocus,
    onBlur,
    onMouseDown,
    className,
    ...otherProps
  } = props;

  const handleOnMouseDown = useCallback(
    (event: React.MouseEvent<HTMLInputElement>) => {
      /** Running e.preventDefault() on the INPUT prevents double click behaviour */
      // Sadly we needed this cast as the target type is being correctly set
      const target: HTMLInputElement = event.target as HTMLInputElement;
      if (target.tagName !== 'INPUT') {
        event.preventDefault();
      }
      if (
        input &&
        input.current &&
        !isDisabled &&
        document.activeElement !== input.current
      ) {
        input.current.focus();
      }
      onMouseDown && onMouseDown(event);
    },
    [onMouseDown, input, isDisabled],
  );

  // we want to keep a copy of the ref as well as pass it along
  const setInputRef = useCallback(
    (inputElement: HTMLInputElement | null) => {
      input.current = inputElement;
      const forwardedRef = ref;

      if (!forwardedRef) {
        return;
      }

      if (typeof forwardedRef === 'object') {
        // This is a blunder on the part of @types/react
        // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31065
        // .current should be assignable
        // @ts-ignore
        forwardedRef.current = inputElement;
      }

      if (typeof forwardedRef === 'function') {
        forwardedRef(inputElement);
      }
    },
    [ref],
  );

  const inputControlProps = {
    'data-compact': isCompact ? isCompact : undefined,
    'data-monospaced': isMonospaced ? isMonospaced : undefined,
    'aria-invalid': isInvalid ? isInvalid : undefined,
  };

  const containerControlProps = {
    'data-disabled': isDisabled ? isDisabled : undefined,
    'data-invalid': isInvalid ? isInvalid : undefined,
  };

  const containerStyles = useMemo(() => getContainerStyles(appearance, width), [
    appearance,
    width,
  ]);

  const inputStyle = useMemo(() => getInputStyles(), []);

  return (
    <div
      {...containerControlProps}
      onMouseDown={handleOnMouseDown}
      data-ds--text-field--container={true}
      css={containerStyles}
      className={className}
    >
      {elemBeforeInput}
      <input
        {...otherProps}
        {...inputControlProps}
        disabled={isDisabled}
        readOnly={isReadOnly}
        required={isRequired}
        ref={setInputRef}
        data-ds--text-field--input={true}
        css={inputStyle}
      />
      {elemAfterInput}
    </div>
  );
});

const Textfield = forwardRef<any, PublicProps>(function Textfield(
  props: PublicProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <GlobalTheme.Consumer>
      {() => <TextfieldWithMode {...props} ref={ref} />}
    </GlobalTheme.Consumer>
  );
});
Textfield.displayName = 'Textfield';
export default memo(Textfield);
