import React, { Component } from "react";
import { useState } from "react";
import { PaginaPrincipal } from "./PaginaPrincipal";
import { Link } from "react-router-dom";
import Home from "./Home";

export default function Login() {
  const [miLogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pass, setPass] = useState("");

  function iniciarSesion(e) {
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpass = document.getElementById("txtpass").value;

    if (txtusu.length === 0 || txtpass.length === 0) {
      alert("Por favor completar datos faltantes.");
    } else {
      if (usu === "joel@welivefromart" && pass === "joel123") {
        setMiLogin("true");

        document.getElementById("form_login").style.display = "none";
      } else {
        setMiLogin("false");
        alert("Error de usuario y/o Contraseña");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
      }
    }
  }

  return (
    <div>
    <form id="form_login">
      <h3>Login </h3>
      <div className="mb-3">
        <label>Nombre Usuario</label>
        <input
          id="txtusu"
          style={{ textAlign: "center" }}
          onChange={(e) => setUsu(e.target.value)}
          required
          type="email"
          className="form-control"
          placeholder="User"
        />
      </div>
      <div className="mb-3">
        <label>Contraseña</label>
        <input
          id="txtpass"
          style={{ textAlign: "center" }}
          onChange={(e) => setPass(e.target.value)}
          required
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Recordarme
          </label>
        </div>
      </div>
      <div className="d-grid">
        <Link to="/JoelPage/PaginaPrincipal">
        <button
          value="Iniciar Sesion"
          onClick={iniciarSesion}
          type="submit"
          className="btn btn-primary"
        >
          Iniciar Sesion
        </button>
        </Link>
      </div>
      <p className="forgot-password text-right">
        <a href="#">¿Olvidaste tu contraseña?</a>
      </p>
    </form>
    {miLogin === "true" && <Home/>}
    </div>
  );
}

// //para realizar la validacion del login necesitamos los siguientes
// //imports
// //EL HOOK USE STATE
// //PARA CREAR UNA VARIABLE DE ESTADO QUE NOS PERMITA
// //CONTROLAR EL ESTADO DE LA SESION SI ES QUE SE ENCUENTRA
// //INICIADA O NO
// import { useState } from "react";
// // TAMBIEN TENEMOS QUE IMPORTAR EL COMPONENTE MENU
// import {Navbar} from "./Navbar";
// import { PaginaPrincipal } from "./PaginaPrincipal";
// import "../Login.css";
// import { ErrorMessage, Formik, Form, Field } from "formik";
// import { Link } from "react-router-dom";
// import { Container } from "@mui/system";
// import { Table, TableContainer, TableBody, TableRow } from "@mui/material";
// import { Navigate } from "react-router-dom";

// export default function Login() {
//   //VAMOS A PROGRAMAR LA LOGICA DE VALIDACION
//   //ANTES DEL RETURN

//   //1. DEFINIR UNA VARIABLE DE ESTADO
//   //QUE ME AYUDE A CONTROLAR NUESTRO LOGIN
//   //Y VAMOS A IR CAMBIANDO EL VALOR CON EL SET LOGIN
//   const [miLogin, setMiLogin] = useState("false");
//   //inicialmente va a estar en false
//   //2.Ahora vamos a definir 2 variables de estado
//   //para capturar el nombre del usuario y la clave
//   const [usu, setUsu] = useState(""); //inicialmente va a estar vacia
//   const [pass, setPass] = useState("");

//   //recuerde que la variable de estado va a ir cambiando su valor
//   // a partir de lo que tenga escrito el campo de usuario y clave
//   //pero para que aquello tenga dicho comportamiento
//   //debes ser capaz de vincular el useState del set usu y el set pass
//   //al control o a cada uno de los 2 controles en este caso...
//   //baja y busca el nombre del input de usuario
//   //vamos a asociarlo ¿como se asocia?
//   // agrega en el input onChange es decir cuando se detecte cambio de contenido en el campo de texto lo que vamos a hacer es capturar
//   //eso que se escribio para ello indico el evento (e) seguido por => setUsu vamos a capturar el texto escrito (e.target.value)

//   //3. luego de tener los datos capturados tienes que evaluar para ello vamos a crear una funcion que nos va a validar la informacion ingresada , la cual se va a ejecutar cuando el usuario presione el boton de login, a la funcion iniciar Sesion le vamos a pasar el evento de la pulsasion del boton de login y asi la funcion se pueda llamar mas facilmente

//   // entonces cuando se presione el boton vamos a evitar que la pagina se recargue e.preventDefault();
//   function iniciarSesion(e) {
//     e.preventDefault();

//     //luego de eso vamos a capturar el nombre de usuario y la contraseña para eso vamos a crear una variable llamada txtusu la cual me va a capturar el contenido de la caja document.getElementById("") y en el entreparentesis colocamos el id del input a capturar
//     var txtusu = document.getElementById("txtusu").value;
//     var txtpass = document.getElementById("txtpass").value;
//     //4. luego de capturar la informacion vamos a aplicar las condiciones que debe pasar la informacion
//     //condicion de caracteres : si la cantidad de caracteres resulta ser === 0 entonces vamos a arrojar una alerta
//     if (txtusu.length === 0 || txtpass.length === 0) {
//       alert("Por favor completar datos faltantes.");
//     } else {
//       //pero en caso de que si haya contenido escrito en los campos significa que las variables de estado ya tienen datos guardados, asi que dentro de este elfe vamos a colocar un if para evaluar el contenido de la variable de estado llamada usu, si el contenido de esa variable es joel y ademas el contenido de password es joel123 estaria correcto por lo tanto vamos a cambiar el valor de la variable de estado del login, recuerden que inicialmente comienza como false porque al principio la sesion no esta activa pero si el usuario y clave estan correctos vamos a cambiarle el estado al nuevo valor true
//       if (usu === "joel" && pass === "joel123") {
//         setMiLogin("true");
//         // y lo siguiente que vamos a hacer es ocultar la ventana actual, vamos a ocultar el formulario, si ya la sesion esta activa no necesito que el formulario se siga mostrando, vamos a hacer el proceso con el id del formulario en general
//         document.getElementById("form_login").style.display = "none";

//         //de esa forma el formulario de inicio de sesion se ocultaria
//       } else {
//         //en caso contrario si la sesion no se logra iniciar entonces el valor de la variable de estado de login va a seguir siendo falsa
//         setMiLogin("false");
//         alert("Error de usuario y/o Contraseña");
//         //luego de eso limpiamos los campos de texto del login para que queden limpios
//         document.getElementById("txtusu").value = "";
//         document.getElementById("txtpas").value = "";
//         document.getElementById("txtusu").focus();
//         // y dejamos el focus para seguir escribiendo
//       }
//     }
//   }
//   return (
//     <div >
//       <div className="cardlogin">
//         <img src="https://www.teahub.io/photos/full/11-111196_gif-wallpaper.gif" id="image"/>
//       </div>

//         <form id="form_login">
//           <div>
//             <label htmlFor="txtusu">
//               <strong>Username</strong>
//             </label>
//             <input
//               type="text"
//               id="txtusu"
//               style={{ textAlign: "center" }}
//               className="form-control"
//               onChange={(e) => setUsu(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="txtpass">
//               <strong>Password</strong>
//             </label>
//             <input
//               type="password"
//               id="txtpass"
//               style={{ textAlign: "center" }}
//               className="form-control"
//               onChange={(e) => setPass(e.target.value)}
//               required
//             />
//           </div>
//           <br />
//           <input
//             type="submit"
//             className="buttonlogin"
//             value="Iniciar Sesion"
//             onClick={iniciarSesion}
//           />
//         </form>

//         {/* Si la variable de estado de miLogin resulta que al final es un true entonces voy a llamar a menu */}

//         {miLogin === "true" && <PaginaPrincipal/>}

//     </div>

//   );
// }
