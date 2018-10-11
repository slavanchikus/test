import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import Icons from './Icons/Icons';
import Popup from './Popup/Popup';
import CheckBox from '../_Shared/CheckBox/CheckBox';

import styles from './Share.module.styl';

export default class Share extends Component {
  static propTypes = {
    shared: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    shared: false
  };

  state = {
    network: '',
    showPopup: false
  };

  componentWillReceiveProps(nextProps) {
    const { shared } = this.props;

    if (nextProps.shared !== shared) {
      this.setState({ showPopup: false });
    }
  }

  clickLogo = (e) => {
    const { shared } = this.props;
    const network = e.target.getAttribute('data-network');

    if (!shared && network) {
      this.setState({ network, showPopup: true });
    }
  };

  submitPopup = () => {
    const { onSubmit } = this.props;

    onSubmit('shared', true);
  };

  render() {
    const { network, showPopup } = this.state;
    const { shared } = this.props;

    const className = cx(styles.container, {
      [styles.disabled]: shared
    });

    return (
      <div className={className}>
        <div className={styles.number}>
          {shared ? <CheckBox /> : '1.'}
        </div>
        <div
          className={styles.text}
        >
          Поделись с друзьями:
        </div>
        <Icons
          disabled={shared}
          onClick={this.clickLogo}
        />
        {showPopup
        && <Popup
          network={network}
          closePopup={() => this.setState({ showPopup: !showPopup })}
          submitPopup={this.submitPopup}
        />}
      </div>
    );
  }
}
