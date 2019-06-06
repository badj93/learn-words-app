import React from 'react'

const Button = ({ title, classTitle, style = null, disabled = false, onClick }) => {
  return <button onClick={ onClick } disabled={ disabled } style={ style } className={ classTitle }>{ title }</button>;
};

export default Button;
