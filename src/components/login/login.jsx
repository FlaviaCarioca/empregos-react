import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import './login.css';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        username: '',
        password: '',
        errorMessage: ''
    }

    //binding
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();
    let full_url = BASE_URL + 'v1/auth/'; 
    axios.post(full_url, { auth: this.state }, { headers: {} })
    .then(res => {
      sessionStorage.setItem('token', res.data.auth_token);
      sessionStorage.setItem('userType', res.data.user_type);
      sessionStorage.setItem('username', this.state.username);
    })
    .catch(err => {
      const errorMessage = err.response.data.error;
      this.setState({ errorMessage: errorMessage });
    });
  }

  render(){
    let isFormValid = this.state.username.length > 0 && this.state.password.length > 0;

    return(
      <div>
        <form className="form-inline my-2 my-lg-0" onSubmit={this.handleLogin}>
          <input className="form-control mr-sm-2" type="text" placeholder="Username" id="username"
                  value= {this.state.username} onChange={this.handleChange} />
          <input className="form-control mr-sm-2" type="password" placeholder="Password" id="password"
                  value={this.state.password} onChange={this.handleChange} />
          <button className="btn btn-success my-2 my-sm-0" type="submit" disabled={!isFormValid}>Login</button>
          <div className="message">{this.state.errorMessage}</div>
        </form>
      </div>
    )
  }
}