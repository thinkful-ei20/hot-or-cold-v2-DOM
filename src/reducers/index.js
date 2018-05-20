import {RESET_GAME, GET_GUESS, TOGGLE_INFO_MODAL} from '../actions/index';


const initState = {
  modalView: false,
  guesses: [],
  feedback: 'Make Your Guess!',
  feedbackUpdate: '',
  rightGuess: Math.floor(Math.random()*100) + 1
}

export default (state=initState, action) => {
  if(action.type===RESET_GAME){
    return Object.assign({}, state, {
      modalView: false,
      guesses: [],
      feedback: 'Make Your Guess!',
      feedbackUpdate: '',
      rightGuess: action.rightGuess
    });
  }
  if(action.type===GET_GUESS){
    let guess = action.guess; let feedback;
    if(isNaN(Number(guess))) {
      feedback = 'Please enter a valid number.';
      return Object.assign({}, state, {
        feedback, 
        guesses: [...state.guesses, guess]
      });
    }
    const diff = Math.abs(guess - state.rightGuess);
    if(diff>=50){
      feedback = 'You\'re not even in the ball park...ice cold';
    } else if (diff>=30) {
      feedback = 'You\'re...cold.';
    } else if (diff>=20) {
      feedback = 'You\'re feeling a little warmer than before';
    } else if (diff>=10) {
      feedback = 'You\'re making it hot in here...';
    } else if (diff>=1) {
      feedback = 'You\'re damn near in the number\'s lap';
    } else {
      feedback = 'You got it!'
    }
    return Object.assign({}, state, {
      feedback, guesses: [...state.guesses, guess]
    });
  }
  if(action.type===TOGGLE_INFO_MODAL) {
    return {...state, modalView: !state.modalView}
  }
  return state;
}
