import React from 'react';
import PropTypes from 'prop-types';
import './login.css';

const Login = (props) => {
  let isFormValid = props.username.length > 0 && props.password.length > 0;
  return (
    <div>
      <form className="form-inline my-2 my-lg-0" onSubmit={props.handleLogin}>
        <input className="form-control mr-sm-2" type="text" placeholder="Username" id="username"
          value={props.username} onChange={props.handleChange} />
        <input className="form-control mr-sm-2" type="password" placeholder="Password" id="password"
          value={props.password} onChange={props.handleChange} />
        <button className="btn btn-success my-2 my-sm-0" type="submit" disabled={!isFormValid}>Login</button>
        <div className="message">{props.errorMessage}</div>
      </form>
    </div>
  );
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  errorMessage: PropTypes.string
}

export default Login;