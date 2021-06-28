import styled from '@emotion/styled';

export const Wrapper = styled.div`
  grid-area: actions;
  margin-right: 42px;
  margin-left: 5px;
  display: flex;
  @media (max-width: 1023px) {
    margin-right: 22px;
  }
`;

export const ToggleButton = styled.button`
  --toggle-width: 45px;
  --toggle-height: 23px;
  --toggle-padding: 1px;
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
  border-radius: 4px;
  cursor: pointer;
  background: var(--color-bg-element);
  transition: background 0.25s ease-in-out;
`;

export const ToggleThumb = styled.span<{ activeTheme: string }>`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 4px;
  background: white;
  transition: transform 0.25s ease-in-out;
  transform: ${({ activeTheme }) =>
    activeTheme === 'dark'
      ? 'translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)'
      : 'none'};
`;

export const Trigger = styled.button`
  background-color: transparent;
  padding: 16px 10px 15px;
  position: relative;
  margin: 0;
  border: 0;
  cursor: pointer;
  svg {
    stroke: var(--color-text-secondary);
    transition: stroke 0.25s ease-out;
  }
`;

export const Icon = styled.button`
  background-color: var(--color-bg-element);
  margin: 15px 5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.25s ease-out;
  svg {
    stroke: var(--color-text-secondary);
    transition: stroke 0.25s ease-out;
    height: 15px;
    margin-top: -1px;
  }
`;

export const ShareHeading = styled.h3`
  margin-top: 0;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.025em;
  text-align: center;
`;

export const CloseIcon = styled.div<{ modalIsOpen: boolean }>`
  position: fixed;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  background: var(--color-bg-element);
  border-radius: 3px;
  padding: 5px;
  z-index: 9999;
  cursor: pointer;
  opacity: ${({ modalIsOpen }) => (modalIsOpen ? 1 : 0)};
  visibility: ${({ modalIsOpen }) => (modalIsOpen ? `visible` : `hidden`)};
  transition: all 0.25s ease-out;
  &::before,
  &::after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: var(--color-text-secondary);
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const ShareWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  button {
    margin: 5px 10px;
  }
`;

export const DropdownContainer = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  width: 250px;
  border-radius: 8px;
  background: #ffffff;
  padding: 0 20px 0;
  margin-top: -5px;
  flex-direction: column;
  box-shadow: 0 5px 25px rgb(0 17 36 / 15%);
  &::before {
    content: '';
    border-style: solid;
    border-width: 15px 12px 15px 0;
    border-color: transparent #ffffff transparent transparent;
    position: absolute;
    transform: rotate(90deg);
    top: -20px;
    right: 14px;
  }
`;

export const DropdownItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DropdownHeading = styled.li`
  text-transform: uppercase;
  padding: 15px 0;
  font-size: 12px;
  font-weight: 700;
  color: #214a88;
  border-top: 1px solid #e9f2ff;
  &:first-of-type {
    padding-top: 20px;
    border: none;
  }
`;

export const DropdownItem = styled.li`
  border-top: 1px solid #e9f2ff;
  padding: 15px 0;
  &:first-of-type {
    padding-top: 5px;
  }
  &:last-of-type {
    padding-bottom: 18px;
  }
  @media (min-width: 1023px) {
    &:nth-of-type(6) {
      border-top: none;
    }
  }
  a {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    color: #002358;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.1s ease-out;
    &:hover {
      color: #0060ff;
    }
    &.active {
      color: #0060ff;
    }
  }
`;
