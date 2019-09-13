import React from 'react';
import '../sass/App.scss';
import { switchCase } from '@babel/types';
const UIT = 4200;
const DEDUCCION = 7 * UIT;
class App extends React.Component {

  constructor(args) {
    super(args);
    this.state = {
      salario_bruto_anual: '',
      ingreso_neto: ''
    }
  }
  calcularTasaImpuesto = (remuneracionNetaAnual) => {

    switch (true) {
      case remuneracionNetaAnual <= 5 * UIT:
        return 0.05;
      case remuneracionNetaAnual > 5 * UIT && remuneracionNetaAnual <= 20 * UIT:
        return 0.14;
      case remuneracionNetaAnual > 20 * UIT && remuneracionNetaAnual <= 35 * UIT:
        return 0.17;
      case remuneracionNetaAnual > 35 * UIT && remuneracionNetaAnual <= 45 * UIT:
        return 0.20;
      case remuneracionNetaAnual > 45:
        return 0.30;
      default:
        return 0;
    }

  }
  calcularIngresoNeto = () => {
    let remuneracionNetaAnual = getRemuneracionNetaAnual(this.state.salario_bruto_anual);
    let impuestoAnualProyectado = remuneracionNetaAnual * this.calcularTasaImpuesto(remuneracionNetaAnual);
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
            type="number" step="any"
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
        <button type="submit" className="btn btn-primary" onClick={this.calcularIngresoNeto} > Calcular</button>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}
const getRemuneracionNetaAnual = (salarioBrutoAnual) => salarioBrutoAnual - DEDUCCION;


export default App;
