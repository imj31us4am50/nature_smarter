import Component42CSS from "./Component42.css";

export default function Component42() {
  return (
    <div className="row mt-5 poa pouy" style={Component42CSS}>
      <div className="container-for-description col-md-6 mx-auto mt-3 ml-3 mr-3">
        <h1>Adevăratele Acrobate</h1>
        <p>
          <b>Câteva curiozități despre veverițe: </b>Veverițele uită unde își
          țin nucile și ghindele îngropate, ceea ce duce la creșterea de noi
          copaci. Ca la majoritatea rozătoarelor, au patru dinți în față care
          cresc continuu. De aceea ele trebuie să roadă mereu câte ceva.
          Veveriţele sunt foarte încrezătoare, fiind unele dintre puţinele
          animale sălbatice care mănâncă din mâna unui om.
        </p>
      </div>
      <video
        src="https://imj31us4am50.github.io/NSEDITEDVIDS/animal-video-6.mp4"
        className="aoba col-md-6 mx-auto"
        controls
        muted
        autoPlay
        loop
      />
    </div>
  );
}
