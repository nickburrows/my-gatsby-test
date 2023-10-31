/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import "./src/styles/global.css";
// import "./src/styles/main.scss";
import "material-symbols";
import "normalize.css";

import React from "react";
// import Layout from "./src/components/Layout";
import { ThemeProvider } from "./src/utils/ThemeContext";

// // Logs when the client route changes
// export const onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname);
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null);
// };

// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
