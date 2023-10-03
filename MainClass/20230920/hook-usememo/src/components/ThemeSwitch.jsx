import React, { useContext } from "react";
import { ThemeContext } from "../DarkMode";

function ThemeSwitch() {
  //클릭 이벤트가 발생하면 setTheme 함수가 실행되서 업데이트된다.
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>테마 전환</button>;
}

export default ThemeSwitch;
