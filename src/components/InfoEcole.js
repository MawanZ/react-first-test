import React, { Component } from 'react';
import styles from './InfoEcole.module.css';

export default class InfoEcole extends Component {
  render() {
    return (
      <div>
            <h5 className={styles.styletitles5}>Cégep La Pocatière</h5>
            <p>104, 4e avenue</p>
            <p>La Pocatière</p>
      </div>
    )
  }
}
