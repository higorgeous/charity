import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-primary);
  background: var(--color-bg-element);
  padding: 20px 42px;
  transition: all 0.25s ease-in-out;
  @media (max-width: 1023px) {
    padding: 40px 22px;
  }
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
  a {
    margin: 0 10px 0 0;
    color: var(--color-text-secondary);
    text-decoration: none;
    font-weight: 700;
    transition: all 0.25s ease-in-out;
    &:hover {
      color: var(--color-text-primary);
    }
    @media (max-width: 767px) {
      margin: 10px 0 0;
    }
  }
  span {
    a {
      @media (max-width: 767px) {
        margin: 10px 10px 0;
      }
    }
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
  }
  a {
    display: flex;
    align-items: center;
    margin: 0 10px;
    color: var(--color-text-secondary);
    transition: all 0.25s ease-in-out;
    &:hover {
      color: var(--color-text-primary);
    }
    @media (max-width: 767px) {
      margin: 0 10px 10px;
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
