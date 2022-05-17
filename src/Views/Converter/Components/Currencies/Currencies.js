import CurrenciesItem from './CurrenciesItem/CurrenciesItem';
import CurrenciesSearch from './CurrenciesSearch';

function Currencies({currencies, setCurrency, query, setQuery }){
    // MVVM remplace les instructions ci-dessous
    // Model → axios
    // ViewModel → variables d'état : déclaration + update

  return (
    <div className='currencies'>
      <CurrenciesSearch
        query={query}
        setQuery={setQuery} />

      <ul>
        {/* {currencies} */}
        {currencies.map((currency) => (
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
