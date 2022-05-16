import { useState } from "react";
import Currencies from "../Currencies/Currencies";
import Header from "../Header/Header";
import Result from "../Result/Result";
import Toggler from "../Toggler/Toggler";

function Converter() {
  const [open, toggleOpen] = useState(true);
  const [currency, setCurrency] = useState({
    code: 'ZAR',
    name: 'United States Dollar',
    rate: 1.094103,
  });
  const handleClick = () => {
    toggleOpen(!open);
  };
  return (
    <div className="converter">
      <Header />
      <main className="main">
      <Toggler toggle={handleClick} isOpen={open} />
      {open && (
          <Currencies
            setCurrency={setCurrency}
          />
        )}
        <Result currency={currency} />
      </main>
    </div>
  );
}

export default Converter;
