import styled, { keyframes, css } from 'styled-components';

import { colors, constants, themed } from '@discovr/core.theme';

import { checkeredBgLight, checkeredBgDark } from './images';
import { AVATAR_DIALOG_WIDTH } from '../avatar-picker-dialog/layout-const';

const { borderRadius, gridSize } = constants;
const { N200, DN200, N0, DN30, B500, B100, text } = colors;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const checkeredBg = themed({ light: checkeredBgLight, dark: checkeredBgDark });

export const ImageBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 256px;
  height: 256px;
  background: url('${checkeredBg}');
  border-radius: ${borderRadius()};
`;

export const Container = styled.div`
  width: ${gridSize() * 32}px;
  box-sizing: border-box;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  position: relative;
`;

export const SliderContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin-top: ${gridSize()}px;

  input {
    box-sizing: content-box;
    padding: 0;
  }
  background-color: ${themed({ light: N0, dark: DN30 })};
`;

export const FileInput = styled.input`
  display: none;
`;

export const ImageUploader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px 20px 10px;
`;

const droppingAnimation = css`
  border-color: ${themed({ light: B500, dark: B100 })};
  animation: ${spin} 8s linear infinite;
`;

export interface DragZoneProps {
  isDroppingFile: boolean;
  showBorder: boolean;
}

export const DragZone = styled.div<any>`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  position: relative;
  border-radius: 100%;
  transition: background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  &::after {
    content: '';
    ${(props: any) =>
      props.showBorder &&
      css`
        border: 2px dashed
          ${props.theme.__DISCOVR_THEME__.mode === 'light' ? N200 : DN200};
      `}
    ${(props: any) =>
      !props.showBorder &&
      css`
        border: none;
      `}
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: border-color 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  }

  ${(props: DragZoneProps) =>
    (props.isDroppingFile &&
      css`
        background-color: ${themed({ light: N0, dark: DN30 })};
        &:after {
          ${droppingAnimation}
        }
      `) ||
    ''};
`;

DragZone.displayName = 'DragZone';

export const DragZoneImage = styled.img`
  width: 100px;
`;

export interface DragZoneTextProps {
  isFullSize: boolean;
}

export const DragZoneText = styled.div<any>`
  text-align: center;
  color: ${text};
  ${(props: DragZoneTextProps) =>
    props.isFullSize
      ? `width: ${AVATAR_DIALOG_WIDTH - gridSize() * 8}px`
      : 'width: auto'};
`;

export const SelectionBlocker = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  user-select: none;
`;

export const PaddedBreak = styled.p`
  margin-top: 10px !important;
  margin-bottom: 10px;
`;

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .zoom_button svg {
    position: relative;
    left: -2px;
  }
`;
