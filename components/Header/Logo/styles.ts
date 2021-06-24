import styled from "@emotion/styled";

export const Wrapper = styled.div`
  grid-area: logo;
  padding-top: 2px;
  margin-left: 42px;
  @media (max-width: 1024px) {
    margin-left: 22px;
  }
  @media (max-width: 568px) {
    padding-left: 20px;
    margin: 0;
  }
  a {
    display: flex;
  }
`;

export const ImageWrapper = styled.svg`
  width: 120px;
  @media (min-width: 568px) {
    width: 300px;
  }
  @media (min-width: 1024px) {
    width: 350px;
  }
  path {
    fill: var(--color-text-primary);
    transition: fill 0.25s ease-in-out;
  }
`;