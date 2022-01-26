import React, {useEffect, useState} from 'react';
/** Traemos las dependecias de react routing dom */
import {BrowserRouter, Switch, Route} from 'react-router-dom';

/** importamos nuestro cliente de axios */
import clienteAxios from './config/axios';

/** Los componentes para el acceso */
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';


function App() {

  // Creamos el state de la app
  const [citas, guardarCitas]= useState([]);
  const [consultar, guardarConsultar] = useState(true);

  // Creamos el useEffect para consumir la API
  useEffect( () =>{
      if(consultar) {
        const consultarAPI = () => {
          clienteAxios.get('/pacientes')
            .then((respuesta) => {
              // colocamos en el state el resultado
              guardarCitas(respuesta.data);

              // deshabilitar la consulta
              guardarConsultar(false);
            })
            .catch(error => {
              console.log(error);
            })
        }
        consultarAPI();
      }
  }, [consultar] );


  return (
      <BrowserRouter>
          <Switch>

          <Route
            exact 
            path="/"
            component={() => <Pacientes citas={citas}/>}
          />
          <Route 
            exact 
            path="/nueva"
            component={() => <NuevaCita guardarConsultar={guardarConsultar}/>}
          />
          <Route 
              exact 
              path="/cita/:id"
              render={(props) => {
                  
                  //Creamos la variable para citas
                  const cita = citas.filter(cita => cita._id === props.match.params.id)

                  return (
                      <Cita 
                      cita = {cita[0]}
                      />
                    )
              }}
          />
            
          </Switch> 
      </BrowserRouter>

  );
}

export default App;
