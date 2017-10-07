import React from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component{
  render(){
    return(
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Encontre o emprego perfeito</h1>
            <p>Salarios de R$1,000 ate R$20,000 por mes.</p>
            <p><a className="btn btn-primary btn-lg"  role="button">Cadastre-se &raquo;</a></p>
          </div>
        </div >

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Cadastre-se</h3>
              <p>blah blah</p>
            </div>
            <div className="col-md-4">
              <h3>Encontre companhias interessantes</h3>
              <p>blah</p>
            </div>
            <div className="col-md-4">
              <h3>Get hired</h3>
              <p>blah again</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}