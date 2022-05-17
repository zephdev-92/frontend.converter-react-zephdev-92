import { useEffect, useState } from "react";
import Currencies from "./Components/Currencies/Currencies";
import Header from "./Components/Header/Header";
import Result from "./Components/Result/Result";
import Toggler from "./Components/Ui/Toggler/Toggler";

import useConverterViewModel from './ConverterViewModel';
function Converter() {
  const [open, toggleOpen] = useState(true);

  const handleClick = () => {
    toggleOpen(!open);
  };

  const {
    error,
    currenciesData,
    currencyData,
    query,
    amount,
    getCurrencies,
    convertToCurrency,
    searchCurrencies,
    changeAmount,

  } = useConverterViewModel();
  useEffect(() => {
    getCurrencies();
  }, []);  // se déclenche UNE seule fois, à l'initialisation du composant

  // on gère les erreurs
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]); // se déclenche si la valeur de 'error' change

  return (
    <div className="converter">
      <Header amount={amount} setAmount={changeAmount} />
      <main className="main">
      <Toggler toggle={handleClick} isOpen={open} />
      {open && (
          <Currencies
            currencies={currenciesData}
            setCurrency={convertToCurrency}
            query={query}
            setQuery={searchCurrencies}
          />
        )}
        <Result currency={currencyData} />
      </main>
    </div>
  );
}

export default Converter;
