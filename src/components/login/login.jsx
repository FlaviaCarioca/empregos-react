import React from 'react';
import ReactDOM from 'react-dom';

export default class Login extends React.Component{
  render(){
    return(
      <div>
        <div>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Username" />
            <input className="form-control mr-sm-2" type="password" placeholder="Password" />
            <button className="btn btn-success my-2 my-sm-0" type="submit">Login</button>
            <div className="message" ></div>
          </form>
        </div>
        <span className="message my-2 my-sm-0"></span>
      </div>
    )
  }
}