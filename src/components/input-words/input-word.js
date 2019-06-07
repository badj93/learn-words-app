import React, { Component } from 'react'
import './input-word.css'

export default class InputWord extends Component {

  state = {
    error: false
  };

  inputWord = (e) => {
    if (this.props.value.validation.required) {

      if (e.target.value === '') {
        this.setState({ error: true })
      } else {
        this.setState({ error: false })
      }

      const newWord = {
        word: e.target.value,
        lang: this.props.lang
      };

      this.props.onChange(newWord);
    }
  };

  render() {

    const { idName, value, classTitle, style, placeholder, descInput } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={ idName }>{ value.label }</label>
        <input type="text" className={ this.state.error ? `${classTitle} error` : `${classTitle}` } style={ style } id={ idName }
               placeholder={ placeholder }
               onChange={ this.inputWord }
        />
        <small className="form-text text-muted">{ descInput }</small>
      </div>
    );
  }
};

