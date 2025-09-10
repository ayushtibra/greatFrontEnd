import React, { useState } from 'react';
import styles from './styles.module.scss';

function ChipsInput() {
  const [input, setInput] = useState('');
  const [enterInput, setEnterInput] = useState([]);
  
  // Debug: Check if styles are being imported correctly
  console.log('Available styles:', styles);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  }

  const removeData = () => {
    setEnterInput([]);
  }

  const removeChip = (itemName, itemPosition) => {
    const data = enterInput.filter((item, index) => {
      return item.id != itemPosition
    });
    setEnterInput(data);
  }

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && input.trim() !== '') {
      event.preventDefault();
      const newChip: Chip = {
        id: Date.now(),
        name: input.trim()
      }
      setEnterInput((prev) => [...prev, newChip]);
      setInput('');
    }
  }

  return (
    <div className={styles.mainContainer}>
      <h2>Chips Input</h2>
      <p>{input}</p>

      <div>
        {enterInput?.length > 0 && enterInput?.map((item, index) => (
        <div className={styles.chipInput} key={index}>
          <span className={styles.chipText}>{item.name}</span>
          <button onClick={() => removeChip(item.name, item.id)}>X</button>
        </div>
      ))}
      </div>

      <br />

      <button onClick={removeData}>Reset Filter</button>

      <br /> 

      <input
        type="text"
        placeholder="Type a chip and press tag"
        className={styles.input}
        value={input}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
    </div>
  );
}

export default ChipsInput;