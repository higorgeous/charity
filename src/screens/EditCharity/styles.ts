import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const Loading = styled.div`
  margin: 80px auto;
`;

export const SVG = styled.svg`
  width: 100%;
  max-width: 600px;
  path {
    &#background {
      fill: var(--color-bg-element);
      transition: fill 0.25s ease-in-out;
    }
  }
`;
