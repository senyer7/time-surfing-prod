import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "auto";
  });

  useEffect(() => {
    document.body.className = "page";
    document.body.classList.add(`theme_${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
};
