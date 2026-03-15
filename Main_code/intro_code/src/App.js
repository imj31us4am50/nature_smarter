import "./styles.css";
import Logo from "./Logo.js";
import App1 from "./App1.js";
import App2 from "./App2.js";
import Extra from "./Extra.js";

export default function App() {
  return (
    <div className="container-fluid">
      <Logo />
      <div className="mt-5 mx-auto ddoa">
        <App1 className="ditem a" />
        <App2 className="ditem b" />
      </div>
      <Extra />
    </div>
  );
}
