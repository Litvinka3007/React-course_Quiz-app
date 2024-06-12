import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import CustomButton from './components/CustomButton.jsx';
import CustomSelect from './components/CustomSelect.jsx'

import { useState } from 'react';

import './App.scss';

function App() {
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

      <div className='settings-container'>
        <UserInput />

        <CustomSelect
          label="Category:"
          options={[
            { label: 'React', value: 'React' },
            { label: 'HTML', value: 'HTML' },
            { label: 'CSS', value: 'CSS' },            
          ]}
          value={category}
          onChange={handleCategoryChange}
        />

        <CustomSelect
          label="Difficulty:"
          options={[
            { label: 'Easy', value: 'Easy' },
            { label: 'Medium', value: 'Medium' },
            { label: 'Hard', value: 'Hard' },
          ]}
          value={difficulty}
          onChange={handleDifficultyChange}
        />

        <CustomSelect
          label="Type:"
          options={[
            { label: 'True/False', value: 'True/False' },
            { label: 'Single Answer', value: 'Single Answer' },
            { label: 'Multiple Choice', value: 'Multiple Choice' },
          ]}
          value={type}
          onChange={handleTypeChange}
        />

        <CustomSelect
          label="Time:"
          options={[
            { label: '1 minute', value: '1 minute' },
            { label: '2 minutes', value: '2 minutes' },
            { label: '5 minutes', value: '5 minutes' },
          ]}
          value={time}
          onChange={handleTimeChange}
        />

        <div className='primary-buttons'>
          <CustomButton className='primary-btn'>Start quiz</CustomButton>
          <CustomButton className='primary-btn'>See my stats</CustomButton>
        </div>
      </div>   
    </>    
  )
}

export default App;
