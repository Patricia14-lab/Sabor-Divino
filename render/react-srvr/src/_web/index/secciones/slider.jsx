import React from "react";
import "./slider.css";

import fluidCSS from "fluid-css-lng";

// Esto es mi componente
function SlideDiseño1(props) {
  const {
    jc = "end",
    imgurl = "https://i.ibb.co/sm05qx7/2af03b35-afe6-46e7-8bc4-1c2b8c2afe65-jfif.png",
    imgblururl,
    colores = ["#F0CEDF", "#F05CA6", "darkred"],
    backimgurl = "img/fondo.svg",
    imgalign = "left",
    backimgopacity = "0.8",
    children,
    w = "60%",
    torigin = "center",
  } = props;
  return (
    <div
      className={fluidCSS()
        .btwX([650, 1100], {
          justifyContent: ["center", "end", jc],
        })
        .end()}
      style={{
        backgroundImage: `radial-gradient(circle at center, ${colores.join(
          ","
        )})`,
        position: "absolute",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        padding: "30px",
        paddingRight: "40px",
        fontSize: "40px",
        zIndex: "0",
      }}
    >
      <$img
        src={backimgurl}
        style={{
          width: "70%",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          objectFit: "cover",
          zIndex: "0",
          opacity: backimgopacity,
        }}
      />

      <div
        className={fluidCSS()
          .btwX([900, 1200], {
            scale: ["0.9", "1.25", "1.5"],
          })
          .end()}
        style={{
          width: `max(300px,${w})`,
          textAlign: "center",
          position: "relative",
          textShadow: `2px 2px 0px white , -2px -2px 0px white`,
          display: "flex",
          flexDirection: "column",
          zIndex: "2",
        }}
      >
        {children}
      </div>

      <img
        src={imgurl}
        alt="
      "
        className={fluidCSS()
          .ltX(650, {
            display: "none",
          })
          .lerpX([320, 1050], {
            height: [280, 430],
            bottom: [-20, -40],
          })
          .end()}
        style={{
          zIndex: "1",
          position: "absolute",
          [imgalign]: "0",
        }}
      />
      <img
        src={imgblururl ?? imgurl}
        alt="
      "
        className={fluidCSS()
          .lerpX([320, 1050], {
            height: [280, 430],
            bottom: [-20, -40],
          })
          .end()}
        style={{
          scale: "2",
          transformOrigin: torigin,
          zIndex: "0",
          position: "absolute",
          [imgalign === "left" ? "right" : "left"]: "0",
          opacity: "0.60",
          filter: "blur(1px)",
        }}
      />
    </div>
  );
}
// Para probar los atributos
let contenidoDePrueba = [
  {
    card: () => (
      <SlideDiseño1
        backimgurl=""
        imgurl="https://i.ibb.co/9Y9tJZG/8421e0ac-9060-438e-ac6c-9bf019e34b59-jfif.png"
        imgblururl="https://i.ibb.co/cFDvWP3/ca6fed42-723f-4474-91d2-879af3b00618-jfif.png"
        colores={["white", "pink", "plum"]}
        jc="center"
        w="40%"
      >
        <div
          className="Chewy"
          style={{
            color: "#884B35",
            fontWeight: "Bolder",
            lineHeight: "40px",
            fontSize: "120%",
            textWrap: "balance",
          }}
        >
          Cupcakes irresistibles para cada ocasión
        </div>
      </SlideDiseño1>
    ),
  },
  {
    card: () => (
      <SlideDiseño1
        backimgurl=""
        imgurl="https://i.ibb.co/gr9nBCv/5aa59c13-5f65-4a00-b743-c1cf930db71d-jfif.png"
        imgblururl="https://i.ibb.co/F83kHL1/1964882e-427a-4743-86ce-05fa30dc8e6a-jfif.png"
        colores={["white", "#F0D6B0", "#773A29"]}
        backimgopacity="0.5"
        // jc="center"
        torigin="right center"
        w="50%"
      >
        <div
          className="Chewy"
          style={{
            color: "#F34E57",
            fontWeight: "Bolder",
            lineHeight: "40px",
            fontSize: "140%",
            textWrap: "balance",
          }}
        >
          Sabores irresistibles, momentos inolvidables
        </div>
      </SlideDiseño1>
    ),
  },
  {
    card: () => (
      <SlideDiseño1
        backimgurl="https://i.ibb.co/4YYdrvF/image-without-text-1.png"
        imgurl="https://i.ibb.co/2qCR3n7/2dce81a5-5062-447c-b973-0faf0db072eb-jfif-2.png"
        imgblururl="https://i.ibb.co/TKW12k2/09b7925b-8e92-4a05-bf6e-689b2e2455b5-jfif.png"
        colores={["white", "#F0D6B0", "#773A29"]}
        backimgopacity="0.5"
        jc="center"
        w="25%"
      >
        <div
          className="Chewy"
          style={{
            color: "#F34E57",
            fontWeight: "Bolder",
            lineHeight: "40px",
            fontSize: "140%",
            textWrap: "balance",
          }}
        >
          Horneadas, deliciosas y crujientes
        </div>
      </SlideDiseño1>
    ),
  },

  {
    card: () => (
      <SlideDiseño1
        backimgurl=""
        imgurl="https://i.ibb.co/tpgDCv4/42ac998e-ff26-4864-979e-b3e8d39f75e2-jfif.png"
        colores={["white", "slategray"]}
        backimgopacity="0.5"
        jc="center"
        w="25%"
      >
        <div
          className="Chewy"
          style={{
            color: "steelblue",
            fontWeight: "Bolder",
            lineHeight: "40px",
            fontSize: "110%",
            textWrap: "balance",
          }}
        >
          El toque dulce perfecto para tus celebraciones
        </div>
      </SlideDiseño1>
    ),
  },
  {
    card: () => (
      <SlideDiseño1>
        <div
          className="Chewy"
          style={{
            color: "#468C00",
            textTransform: "uppercase",
            fontWeight: "Bolder",
            lineHeight: "50px",
          }}
        >
          ¡Celebramos tu vida!
        </div>
        <div
          className="Chewy"
          style={{
            marginTop: "-40px",
            fontSize: "120px",
            fontWeight: "Bolder",
          }}
        >
          20%{" "}
          <span
            className={fluidCSS()
              .ltX(850, {
                position: ["relative", "absolute"],
                display: "block",
                marginTop: "-30px",
                marginBottom: "20px",
              })
              .end()}
            style={{
              fontSize: "20%",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            Descuento
          </span>
        </div>
        <div
          className="Chewy"
          style={{
            marginTop: "-40px",
            fontWeight: "Bolder",
            lineHeight: "40px",
            color: "#466400",
          }}
        >
          El día de tu cumpleaños
        </div>
      </SlideDiseño1>
    ),
  },
];

export default Slider;
function Slider({ contenidos = contenidoDePrueba }) {
  const [index, setIndex] = React.useState(0);
  const indexPrevious = index == 0 ? contenidos.length - 1 : index - 1;
  const indexNext = index == contenidos.length - 1 ? 0 : index + 1;
  let xinicial = 0;
  let buscarCambio = false;
  return (
    <div
      onTouchStart={(e) => {
        xinicial = e.touches[0].clientX;
        buscarCambio = true;
      }}
      onTouchMove={(e) => {
        if (!buscarCambio) {
          return;
        }
        const xfinal = e.touches[0].clientX;
        const distancia = xfinal - xinicial;
        if (distancia > 40) {
          buscarCambio = false;
          changeNext();
        } else if (distancia < -40) {
          buscarCambio = false;
          changePrevious();
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          // Implement left arrow key functionality
          changePrevious();
        } else if (e.key === "ArrowRight") {
          // Implement right arrow key functionality
          changeNext();
        }
      }}
      tabIndex={6}
      style={{
        height: "50vh",
        minHeight: "400px",
        position: "relative",
        overflow: "hidden",
        
      }}
    >
      <BackElement />
      <VisibleElement />
      <OutSideElement />
      <BotonCambiar
          change= {changeNext}
          align ="right"
          icon = {<i class="fa-solid fa-angle-right"></i>}
      />
      <BotonCambiar
          change= {changePrevious}
          align ="left"
          icon = {<i class="fa-solid fa-angle-left"></i>}
      />
    </div>
  );
  function VisibleElement() {
    return <div className="visible element">{contenidos[index].card()}</div>;
  }

  function OutSideElement() {
    return (
      <div
        className="outside element"
        style={{
          transform: "translateX(100%)",
        }}
      >
        {contenidos[indexPrevious].card()}
      </div>
    );
  }

  function BackElement() {
    return <div className="back element">{contenidos[indexNext].card()}</div>;
  }

  function changePrevious() {
    const outside = document.querySelector(".outside.element");
    outside.style.transform = "translateX(0)";
    setTimeout(
      () =>
        reset(() => {
          const visible = document.querySelector(".visible.element");
          intercambiarContenido(outside, visible);
          setIndex(indexPrevious);
        }),
      400
    );
  }

  function changeNext() {
    const current = document.querySelector(".visible.element");
    current.style.transform = "translateX(100%)";
    setTimeout(
      () =>
        reset(() => {
          const back = document.querySelector(".back.element");
          intercambiarContenido(current, back);
          setIndex(indexNext);
        }),
      400
    );
  }
  function reset(callback) {
    const visible = document.querySelector(".visible.element");
    visible.style.transition = "none";
    visible.style.transform = "translateX(0)";
    const outside = document.querySelector(".outside.element");
    outside.style.transition = "none";
    outside.style.transform = "translateX(100%)";
    callback();
    setTimeout(() => {
      visible.style.transition = "all 0.4s";
      outside.style.transition = "all 0.4s";
    }, 200);
  }

  function intercambiarContenido(elemento1, elemento2) {
    // Crear clones de los elementos
    const clone1 = elemento1.cloneNode(true);
    const clone2 = elemento2.cloneNode(true);

    // Reemplazar los elementos en el DOM
    elemento1.innerHTML = clone2.innerHTML;
    elemento2.innerHTML = clone1.innerHTML;
  }
}

const PUBLIC_URL = process.env.PUBLIC_URL;

function BotonCambiar(props) {
  const {
    change,
    align ="right",
    icon = ">",
    
    
  } =props

  return <div
    onClick={change}
    className="btn-next"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      [align]:"20px",
      background: "rgba(255,255,255,0.5)",
      cursor: "pointer",
      width: "30px",
      aspectRatio: "1",
      borderRadius: "50%",
    }}
  >
    {icon}
  </div>;
}

function $img(props) {
  const { src = "" } = props;
  const url = (() => {
    if (src.startsWith("http")) {
      return src;
    } else {
      return `${PUBLIC_URL}/${src}`;
    }
  })();
  return <img alt="" {...props} src={url} />;
}
