import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCitas from './componentes/ListaCitas';

class App extends Component {

  state = {
    citas: []
  }

  crearCita = (nuevaCita) => {
    
    const citas = [...this.state.citas, nuevaCita]
    this.setState({citas})
    
    console.log(citas)
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita} />
          </div>
          <div className="col-md-6">
            <ListaCitas citas={this.state.citas} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
