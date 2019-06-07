const addNewWords = (state, { wordEn, wordRu }) => {
  const id = state.length + 1;
  const newWord = {
    id,
    titleEn: wordEn,
    titleRu: wordRu
  };
  return [
    ...state,
    newWord
  ];
};

export {
  addNewWords
}
