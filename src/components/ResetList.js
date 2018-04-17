import React from 'react';
import { connect } from 'react-redux';
import { resetList } from '../actions';


const ResetList = (props) => (
  <button onClick={() => props.dispatch(resetList())}>Reset</button>
);



export default connect()(ResetList);
