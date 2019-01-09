import React, { Component } from 'react';
import Header from './Header';
import FormularioGasto from './Formulario' 

import '../css/App.css';
import Listado from './Listado';

class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gastos: {},
  }  

  agregarGasto = (gasto) => {
    const gastos = {...this.state.gastos};

    gastos[`gasto${Date.now()}`] = gasto

    this.setState({
      gastos
    })
  }

  render() {
    return (
      <div className="App container">
        <Header title="Gasto Semanal" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <FormularioGasto agregarGasto={this.agregarGasto} />
            </div>
            <div className="one-half column">
              <Listado gastos={this.state.gastos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
