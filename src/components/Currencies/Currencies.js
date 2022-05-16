//import currenciesData from '../../data/currencies.json';
import { useEffect, useState } from 'react';

import CurrenciesItem from './CurrenciesItem/CurrenciesItem';
const API_URL_SYMBOLS = 'https://api.exchangerate.host/symbols';

function Currencies({ setCurrency }){
  const [currenciesData, setCurrenciesData] = useState([]);
  useEffect(() => {
    fetch(API_URL_SYMBOLS, { method: 'GET' })
    .then((response) => {
      if (!response.ok) {
        // on lève manuellement une erreur
        throw new Error(`[HTTP Error] status: ${response.status}`);
      }

      return response.json();
    })
    .then(({ symbols }) => {
      console.log(Object.values(symbols));
      setCurrenciesData(Object.values(symbols));
    })
    .catch((error)  => console.error(error));
    // .catch(console.error);
}, [])


  return (
    <div className='currencies'>
      <h2>Currencies</h2>

      <ul>
        {/* {currencies} */}
        {currenciesData.map((currency) => (
          <CurrenciesItem
            key={currency.code}
            currency={currency}
            setCurrency={setCurrency}
          />
        ))}
      </ul>
    </div>
  );


}

export default Currencies;
