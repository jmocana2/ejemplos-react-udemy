import React from 'react';

const Formulario = () => {
  return (
    <form>
      <div className="form-group">
        <label>moneda</label>
        <select className="form-control">
          <option value="" disabled defaultValue>Elige tu moneda</option>
          <option value="USD">Dolar Estadounidense</option>
          <option value="MXN">Peso Mexicano</option>
          <option value="GBP">Libras</option>
          <option value="EUR">Euros</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="cripto">criptomonedas</label>
        <select name="cripto" id="cripto" className="form-control">
          
        </select>
      </div>
      <div className="form-group"><input className="btn btn-primary" type="submit" value="cotizar" /></div>
    </form>
  );
};

export default Formulario;