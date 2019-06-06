import React from 'react'

const WordsItem = ({ id, word, wordTranslate }) => {
  return (
    <tr>
      <th scope="row">{ id }</th>
      <td>{ word }</td>
      <td>{ wordTranslate }</td>
    </tr>
  );
};

export default WordsItem;
