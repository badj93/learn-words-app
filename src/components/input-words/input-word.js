import React from 'react'

const InputWord = ({ labelText, placeholder, descInput, idName, classTitle, style = null, onChange }) => {

  return (
    <div className="form-group">
      <label htmlFor={ idName }>{ labelText }</label>
      <input type="text" className={ classTitle } style={ style } id={ idName }
             placeholder={ placeholder }
             onChange={ onChange }
      />
        <small className="form-text text-muted">{ descInput }</small>
    </div>
  );
};

export default InputWord;
