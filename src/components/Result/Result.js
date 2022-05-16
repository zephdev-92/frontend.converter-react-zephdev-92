import { useEffect, useState } from "react";
import axios from 'axios';
import "./Result.css";

const API_URL_CONVERT = 'https://api.exchangerate.host/convert';
const CONVERT_FROM = 'EUR';
function Result({ currency }) {
    const {code, name, rate } = currency;
    const [currencyData, setCurrencyData] = useState({});

useEffect(() => {
  async function fetchData() {
    const url = `${API_URL_CONVERT}?from=${CONVERT_FROM}&to=${code}`;

    try {
      // const apiResponse = await fetch(url);
      // const { result } = await apiResponse.json();
      const apiResponse = await axios.get(url);
      const { result } = await apiResponse.data;

      setCurrencyData({
        ...currency,
        rate: result,
      });

    } catch (error) {
      console.error(error);
    }
  }

  fetchData();
}, [currency])
   return(
    <div className='result'>
      {/* currencyData.rate? : si tu ne connais pas currencyData.rate alors tu écris '–' */}
      {/* si tu connais tu continues l'instruction et tu affiches `currencyData.rate.toFixed(2)` */}
      <strong>{currencyData.rate?.toFixed(2) ?? '–'}</strong>

      <span>{currencyData.name}</span>
    </div>
 );
}

export default Result;
