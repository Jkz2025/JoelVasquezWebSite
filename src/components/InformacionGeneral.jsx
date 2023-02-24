import React from "react";
import { Navbar } from "./Navbar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { CardBlue } from "./Cards/CardBlue.jsx";
import { CardRed } from "./Cards/CardRed";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { CardGreen } from "./Cards/CardGreen";
import { CardOrange } from "./Cards/CardOrange";

function InformacionGeneral() {
  return (
    <div>
      <Navbar />
      <h6>Pagina en proceso...</h6>

      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <h1 className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Aplicaciones que he construido
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Hasta el momento esta...
            </p>

            <Box>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <CardBlue />
                </Grid>
                <Grid item xs={3}>
                  <CardRed />
                </Grid>
                <Grid item xs={3}>
                  <CardGreen />
                </Grid>
                <Grid item xs={3}>
                  <CardOrange />
                </Grid>
              </Grid>
            </Box>
          </div>
          {/* <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div> */}
        </div>
      </section>
    </div>
  );
}

export default InformacionGeneral;
