import React from 'react';
import styled from '@emotion/styled';

import Spinner from '@atlaskit/spinner';

const overlayZindex = 999 + 10;

export const Blanket = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${overlayZindex};
`;
Blanket.displayName = 'Blanket';

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
SpinnerWrapper.displayName = 'SpinnerWrapper';

interface Props {
  blankedColor?: string;
  invertSpinnerColor?: boolean;
}

const defaultProps: Props = {
  blankedColor: 'none',
  invertSpinnerColor: false,
};

const ModalSpinner = ({ blankedColor, invertSpinnerColor }: Props) => (
  <Blanket
    style={{ backgroundColor: blankedColor || defaultProps.blankedColor }}
  >
    <SpinnerWrapper>
      <Spinner
        size="large"
        appearance={
          invertSpinnerColor || defaultProps.invertSpinnerColor
            ? 'invert'
            : 'inherit'
        }
      />
    </SpinnerWrapper>
  </Blanket>
);

export default ModalSpinner;
