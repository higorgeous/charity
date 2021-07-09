import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.div`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  margin: 10px;
  span {
    display: inline-block;
    border-radius: 4px;
    padding: 20px 45px;
    background-color: var(--color-button-primary);
    color: #002358;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.04em;
    transition: all 0.25s ease-in-out;
    svg {
      margin-left: 5px;
      margin-bottom: -1px;
      stroke: #002358;
      transition: all 0.25s ease-in-out;
      @media (max-width: 567px) {
        margin-bottom: -2px;
      }
    }
  }
  &:hover {
    span {
      background-color: var(--color-button-primaryHover);
    }
  }
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
