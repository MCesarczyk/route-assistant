import { useEffect, useState } from "react";

interface SummaryProps {
  time?: number,
  distance?: number,
  fuelPrice: string,
  currency: string,
  currencyRate: number
};

const Summary = ({ time, distance, fuelPrice, currency, currencyRate }: SummaryProps) => {
  const [summary, setSummary] = useState('');

  const buildSummary = () => {
    if (distance && fuelPrice && time) {
      const totalCost = (distance / 100000) * Number(fuelPrice) / currencyRate;

      const estimatedTime = Math.ceil(time / 3600 / 8);

      setSummary(
        `Overall cost of the gas: ${(totalCost).toFixed(2)} ${currency}. \
        Estimated time of the trip: ${estimatedTime} days*.`
      );
    }
  };

  useEffect(() => {
    buildSummary();
  }, [])

  return (
    <>
      <h2>summary</h2>
      <p>{summary}</p>
      <p style={{fontSize: '0.65em'}}>{"*) Assumed 8h of driving a day."}</p>
    </>
  );
};

export default Summary;
