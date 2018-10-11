import React from 'react';

import cx from 'classnames';

import styles from './Icons.module.styl';

export default ({ disabled, onClick }) => {
  const className = cx(styles.container, {
    [styles.disabled]: disabled
  });

  return (
    <div
      onClick={onClick}
      className={className}
    >
      <div
        data-network="vk"
        className={styles.vk}
      />
      <div
        data-network="fb"
        className={styles.fb}
      />
      <div
        data-network="tw"
        className={styles.tw}
      />
      <div
        data-network="ok"
        className={styles.ok}
      />
    </div>
  );
};
