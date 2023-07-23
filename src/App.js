import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = () => {
    if (name && email) {
      setSubmittedData([...submittedData, { name, email }]);
      setName('');
      setEmail('');
    }
  };

  return (
    <div className="App">
      <h1>My First React Form!</h1>
      <div className="form">
        <input
          type="text"
          placeholder="姓名"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="電子郵件"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>提交</button>
      </div>
      <div className="submitted-data">
        {/* <h2>提交的內容</h2> */}
        {submittedData.map((data, index) => (
          <div key={index}>
            <p><strong>姓名：</strong>{data.name}</p>
            <p><strong>電子郵件：</strong>{data.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;