export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = modalView => ({type: TOGGLE_INFO_MODAL, modalView});

export const RESET_GAME = 'RESET_GAME';
export const resetGame = rightGuess => ({type: RESET_GAME, rightGuess});

export const GET_STATUS_UPDATE = 'GET_FEEDBACK';
export const getStatusUpdate = () => ({type: GET_STATUS_UPDATE});
export const GET_GUESS = 'GET_GUESS';
export const getGuess = guess => ({type: GET_GUESS, guess});




