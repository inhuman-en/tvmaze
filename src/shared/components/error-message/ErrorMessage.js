import React from 'react';
import './ErrorMessage.scss'

const ErrorMessage = ({ text, className = '' }) => <div className={`error-message ${className}`}>{text}</div>;

export default ErrorMessage;
