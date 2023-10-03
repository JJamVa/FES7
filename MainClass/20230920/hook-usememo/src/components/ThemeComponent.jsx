import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../DarkMode";

function ThemeComponent() {
  const { theme } = useContext(ThemeContext);
  return <div style={{ color: theme === "dark" ? "gray" : "black" }}>현재 테마: {theme}</div>;
}

export default ThemeComponent;
