import React, { ReactNode } from 'react';

import styled from '@emotion/styled';

import SuccessIcon from '@atlaskit/icon/glyph/editor/success';
import ErrorIcon from '@atlaskit/icon/glyph/error';

import { FieldId } from './Field';

const Message = styled.div<{ error?: boolean; valid?: boolean }>`
  color: ${(props) => {
    if (props.error) {
      return 'var(--color-text-error)';
    }
    if (props.valid) {
      return 'var(--color-text-valid)';
    }
    return 'var(--color-text-secondary)';
  }};
  font-size: 12px;
  font-weight: 700;
  margin-top: 10px;
  display: flex;
  justify-content: baseline;
`;

const IconWrapper = styled.span`
  display: flex;
`;

interface Props {
  children: ReactNode;
}

export const HelperMessage = ({ children }: Props) => (
  <FieldId.Consumer>
    {(fieldId) => (
      <Message id={fieldId ? `${fieldId}-helper` : undefined}>
        {children}
      </Message>
    )}
  </FieldId.Consumer>
);

export const ErrorMessage = ({ children }: Props) => (
  <FieldId.Consumer>
    {(fieldId) => (
      <Message error id={fieldId ? `${fieldId}-error` : undefined}>
        <IconWrapper>
          <ErrorIcon size="small" label="error" />
        </IconWrapper>
        {children}
      </Message>
    )}
  </FieldId.Consumer>
);

export const ValidMessage = ({ children }: Props) => (
  <FieldId.Consumer>
    {(fieldId) => (
      <Message valid id={fieldId ? `${fieldId}-valid` : undefined}>
        <IconWrapper>
          <SuccessIcon size="small" label="success" />
        </IconWrapper>
        {children}
      </Message>
    )}
  </FieldId.Consumer>
);
