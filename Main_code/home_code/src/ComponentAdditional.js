import ComponentAddCSS from "./ComponentAdditional.css";

export default function ComponentAdditional() {
  return (
    <div className="row mt-5 mb-5 poa" style={ComponentAddCSS}>
      <div className="container-for-description col-md-6 mx-auto mt-3 ml-3 mr-3">
        <h1>Cum putem ajuta</h1>
        <p>
          Salvarea faunei sălbatice se traduce prin protejarea mediului. Cu cât
          există mai multe animale sălbatice, cu atât mai mult ne îmbogățim
          planeta. Din acest motiv, animalele trebuie ținute în habitatele și
          mediile lor naturale. Trebuie să le păstrăm habitatele naturale,
          deoarece acest lucru se va dovedi a fi benefic pentru oameni.{" "}
        </p>
      </div>
      <video
        src="https://imj31us4am50.github.io/NSEDITEDVIDS/animal-video-1.mp4"
        className="aoba col-md-6 mx-auto"
        controls
        muted
        autoPlay
        loop
      />
    </div>
  );
}
