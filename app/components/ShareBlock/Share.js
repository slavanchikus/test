import React, { Component } from 'react';

import styles from './Share.module.styl';

export default class Share extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.number}>1.</div>
        <div className={styles.text}>
          Поделись с друзьями:
        </div>
        <div className={styles.icons}>
          <div
            className={styles.vk}
          />
          <div
            className={styles.fb}
          />
          <div
            className={styles.tw}
          />
          <div
            className={styles.ok}
          />
        </div>
      </div>
    );
  }
}
