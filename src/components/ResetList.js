import React from 'react';
import { connect } from 'react-redux';
import { resetList } from '../actions';


const ResetList = (props) => (
  <button className="reset" onClick={() => props.dispatch(resetList())}>Reset</button>
);

// whenever you use connect from react-redux and export a component with it, you get access to the dispatch function which allows you to dispatch an action.

export default connect()(ResetList);
