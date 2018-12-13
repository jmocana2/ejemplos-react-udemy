import React, { Component } from 'react';
import { primeraMayuscula } from '../helper'
import Resultado from './Resultado';

class Resumen extends Component {
  
  mostrarResumen = () =>{

    const {marca, year, plan} = this.props.datos
    
    if(!marca || !year || !plan) return null

    return (
      <div className="resumen">
        <h2>Resumen de cotización</h2>
        <li>Marca: {primeraMayuscula(marca)} </li>
        <li>Año: {year} </li>
        <li>Plan: {primeraMayuscula(plan)}</li>
      </div>
    );
  }
  
  
  render() {
    return (
     <React.Fragment>
       {this.mostrarResumen()}       
     </React.Fragment>)
  }
}

export default Resumen;