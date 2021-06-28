import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border-top: 1px solid var(--color-bg-element);
  transition: all 0.25s ease-in-out;
`;

export const Scrollable = styled.div`
  overflow-x: scroll;
  scrollbar-width: none;
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
