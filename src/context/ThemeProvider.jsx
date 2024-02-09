import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  // Default theme is taken as dark
  if (!theme) {
    localStorage.setItem("theme", "dark");
    return "dark";
  } else {
    return theme;
  }
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getTheme);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    // setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
