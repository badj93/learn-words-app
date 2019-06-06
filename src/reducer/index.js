const initialState = {
  words: [],
  error: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WORDS_REQUESTED":
      return {
        ...state,
        words: [],
        error: null,
        loading: true
      };

    case "FETCH_WORDS_SUCCESS":
      return {
        ...state,
        words: action.payload,
        error: null,
        loading: false
      };

    case "FETCH_WORDS_FAILURE":
      return {
        ...state,
        words: [],
        error: action.payload,
        loading: false
      };

    case "ADD_NEW_WORDS":
      console.log(action.payload)
      return {
        ...state,
        words: [],
        error: null,
        loading: false,
        wordItems: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
