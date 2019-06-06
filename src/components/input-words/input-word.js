import React from 'react'

const InputWord = ({ labelText, placeholder, descInput, idName, classTitle, style = null }) => {
  return (
    <div className="form-group">
      <label htmlFor={ idName }>{ labelText }</label>
      <input type="email" className={ classTitle } style={ style } id={ idName }
             placeholder={ placeholder }/>
        <small className="form-text text-muted">{ descInput }</small>
    </div>
  );
};

export default InputWord;
