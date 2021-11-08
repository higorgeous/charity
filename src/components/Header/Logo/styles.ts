import styled from '@emotion/styled';

export const Wrapper = styled.div`
  grid-area: logo;
  padding-top: 2px;
  margin-left: 42px;
  @media (max-width: 1023px) {
    margin-left: 22px;
  }
  @media (max-width: 568px) {
    padding-left: 20px;
    margin: 0;
  }
  span {
    display: none;
    @media (max-width: 567px) {
      &.mobile {
        display: block;
      }
    }
    @media (min-width: 568px) and (max-width: 1023px) {
      &.tablet {
        display: block;
      }
    }
    @media (min-width: 1024px) {
      &.desktop {
        display: block;
      }
    }
  }
  a {
    display: flex;
  }
`;

export const ImageWrapper = styled.svg`
  width: 220px;
  path,
  polygon {
    fill: var(--color-text-primary);
    transition: fill 0.25s ease-in-out;
    &.mark {
      fill: var(--gorgeous-red);
    }
  }
`;
