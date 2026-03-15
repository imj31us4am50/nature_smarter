import TitleCSS from "./Title.css";

export default function Title() {
  return (
    <div
      className="container-fluid mt-5 mx-auto donation-title h1 text-white text-center"
      style={TitleCSS}
    >
      {" "}
      A nu lua măsuri este o alegere. <br />
      <div className="mx-auto row izae">Acționează acum.</div>
    </div>
  );
}
