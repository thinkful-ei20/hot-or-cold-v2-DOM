export const GET_INFO_MODAL = 'GET_INFO_MODAL';
export const getInfoModal = () => ({type: GET_INFO_MODAL});
export const RESET_GAME = 'RESET_GAME';
export const resetGame = rightGuess => ({type: RESET_GAME, rightGuess});

export const GET_FEEDBACK = 'GET_FEEDBACK';
export const getFeedback = () => ({type: GET_FEEDBACK});
export const GET_GUESS = 'GET_GUESS';
export const getGuess = guess => ({type: GET_GUESS, guess});




