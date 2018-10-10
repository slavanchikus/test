import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUser, createUser } from '../actions/actions';

import Title from './TitleBlock/Title';
import Share from './ShareBlock/Share';

import styles from './MainContainer.module.styl';

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser,
  createUser
}, dispatch);

class MainContainer extends Component {
  componentDidMount() {
    const { getUser, createUser } = this.props;
    const userId = localStorage.getItem('aviatest');

    if (!userId) {
      const randomId = Math.floor(Math.random() * 10000) + 1;
      localStorage.setItem('aviatest', randomId);
      createUser(randomId);
    } else {
      getUser(userId);
    }
  }


  render() {
    return (
      <div className={styles.container}>
        <Title />
        <Share />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
