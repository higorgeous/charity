import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  background-color: var(--color-bg-element);
  border-radius: 4px;
  margin: 50px;
  padding: 0;
  justify-content: space-between;
  align-items: stretch;
  transition: all 0.25s ease-in-out;
  @media (max-width: 1280px) {
    flex-direction: column;
    margin: 50px auto;
    max-width: 800px;
    padding: 10px;
  }
  @media (max-width: 840px) {
    margin: 50px 20px;
    padding: 0;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-right: 1px solid var(--color-bg-primary);
  padding: 40px 6%;
  transition: all 0.25s ease-in-out;
  @media (max-width: 1280px) {
    border: 0;
    padding: 40px 20px 20px;
  }
  div {
    border: 0;
    appearance: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0 !important;
  }
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 25px 98px 30px 58px;
  @media (max-width: 1280px) {
    flex-direction: column;
    padding: 0 0 30px;
  }
  & > span {
    flex: 1;
    color: var(--color-text-primary);
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    padding: 20px 32px;
    min-width: 300px;
    transition: all 0.25s ease-in-out;
    @media (max-width: 1280px) {
      min-width: 0;
    }
  }
  & > div {
    padding: 10px 22px;
    text-align: center;
    @media (max-width: 1280px) {
      padding: 10px;
    }
  }
`;

export const Button = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  margin: 10px;
  span {
    display: inline-block;
    border-radius: 4px;
    padding: 20px 45px;
    color: #ffffff;
    background-color: var(--color-button-secondary);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.04em;
    transition: all 0.25s ease-in-out;
    svg {
      margin-left: 5px;
      margin-bottom: -1px;
      stroke: #ffffff;
      transition: all 0.25s ease-in-out;
      @media (max-width: 567px) {
        margin-bottom: -2px;
      }
    }
  }
  &:hover {
    span {
      background-color: var(--color-button-secondaryHover);
    }
  }
  &:first-of-type {
    span {
      background-color: var(--color-button-primary);
      color: #002358;
      svg {
        stroke: #002358;
        transition: all 0.25s ease-in-out;
      }
    }
    &:hover {
      span {
        background-color: var(--color-button-primaryHover);
      }
    }
  }
`;
