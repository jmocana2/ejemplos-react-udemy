import React, { Component } from 'react';
import uuid from 'uuid';


class AgregarCita extends Component {

  state = {
      error: false
  }  

  nombreMascotaRef = React.createRef();
  nombreDuenoRef = React.createRef();
  fechaRef = React.createRef();
  horaRef = React.createRef();
  sintomaRef = React.createRef();

  crearNuevaCita = (e) => {
    e.preventDefault();

    const nombreMascota = this.nombreMascotaRef.current.value,
          nombreDueno = this.nombreDuenoRef.current.value,
          fecha = this.fechaRef.current.value,
          hora = this.horaRef.current.value,
          sintoma = this.sintomaRef.current.value;

    if(nombreMascota === '' || nombreDueno === '' || fecha === '' || hora === '' || sintoma === '' ){
        this.setState({
            error: true
        })
    }
    else{
        const cita = {
            id: uuid(),
            nombreMascota,
            nombreDueno,
            fecha,
            hora,
            sintoma
        }      
    
        this.props.crearCita(cita)

        this.setState({
            error: false
        })

        e.currentTarget.reset();
    }      

   
  }

  render() {
    const isError = this.state.error; 

    return (
      <div>
        <div className="card mt-5">
          <div className="card-body">
            <h2 className="card-title text-center mb-5">Agregar las citas aquí</h2>
            <form onSubmit={this.crearNuevaCita}>
              <div className="form-group row">
                  <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                  <div className="col-sm-8 col-lg-10">
                      <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                  </div>
              </div>
              <div className="form-group row">
                  <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                  <div className="col-sm-8 col-lg-10">
                      <input ref={this.nombreDuenoRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                  </div>
              </div>

              <div className="form-group row">
                  <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                  <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                      <input ref={this.fechaRef} type="date" className="form-control" />
                  </div>                            

                  <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                  <div className="col-sm-8 col-lg-4">
                      <input ref={this.horaRef} type="time" className="form-control" />
                  </div>
              </div>

              <div className="form-group row">
                  <label className="col-sm-4 col-lg-2 col-form-label">Sintoma</label>
                  <div className="col-sm-8 col-lg-10">
                      <textarea ref={this.sintomaRef}  className="form-control"></textarea>
                  </div>
              </div>
              <div className="form-group row justify-content-end">
                  <div className="col-sm-3">
                      <button type="submit" className="btn btn-success w-100">Agregar</button>
                  </div>
              </div>
          </form>
          {isError && (<div className="alert alert-danger text-center">Todos los campos son obligatorios</div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default AgregarCita;