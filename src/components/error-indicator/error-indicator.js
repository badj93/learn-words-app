import React from 'react'
import './error-indicator.css'

const ErrorIndicator = () => {

  const imgError = Math.random() > 0.5 ? 'error-img' : 'error-img-alt';

  return (
    <div className="container">
      <div className="row">
        <div className={ imgError }>
        </div>
      </div>
    </div>

  );
};

export default ErrorIndicator;
