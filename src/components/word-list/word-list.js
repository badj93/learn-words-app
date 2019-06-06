import React from 'react'
import WordsItem from '../word-list-item/word-list-item'

const WordList = ({ words }) => {

  const wordItems = words.map(({ id, titleEn, titleRu }) => {
    return (
      <WordsItem id={ id } word={ titleEn } wordTranslate={ titleRu }/>
    );
  });

  return (
    <div className="container content-table">
      <div className="row">
        <h2>Мой словарный запас</h2>
        <table className="table table-hover">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Слово ENG</th>
            <th scope="col">Перевод</th>
          </tr>
          </thead>
          <tbody>
          { wordItems }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WordList;
