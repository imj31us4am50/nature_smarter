import upperContentCSS from "./upperContent.css";

export default function upperContent() {
  return (
    <div
      className="text-white container-fluid m-0 p-0 olqp"
      style={upperContentCSS}
    >
      <div className="title mx-auto text-white h1 text-center pt-5">
        Despre <span className="green">NS</span> (Nature Smarter)
      </div>
      <div className="logo mx-auto h1 text-center pt-2">
        <img
          src="https://raw.githubusercontent.com/AvramAlexandruV/project/main/logo.png"
          className="animated-logo-about"
        />
      </div>
      <div className="d-flex for-about pt-3">
        <div className="first-cont p-3 mx-auto text-center w-100"></div>
        <div className="second-cont p-3 mx-auto text-center w-100">
          <div className="subtitle h1 pb-2 green">Misiunea noastră</div>
          <div className="description h4 p-3 pb-5">
            Suntem determinați să creem un mediu cât mai favorabil animalelor și
            să le oferim ajutor celor în nevoie.
            <br /> Cu ajutorul persoanelor care se implică, ori prin{" "}
            <a href="#insertdonatelink" className="green h4 donate-a">
              donații
            </a>
            , ori prin alte moduri, suntem capabili să facem acest lucru un vis
            devenit realitate.
            <br /> Dorim să informăm persoanele în legătură cu situația actuală,
            dar în același timp să și educăm tinerii prin diverse materiale cu
            informații despre diferite specii de animale existente și
            problematica lor.
          </div>
        </div>
      </div>
    </div>
  );
}
