import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 400px;
  min-width: 300px;
  width: 100%;
  margin: 10px 0;
`;

export const Button = styled.button`
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  display: inline-block;
  width: 100%;
  margin: 10px 0;
  padding: 0;
  span {
    display: inline-block;
    width: 100%;
    border-radius: 4px;
    padding: 20px 45px;
    background-color: #6bffb0;
    color: #002358;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.04em;
    transition: all 0.25s ease-in-out;
    svg {
      margin-left: 5px;
      margin-bottom: -1px;
      stroke: #002358;
      transition: all 0.25s ease-in-out;
      @media (max-width: 567px) {
        margin-bottom: -2px;
      }
    }
  }
  &:hover {
    span {
      background-color: #40f193;
    }
  }
`;
