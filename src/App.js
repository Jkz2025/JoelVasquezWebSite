import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "@mui/system";
import { PaginaPrincipal } from "./components/PaginaPrincipal.jsx";
import Portafolio from "./components/Portafolio.jsx";
import Usuarios from "./components/Usuarios.jsx";
import InformacionGeneral from "./components/InformacionGeneral.jsx";
import Administracion from "./components/Administracion.jsx";
//prueba
const App = () => {
  return (
    <Container>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* Para que por defecto al ingresar a la pagina cargue Login */}
            <Route index element={<Login />} />
            <Route path="/Login" element={<Login />} />
          </Routes>

          <Routes>
            <Route
              path="/JoelPage/PaginaPrincipal/"
              element={<PaginaPrincipal />}
            />
          </Routes>

          <Routes>
            <Route path="/JoelPage/Portafolio/" element={<Portafolio />} />
          </Routes>

          <Routes>
            <Route path="/JoelPage/Users/" element={<Usuarios />} />
          </Routes>

          <Routes>
            <Route
              path="/JoelPage/Administracion/"
              element={<Administracion />}
            />
          </Routes>

          <Routes>
            <Route
              path="/JoelPage/InformacionGeneral/"
              element={<InformacionGeneral />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </Container>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { InfoGeneral } from "./pages/Informaciongeneral";
// import { Index } from "./pages/Index";
// import { Homeusers } from "./pages/Homeusers";
// import { Portafolio } from "./pages/Portafolio";
// import { Administracion } from "./pages/Administracion";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
// import { useState } from "react";
// import Login from "./pages/InicioSesion";

// function App() {
//   const [user, setUser] = useState(null);

//   const login = () => {
//     //request done
//     setUser({
//       id: 1,
//       name: "Joel",
//     });
//   };

//   const logout = () => setUser(null);

//   return (
//     <BrowserRouter>
//       <ColorTabs />
//       {user ? (
//         <button onClick={logout}>Logout</button>
//       ) : (
//         <button onClick={login}>Login</button>
//       )}
//       <Login />
//       <Routes>
//         <Route path="/" element={<Index />}></Route>
//         <Route path="/index" element={<Index />}></Route>
//         <Route path="/informaciongeneral" element={<InfoGeneral />}></Route>
//         <Route path="/homeusers" element={<Homeusers />}></Route>
//         <Route path="/administracion" element={<Administracion />}></Route>
//         <Route path="/portafolio" element={<Portafolio />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function ColorTabs() {
//   const [value, setValue] = React.useState("one");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <Box sx={{ width: "100%" }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         textColor="secondary"
//         indicatorColor="secondary"
//         aria-label="secondary tabs example"
//       >
//         <Link to="/index">
//           <Tab label="Index" />
//         </Link>

//         <Link to="/informaciongeneral">
//           <Tab label="InfoGeneral" />
//         </Link>

//         <Link to="/homeusers">
//           <Tab label="Home" />
//         </Link>

//         <Link to="/administracion">
//           <Tab label="Administracion" />
//         </Link>

//         <Link to="/portafolio">
//           <Tab label="Portafolio" />
//         </Link>
//       </Tabs>
//     </Box>
//   );
// }

// export default App;
