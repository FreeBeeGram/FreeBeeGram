import React, { Component } from 'react';
import styles from './Apply.css';

class Apply extends Component {
  render() {
    return(
      <div className={styles.Apply}>
        <div className={styles.Header}>FreeBeeGram</div>
        <div className={styles.FormContainer}>
          <div className={styles.FormHeader}>
            <div className={styles.FormHeaderText}>Create an account</div>
            <div className={styles.FormHeaderDesc}>Please enter your e-mail address and password, and pick your category - i.e. the them you're most interested in:</div>
          </div>
          <form className={styles.Form}>
            <label className={styles.FormLabels}>E-Mail</label>
            <input className={styles.FormInput} placeholder="Enter e-mail address"/>
            <label className={styles.FormLabels}>Password</label>
            <input className={styles.FormInput} />
            <label className={styles.FormLabels}>Gender</label>
            <input className={styles.FormInput} />
            <label className={styles.FormLabels}>Birth Date</label>
            <div className={styles.FormSelectContainer}>
              <select className={styles.FormSelect} name="month">
                <option selected disabled>Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
              <select className={styles.FormSelect} name="day">
                <option selected disabled>Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select className={styles.FormSelect} name="year">
                <option selected disabled>Year</option>
                <option value="2018">2018</option>
              </select>
            </div>
            <div className={styles.TermsSection}>
              <label>
                <input type="checkbox"/>
                I have read and agreed to the Privacy Terms.
              </label>
              <label>
                <input type="checkbox"/>
                I have read and agreed to the Specific Conditions.
              </label>
            </div>
            <button className={styles.FormButton}>CONTINUE</button>
          </form>
          <hr/>
          <div className={styles.FormFooter}>
            <div>Already have an account ?</div>
            <button className={styles.SignInButton}>Sign In</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Apply;