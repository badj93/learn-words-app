import React from 'react'

const Button = ({ title, classTitle, style = null, type = null }) => {
  return <button type={ type } style={ style } className={ classTitle }>{ title }</button>;
};

export default Button;
