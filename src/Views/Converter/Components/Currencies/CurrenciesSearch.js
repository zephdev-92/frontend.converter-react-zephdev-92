function CurrenciesSearch({query, setQuery}) {


    return (
      <input
        className='currencies__search'
        placeholder='Rechercher'
        value={query}
        onChange={setQuery}
      />
    );
  }

  export default CurrenciesSearch;
