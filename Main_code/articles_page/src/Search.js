import React, { useState } from "react";
import "./Search.css";
import JSONDATA from "./data.json";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import SearchBarCSS from "./SearchBar.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="row mb-5 container-of-search-bar" style={SearchBarCSS}>
      <input
        type="search"
        className="mx-auto mt-4"
        placeholder="Caută un articol..."
        spellCheck="false"
        maxlenght="50"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="proper-container mx-auto row">
            <a
              href={val.id}
              className="text-decoration-none text-dark overflow-hidden uref"
            >
              <div className="row oik p-2 mx-auto">
                <img
                  src={val.imgUrl}
                  className="aoba col-6 col-md-3"
                  alt="tbnail"
                ></img>
                <div className="container-for-description col-6 col-md-9 mt-3">
                  <h5>{val.title}</h5>
                  <p className="styling-for-article-paragraph">{val.body}</p>
                </div>
              </div>
            </a>

            <div id={val.ref} className="overlay">
              <div className="popup d-flex align-self-center justify-content-center">
                <a className="close" href="#close">
                  &times;
                </a>
                <div className="content d-flex">
                  <div className="popup-video-cont">
                    <video
                      src={val.videoUrl}
                      className="o mt-1"
                      controls
                      muted
                      autoPlay
                      loop
                    />
                  </div>
                  <div className="popup-desc-cont p-4 pt-5">
                    <div className="popup-text">
                      <h1 className="popup-title text-wrap m-0">{val.title}</h1>
                      <p className="popup-paragraph text-wrap mt-4">
                        {val.body}
                      </p>
                    </div>
                    <div className="lower-part">
                      <div className="popup-leave-a-comment">
                        <input
                          type="text"
                          className="mx-auto"
                          placeholder="Scrie un comentariu..."
                          spellCheck="false"
                          maxLength="100"
                        />

                        <div
                          className={val.ref}
                          style={{
                            margin: "auto",
                            display: "block",
                            width: "fit-content",
                            float: "right"
                          }}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                icon={<FavoriteBorder />}
                                checkedIcon={<Favorite />}
                                name="checkedH"
                              />
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Search;
