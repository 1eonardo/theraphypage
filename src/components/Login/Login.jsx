import React from 'react';
import imglogin from '../../Assets/meditation.jpg';
import google from '../../Assets/google.svg';
import './login.css';

const Login = () => {
  return (
    <div className="login-form">
      <h1>Login</h1>
      <div className="container">
        <div className="main">
          <div className="form-img">
            <img src={imglogin} alt="" />
          </div>

          <div className="content">
            <h2>Login</h2>
            <p>Wellcome Back! Please enter your details.</p>
            <form action="#" method="post">
              <input type="text" name="" placeholder="User Name" required autoFocus />
              <input type="password" name="" placeholder="User Password" required autoFocus />
              <button className="btn" type="submit">
                Log in
              </button>

              <div class="or-container">
                <div class="or-line"></div>
                  <p className='or'>or</p>
                <div class="or-line"></div>
              </div>

              <button className="btngoogle" type="submit">
                <img src={google} alt="" className='imggoogle' />
                <a href="/">Sign in With Google</a>
              </button>
            </form>
            <p className="account">
              Don't Have An Account? <a href="/" onClick={(e) => e.preventDefault()}>Sign up for free</a>
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
