import styled from '@emotion/styled';

export const Wrapper = styled.nav`
  position: relative;
  grid-area: navigation;
  justify-self: end;
`;

export const Items = styled.ul`
  display: flex;
  justify-content: center;
  min-width: 100%;
  margin: 0;
  white-space: nowrap;
  list-style: none;
  padding: 0;
  li {
    a {
      display: flex;
      align-items: center;
      padding: 13px 15px;
      font-size: 16px;
      font-weight: 700;
      color: var(--color-text-secondary);
      letter-spacing: 0.025em;
      text-decoration: none;
      transition: color 0.25s ease-in-out;
      &.active {
        color: var(--color-text-active);
      }
      &:hover {
        color: var(--color-text-active);
      }
    }
  }
`;
