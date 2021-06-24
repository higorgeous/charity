import { useState, useEffect } from "react";
import { usePopperTooltip } from 'react-popper-tooltip';

import { ToggleButton, ToggleThumb } from './styles';

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState("light");
  const lightTheme = activeTheme === "light" ? "dark" : "light";

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip();

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);
  return (
    <>
      <ToggleButton
        type="button"
        className="mobile-hide"
        ref={setTriggerRef}
        onClick={() => setActiveTheme(lightTheme)}
      >
        <ToggleThumb activeTheme={activeTheme} />
        <span aria-hidden={true}>🌙</span>
        <span aria-hidden={true}>☀️</span>
      </ToggleButton>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: 'tooltip-container' })}
        >
          Change theme
          <div {...getArrowProps({ className: 'tooltip-arrow' })} />
        </div>
      )}
    </>
  );
};

export default ThemeToggle;