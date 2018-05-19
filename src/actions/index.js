export const GET_INFO_MODAL = 'GET_INFO_MODAL';
export const getInfoModal = () => ({type: GET_INFO_MODAL});
export const HIDE_INFO_MODAL = 'HIDE_INFO_MODAL';
export const hideInfoModal = () => ({type: HIDE_INFO_MODAL});
export const RESET_GAME = 'RESET_GAME';
export const resetGame = rightGuess => ({type: RESET_GAME, rightGuess});

export const GET_STATUS_UPDATE = 'GET_FEEDBACK';
export const getStatusUpdate = () => ({type: GET_STATUS_UPDATE});
export const GET_GUESS = 'GET_GUESS';
export const getGuess = guess => ({type: GET_GUESS, guess});




