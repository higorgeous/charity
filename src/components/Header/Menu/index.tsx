import React, { useState, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';

import Dropdown from './Dropdown';
import Hamburger from './Hamburger';
import Share from './Share';
import ThemeToggle from './ThemeToggle';

import { Wrapper } from './styles';

const Menu = () => {
  const [visible, setVisibility] = useState(false);

  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [-210, 5],
          },
        },
      ],
    },
  );

  const handleDocumentClick = (event: { target: any }) => {
    if ((referenceRef.current! as any).contains(event.target)) {
      return;
    } else if (event.target.id === 'dropdown') {
      return;
    }
    setVisibility(false);
  };
  const handleDropdownClick = () => {
    setVisibility(!visible);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  return (
    <Wrapper>
      <ThemeToggle />
      <Share />
      <Hamburger
        referenceRef={referenceRef}
        handleClick={handleDropdownClick}
      />
      <Dropdown
        popperRef={popperRef}
        styles={styles}
        attributes={attributes}
        visible={visible}
      />
    </Wrapper>
  );
};

export default Menu;
