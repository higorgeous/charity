import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 34px 52px 0;
  h1 {
    font-size: 34px;
    font-weight: 700;
    color: var(--color-text-primary);
    letter-spacing: 0.025em;
    text-align: center;
    line-height: 1.3;
    margin: 10px;
    transition: color 0.25s ease-in-out;
  }
  @media (max-width: 1024px) {
    margin: 30px 32px 0;
    h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 568px) {
    flex-direction: column;
    margin: 30px 20px 0;
    h1 {
      font-size: 22px;
      margin: 0 0 5px;
      text-align: center;
    }
  }
`;
