import { useCallback, useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";

import { IRouteData } from "../../common/interfaces";
import Report from "./Report";

interface SummaryProps {
  origin?: string;
  destination?: string;
  routeData?: IRouteData;
  fuelPrice: string;
  currency: string;
  currencyRate: number;
};

const Summary = ({ origin, destination, routeData, fuelPrice, currency, currencyRate }: SummaryProps) => {
  const time = routeData?.summary.totalTime;
  const distance = routeData?.summary.totalDistance;
  const [summary, setSummary] = useState<any>();

  const buildSummary = useCallback(() => {
    if (distance && fuelPrice && time) {
      const totalCost = (distance / 100000) * Number(fuelPrice) / currencyRate;

      const travelTime = Math.ceil(time / 3600 / 8);
      const estimatedTime = `${travelTime} day${travelTime === 1 ? '' : 's'}`;

      setSummary({
        origin: origin,
        destination: destination,
        routeName: routeData.name,
        totalCost: `${totalCost.toFixed(2)} ${currency}`,
        estimatedTime: estimatedTime,
        instructions: routeData.instructions.map(
          (item, index) =>
            `${index + 1}. ${item.text} - ${item.distance}km
            `
        )
      });
    }
  }, [currency, currencyRate, distance, fuelPrice, time]);

  useEffect(() => {
    buildSummary();
  }, [buildSummary])

  return (
    <PDFViewer style={{ width: '100%', height: '80vh' }}>
      <Report summary={summary} />
    </PDFViewer>
  );
};

export default Summary;
