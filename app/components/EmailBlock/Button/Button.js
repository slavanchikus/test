import React from 'react';

import cx from 'classnames';

import styles from './Button.module.styl';

export default ({ disabled, onClick }) => {
  const className = cx(styles.container, {
    [styles.disabled]: disabled
  });

  return (
    <div
      className={className}
      onClick={onClick}
    >
      Отправить
    </div>
  );
};
