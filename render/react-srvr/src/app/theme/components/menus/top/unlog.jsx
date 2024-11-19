import "./unlog.css";

import { Button, Paper } from "@mui/material";

import { LogoBanner } from "../../logos";
import fluidCSS from "fluid-css-lng";

const hideIcon = 500;

const claseBoton = fluidCSS({
  code: `600px>x>1000px?{scale:(0.8,0.9,1)}`,
  clss: "to-right-center ws-nowrap",
});

const claseIconoBoton = fluidCSS({ code: `x<${hideIcon}px?{display:(none,)}` });

export default Menu;

function Menu() {
  const { pathname } = window.location;
  const inLogin = pathname.toLowerCase().endsWith("/auth/login");

  return (
    <Paper elevation={0} className="menu-top">
      <LogoBanner
        width={250}
        className={fluidCSS({
          code: `
            400px<-x->1000px?{
            width:[150px, 250px];
            }
          `,
          clss: "bright-hover-1-5",
        })}
      />
      <div>{inLogin ? <ButtonSignup /> : <ButtonLogin />}</div>
    </Paper>
  );
}

function ButtonSignup() {
  return (
    <Button
      variant="contained"
      color="atentionBlue"
      href="/auth/signup"
      className={claseBoton}
      startIcon={
        
        <i className={`fa fa-user-edit ${claseIconoBoton}`}/>
      }
    >
      Registrate
    </Button>
  );
}

function ButtonLogin() {
  return (
    <Button
      variant="contained"
      color="atentionGreen"
      href="/auth/login"
      className={claseBoton}
      startIcon={<i className={`fa fa-user ${claseIconoBoton}`}/>}
    >
      Iniciar sesión
    </Button>
  );
}
