import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';

class App extends Component {

  crearCita = () => {
    console.log('desde app')
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
