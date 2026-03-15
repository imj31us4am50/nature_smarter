import IconsDescsCSS from "./IconsDescs.css";

export default function IconsDescs() {
  return (
    <div
      className="container-fluid d-flex container-for-iconsdescs mt-5"
      style={IconsDescsCSS}
    >
      <div className="container-1 conta p-5 pt-2 mx-auto">
        <div className="icon1 mx-auto">
          <img
            src="https://imj31us4am50.github.io/imgs/bird-bw.jpg"
            className="iconimg"
          />
        </div>
        <div className="content-for-icons text-center mt-4">
          <h1 className="green">Importanță</h1>
          <h5>
            În buna funcționare a lumii noastre, contribuțiile pe care le aduc
            animalele sunt enorme. Animalele joacă un rol semnificativ în
            stabilitatea mediului, a ecosistemului și a vieții noastre.
          </h5>
        </div>
      </div>
      <div className="container-2 conta p-5 pt-2 mx-auto">
        <div className="icon2 mx-auto">
          <img
            src="https://imj31us4am50.github.io/imgs/feline-bw.jpeg"
            className="iconimg"
          />
        </div>
        <div className="content-for-icons text-center  mt-4">
          <h1 className="green">Pericole</h1>
          <h5>
            Animalele continuă să fie traficate de zeci de ani. Fie pentru
            blană, pene, sau alte materiale folosite de oameni. Acest lucru pune
            zeci de mii de specii de animale în pericol și a cauzat sute de
            extincții.
          </h5>
        </div>
      </div>
      <div className="container-3 conta p-5 pt-2 mx-auto">
        <div className="icon3 mx-auto">
          <img
            src="https://imj31us4am50.github.io/imgs/dog-bw.png"
            className="iconimg"
          />
        </div>
        <div className="content-for-icons text-center  mt-4">
          <h1 className="green">Ajutor</h1>
          <h5>
            Ele au nevoie de ajutorul nostru. Putem ajuta prin implicare,
            voluntariat, prin înștiințare, prin donații. De la mic la mare,
            domestic sau sălbatic, acvatic sau aerian, toate animalele merită{" "}
            <span className="green">o viață mai bună</span>.
          </h5>
        </div>
      </div>
    </div>
  );
}
