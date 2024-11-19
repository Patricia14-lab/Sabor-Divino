import React from "react";
import content from "./content";
import fluidCSS from "fluid-css-lng";

export default Seccion3;

function Seccion3() {
  return (
    <div
      className={fluidCSS()
        .lerpX([320, 500], {
          fontSize: [10, 18],
        })
        .end(
          "content-container bg-pink c-darkred fw-bolder d-center tw-balance"
        )}
    >
      {content.Seccion3.slogan}
    </div>
  );
}
