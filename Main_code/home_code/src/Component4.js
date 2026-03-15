import Component4CSS from "./Component4.css";

export default function Component4() {
  return (
    <div className="row mt-5 poa pouy" style={Component4CSS}>
      <div className="container-for-description col-md-6 mx-auto mt-3 ml-3 mr-3">
        <h1>Despre Suricate</h1>
        <p>
          Suricatelor le place să se îngrijească una pe alta, și-și culeg
          paraziții din blană pe care îi mănâncă, deși aceștia nu fac parte din
          dieta lor. Suricatele stau în două labe sau chiar în vârful degetelor
          pentru a mirosi vântul și a detecta vulturii care ar putea da
          târcoale. Au vederea excelentă și pot scoate 10 sunete diferite, unul
          dintre ele fiind cel care dă alarma.
        </p>
      </div>
      <video
        src="https://imj31us4am50.github.io/NSEDITEDVIDS/animal-video-4.mp4"
        className="aoba col-md-6 mx-auto"
        controls
        muted
        autoPlay
        loop
      />
    </div>
  );
}
