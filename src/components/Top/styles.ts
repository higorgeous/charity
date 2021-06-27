import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-primary);
  background: var(--color-bg-element);
  padding: 7px 42px 9px;
  transition: all 0.25s ease-in-out;
  @media (max-width: 1023px) {
    padding: 7px 22px 9px;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-weight: 700;
    transition: all 0.25s ease-in-out;
    &:hover {
      color: var(--color-text-primary);
    }
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin: 0 10px;
    color: var(--color-text-secondary);
    text-decoration: none;
    font-weight: 700;
    transition: all 0.25s ease-in-out;
    &:hover {
      color: var(--color-text-primary);
    }
  }
`;

export const Web3Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 20px;
  margin: 0 10px;
  border-radius: 3px;
  font-weight: 700;
  pointer-events: inherit;
  color: var(--color-bg-primary);
  background-color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    background-color: var(--color-text-primary);
  }
`;
