import Component2CSS from "./Component2.css";

export default function Component2() {
  return (
    <div className="row mt-5 poa" style={Component2CSS}>
      <div className="container-for-description col-md-6 mx-auto mt-3 ml-3 mr-3">
        <h1>Iubire și pentru cei de acasă! </h1>
        <p>
          In această zi sărbătorim <b>(în SUA)</b> legătura dintre animal de
          companie și stăpân. Dacă ai un animal de companie, sărbătorește Ziua
          Animalelor de Companie cu el. Fă-i prăjiturele sau bunătăți speciale,
          cumpără-i o jucărie nouă, mergi la o plimbare lungă, fă-i un masaj sau
          îmbrățișează-l și spune-i cât de mult îl iubești. Așa se sărbătorește
          o zi ca aceasta!
        </p>
      </div>
      <video
        src="https://imj31us4am50.github.io/NSEDITEDVIDS/animal-video-3.mp4"
        className="aoba col-md-6 mx-auto"
        controls
        muted
        autoPlay
        loop
      />
    </div>
  );
}
