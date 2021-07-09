import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 75px 0 0;
  text-align: left;
  position: relative;
  @media (max-width: 1023px) {
    margin: 55px 0 0;
  }
  @media (max-width: 567px) {
    margin: 40px 0 0;
  }
  .react-tabs {
    overflow-x: scroll;
    scrollbar-width: none;
    list-style: none;
    position: relative;
    z-index: 2;
    ul {
      display: inline-flex;
      justify-content: center;
      min-width: 100%;
      list-style: none;
      margin: 0;
      padding: 0 26px;
      white-space: nowrap;
      border-bottom: 1px solid var(--color-bg-element);
      transition: all 0.25s ease-in-out;
      @media (max-width: 1023px) {
        padding: 0 7.5px;
      }
      li {
        padding: 0 20px;
        background: transparent;
        border: none;
        color: var(--color-text-primary);
        transition: all 0.1s ease-in-out;
        @media (max-width: 567px) {
          padding: 0 12.5px;
        }
        & > span {
          display: flex;
          align-items: flex-start;
          text-decoration: none;
          padding-bottom: 3px;
          border-bottom-color: #126bff;
          transition: all 0.1s ease-in-out;
          &:hover {
            padding-bottom: 1px;
            border-bottom: 3px solid #126bff;
          }
          span {
            display: inline-block;
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.05em;
            margin-bottom: 17px;
            @media (max-width: 567px) {
              font-size: 14px;
            }
          }
        }
        &.react-tabs__tab--selected {
          & > span {
            padding-bottom: 1px;
            border-bottom: 3px solid #126bff;
          }
        }
        &.react-tabs__tab--disabled {
          color: var(--color-text-secondary) !important;
          & > span {
            padding-bottom: 1px;
            border-bottom: 3px solid transparent;
            &:hover {
              padding-bottom: 1px;
              border-bottom: 3px solid transparent;
            }
          }
        }
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 20px 30px;
  #image {
    cursor: pointer;
  }
  #image-uploader {
    width: 100% !important;
    max-width: 500px !important;
    height: 45px !important;
    margin-top: -45px !important;
    z-index: 9 !important;
  }
  & > div {
    max-width: 500px;
    width: 100%;
  }
  label {
    color: var(--color-text-primary);
  }
  footer {
    @media (max-width: 567px) {
      flex-direction: column;
    }
  }
`;

export const Button = styled.button<{ back?: boolean }>`
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  display: inline-block;
  width: 100%;
  margin: ${({ back }) => (back ? '10px 5px 0 0' : '10px 0 0 5px')};
  padding: 0;
  span {
    display: inline-block;
    width: 100%;
    border-radius: 4px;
    padding: 20px 45px;
    background-color: ${({ back }) =>
      back ? 'var(--color-button-alternative)' : 'var(--color-button-primary)'};
    color: ${({ back }) => (back ? 'var(--color-text-primary)' : '#002358')};
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.04em;
    transition: all 0.25s ease-in-out;
    svg {
      margin-left: ${({ back }) => (back ? '0' : '5px')};
      margin-right: ${({ back }) => (back ? '5px' : '0')};
      margin-bottom: -1px;
      stroke: ${({ back }) => (back ? 'var(--color-text-primary)' : '#002358')};
      transform: ${({ back }) => (back ? 'rotate(180deg)' : 'rotate(0)')};
      transition: all 0.25s ease-in-out;
      @media (max-width: 567px) {
        margin-bottom: 0px;
      }
    }
  }
  &:hover {
    span {
      background-color: ${({ back }) =>
        back
          ? 'var(--color-button-alternativeHover)'
          : 'var(--color-button-primaryHover)'};
    }
  }
`;
