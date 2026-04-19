import React from 'react';
import logo from '../task.webp';
import './Header.css';
import { FaSun, FaMoon } from "react-icons/fa";

export default function Header({ theme, setTheme, toggleTheme }) {

  

  return (
    <header className={`header ${theme}`}>
      <div className="header-container">

        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>TaskMate</h1>
        </div>

        <div className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </div>

      </div>
    </header>
  );
}


