import styled from '@emotion/styled';

import { Align } from '../types';

export const FormFooterWrapper = styled.footer<{ align?: Align }>`
  margin-top: 24px;
  display: flex;
  justify-content: ${(props) =>
    props.align === 'start' ? 'flex-start' : 'flex-end'};
`;
