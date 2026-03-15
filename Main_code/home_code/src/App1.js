import "./styles1.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Title1 from "./Title1.js";
import Component1 from "./Component1.js";
import Title2 from "./Title2.js";
import Component2 from "./Component2.js";
import Title3 from "./Title3.js";
import Component3 from "./Component3.js";
import Title4 from "./Title4.js";
import Component4 from "./Component4.js";
import Component41 from "./Component41.js";
import Component42 from "./Component42.js";
import TitleAdd from "./TitleAdditional.js";
import ComponentAdd from "./ComponentAdditional.js";
import Component43 from "./Component43.js";
import Component44 from "./Component44.js";
import Component45 from "./Component45.js";

export default function App1() {
  return (
    <div className="container-fluid p-5">
      <Title1 />
      <Component1 />
      <Title2 />
      <Component2 />
      <Title3 />
      <Component3 />
      <Title4 />
      <Component4 />
      <Component41 />
      <Component42 />
      <Component43 />
      <Component44 />
      <Component45 />
    </div>
  );
}
