import { useState, useEffect } from 'react';

import { getCurrenciesList, getConvertedCurrency } from '../../Models/CurrenciesModel';

export default function useConverterViewModel() {
  // On enregistre via le state les informations recueillies et transformées
  // elles seront directement utilisées par la vue
    // cas d'erreur
  const [error, setError] = useState(null);
    // tableau des devises
  const [currenciesData, setCurrenciesData] = useState([]);
    // devise sélectionnée
  const [currencyData, setCurrencyData] = useState({
    code: 'ZAR',
    description: 'South African Rand',
    result: 16.779419,
  });
  // Recherche d'une devise
  const [query, setQuery] = useState('');
     // montant à convertir
     const [amount, setAmount] = useState(1);
  // à l'initialisation, on va chercher le taux de conversion
  useEffect(() => {
    async function initCurrencyResult() {
      await convertToCurrency(currencyData);
    }

    initCurrencyResult();
  }, [amount]);

  // Fonction récupérant la liste des devises
  // Transforme l'objet brut reçu par l'API en tableau utilisable par la vue
  async function getCurrencies() {
    try {
      const { symbols } = await getCurrenciesList();

      setCurrenciesData(Object.values(symbols));
    } catch (err) {
      setError(err);
    }
  }
  async function searchCurrencies(event) {
    const { value } = event.target;
    setQuery(value);

    try {
      if (value.trim().length > 0) {
        const { symbols } = await getCurrenciesList();
        const symbolsArray = Object.values(symbols);

        const filteredSymbols = symbolsArray.filter(({ description }) => (
          description.toLowerCase().includes(value.trim().toLowerCase())
        ));

        setCurrenciesData(filteredSymbols);
      }
    } catch (err) {
      setError(err);
    }
  }
  // Fonction récupérant la valeur de la conversion entre l'euro et la devise demandée
  // Transforme l'objet retourné par la réponse en l'associant avec l'objet de la devise
  // afin de faciliter le travail à la vue pour l'affichage
  async function convertToCurrency(currency) {
    try {
      const { result } = await getConvertedCurrency(amount, currency.code);

      setCurrencyData({
        ...currency,
        result,
      });
    } catch (error) {
      setError(error);
    }
  }
  function changeAmount(event) {
    if (parseFloat(event.target.value)) {
      setAmount(parseFloat(event.target.value));
    }
  }
  return {
    error,
    currenciesData,
    currencyData,
    query,
    amount,
    getCurrencies,
    convertToCurrency,
    searchCurrencies,
    changeAmount
  };
};
