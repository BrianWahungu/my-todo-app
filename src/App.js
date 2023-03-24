import React, { useState } from 'react';
import LoginForm from './Log-in';
import Home from './Home';
import Header from './Header';
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div>
       <Header />
      {isLoggedIn ? (
        <div>
         
          <Home username={username} />
          <button id="logout" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
