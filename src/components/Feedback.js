import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  feedback: state.feedback
});

export const Feedback = props => (
  <h2 id='feedback'>{props.feedback}</h2>
)

export default connect(mapStateToProps)(Feedback);