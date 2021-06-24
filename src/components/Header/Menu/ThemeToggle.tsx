import { useState, useEffect } from "react";

import { ToggleButton, ToggleThumb } from './styles';

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState("light");
  const lightTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);
  return (
    <ToggleButton
      type="button"
      onClick={() => setActiveTheme(lightTheme)}>
      <ToggleThumb activeTheme={activeTheme} />
      <span aria-hidden={true}>🌙</span>
      <span aria-hidden={true}>☀️</span>
    </ToggleButton>
  );
};

export default ThemeToggle;