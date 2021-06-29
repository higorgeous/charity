import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 70px;
  h3 {
    color: var(--color-text-primary);
    font-size: 18px;
    font-weight: 400;
    max-width: 800px;
    letter-spacing: 0.025em;
    text-align: left;
    margin: 10px auto 5px;
    line-height: 1.5;
    transition: color 0.25s ease-in-out;
  }
  p {
    color: var(--color-text-secondary);
    font-size: 15px;
    font-weight: 400;
    max-width: 800px;
    letter-spacing: 0.025em;
    text-align: left;
    margin: 20px auto 30px;
    line-height: 1.5;
    transition: color 0.25s ease-in-out;
    @media (max-width: 1024px) {
      font-size: 14px;
      margin: 10px 52px 30px;
    }
    @media (max-width: 568px) {
      font-size: 13px;
      margin: 10px 20px 30px;
    }
    a {
      color: var(--color-text-secondary);
      transition: color 0.25s ease-in-out;
    }
  }
`;
