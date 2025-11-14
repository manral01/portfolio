/* eslint-disable react-hooks/set-state-in-effect */
import { type PropsWithChildren, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import { ThemeContext, type ThemeContextType } from "./ThemeContextObject";

const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
