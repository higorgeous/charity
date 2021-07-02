import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 75px 0 0;
  text-align: center;
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
      }
    }
  }
`;

export const TabWrapper = styled.div``;

export const SVG = styled.svg`
  width: 100%;
  max-width: 600px;
  margin-top: 50px;
  path {
    &#background {
      fill: var(--color-bg-element);
      transition: fill 0.25s ease-in-out;
    }
  }
`;

export const Button = styled.div`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  margin: 10px;
  span {
    display: inline-block;
    border-radius: 4px;
    padding: 20px 45px;
    background-color: var(--color-button-primary);
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
      background-color: var(--color-button-primaryHover);
    }
  }
`;
