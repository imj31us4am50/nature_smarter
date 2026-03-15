import Component3CSS from "./Component3.css";

export default function Component3() {
  return (
    <div className="row mt-5 poa" style={Component3CSS}>
      <video
        src="https://imj31us4am50.github.io/NSEDITEDVIDS/animal-video-5.mp4"
        className="aoba col-md-6 mx-auto"
        controls
        muted
        autoPlay
        loop
      />
      <div className="container-for-description col-md-6 mx-auto mt-3 ml-3 mr-3">
        <h1>Vedetele Spectacolului</h1>
        <p>
          <b>Ce simbolizează lebăda?</b> Considerată întotdeauna un simbol al
          eleganței și frumuseții , ea reprezintă și iubirea eternă . O imagine
          foarte comună este cea a două lebede care, prin unirea capului,
          formează o inimă. Albul lor amintește și conceptul de puritate. Lebăda
          celebrează frumusețea, cultura, arta, iubirea, credința și profunzimea
          sufletului.
        </p>
      </div>
    </div>
  );
}
