import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import { networkModels } from '../../../model/networksModel';

import styles from './Popup.module.styl';

export default class Popup extends Component {
  static propTypes = {
    network: PropTypes.string.isRequired,
    closePopup: PropTypes.func.isRequired,
    submitPopup: PropTypes.func.isRequired
  };

  componentDidMount() {
    document.addEventListener('click', this.clickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickOutside);
  }

  clickOutside = (e) => {
    if (!this.container.contains(e.target)) {
      const { closePopup } = this.props;
      closePopup();
    }
  };

  render() {
    const { network, submitPopup } = this.props;

    const buttonClassName = cx(styles.button, styles[`${network}_button`]);

    return (
      <div className={styles.overlay}>
        <div className={styles.container} ref={node => (this.container = node)}>
          <div>
            {networkModels[network]}
          </div>
          <div
            className={buttonClassName}
            onClick={submitPopup}
          >
            Поделиться
          </div>
        </div>
      </div>
    );
  }
}
