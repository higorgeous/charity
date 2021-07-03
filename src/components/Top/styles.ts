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
  @media (max-width: 767px) {
    justify-content: flex-end;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
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
  justify-content: flex-end;
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
    @media (max-width: 567px) {
      font-size: 13px;
    }
  }
`;

export const Web3Button = styled.div`
  display: block;
  text-align: center;
  width: 85px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 3px 10px;
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
  @media (max-width: 567px) {
    font-size: 13px;
  }
`;
