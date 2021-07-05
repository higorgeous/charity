import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 70px;
  .sentence {
    max-width: 700px;
    font-size: 15px;
    line-height: 1.7;
    font-weight: 700;
    text-align: center;
    margin: 20px auto 30px;
    @media (max-width: 767px) {
      margin: 30px 22px;
      font-size: 14px;
    }
  }
`;
