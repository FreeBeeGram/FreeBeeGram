import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styles from './Login.css';
import * as actions from '../../../actions';

class Login extends Component {

  onSubmit = (formProps) => {
    this.props.signup(formProps);
  };

  render() {
    const { handleSubmit } = this.props;

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
              <form onSubmit={handleSubmit(this.onSubmit)} className={styles.LoginForm}>
                <fieldset>
                  <Field 
                    name="email"
                    type="text"
                    component="input"
                    placeholder="E-mail"
                    autoComplete="none"
                  />
                </fieldset>
                <fieldset>
                  <Field 
                    name="password"
                    type="password"
                    component="input"
                    placeholder="Password"
                    autoComplete="none"
                  />
                </fieldset>
                <div>Forgot?</div>
                <button className={styles.Button}>SIGN IN</button>
                <div className={styles.Footer}>Need an account? I'm a Creator</div>
              </form>
            </div>
            <div className={styles.LoginForms}>
              <div className={styles.FormHeader}>I'm a Brand</div>
                <form className={styles.LoginForm}>
                  <fieldset>
                    <Field 
                      name="email"
                      type="text"
                      component="input"
                      placeholder="E-mail"
                      autoComplete="none"
                    />
                  </fieldset>
                  <fieldset>
                    <Field 
                      name="password"
                      type="password"
                      component="input"
                      placeholder="Password"
                      autoComplete="none"
                    />
                  </fieldset>
                  <div>Forgot?</div>
                  <div>{this.props.errorMessage}</div>
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

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'login' })
)(Login);