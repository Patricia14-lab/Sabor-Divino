import React from "react";
import fluidCSS from "fluid-css-lng";


export default Seccion1;

function Seccion1({ children }) {
  return (
    <div
      className={fluidCSS()
        .ltX(850, {
          display: ["none"],
        })

        .end(
          "content-container d-center gap-10px fw-bolder c-white  bg-crimson"
        )}
    >
      <i className="fa-solid fa-bullhorn fs-150p" />
      {children}
    </div>
  );
}
