import Cart from './components/cart'
import './App.css'
import { data } from './data/data'
import { useState } from 'react';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <>
      <div className="topBar">
        <button className="themeToggle" onClick={toggleTheme}>
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <Cart data={data}></Cart>
    </>
  );
}