import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { WIDTH_ENUM, gutter, WidthNames } from '../shared-variables';

const boxShadow = ({ isChromeless }: { isChromeless?: boolean }) => {
  return isChromeless
    ? 'none'
    : '0 0 0 1px var(--color-bg-primary), 0 2px 1px var(--color-bg-primary)';
};

const dialogBgColor = ({ isChromeless }: { isChromeless?: boolean }) => {
  return isChromeless ? 'transparent' : 'var(--color-bg-primary)';
};

const textColor = () => {
  return 'var(--color-text-primary)';
};

const headerColor = () => {
  return 'var(--color-text-primary)';
};

const maxDimensions = `calc(100% - ${gutter * 2}px)`;
const maxHeightDimensions = `calc(100% - ${gutter * 2 - 1}px)`;

export const dialogWidth = ({ widthName, widthValue }: PositionerProps) => {
  if (typeof widthValue === 'number') {
    return `${widthValue}px`;
  }

  return widthName ? `${WIDTH_ENUM.widths[widthName]}px` : widthValue || 'auto';
};

export const dialogHeight = ({
  heightValue,
}: {
  heightValue?: string | number;
}) => {
  if (typeof heightValue === 'number') {
    return `${heightValue}px`;
  }
  return heightValue || 'auto';
};

/**
  NOTE:
  z-index
  - temporarily added to beat @atlaskit/navigation

  absolute + top
  - rather than fixed position so popper.js children are properly positioned

  overflow-y
  - only active when popper.js children invoked below the dialog
*/
interface FillScreenProps {
  scrollDistance: number;
}

export const FillScreen = styled.div<FillScreenProps>`
  height: 100vh;
  left: 0;
  overflow-y: auto;
  position: absolute;
  top: ${(props: FillScreenProps) => props.scrollDistance}px;
  width: 100%;
  z-index: 999;
  -webkit-overflow-scrolling: touch;
`;

interface PositionerProps {
  widthName?: WidthNames;
  widthValue?: string | number;
}

const positionBaseStyles = (props: PositionerProps) => css`
  display: flex;
  flex-direction: column;
  height: ${maxHeightDimensions};
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: ${maxDimensions};
  top: ${gutter}px;
  width: ${dialogWidth(props)};
  z-index: 999;
  pointer-events: none;
`;

const positionBaseResponsiveStyles = css`
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  max-width: 100%;
  width: 100%;
`;

export const PositionerAbsolute = styled.div<PositionerProps>`
  ${positionBaseStyles};
  position: absolute;

  @media (min-width: 320px) and (max-width: 480px) {
    ${positionBaseResponsiveStyles};
  }
`;

export const PositionerRelative = styled.div<PositionerProps>`
  margin: ${gutter}px auto;
  position: relative;
  width: ${dialogWidth};
  z-index: 999;

  @media (min-width: 320px) and (max-width: 480px) {
    ${positionBaseResponsiveStyles};
    margin: 0;
  }
`;

export const PositionerFixed = styled.div<PositionerProps>`
  ${positionBaseStyles};
  position: fixed;

  @media (min-width: 320px) and (max-width: 480px) {
    ${positionBaseResponsiveStyles};
  }
`;

interface DialogProps {
  isChromeless?: boolean;
  heightValue?: string | number;
}
export const Dialog = styled.div<DialogProps>`
  ${(props: DialogProps) =>
    props.isChromeless
      ? null
      : `
          background-color: ${dialogBgColor(props)};
          border-radius: 4px;
          box-shadow: ${boxShadow(props)};
          color: ${textColor()};
        `}
  display: flex;
  flex-direction: column;
  height: ${(props: DialogProps) =>
    dialogHeight({ heightValue: props.heightValue })};
  max-height: 100%;
  outline: 0;
  pointer-events: auto;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
    max-height: 100%;
    border-radius: 0;
  }
  h4 {
    ${(props: DialogProps) =>
      props.isChromeless
        ? null
        : `
          color: ${headerColor()};
        `}
  }
`;

PositionerAbsolute.displayName = 'PositionerAbsolute';
Dialog.displayName = 'Dialog';
FillScreen.displayName = 'FillScreen';
PositionerRelative.displayName = 'PositionerRelative';
PositionerFixed.displayName = 'PositionerFixed';
