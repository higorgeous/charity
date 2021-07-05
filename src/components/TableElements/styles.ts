import styled from '@emotion/styled';

export const Wrapper = styled.div<{ twoColumn?: boolean }>`
  margin-bottom: 100px;
  table {
    display: block;
    width: 100%;
    border-spacing: 0;
  }
  tr {
    display: flex;
    justify-content: stretch;
    border-bottom: 1px solid var(--color-bg-element);
    align-items: center;
    padding: 0 20%;
    transition: border 0.25s ease-in-out;
    @media (max-width: 1680px) {
      padding: 0 10%;
    }
    @media (max-width: 1200px) {
      padding: 0 48px;
    }
    @media (max-width: 1024px) {
      padding: 0 28px;
    }
    @media (max-width: 567px) {
      padding: 0 16px;
    }
  }

  tbody,
  thead {
    display: block;
  }

  td,
  th {
    display: flex;
    padding: 12px 4px 13px;
    min-height: 76px;
    align-items: center;
    text-align: left;
    width: ${({ twoColumn }) => (twoColumn ? '40%' : '20%')};
    &:first-of-type {
      width: 60%;
    }
    &:last-of-type {
      justify-content: flex-end;
      text-align: right;
    }
    @media (max-width: 767px) {
      width: 30%;
      &:first-of-type {
        width: 70%;
      }
      &:nth-of-type(2),
      &:nth-of-type(3) {
        display: ${({ twoColumn }) => (twoColumn ? 'flex' : 'none')};
      }
    }
  }

  th {
    text-transform: uppercase;
    color: var(--color-text-secondary);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    padding: 12px 4px 0;
    margin-bottom: -10px;
    transition: color 0.25s ease-in-out;
  }
`;

export const CharityColumn = styled.div`
  a {
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 100%;
  }
  .rank {
    color: var(--color-text-secondary);
    font-size: 13px;
    font-weight: 700;
    min-width: 28px;
    padding-right: 5px;
    flex-shrink: 0;
    transition: color 0.25s ease-in-out;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: -2px 20px 0 0;
    flex-shrink: 0;
    height: 60px;
    width: 60px;
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
  .profile {
    color: var(--color-text-primary);
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 0 5px 0 0;
    line-height: 1.2;
    transition: color 0.25s ease-in-out;

    .name {
      overflow: hidden;
      font-size: 15px;
      text-overflow: ellipsis;
      color: var(--color-text-primary);
      transition: color 0.25s ease-in-out;
      @media (max-width: 567px) {
        font-size: 14px;
      }
    }
    .tag {
      display: block;
      color: var(--color-text-secondary);
      font-size: 14px;
      letter-spacing: 0.03em;
      line-height: 1.4;
      font-weight: 500;
      margin: 2px 0 0;
      transition: color 0.25s ease-in-out;
      @media (max-width: 567px) {
        display: none;
      }
    }
  }
`;

export const LocationColumn = styled.div`
  span {
    color: var(--color-text-primary);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.05em;
    line-height: 1.2;
    transition: color 0.25s ease-in-out;
  }
`;

export const TypeColumn = styled.div`
  span {
    color: var(--color-text-primary);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.05em;
    line-height: 1.2;
    transition: color 0.25s ease-in-out;
  }
`;

export const VotesColumn = styled.div<{ clicked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  padding: 8px 20px;
  border-radius: 4px;
  pointer-events: ${({ clicked }) => (clicked ? `none` : `inherit`)};
  background-color: ${({ clicked }) =>
    clicked ? `#5bffa8` : `var(--color-bg-primary)`};
  border: 2px solid
    ${({ clicked }) => (clicked ? `#5bffa8` : `var(--color-bg-element)`)};
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    background-color: ${({ clicked }) =>
      clicked ? `#5bffa8` : `var(--color-bg-element)`};
  }
  @media (max-width: 567px) {
    padding: 8px 10px;
  }
  svg {
    height: 20px;
    fill: ${({ clicked }) =>
      clicked ? `#002358` : `var(--color-text-secondary)`};
    margin: -3px 20px 0 0;
    transition: fill 0.25s ease-in-out;
    @media (max-width: 567px) {
      height: 15px;
      margin: -3px 15px 0 0;
    }
  }
  span {
    color: ${({ clicked }) =>
      clicked ? `#002358` : `var(--color-text-primary)`};
    font-size: 18px;
    transition: color 0.25s ease-in-out;
    @media (max-width: 567px) {
      font-size: 15px;
    }
  }
`;

export const VotedAtColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  padding: 8px 10px;
  border-radius: 4px;
  background-color: var(--color-bg-element);
  transition: all 0.25s ease-in-out;
  span {
    color: var(--color-text-primary);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.05em;
    line-height: 1.2;
    transition: color 0.25s ease-in-out;
    @media (max-width: 567px) {
      font-size: 13px;
      text-align: center;
    }
  }
`;
