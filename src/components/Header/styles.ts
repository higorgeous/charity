import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  grid-template-rows: auto;
  align-items: center;
  padding: 0;
  height: 76px;
  grid-template-areas: "logo navigation actions";
  border-bottom: 1px solid var(--color-bg-element);
  transition: border 0.25s ease-in-out;
  @media (max-width: 568px) {
    height: 57px;
  }
`;
