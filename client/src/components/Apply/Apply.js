import React, { Component } from 'react';
import styles from './Apply.css';

class Apply extends Component {
  render() {
    return(
      <div className={styles.Apply}>
        <div className={styles.Header}>FreeBeeGram</div>
        <div className={styles.Form}>
          <form>
            <label>E-Mail</label>
            <input/>
            <input/>
          </form>
        </div>
      </div>
    )
  }
}

export default Apply;