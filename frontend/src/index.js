import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import App from "./App.js";
import reactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Container from "./components/context/Container.js";

reactDOM.render(
  <Container>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Container>,
  document.getElementById("root")
);
