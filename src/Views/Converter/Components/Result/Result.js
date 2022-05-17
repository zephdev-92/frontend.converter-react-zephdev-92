import "./Result.css";

function Result({ currency }) {
    return(
    <div className='result'>
      {/* currencyData.result? : si tu ne connais pas currencyData.result alors tu écris '–' */}
      {/* si tu connais tu continues l'instruction et tu affiches `currencyData.result.toFixed(2)` */}
      <strong>{currency.result?.toFixed(2) ?? '–'}</strong>

      <span>{currency.description}</span>
    </div>
 );
}

export default Result;
