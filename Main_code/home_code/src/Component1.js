import Component1CSS from "./Component1.css";

export default function Component1() {
  return (
    <div className="row mt-5 poa" style={Component1CSS}>
      <video
        src="https://imj31us4am50.github.io/NSEDITEDVIDS/animal-video-2.mp4"
        className="aoba col-md-6 mx-auto"
        controls
        muted
        autoPlay
        loop
      />
      <div className="container-for-description col-md-6 mx-auto mt-3 ml-3 mr-3">
        <h2>Viața sălbatică: plasa de siguranță vieții pe Pământ.</h2>
        <p>
          Când spunem „natură” ne referim la viața sălbatică, adică multitudinea
          de specii de animale, păsări și plante care funcționează precum
          nodurile unei plase invizibile ce susține viața pe Pământ. Cu cât mai
          multe specii, cu atât mai dese sunt nodurile și cu atât mai puternică
          plasa noastră de siguranță. Cu fiecare specie care dispare, plasa de
          siguranță devine mai fragilă. Și supraviețuirea noastră.
        </p>
      </div>
    </div>
  );
}
