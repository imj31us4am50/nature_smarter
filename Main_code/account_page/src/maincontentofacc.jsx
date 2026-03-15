import React, { useState, useEffect } from 'react'; import axios from 'axios'; import MainContentOfAccCSS from "./maincontentofacc.css"; const MainContentOfAccount = () => { const [info, setInfo] = useState([]); useEffect(() => { fetchInfo(); }, []); const fetchInfo = () => { axios .get('session.php') .then((res) => { console.log(res); setInfo(res.data); }) .catch((err) => { console.log(err); }); }; return ( <div>
  <div className='item-container'> {[info].map((profile) => (
      <div className="container-fluid mb-4" style={MainContentOfAccCSS}>
        <form id="form-update" method="post" action="update.php" enctype="multipart/form-data">
          <div className="aibf2u container-fluid d-flex align-items-start">
            <div className="accout-pfp text-center w-100 mb-5">
              <img src={ "uploads/" + profile.src} alt="user" className="profile-picture" id="profile-picture-to-change" />
              <div className="tltp"> {/* <img src="https://imj31us4am50.github.io/imgs/edit-pencil-icon.png" className="edit-pencil-icon feature-icon" /> */} <div class="image-upload">
              <label for="file-input" onClick={()=> {}}> <img src="https://imj31us4am50.github.io/imgs/edit-pencil-icon.png" className="edit-pencil-icon feature-icon" />
              </label>
              <input id="file-input" name="fileToUpload" type="file" />
                </div>
                <span className="tltptext">Schimbă imaginea de profil</span>
              </div><input className="btn donation-button mx-auto mt-2" type="submit" value="Upload Image" name="submit"></input>
            </div>
            
            <div className="account-information h4 w-100"> {/* looks bad <div className="d-flex container-of-infoacc align-items-center">
                <div className="thediv">Nume utilizator:</div>
                <span id="username" className="thespan ml-2"> naturelover271 </span>
              </div>
              <br />
              <div className="d-flex container-of-infoacc align-items-center">
                <div className="thediv">Parolă:</div>
                <span id="password" className="thespan ml-2"></span>
              </div> */} <div className="info1 pb-3">
                <div className="oapme d-inline-flex">
                  <div className="username-require d-inline"> Nume utilizator: </div>
                  <input placeholder={profile.username} name="username" type="text" readOnly id="username-add" minLength="8" />
                </div>
                <div className="tltp-feature d-inline">
                  <img src="https://imj31us4am50.github.io/imgs/edit-pencil-icon.png" className="edit-feature d-inline feature-icon" onClick={()=> { { /* give permission to update */ } let input = document.querySelector("#username-add"); let advel = document.querySelector(".advertisement"); let savedel = document.querySelector(".save-adv"); { /* give permission to update */ } input.readOnly = false; input.focus(); savedel.style.display = "none"; advel.style.display = "block"; input.addEventListener("keypress", function (e) { if (e.key === "Enter") { if (advel.style.display === "block") savedel.style.display = "none"; input.readOnly = true; advel.style.display = "none"; savedel.style.display = "block"; setTimeout(() => { savedel.style.display = "none"; }, 2000); { document.getElementById("form-update").submit(); } } }); }} /> <span className="tltptext-feature">Schimbă numele</span>
                </div>
              </div>
              <div className="info2 pb-3">
                <div className="oapme d-inline-flex">
                  <div className="password-require d-inline">Parolă: </div>
                  <input name="password" type="password" readOnly placeholder='********' id="password-add" minLength="8" />
                </div>
                <div className="tltp-feature d-inline">
                  <img src="https://imj31us4am50.github.io/imgs/view-eye.png" className="view-feature d-inline feature-icon" id="view-password-icon" onClick={()=> { let passTooltip = document.getElementById("spanforpass"); let passInput = document.getElementById("password-add"); if (passInput.type == "password") { passInput.type = "text"; passTooltip.textContent = "Ascunde parola"; } else { passInput.type = "password"; passTooltip.textContent = "Vizualizează parola"; } }} /> <span className="tltptext-feature" id="spanforpass"> Vizualizează parola </span>
                </div>
                <div className="tltp-feature">
                  <img src="https://imj31us4am50.github.io/imgs/edit-pencil-icon.png" className="edit-feature d-inline feature-icon" onClick={()=> { { /* give permission to update */ } let input = document.querySelector("#password-add"); let advel = document.querySelector(".advertisement"); let savedel = document.querySelector(".save-adv"); { /* give permission to update */ } input.readOnly = false; input.focus(); input.type = "text"; savedel.style.display = "none"; advel.style.display = "block"; input.addEventListener("keypress", function (e) { if (e.key === "Enter") { if (advel.style.display === "block") savedel.style.display = "none"; input.readOnly = true; input.type = "password"; advel.style.display = "none"; savedel.style.display = "block"; setTimeout(() => { savedel.style.display = "none"; }, 2000); { document.getElementById("form-update").submit(); } } }); }} /> <span className="tltptext-feature">Schimbă parola</span>
                </div>
              </div>
              <div className="info3 pb-3">
                <div className="oapme d-inline-flex">
                  <div className="email-require d-inline">Email: </div>
                  <input placeholder={profile.email} name="email" type="email" readOnly id="email-add" minLength="8" />
                </div>
                <div className="tltp-feature d-inline">
                  <img src="https://imj31us4am50.github.io/imgs/edit-pencil-icon.png" className="edit-feature d-inline feature-icon" onClick={()=> { { /* give permission to update */ } let input = document.querySelector("#email-add"); let advel = document.querySelector(".advertisement"); let savedel = document.querySelector(".save-adv"); { /* give permission to update */ } input.readOnly = false; input.focus(); savedel.style.display = "none"; advel.style.display = "block"; input.addEventListener("keypress", function (e) { if (e.key === "Enter") { if (advel.style.display === "block") savedel.style.display = "none"; input.readOnly = true; advel.style.display = "none"; savedel.style.display = "block"; setTimeout(() => { savedel.style.display = "none"; }, 2000); { document.getElementById("form-update").submit(); } } }); }} /> <span className="tltptext-feature">Schimbă email-ul</span>
                </div>
              </div>
              <div className="info4 pb-3">
                <div className="bio-require d-inline">Bio: </div>
                <input name="bio" placeholder={profile.bio} readOnly id="bio-add" />
                <div className="tltp-feature">
                  <img src="https://imj31us4am50.github.io/imgs/edit-pencil-icon.png" className="edit-feature d-inline feature-icon" onClick={()=> { let input = document.querySelector("#bio-add"); let advel = document.querySelector(".advertisement"); let savedel = document.querySelector(".save-adv"); { /* give permission to update */ } input.readOnly = false; input.focus(); savedel.style.display = "none"; advel.style.display = "block"; input.addEventListener("keypress", function (e) { if (e.key === "Enter") { if (advel.style.display === "block") savedel.style.display = "none"; input.readOnly = true; advel.style.display = "none"; savedel.style.display = "block"; setTimeout(() => { savedel.style.display = "none"; }, 2000); { document.getElementById("form-update").submit(); } } }); }} /> <span className="tltptext-feature">Editează biografia</span>
                </div>
                <div className="advertisement h6 opacity-75 pt-4"> Schimbările se salvează apăsând tasta <kbd>Enter</kbd>. </div>
                <div className="save-adv h6 opacity-75 pt-4">Salvat!</div>
              </div>
            </div>
          </div>
        </form>
        <div className="container-of-liked">
          <div className="liked-content-title h1 p-3 m-0 text-center"> Articole apreciate </div>
          <div className="proper-liked-content text-center opacity-50 h5 m-0 p-5"> Indisponibil momentan </div>
        </div>
      </div>
     ))} </div>
</div> ); }; export default MainContentOfAccount;