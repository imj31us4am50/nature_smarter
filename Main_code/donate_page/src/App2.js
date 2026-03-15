import "./styles2.css";
import bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Part from "./Part.js";
import LowerPageTitle from "./TitleForIcDes.js";
import IconsDescs from "./IconsDescs.js";

export default function App2() {
  return (
    <div className="container-fluid m-0 p-0 mb-5">
      <Part />
      <LowerPageTitle />
      <IconsDescs />
    </div>
  );
}
