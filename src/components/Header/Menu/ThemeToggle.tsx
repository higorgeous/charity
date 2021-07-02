import { useEffect } from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import { useDarkMode } from 'next-dark-mode';

import { ToggleButton, ToggleThumb } from './styles';

const ThemeToggle = () => {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();

  const toggleMode = (text: string) => {
    if (text === 'dark') switchToDarkMode();
    if (text === 'light') switchToLightMode();
  };

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    offset: [0, 15],
  });

  useEffect(() => {
    document.body.dataset.theme = darkModeActive ? 'dark' : 'light';
  }, [darkModeActive]);
  return (
    <>
      <ToggleButton
        type="button"
        ref={setTriggerRef}
        onClick={() =>
          darkModeActive ? toggleMode('light') : toggleMode('dark')
        }
      >
        <ToggleThumb activeTheme={darkModeActive ? 'dark' : 'light'} />
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
