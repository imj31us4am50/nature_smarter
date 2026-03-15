import questionFormCSS from "./questionForm.css";

export default function questionForm() {
  return (
    <div className="questionform mt-5 p-1 mx-auto" style={questionFormCSS}>
      <form method="post" action="ask.php">
        <div className="inputspart d-flex align-items-start">
          <div className="information-part p-4 w-100">
            <input
              name="username"
              type="text"
              placeholder="Nume"
              required
              className="nameinput d-block p-2 m-2 mb-3"
            ></input>
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="emailinput d-block p-2 m-2 mb-3"
            ></input>
          </div>
          <div className="message-part p-4 w-100">
            <textarea
              name="content"
              placeholder="Mesajul tău"
              required
              className="messageinput d-block p-2 m-2"
              spellcheck="false"
            ></textarea>
          </div>
        </div>
        <div className="submitbutton text-center">
          <button className="btn opziqe text-white m-3" type="submit">
            Trimite mesaj
          </button>
        </div>
      </form>
    </div>
  );
}
