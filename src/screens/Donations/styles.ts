import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const SVG = styled.svg`
  width: 100%;
  margin: 30px 0;
  max-width: 600px;
  path {
    &#background {
      fill: var(--color-bg-element);
      transition: fill 0.25s ease-in-out;
    }
  }
`;

export const Text = styled.h3`
  color: var(--color-text-secondary);
  font-size: 18px;
  font-weight: 400;
  max-width: 800px;
  letter-spacing: 0.025em;
  text-align: center;
  margin: 10px auto 0;
  line-height: 1.8;
  transition: color 0.25s ease-in-out;
  @media (max-width: 1024px) {
    font-size: 16px;
    margin: 10px 52px 0;
  }
  @media (max-width: 568px) {
    font-size: 14px;
    line-height: 1.8;
    margin: 5px 20px 0;
  }
`;
