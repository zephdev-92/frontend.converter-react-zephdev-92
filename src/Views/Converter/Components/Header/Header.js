import './Header.css';
function Header({amount, setAmount}) {
  return (
    <header className="header">
      <h1>Converter</h1>
      <p> <input
      className="header__input"
      min="1"
      value={amount}
      onChange={setAmount}
      type="number"
      /> euro{amount > 1 ? 's' : ''}</p>
    </header>
  );
}

export default Header;
