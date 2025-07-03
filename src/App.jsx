import Cart from './components/cart'
import './App.css'
import { data } from './data/data'
import { useState } from 'react';

const stored = JSON.parse(localStorage.data || '{}');

export default function App() {
  const [theme, setTheme] = useState(stored.theme || 'light');
  document.body.className = theme;

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;

    localStorage.data = JSON.stringify({ theme: newTheme, });
  }

  return (
    <>
      <div className="topBar">
        <button className='theme-toggle' onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Moda Geç' : 'Light Moda Geç'}
        </button>
      </div>
      <Cart data={data}></Cart>
    </>
  );
}