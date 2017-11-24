import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import Login from './login';

export default class LoginContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        username: '',
        password: '',
        errorMessage: ''
    }
  }

  _handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  _handleLogin(e) {
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
    return(
      <Login handleChange={this._handleChange.bind(this)} handleLogin={this._handleLogin.bind(this)} 
      username={this.state.username} password={this.state.password} 
      errorMessage={this.state.errorMessage} />
    );    
  }
}

