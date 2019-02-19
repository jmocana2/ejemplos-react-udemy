import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCitas from './componentes/ListaCitas';
import store from './store'


class App extends Component {
  render() { 
    return (
      <Provider store={store}>
        <div className="container">
          <Header />
          <div className="row">
            <div className="col-md-6">
              <AgregarCita />
            </div>
            <div className="col-md-6">
              <ListaCitas />
            </div>
          </div>        
        </div>
      </Provider>
    );
  }
}

export default App;
