import React, { Component } from 'react';
import axios from 'axios';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

class App extends Component {

  state = {
    monedas: []
  }

  async componentDidMount(){
    this.obtenerMonedas();
  }

  obtenerMonedas = async() => {
    let  url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=';
    const API_KEY = '8eaf57d5-e9da-450b-b26b-22e0afe50b7b';

    url = url + API_KEY;
    console.log(url);

    await axios.get(url, {
      params: {
        CMC_PRO_API_KEY: API_KEY
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light pb-4 contenido-principal">
            <Formulario />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
