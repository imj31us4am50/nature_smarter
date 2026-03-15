import ToSignInCSS from "./ToSignIn.css";

export default function ToSignIn() {
  return (
    <div className="row onna mx-auto pl-3 pr-3 pt-3" style={ToSignInCSS}>
      <div>
        Aveți deja un cont? <a href="#popup2">Conectați-vă</a>
      </div>

      <div id="popup2" className="overlay">
        <div className="popup">
          <h2>Conectare</h2>
          <a className="close" href="#">
            &times;
          </a>

          <div className="content">
            <form action="./login.php" method="POST">
              <div className="row justify-content-center mx-auto h5">
                <div className="row pl-3 pr-3 pt-3">
                  <label for="username" className="user-select-none abba">
                    Nume Utilizator
                  </label>
                  <input
                    type="text"
                    /*placeholder="ex: naturelover271"*/

                    name="username"
                    className="p-2"
                    required
                  />
                </div>
                <div className="row pl-3 pr-3 pt-3">
                  <label for="password" className="user-select-none abba">
                    Parolă
                  </label>
                  <input
                    type="password"
                    /* placeholder="••••••••" */
                    name="password"
                    className="p-2"
                    required
                  />
                </div>
              </div>

              <div className="row pl-3 pr-3 pt-3 justify-content-center">
                <button type="submit" className="btn btn-default text-white">
                  Conectați-vă
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
