import styled from "@emotion/styled";

export const Wrapper = styled.div`
  grid-area: actions;
  margin-right: 42px;
  margin-left: 5px;
  display: flex;
  @media (max-width: 1024px) {
    margin-right: 22px;
  }
`;

export const ToggleButton = styled.button`
--toggle-width: 45px;
--toggle-height: 23px;
--toggle-padding: 2px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  margin: 15px 10px;
  line-height: 1;
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-bg-element);
  transition: background 0.25s ease-in-out;
  @media (max-width: 568px) {
    display: none;
  }
`;

export const ToggleThumb = styled.span<{activeTheme: string}>`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;
  transition: transform 0.25s ease-in-out;
  transform: ${({ activeTheme }) =>
    activeTheme === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
`;

export const Button = styled.button`
  background-color: transparent;
  padding: 16px 10px 15px;
  position: relative;
  margin: 0;
  border: 0;
  cursor: pointer;
  svg {
    stroke: var(--color-text-secondary);
  }
`;

