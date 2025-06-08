// src/components/BubbleSortVisualizer.jsx
import React, { useState } from 'react';
import { bubbleSortAPI } from '../services/api';

const BubbleSortVisualizer = () => {
  const [array, setArray] = useState([5, 3, 8, 1, 2]);
  const [steps, setSteps] = useState([]);

  const handleSort = async () => {
    const result = await bubbleSortAPI(array);
    setSteps(result);
  };

  return (
    <div>
      <button onClick={handleSort}>Start Sorting</button>
      <div>
        {steps.map((step, idx) => (
          <div key={idx}>
            {step.map((num, i) => (
              <span key={i} style={{ marginRight: 10 }}>{num}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BubbleSortVisualizer;
