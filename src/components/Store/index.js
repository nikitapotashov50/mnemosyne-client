import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  STORE_PAGE_UNLOADED
} from '../../constants/actionTypes';

// const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.store,
});

const mapDispatchToProps = dispatch => ({
  onUnload: () =>
    dispatch({  type: STORE_PAGE_UNLOADED })
});

class Store extends React.Component {
  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="store-page">
        Store
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);
