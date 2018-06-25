import React, { Component } from 'react';
import styles from './Login.css';

class Login extends Component {
  render() {
    return(
      <div className={styles.LoginContainer}>
        <div className={styles.Header}>
          <div className={styles.HeaderLogo}>FreeBeeGram</div>
        </div>
        <div className={styles.BodyContainer}>
          <div className={styles.BodyMessage}>Welcome Back</div>
          <div className={styles.FormsContainer}>
            <div className={styles.LoginForms}>
              <div className={styles.FormHeader}>I'm a Creator</div>
              <form className={styles.LoginForm}>
                <input placeholder="E-mail"/>
                <input placeholder="Password"/>
                <div>Forgot?</div>
                <button className={styles.Button}>SIGN IN</button>
                <div className={styles.Footer}>Need an account? I'm a Creator</div>
              </form>
            </div>
            <div className={styles.LoginForms}>
              <div className={styles.FormHeader}>I'm a Brand</div>
                <form className={styles.LoginForm}>
                  <input placeholder="E-mail"/>
                  <input placeholder="Password"/>
                  <div>Forgot?</div>
                  <button className={styles.Button}>SIGN IN</button>
                  <div className={styles.Footer}>Need an account? I'm a Brand</div>
                </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;