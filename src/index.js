import "fontsource-roboto";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import { render } from "react-dom";

import App from "./components/app";

render(
  <>
    <CssBaseline />
    <App />
  </>,
  document.querySelector("#root")
);
