import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Link } from "react-router-dom";
import DialpadIcon from "@mui/icons-material/Dialpad";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute.jsx/ProtectedRoute";
import Login from "./Login";

export function MenuPopupState() {
  return (
    <PopupState
      component="div"
      sx={{ flexGrow: 1 }}
      variant="popover"
      popupId="demo-popup-menu"
    >
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            <DialpadIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={popupState.close}
              component={Link}
              to="/JoelPage/PaginaPrincipal"
            >
              Pagina principal
            </MenuItem>

            <MenuItem
              onClick={popupState.close}
              component={Link}
              to="/JoelPage/Portafolio"
            >
              Portafolio
            </MenuItem>

            <MenuItem
              onClick={popupState.close}
              component={Link}
              to="/JoelPage/Users/"
            >
              Usuarios
            </MenuItem>
            <MenuItem
              onClick={popupState.close}
              component={Link}
              to="/JoelPage/Administracion/"
            >
              Administracion
            </MenuItem>
            <MenuItem
              onClick={popupState.close}
              component={Link}
              to="/JoelPage/InformacionGeneral/"
            >
              Informacion General
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
