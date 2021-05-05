import React, { Fragment } from "react";
import propTypes from 'prop-types';


const Citas = ({cita, eliminarCita}) => {


  return (
    <Fragment>
      <div className="cita">
        <p>
          Mascota: <span>{cita.mascota}</span>
        </p>
        <p>
          Propietario: <span>{cita.propietario}</span>
        </p>
        <p>
          Fecha: <span>{cita.fecha}</span>
        </p>
        <p>
          Hora: <span>{cita.hora}</span>
        </p>
        <p>
          Sintomas: <span>{cita.sintomas}</span>
        </p>

       <button
            onClick={() => eliminarCita(cita.id)}
          className="button eliminar u-full-width"
        >
          Eliminar &times;
        </button> 

      </div>
    </Fragment>
  );
};

Citas.propTypes = {
    cita: propTypes.object.isRequired, 
    eliminarCita: propTypes.func.isRequired
}

export default Citas;
