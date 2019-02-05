import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCitas from './componentes/ListaCitas';
import store from './store'


class App extends Component {

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
      <Provider store={store}>
        <div className="container">
          <Header />
          <div className="row">
            <div className="col-md-6">
              <AgregarCita crearCita={this.crearCita} />
            </div>
            <div className="col-md-6">
              <ListaCitas eliminarCita={this.eliminarCita} />
            </div>
          </div>        
        </div>
      </Provider>
    );
  }
}

export default App;
