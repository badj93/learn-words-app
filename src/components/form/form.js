import React, { Component } from 'react'
import InputWords from '../input-words/input-word'
import Button from '../button/button'
import { connect } from "react-redux"
import { updateWords } from '../../actions'

class Form extends Component {

  state = {
    wordRu: {
      validation: {
        required: true
      },
      label: 'Добавить слово в базу на русском',
      value: ''
    },
    wordEn: {
      validation: {
        required: true
      },
      label: 'Добавить слово в базу на английском',
      value: ''
    }
  };

  addWord = (e) => {
    e.preventDefault();
    if (this.state.wordEn.value !== '' && this.state.wordRu.value !== '') {
      this.props.addWordList(this.state.wordRu.value, this.state.wordEn.value);
    }
  };

  onChangeRu = (data) => {
    const newWord = {
      ...this.state.wordRu,
      value: data.word
    };
    this.setState({ wordRu: newWord })
  };

  onChangeEn = (data) => {
    const newWord = {
      ...this.state.wordEn,
      value: data.word
    };
    this.setState({ wordEn: newWord })
  };

  onChange = (word) => {
    if (word.lang === 'en') {
      this.onChangeEn(word);
    } else {
      this.onChangeRu(word);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <form>
            <InputWords
              placeholder="Введите слово"
              descInput="Можно ввести слово/словосочетание/предложение"
              idName="input1"
              classTitle="form-control"
              lang="ru"
              onChange={ this.onChange }
              value={ this.state.wordRu }
            />
            <InputWords
              placeholder="Введите перевод"
              descInput="Перевод можно вводить через запятую"
              idName="input2"
              classTitle="form-control"
              lang="en"
              onChange={ this.onChange }
              value={ this.state.wordEn }
            />
            <Button
              classTitle="btn btn-primary"
              title="Добавить"
              onClick={ this.addWord }
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addWordList: (wordEn, wordRu) => dispatch(updateWords({ wordEn, wordRu }))
  }
};

export default connect(null, mapDispatchToProps)(Form);
