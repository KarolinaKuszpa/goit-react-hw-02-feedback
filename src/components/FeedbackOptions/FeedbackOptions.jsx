import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const getButtonStyle = option => {
    switch (option) {
      case 'good':
        return styles.buttonGood;
      case 'neutral':
        return styles.buttonNeutral;
      case 'bad':
        return styles.buttonBad;
      default:
        return styles.button;
    }
  };

  return (
    <div className={styles.container}>
      {options.map(option => (
        <button
          key={option}
          className={`${styles.button} ${getButtonStyle(option)}`}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
