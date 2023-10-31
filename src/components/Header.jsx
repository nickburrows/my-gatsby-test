import React, { useState, useEffect, useContext } from "react";
import { Link } from "gatsby";
import { ThemeContext } from "../utils/ThemeContext";
import GatsbySVGLogo from "../images/gatsby-logo.svg";

const Header = ({ siteTitle }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // useEffect(() => {
  //   if (theme === "dark") {
  //     localStorage.setItem("color-theme", "dark");
  //     document.body.classList.add("dark");
  //   } else {
  //     localStorage.setItem("color-theme", "light");
  //     document.body.classList.remove("dark");
  //   }
  // }, [theme]);

  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      toggleTheme(true);
    } else {
      toggleTheme(false);
    }
  }, []);

  const handleOnToggle = () => {
    if (localStorage.getItem("color-theme") === "light") {
      document.body.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
    toggleTheme(!theme);
  };

  return (
    <header className="mx-auto my-0 flex w-full flex-row items-center justify-between bg-slate-200 px-8 py-6 dark:bg-gray-800">
      <Link to="/" className="text-sm no-underline">
        {siteTitle}
      </Link>
      <div className="flex items-center justify-center px-4">
        <button
          data-type="theme"
          id="lightdark"
          className="relative mr-2 !inline-flex h-6 w-6 !items-center justify-center rounded-[6.25rem] p-5 text-center text-sm font-medium tracking-[.00714em] text-neutral-900 hover:bg-neutral-300/80 hover:text-cyan-500 dark:text-neutral-400 dark:hover:bg-neutral-500/50 dark:hover:text-yellow-200"
          onClick={handleOnToggle}
        >
          <span className="material-symbols-outlined">
            {theme === "dark" ? "dark_mode" : "light_mode"}
          </span>
        </button>
        <div className="rounded bg-white p-2">
          <img alt="Gatsby logo" className="m-0 h-5" src={GatsbySVGLogo} />
        </div>
      </div>
    </header>
  );
};

export default Header;
