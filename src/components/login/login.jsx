import React from 'react';
import fetch from 'isomorphic-fetch';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        username: '',
        password: ''
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


  handleLogin(e){
    e.preventDefault();
    const url = 'http://localhost:9200/v1/auth';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ auth: this.state })
    }).then(function(res){
      return res.json();
    }).then(function(res){
      console.log(res);
    }).catch(function(err){
      console.log('error: ' + err);
    });
  }

  isFormValid(){
    return this.state.username.length > 0 && this.state.password.length > 0;
  }
  
  render(){
    return(
      <div>
        <div>
          <form className="form-inline my-2 my-lg-0" onSubmit={this.handleLogin}>
            <input className="form-control mr-sm-2" type="text" placeholder="Username" id="username"
                   value= {this.state.username} onChange={this.handleChange} />
            <input className="form-control mr-sm-2" type="password" placeholder="Password" id="password"
                   value={this.state.password} onChange={this.handleChange} />
            <button className="btn btn-success my-2 my-sm-0" type="submit" disabled={!this.isFormValid}>Login</button>
            <div className="message" ></div>
          </form>
        </div>
        <span className="message my-2 my-sm-0"></span>
      </div>
    )
  }
}