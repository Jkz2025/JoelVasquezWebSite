import React from "react";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CardBlue } from "./Cards/CardBlue.jsx";

function Administracion() {
  return (
    <div>
     
            <Navbar />
            <h1>Administracion</h1>
            <p>
              Permitenos un espacio de tiempo mientras seguimos creciendo por el
              momento puedes contactarte conmigo desde la pagina{" "}
              <a
                href="/JoelPage/PaginaPrincipal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Principal
              </a>
            </p>
     
   
    </div>
  );
}

export default Administracion;
