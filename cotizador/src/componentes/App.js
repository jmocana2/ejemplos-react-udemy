import React, { Component } from 'react';
import Header from './Header';
import Formulario  from './Formulario';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper';

class App extends Component {

  state = {
    resultado: '',
    datos: {}
  };  

  cotizarSeguro = (datos) => {
    const {marca, year, plan} = datos;

    //Agregar una base de 2000
    let resultado = 2000;

    //Obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(year);
    
    //Por cada año restar el 3% del valor del seguro
    resultado -= ((diferencia * 3) * resultado) / 100
    
    //Americano 15%, Asiático 5% y Europeo 30% del valor
    const incrementoMarca = calcularMarca(marca);
    resultado = resultado * incrementoMarca;   

    //Plan básico aumenta 15%, plan completo 50%
    const incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(resultado * incrementoPlan).toFixed(2);

    this.setState({
      resultado: resultado,
      datos: datos
    })
  }

  render() {
    return (
    <div className="contenedor">  
      <div className="contenido">
        <Header />
        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />
        </div>
      </div>
    </div>  
    );
  }
}

export default App;
