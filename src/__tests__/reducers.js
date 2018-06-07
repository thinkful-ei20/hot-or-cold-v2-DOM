import reducer from '../reducers/index';
import { RESET_GAME, resetGame } from '../actions/index';

describe('reducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: 'Null'});
    expect(state).toEqual({
      modalView: false,
      guesses: [],
      feedback: 'Make Your Guess!',
      statusUpdate: '',
      rightGuess: state.rightGuess     
    });
  });
  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: 'Null'});
    expect(state).toEqual({});
  });

  describe('resetGame', () => {
    it('Should reset the game', () => {
      let state = {
        modalView: false,
        guesses: [3, 5, 44, 35],
        feedback: 'You\'re...cold.',
        statusUpdate: 'Some stuff',
        rightGuess: Math.floor(Math.random()*100) + 1
      };
      state = reducer(state, resetGame);
      expect(state).toEqual({
        modalView: false,
        guesses: [],
        feedback: 'Make Your Guess!',
        statusUpdate: '',
        rightGuess: state.rightGuess
      });
    });
  });
});