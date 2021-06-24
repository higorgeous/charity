import React, { useState, useEffect, useRef } from "react";
import { usePopper } from "react-popper";
import styled from "@emotion/styled";

import Hamburger from './Hamburger';
import ThemeToggle from './ThemeToggle'

import { Wrapper } from './styles';
import Dropdown from "./Dropdown";

const Menu = () => {
  const [visible, setVisibility] = useState(false);

  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          enabled: true,
          options: {
            offset: [0, 10]
          }
        }
      ]
    }
  );

  const handleDocumentClick = (event: { target: any }) => {
    console.log(event.target.id)
    if ((referenceRef.current! as any).contains(event.target)) {
      return;
    } else if (event.target.id === 'dropdown') {
      return;
    }
    setVisibility(false);
  }
  const handleDropdownClick = () => {
    setVisibility(!visible);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <Wrapper>
      <ThemeToggle />
      <Hamburger referenceRef={referenceRef} handleClick={handleDropdownClick} />
      <Dropdown popperRef={popperRef} styles={styles} attributes={attributes} visible={visible} />
    </Wrapper>
  );
};

export default Menu;