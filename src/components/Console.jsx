// src/components/Console.jsx
import React from 'react';

const Console = ({ output }) => (
  <div className="console">
    <h3>Console Output</h3>
    <div className="output">{output || "Run the code to see output here"}</div>
  </div>
);

export default Console;
