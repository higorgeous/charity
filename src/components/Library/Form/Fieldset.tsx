import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

import { Label } from './styles/Field';

const FieldsetLabel = styled(Label)`
  margin-bottom: 0;
`;

const Fieldset = styled.fieldset`
  margin-top: 8px;
`;

interface Props {
  children: ReactNode;
  legend?: ReactNode;
}

const FieldSet = ({ children, legend }: Props) => (
  <Fieldset>
    {legend && (
      <legend>
        <FieldsetLabel>{legend}</FieldsetLabel>
      </legend>
    )}
    {children}
  </Fieldset>
);

export default FieldSet;
