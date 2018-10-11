import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import Button from './Button/Button';
import CheckBox from '../_Shared/CheckBox/CheckBox';

import styles from './Email.module.styl';

export default class Email extends Component {
  static propTypes = {
    email: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    email: ''
  };

  state = {
    value: this.props.email,
    disableButton: true
  };

  componentWillReceiveProps(nextProps) {
    const { email } = this.props;

    if (nextProps.email !== email) {
      this.setState({ value: nextProps.email });
    }
  }

  changeInput = (e) => {
    const emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const disableButton = !emailReg.test(e.target.value);

    this.setState({ value: e.target.value, disableButton });
  };

  clickButton = () => {
    const { value, disableButton } = this.state;
    const { onSubmit } = this.props;

    if (!disableButton) {
      onSubmit('email', value);
    }
  };

  render() {
    const { value, disableButton } = this.state;
    const { email } = this.props;

    const className = cx(styles.container, {
      [styles.disabled]: email
    });

    return (
      <div className={className}>
        <div className={styles.number}>
          {email ? <CheckBox /> : '2.'}
        </div>
        <div className={styles.text}>
          Оставь почту:
        </div>
        <input
          type="text"
          value={value}
          onChange={this.changeInput}
        />
        {!email
        && <Button
          disabled={disableButton}
          onClick={this.clickButton}
        />}
      </div>
    );
  }
}
