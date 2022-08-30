import { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";

import Report from "./Report";

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
    <PDFViewer style={{ width: '100%', height: '80vh' }}>
      <Report summary={summary} />
    </PDFViewer>
  );
};

export default Summary;
