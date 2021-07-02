import styled from '@emotion/styled';

// Provide a styled container for field components
const FieldWrapper = styled.div`
  margin-top: 8px;
`;

// Provide a styled Label for field components
export const Label = styled.label`
  display: inline-block;
  margin-bottom: 10px;
  margin-top: 0;
  font-size: 0.857143em;
  font-style: inherit;
  line-height: 1.33333;
  color: var(--color-text-secondary);
  font-weight: 600;
  margin-top: 16px;
`;

export const RequiredIndicator = styled.span`
  color: var(--color-text-error);
  padding-left: 5px;
`;

export default FieldWrapper;
