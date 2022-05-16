function CurrenciesItem({ currency, setCurrency }) {
  const {code, description, rate} = currency;
    return (
      <li className='currency'
      onClick={() => {
        setCurrency({
          code,
          name: description,
          rate: rate,
        })
      }}
      >{description}</li>
    );
  }

  export default CurrenciesItem;
