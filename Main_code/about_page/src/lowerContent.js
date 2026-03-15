import lowerContentCSS from "./lowerContent.css";

export default function lowerContent() {
  return (
    <div
      className="container-fluid m-0 p-0 lower-content"
      style={lowerContentCSS}
    >
      <div className="container-fluid title-1-lower mt-5 p-0 mx-auto h1 text-center">
        Ce oferim
      </div>
      <div className="container-fluid container-of-icons-and-descs d-flex align-items-center m-0 pt-2">
        <div className="icondesc-1 p-3 pt-5 w-100 text-center">
          <img
            src="https://imj31us4am50.github.io/imgs/information.png"
            className="imageoffer"
          />

          <div className="containerofdesc pt-4 h5">
            Informații și materiale educative referitoare la situația actuală a
            animalelor.
          </div>
        </div>
        <div className="icondesc-2 p-3 pt-5 w-100 text-center">
          <img
            src="https://imj31us4am50.github.io/imgs/donation.png"
            className="imageoffer"
          />

          <div className="containerofdesc pt-4 h5">
            Facilitarea strângerii de fonduri și contactul cu alte asociații
            caritabile de prestigiu.
          </div>
        </div>
        <div className="icondesc-3 p-3 pt-5 w-100 text-center">
          <img
            src="https://imj31us4am50.github.io/imgs/platform.png"
            className="imageoffer"
          />

          <div className="containerofdesc pt-4 h5">
            O platformă interactivă și ușor de folosit pentru utilizatori.
          </div>
        </div>
      </div>
    </div>
  );
}
