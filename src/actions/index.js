const wordsRequested = () => {
  return {
    type: 'FETCH_WORDS_REQUESTED'
  }
};

const wordsLoaded = (words) => {
  return {
    type: 'FETCH_WORDS_SUCCESS',
    payload: words
  }
};

const wordsError = (error) => {
  return {
    type: 'FETCH_WORDS_FAILURE',
    payload: error
  }
};

const fetchWords = (wordstoreService, dispatch) => () => {
  dispatch(wordsRequested());
  wordstoreService.getWords()
    .then((data) => dispatch(wordsLoaded(data)))
    .catch((err) => dispatch(wordsError(err)))
};

export {
  wordsRequested,
  fetchWords
};
