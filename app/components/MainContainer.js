import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import cx from 'classnames';

import { userSelector } from '../selector/mainSelector';

import { getUser, createUser, updateUser } from '../actions/actions';

import Title from './TitleBlock/Title';
import Share from './ShareBlock/Share';
import Email from './EmailBlock/Email';
import Final from './FinalBlock/Final';

import styles from './MainContainer.module.styl';

const mapStateToProps = state => ({
  user: userSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser,
  createUser,
  updateUser
}, dispatch);

class MainContainer extends Component {
  componentDidMount() {
    const { getUser, createUser } = this.props;
    const userId = localStorage.getItem('aviatest');

    if (!userId) {
      const randomId = Math.floor(Math.random() * 100000) + 1;
      localStorage.setItem('aviatest', randomId);
      createUser(randomId);
    } else {
      getUser(userId);
    }

    let position = 0;
    setInterval(() => {
      position -= 1;
      this.container.style.backgroundPosition = `${+position}px 0px`;
    }, 50);
  }

  updateUserField = (field, value) => {
    const { user, updateUser } = this.props;

    updateUser({
      ...user,
      [field]: value
    });
  };

  render() {
    const { user } = this.props;

    const contentClassName = cx(styles.content, {
      [styles.hided]: !user.id || (user.shared && user.email)
    });

    return (
      <div
        ref={(node) => { this.container = node; }}
        className={styles.container}
      >
        <div className={styles.logo} />
        <div className={contentClassName}>
          <Title />
          <Share
            shared={user.shared}
            onSubmit={this.updateUserField}
          />
          <Email
            email={user.email}
            onSubmit={this.updateUserField}
          />
        </div>
        <Final
          show={user.shared && user.email}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
