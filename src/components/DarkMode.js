import React from 'react'
import './DarkMode.css'

const DarkMode = () => {

  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
    localStorage.setItem('theme-color', 'dark');
  }
  
  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
    localStorage.setItem('theme-color', 'light');
  }

  const toggleTheme = (e) => {
      if (e.target.checked) {
        setDarkMode();
      } else {
        setLightMode();
      }
  };

  return (
    <div className="dark_mode">
      <input className="dark_mode_input" type="checkbox" id="darkmode-toggle" onChange={toggleTheme} />

      <label className="dark_mode_label" for="darkmode-toggle">

      </label>
    </div>
  );
}

export default DarkMode