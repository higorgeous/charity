import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const Breadcrumbs = styled.div`
  position: relative;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Container = styled.div<{ isHome: boolean }>`
  padding: 30px 42px 34px;
  display: inline-block;
  @media (max-width: 1023px) {
    padding: 27px 18px;
  }
  @media (max-width: 567px) {
    padding: 20px 12px 20px 8px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    white-space: nowrap;
    li {
      display: inline-block;
      &::after {
        display: inline-block;
        content: '';
        width: 6px;
        height: 10px;
        background-image: ${({ isHome }) =>
          isHome ? 'none' : `url('/chevron-right.svg')`};
      }
      &:first-of-type {
        a {
          padding-left: 0px;
        }
      }
      &:last-of-type {
        &::after {
          display: inline-block;
          content: '';
          width: 6px;
          height: 10px;
          background-image: none;
        }
      }
      a {
        display: inline-block;
        font-size: 15px;
        font-weight: 700;
        padding: 0 10px;
        color: var(--color-text-secondary);
        letter-spacing: 0.05em;
        text-decoration: none;
        transition: color 0.25s ease-in-out;
        &:hover {
          color: var(--color-text-primary);
        }
        @media (max-width: 567px) {
          font-size: 14px;
        }
      }
      span {
        display: inline-block;
        font-size: 15px;
        font-weight: 700;
        padding: 0 6px 0 10px;
        color: var(--color-text-primary);
        letter-spacing: 0.05em;
        transition: all 0.25s ease-in-out;
        @media (max-width: 567px) {
          font-size: 14px;
        }
      }
    }
  }
`;

export const ActionButtons = styled.div`
  padding: 30px 0 0;
  position: relative;
  text-align: center;
  overflow-x: scroll;
  scrollbar-width: none;
  @media (max-width: 767px) {
    padding: 16px 0 0;
  }
  @media (max-width: 1024px) {
    padding: 20px 0 0;
  }
  & > div {
    padding: 0 52px;
    display: flex;
    @media (max-width: 767px) {
      padding: 0 20px;
    }
    @media (max-width: 1024px) {
      padding: 0 32px;
    }
    & > div {
      margin: 0 4px 0 0;
    }
    a {
      background: var(--color-bg-element);
      border-radius: 4px;
      &:hover {
        background: var(--color-bg-element);
        svg {
          path {
            fill: var(--color-text-primary);
          }
        }
      }
      &:visited {
        background: var(--color-bg-element);
        svg {
          path {
            fill: var(--color-text-secondary);
          }
        }
      }
      svg {
        height: 15px;
        path {
          fill: var(--color-text-secondary);
          transition: fill 0.25s ease-in-out;
        }
      }
    }
  }
`;

export const VotesButton = styled.div<{ clicked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 34px;
  border-radius: 4px;
  pointer-events: ${({ clicked }) => (clicked ? `none` : `inherit`)};
  background-color: ${({ clicked }) =>
    clicked ? `#5bffa8` : `var(--color-bg-primary)`};
  border: 2px solid
    ${({ clicked }) => (clicked ? `#5bffa8` : `var(--color-button-primary)`)};
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    background-color: ${({ clicked }) =>
      clicked ? `#5bffa8` : `var(--color-button-primary)`};
    span {
      color: #001b44;
    }
    svg {
      fill: #001b44;
    }
  }
  @media (max-width: 567px) {
    padding: 8px 10px;
  }
  svg {
    height: 15px;
    fill: ${({ clicked }) =>
      clicked ? `#002358` : `var(--color-text-secondary)`};
    margin: -3px 10px 0 0;
    transition: fill 0.25s ease-in-out;
  }
  span {
    color: ${({ clicked }) =>
      clicked ? `#002358` : `var(--color-text-primary)`};
    font-size: 18px;
    transition: color 0.25s ease-in-out;
    @media (max-width: 567px) {
      font-size: 15px;
    }
  }
`;

export const SocialIcons = styled.svg`
  height: 24px;
  width: 24px;
  path {
    fill: currentColor;
  }
`;
