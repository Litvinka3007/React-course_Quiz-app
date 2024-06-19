import styles from './UserInput.module.scss';

import { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    numberOfQuestions: 5,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue
      };
    });
  }

  return (
    <div className={styles.userInput} id="user-input">
      <label>Number of questions (from 5 to 15):</label>
      <input 
        className={styles.input}
        type="number" 
        required
        min="5" max="15"
        value={userInput.numberOfQuestions} 
        onChange={(event) => 
          handleChange('numberOfQuestions', event.target.value)
        } 
      />
    </div>
  ); 
}