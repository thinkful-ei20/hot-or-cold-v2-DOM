import React from 'react';
import '../styles/infomodal.css';
import {connect} from 'react-redux';
import {toggleInfoModal} from '../actions/index';

export function InfoModal(props){
  const display = {
    display: props.modalView ? 'block' : 'none'
  }
  return(
    <div className="overlay" id="modal" style={ display }>
				<div className="content">
					<h3>What do I do?</h3>
					<div>
						<p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
						<ul>
							<li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
							<li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
							<li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
						</ul>
						<p>So, Are you ready?</p>
            <a className="close" href="#close" onClick={() => 
              props.dispatch(toggleInfoModal(!props.modalView))}>Got It!</a>
					</div>
				</div>
			</div>
  )
}

const mapStateToProps = state => ({
  modalView: state.modalView
})

export default connect(mapStateToProps)(InfoModal);

