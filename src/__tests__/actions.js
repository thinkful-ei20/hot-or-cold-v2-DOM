import { toggleInfoModal, TOGGLE_INFO_MODAL, resetGame, 
  RESET_GAME, getGuess, GET_GUESS, getStatusUpdate, 
  GET_STATUS_UPDATE } from '../actions/index';

describe('toggleInfoModal', () => {
  it('Should return the action', () => {
    const modalView = true;
    const action = toggleInfoModal(modalView);
    expect(action.type).toEqual(TOGGLE_INFO_MODAL);
    expect(action.modalView).toEqual(modalView);
  });
});

describe('resetGame', () => {
  it('Should return the action', () => {
    const rightGuess = Math.floor(Math.random()*100) + 1;
    const action = resetGame(rightGuess);
    expect(action.type).toEqual(RESET_GAME);
    expect(action.rightGuess).toEqual(rightGuess);
  });
});

describe('getGuess', () => {
  it('Should return the action', () => {
    const guess = 4;
    const action = getGuess(guess);
    expect(action.type).toEqual(GET_GUESS);
    expect(action.guess).toEqual(guess);
  });
});

describe('getStatusUpdate', () => {
  const action = getStatusUpdate();
  expect(action.type).toEqual(GET_STATUS_UPDATE);
});