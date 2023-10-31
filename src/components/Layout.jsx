/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useState, useEffect } from "react";

import { useStaticQuery, graphql, Link } from "gatsby";
import ThemeToggle from "./ThemeToggle";

// import Header from "./Header";

const Layout = ({ location, title, children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <div className="heading-group">
          <Link to="/">{title}</Link>
          <ThemeToggle />
        </div>
      </h1>
    );
  } else {
    header = (
      <div className="heading-group">
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <ThemeToggle />
      </div>
    );
  }

  // useEffect(() => {
  //   if (
  //     localStorage.getItem("color-theme") === "dark" ||
  //     (!("color-theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  // }, []);

  return (
    <div className="bg-white font-sans text-base font-normal text-gray-700 dark:bg-neutral-800 dark:text-gray-300">
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}

        <main>{children}</main>
      </div>
      <footer className="mt-8 w-full border-t border-gray-300 py-4 text-center text-gray-700 shadow-lg dark:bg-gray-700 dark:text-gray-200">
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
