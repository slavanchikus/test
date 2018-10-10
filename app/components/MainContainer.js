import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './MainContainer.module.styl';

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch);

class MainContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        Хелло зере
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
