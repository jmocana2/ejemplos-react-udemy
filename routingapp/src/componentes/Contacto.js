import React from 'react';
import './contacto.css';

const Contacto = () => {
  return (
    <form>
      <legend>Formulario de contacto</legend>
      <div className="input-field">
        <label>Nombre:</label>
        <input type="text"/>
      </div>
      <div className="input-field">
        <label>Email:</label>
        <input type="email"/>
      </div>
      <div className="input-field">
        <label>Mensaje:</label>
        <textarea cols="30" rows="10"></textarea>
      </div>
      <div className="inpu-field enviar">
        <input type="submit" value="Enviar" />
      </div>
    </form>
  );
};

export default Contacto;