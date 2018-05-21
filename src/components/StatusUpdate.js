import React from 'react';
import {connect} from 'react-redux';
import '../styles/statusupdate.css';

const mapStateToProps = state => ({
  statusUpdate: state.statusUpdate
})

export const StatusUpdate = props => (
  <p
    id="status-update"
    className="visuallyhidden"
    aria-live="assertive"
    aria-atomic="true">
    {props.statusUpdate}</p>
);

export default connect(mapStateToProps)(StatusUpdate);