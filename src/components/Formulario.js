import React, {Fragment, useState} from "react";
import {v4 as uuid} from "uuid";
import propTypes from 'prop-types';

const Formulario = ({crearCitas}) => {

  //nuestro state de citas
  const [citas, setCitas] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  //state error
  const [error, setError] = useState(false);

  //funcion que va a ejecutarse cada vez que el usuario introduzca cambios en el formulario
  const updateState = (e) => {
    setCitas({
      ...citas,
      [e.target.name]: e.target.value,
    });
  };

  //extrayendo los valores
  const { mascota, propietario, fecha, hora, sintomas } = citas;

  //cuando el usuario presione agregar citas
  const submitCitas = (e) => {
    e.preventDefault();

    //validar
    for (let input in citas) {

      if (citas[input].trim() === '') {
        setError(true);
        return;
      }

    }

    //eliminando mensaje de advertencia
    setError(false)

    //asignar ID
    citas.id = uuid();

    //crear la cita
    crearCitas(citas);


    //reiniciar el form
    setCitas({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

  };

  return (
    <Fragment>
      <h2>Formulario de Pacientes</h2>

      <form onSubmit={submitCitas}>
        {error ? (
          <p className="alerta-error">Todos los campos son obligatorios</p>
        ) : null}

        <label>Nombre de la mascota</label>
        
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="nombre de la mascota"
          onChange={updateState}
          value={mascota}
        />

        <label>Nombre del propietario</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="propietario de la mascota"
          onChange={updateState}
          value={propietario}
        />

        <label>fecha de la cita</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={updateState}
          value={fecha}
        />

        <label>hora de la cita</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={updateState}
          value={hora}
        />
        <label>Detallar sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={updateState}
          placeholder="Escribir sintomas"
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar citas
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
    crearCitas: propTypes.func.isRequired
}


export default Formulario;
