import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import { MenuPopupState } from './MenuPopupState';
import {Link} from "react-router-dom"
import logo from "../assets/logo.jpg"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#ffd54f[200]",
    },
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export function Navbar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <ThemeProvider theme={darkTheme}>
          <AppBar >
              <Toolbar>
                <Link to="/JoelPage/Home">
                  <IconButton edge="start">
                    <img
                      src={logo}
                      width="100"
                      hight="100"
                      marginright="10px"
                      sx={{ flexGrow: 1 }}
                    />
                  </IconButton>
                </Link>
                <Box sx={{ flexGrow: 1, display: { sm: "block" } }}>
                  <h1>J O E L V A S Q U E Z</h1>{" "}
                </Box>
                <Box xs={{ flexGrow: 0 }}>
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    sx={{ flexGrow: 1 }}
                  >
                    Bienvenido
                  </Typography>

                  <MenuPopupState/>
                  <Link to="/">
                    <ExitToAppIcon
                      aria-label="show cart items"
                      color="inherit"
                      sx={{ flexGrow: 0 }}
                    >
                    </ExitToAppIcon>
                  </Link>
                </Box>
              </Toolbar>
              </AppBar>
              </ThemeProvider>
              </HideOnScroll>
      <Toolbar />
      <Container>
        <Typography>
         Bienvenido a mi primer sitio web
          </Typography>
      </Container>
    </React.Fragment>
  );
}


