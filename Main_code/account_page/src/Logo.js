import LogoCSS from "./Logo.css";

export default function Logo() {
  return (
    <a href="../home/index.html" style={LogoCSS} className="row">
      <img src="https://raw.githubusercontent.com/AvramAlexandruV/project/main/logo.png" />
    </a>
  );
}
