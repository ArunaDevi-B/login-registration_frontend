import Login from './Login/Login';
import Register from './Login/Register';
import React , { useState, useEffect } from 'react';
import '../Css/App.css';
import Router from './Route';

function App() {

  const [ currentForm, setCurrentForm ] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
