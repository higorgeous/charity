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
