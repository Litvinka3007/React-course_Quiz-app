import styles from './Homepage.module.scss';

import Header from '../../components/Header.jsx';
import Button from '../../components/Button.jsx';
import Select from '../../components/Select.jsx'
import UserInput from './UserInput.jsx';

import { useState } from 'react';

export default function Homepage() {
  const [category, setCategory] = useState('React');
  const [difficulty, setDifficulty] = useState('Medium');
  const [type, setType] = useState('Single Answer');
  const [time, setTime] = useState('5 minutes');
  
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  
  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };
  
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  
  return (
    <>
      <Header />
  
      <div className={styles.settingsContainer}>
        <UserInput />
  
        <Select
          label="Category:"
          options={[
            { label: 'React', value: 'React' },
            { label: 'HTML', value: 'HTML' },
            { label: 'CSS', value: 'CSS' },            
          ]}
          value={category}
          onChange={handleCategoryChange}
        />
  
        <Select
          label="Difficulty:"
          options={[
            { label: 'Easy', value: 'Easy' },
            { label: 'Medium', value: 'Medium' },
            { label: 'Hard', value: 'Hard' },
          ]}
          value={difficulty}
          onChange={handleDifficultyChange}
        />
  
        <Select
          label="Type:"
          options={[
            { label: 'True/False', value: 'True/False' },
            { label: 'Single Answer', value: 'Single Answer' },
            { label: 'Multiple Choice', value: 'Multiple Choice' },
          ]}
          value={type}
          onChange={handleTypeChange}
        />
  
        <Select
          label="Time:"
          options={[
            { label: '1 minute', value: '1 minute' },
            { label: '2 minutes', value: '2 minutes' },
            { label: '5 minutes', value: '5 minutes' },
          ]}
          value={time}
          onChange={handleTimeChange}
        />
  
        <div className={styles.primaryButtons}>
          <Button>Start quiz</Button>
          <Button>See my stats</Button>
        </div>
      </div>   
    </>    
  )
}