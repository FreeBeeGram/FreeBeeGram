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
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;