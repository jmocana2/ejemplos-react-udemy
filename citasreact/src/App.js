import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCitas from './componentes/ListaCitas';

class App extends Component {

  state = {
    citas: []
  }

  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate(){
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }

  crearCita = (nuevaCita) => {
   
    const citas = [...this.state.citas, nuevaCita]
    this.setState({citas})

  }

  eliminarCita = (id) => {
    const copiaCitas = [...this.state.citas]
    const citas = copiaCitas.filter(cita => cita.id !== id);
    this.setState({
      citas
    })
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
            <ListaCitas citas={this.state.citas} eliminarCita={this.eliminarCita} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
