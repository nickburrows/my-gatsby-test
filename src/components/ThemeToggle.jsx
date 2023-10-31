import React, { useEffect, useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  // const isDark = () => {
  //   return theme === "dark";
  // };

  // useEffect(() => {
  //   if (
  //     localStorage.getItem("color-theme") === "dark" ||
  //     (!("color-theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     toggleTheme(true);
  //   } else {
  //     toggleTheme(false);
  //   }
  // }, []);

  // const handleOnToggle = () => {
  //   if (localStorage.getItem("color-theme") === "light") {
  //     document.body.classList.add("dark");
  //     localStorage.setItem("color-theme", "dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //     localStorage.setItem("color-theme", "light");
  //   }
  //   toggleTheme(!theme);
  // };

  return (
    <>
      <button
        data-type="theme"
        id="lightdark"
        className="relative mr-2 !inline-flex h-6 w-6 !items-center justify-center rounded-[6.25rem] p-5 text-center text-sm font-medium tracking-[.00714em] text-neutral-900 hover:bg-neutral-300/80 hover:text-cyan-500 dark:text-neutral-400 dark:hover:bg-neutral-500/50 dark:hover:text-yellow-200"
        onClick={toggleTheme}
      >
        <span className="material-symbols-outlined">
          {theme === "dark" ? "light_mode" : "dark_mode"}
        </span>
      </button>
    </>
  );
};

export default ThemeToggle;
