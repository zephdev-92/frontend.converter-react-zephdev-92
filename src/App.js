import { Link, Outlet } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App__logo">Welcome!</div>
      <nav className="App__nav">
        <Link to='/'>Converter</Link>
        {' | '}
        <Link to='/currencies'>Currencies</Link>
        {' | '}
        <a href='/contact'>Contact</a>
      </nav>

     <Outlet />
    </div>
  );
}

export default App;
