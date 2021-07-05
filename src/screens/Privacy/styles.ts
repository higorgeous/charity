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
    @media (max-width: 1024px) {
      font-size: 15px;
      margin: 10px 52px 30px;
    }
    @media (max-width: 568px) {
      font-size: 14px;
      margin: 10px 20px 30px;
    }
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
    strong {
      color: var(--color-text-primary);
      transition: color 0.25s ease-in-out;
    }
    a {
      color: var(--color-text-secondary);
      transition: color 0.25s ease-in-out;
    }
    ul {
      list-style-type: circle;
      li {
        color: var(--color-text-primary);
        transition: color 0.25s ease-in-out;
      }
    }
  }
  pre {
    max-width: 800px;
    white-space: pre-wrap;
    margin: 30px auto 30px;
    background-color: var(--color-bg-element);
    padding: 20px;
    border-radius: 4px;
    transition: all 0.25s ease-in-out;
    @media (max-width: 1024px) {
      margin: 20px 52px 20px;
    }
    @media (max-width: 568px) {
      margin: 10px 20px 10px;
    }
    code {
      font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
        'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
        'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier,
        monospace;
      color: var(--color-text-secondary);
      font-size: 15px;
      font-weight: 400;
      letter-spacing: 0.025em;
      text-align: left;
      line-height: 1.5;
      transition: color 0.25s ease-in-out;
      @media (max-width: 1024px) {
        font-size: 14px;
      }
      @media (max-width: 568px) {
        font-size: 13px;
      }
      a {
        color: var(--color-text-secondary);
        transition: color 0.25s ease-in-out;
      }
    }
  }
`;
