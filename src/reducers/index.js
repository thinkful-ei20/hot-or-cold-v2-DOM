import {RESET_GAME,GET_STATUS_UPDATE,GET_GUESS} from '../actions/index';

const initState = {
  guesses: [],
  feedback: 'Make Your Guess!',
  feedbackUpdate: '',
  rightGuess: Math.floor(Math.random()*100) + 1
}

// Put into utils folder
const getFeedbackandSetState = (state, guess) => {
  const diff = Math.abs(guess - state.rightGuess);
  if(diff>=50){
    feedback = 'You\'re not even in the ball park...ice cold';
  } else if (diff>=30) {
    feedback = 'Okay...cold.';
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
    feedback, guesses: [...state.guesses]
  });
}
const validateGuessAndSetState = state => {
  let guess; let feedback;
  if(NaN(Number(guess))) {
    feedback = 'Please enter a valid number.';
    return Object.assign({}, state, {
      feedback, guesses: [...state.guesses, guess]
    });
  }
  getFeedbackandSetState(state, guess);
}
const sOrNoS = guess => guess.length!==1 ? 'guesses': 'guess';
const getFeedbackUpdate = state => {
  const {guesses, feedback} = state;
  let feedbackUpdate = `Ok here's the skinny: ${feedback} and you've made ${guesses.length} ${sOrNoS()}`;
  return Object.assign({}, state, {feedbackUpdate});
}

export default (state=initState, action) => {
  switch(action.type){
    case 'RESET_GAME':
      return Object.assign({}, state, {
        guesses: [],
        feedback: 'Make Your Guess!',
        feedbackUpdate: '',
        rightGuess: action.rightGuess
      });
    case 'GET_GUESS':
      return validateGuessAndSetState();
    case 'GET_STATUS_UPDATE':
      return getFeedbackUpdate();
    default:
      return state;
  }
}