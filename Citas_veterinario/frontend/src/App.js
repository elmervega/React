import React, {useEffect, useState} from 'react';
/** Traemos las dependecias de react routing dom */
import {BrowserRouter, Routes, Route} from 'react-router-dom';

/** importamos nuestro cliente de axios */
import clienteAxios from './config/axios';

/** Los componentes para el acceso */
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';


function App() {

  // Creamos el state de la app
  const [citas, guardarCitas]= useState([]);

  // Creamos el useEffect para consumir la API
  useEffect( () =>{
      const consultarAPI = () => {
        clienteAxios.get('/pacientes')
          .then((respuesta) => {
            // colocamos en el state el resultado
            guardarCitas(respuesta.data);
          })
          .catch(error => {
            console.log(error);
          })
      }
      consultarAPI();
  }, [] );


  return (
      <BrowserRouter>
          <Routes>

          <Route
          exact 
            path="/"
            element={<Pacientes citas={ citas }/>}
          />
          <Route 
            exact 
            path="/nueva"
            element={<NuevaCita/>}
          />
          <Route 
            exact 
            path="/cita/:id"
            element={<Cita/>}
          />
            
          </Routes> 
      </BrowserRouter>

  );
}

export default App;
