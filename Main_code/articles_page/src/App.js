import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./App1.js";
import Main from "./App2.js";
import Footer from "./Footer.js";
import Test from "./Search.js";

const App = () => {
  return (
    <div className="oui container-fluid m-0 p-0">
      <Header />
      <Main />
      <Test />
      <Footer />
    </div>
  );
};

export default App;
