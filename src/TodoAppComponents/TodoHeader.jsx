import React from 'react';
import Logo from './Logo';

function TodoHeader({ darkMode, setDarkMode }) {
  return (
    <header>
      <Logo />
      <h1>TaskoPhobia</h1>
      <button 
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
}

export default TodoHeader;