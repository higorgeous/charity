import styled from '@emotion/styled';

export const Wrapper = styled.div`
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto 0;
    flex-shrink: 0;
    height: 80px;
    width: 80px;
    background-color: var(--color-bg-primary);
    border: 3px solid var(--color-bg-element);
    border-radius: 50%;
    overflow: hidden;
    transition: all 0.25s ease-in-out;
    img {
      border-radius: 50%;
    }
    @media (max-width: 567px) {
      display: none;
    }
  }
  .description {
    max-width: 700px;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    margin: 50px auto 100px;
    @media (max-width: 767px) {
      margin: 30px 22px;
      font-size: 14px;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 800px;
  margin: 30px auto;
  img {
    border-radius: 4px;
    @media (max-width: 800px) {
      border-radius: 0;
    }
  }
`;

export const Button = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(0 27 68 / 62%);
  border-radius: 50%;
  padding: 10px;
  height: 60px;
  width: 60px;
  z-index: 9;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    background: rgb(0 27 68 / 100%);
  }
  svg {
    path {
      fill: #6bffb0;
    }
  }
`;
