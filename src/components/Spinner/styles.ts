import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

const spin = keyframes({
  '0%': {
    transform: `rotate(0deg)`,
  },
  '100%': {
    transform: `rotate(360deg)`,
  },
});

const spinReverse = keyframes({
  '0%': {
    transform: `rotate(0deg)`,
  },
  '100%': {
    transform: `rotate(-360deg)`,
  },
});

export const Wrapper = styled.div`
  position: relative;
  display: block;
  margin: 100px 0 70px;
`;

export const Loader = styled.div`
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 80px;
  height: 80px;
  margin: -40px 0 0 -40px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: var(--color-text-primary);
  opacity: 0.75;
  animation: ${spin} 1.7s linear infinite;
  z-index: 11;
  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: var(--color-text-primary);
    opacity: 0.5;
    animation: ${spinReverse} 0.6s linear infinite;
  }
  &:after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: var(--color-text-primary);
    opacity: 0.25;
    animation: ${spin} 1s linear infinite;
  }
`;
