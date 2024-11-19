import React from "react";
import { Default } from "../../app/theme/templates";
import Anuncio1 from "./secciones/anuncio-1";
import Seccion2 from "./secciones/slider";
import Seccion3 from "./secciones/_.Seccion3";
import Seccion4 from "./secciones/_.Seccion4";
import Seccion5 from "./secciones/_.Seccion5";
import Seccion6 from "./secciones/_.Seccion6";
import Seccion7 from "./secciones/_.Seccion7";
import Seccion8 from "./secciones/_.Seccion8";
import Seccion9 from "./secciones/_.Seccion9";
import content from "./secciones/content";  

export default Contenido;

function Contenido() {
  return (
    <Default>
      <Anuncio1>{content.Seccion1.texto}</Anuncio1>
      <Seccion2 />
      <Seccion3 />
      <Seccion4 />
      <Seccion5 />
      <Seccion6 />
      <Seccion7 />
      <Seccion8 />
      <Seccion9 />
    </Default>
  );
}

