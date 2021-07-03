import { keyframes, css } from 'styled-components';

import { constants } from '@discovr/core.theme';

const { borderRadius: dbBorderRadius } = constants;

export const ellipsis = (maxWidth: string | number = '100%') => {
  const unit = typeof maxWidth === 'number' ? 'px' : '';

  return `
    max-width: ${maxWidth}${unit};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;
};

export const size = (value: string | number = '100%') => {
  const unit = typeof value === 'number' ? 'px' : '';

  return `
    width: ${value}${unit};
    height: ${value}${unit};
  `;
};

export const center = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const absolute = (top = 0, left = 0) => `
  position: absolute;
  top: ${top}px;
  left: ${left}px;
`;

export const borderRadius = `
  border-radius: ${dbBorderRadius()}px;
`;

export const borderRadiusBottom = `
  border-bottom-left-radius: ${dbBorderRadius()}px;
  border-bottom-right-radius: ${dbBorderRadius()}px;
`;

export const easeInOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

export const fadeInKeyframe = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

export const fadeIn = css`
  animation: ${fadeInKeyframe} 0.3s ${easeInOutCubic};
`;
