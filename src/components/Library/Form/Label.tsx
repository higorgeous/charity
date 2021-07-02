import React, { ReactNode } from 'react';

import FieldWrapper, { Label, RequiredIndicator } from './styles/Field';

interface Props {
  isRequired?: boolean;
  label?: ReactNode;
}

const LabelComponent = (props: Props) => (
  <FieldWrapper>
    {props.label && (
      <Label>
        {props.label}
        {props.isRequired && (
          <RequiredIndicator aria-hidden="true">*</RequiredIndicator>
        )}
      </Label>
    )}
  </FieldWrapper>
);

export default LabelComponent;
