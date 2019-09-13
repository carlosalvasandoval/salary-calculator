import React from 'react';
import '../sass/App.scss';
const UIT = 4200;
const DEDUCCION = 7 * UIT;
class App extends React.Component {

  constructor(args) {
    super(args);
    this.state = {
      salario_bruto_anual: '',
      ingreso_neto:''
    }
  }
  calcularIngresoNeto = () => {
    console.log(getRemuneracionNetaAnual(this.state.salario_bruto_anual));
  };

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Calculadora salarial</h1>
        <div className="form-group">
          <label>Ingreso bruto Anual</label>
          <input
            type="numeric"
            className="form-control"
            placeholder="Salario bruto anual"
            value={this.state.salario_bruto_anual}
            name='salario_bruto_anual'
            onChange={this.onChange.bind(this)}
          />
          <small className="form-text text-muted">Tu salario mensual más gratificaciones bonos provenientes de 4ta y 5ta categoría</small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" >
          Calcular</button>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}
const getRemuneracionNetaAnual = (salario) => salario - DEDUCCION;


export default App;
