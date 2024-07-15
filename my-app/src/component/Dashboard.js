import React from 'react';
import Table from '../utils/Table';

const App = () => {
  const data = [
    { id: 1, name: "John Doe", age: 28, email: "john@example.com" },
    { id: 2, name: "Jane Doe", age: 32, email: "jane@example.com" },
    { id: 3, name: "Sam Smith", age: 45, email: "sam@example.com" },
    { id: 4, name: "Alice Johnson", age: 23, email: "alice@example.com" }
  ];

  return (
    <div>
      <h1>Simple Table</h1>
      <Table data={data} />
    </div>
  );
};

export default App;