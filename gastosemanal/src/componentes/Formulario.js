import React, { Component } from 'react';

class FormularioGasto extends Component {

  nombreGasto = React.createRef();
  cantidadGasto = React.createRef();

  crearGasto = (e) => {
    e.preventDefault();
    
    console.log(`nombre: ${this.nombreGasto.current.value}, cantidad: ${this.cantidadGasto.current.value}` )
  }
  
  render() {
     return (
      <form onSubmit={this.crearGasto}>
        <h2>Agrega tus gastos aqui</h2>
        <div className="campo">
            <label>Nombre Gasto</label>
            <input ref={this.nombreGasto} className="u-full-width" type="text" placeholder="Ej. Transporte" />
        </div>

        <div className="campo">
            <label>Cantidad</label>
            <input ref={this.cantidadGasto} className="u-full-width" type="text" placeholder="Ej. 300" />
        </div>

        <input className="button-primary u-full-width" type="submit" value="Agregar" />
      </form>
    );
  }
}

export default FormularioGasto;