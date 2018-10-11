import React from 'react';

import cx from 'classnames';

import styles from './Final.module.styl';

export default ({ show }) => {
  const className = cx(styles.container, {
    [styles.hided]: !show
  });

  return (
    <div className={className}>
      <div className={styles.text}>
        <div>
          Выборы
          <div className={styles.line} />
        </div>
        <div>Путешествие</div>
        <div>БЛИЗКО!</div>
      </div>
    </div>
  );
};
