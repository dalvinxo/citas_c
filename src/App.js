import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Citas from "./components/Citas";

function App() {
  //Inicializamos localstorage
  let initialLocalStorage = JSON.parse(localStorage.getItem("citas"));
  if (!initialLocalStorage) {
    initialLocalStorage = [];
  }

  //state lista de pacientes
  const [listaCitas, setlistaCitas] = useState(initialLocalStorage);

  //useEffect realiza ciertas operaciones cuando el state cambia
  useEffect(() => {

    //let initialLocalStorage = JSON.parse(localStorage.getItem("citas"));

    if (initialLocalStorage) {
      localStorage.setItem("citas", JSON.stringify(listaCitas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }

  }, [listaCitas, initialLocalStorage]);

  const crearCitas = (citas) => {
    setlistaCitas([...listaCitas, citas]);
  };

  //modificar state de citas, eliminar;
  const eliminarCita = (id) => {
    const citasPermanentes = listaCitas.filter((citas) => citas.id !== id);
    setlistaCitas(citasPermanentes);
  };

  //mostrar mensajo
  const titulo = listaCitas.length === 0 ? "No hay citas" : "Administrar Citas";

  return (
    <div>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
            crearCitas={crearCitas} 
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>

            {listaCitas.map((cita) => (
              <Citas 
              key={cita.id} 
              cita={cita} 
              eliminarCita={eliminarCita} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
