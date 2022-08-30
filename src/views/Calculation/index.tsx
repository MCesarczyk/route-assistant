import { useCallback, useEffect } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";

interface CalculationProps {
  time?: number,
  distance?: number,
  fuelPrice: string,
  setFuelPrice: (value: string) => void,
  currency: string,
  setCurrency: (value: string) => void,
  currencyRate: number,
  setCurrencyRate: (value: number) => void
};

const currencyOptions = ['EUR', 'USD', 'AUD', 'PLN'];

const Calculation = ({ time, distance, fuelPrice, setFuelPrice, currency, setCurrency, currencyRate, setCurrencyRate }: CalculationProps) => {

  const handleCurrencyChange = useCallback(() => {
    switch (currency) {
      case 'EUR':
        setCurrencyRate(4.8);
        break;

      case 'USD':
        setCurrencyRate(4.5);
        break;

      case 'AUD':
        setCurrencyRate(3.6);
        break;

      case 'PLN':
        setCurrencyRate(1);
        break;

      default:
        break;
    }
  }, [currency, setCurrencyRate]);

  useEffect(() => {
    handleCurrencyChange();
  }, [currency, handleCurrencyChange])

  return (
    <>
      <h2>calculation</h2>
      <p>
        {time && distance && `
          Total distance is ${distance && distance / 1000} km \
          and total time is ${time && Math.floor(time / 3600)} hours \
          and ${time && Math.round(time % 3600 / 60)} minutes
        `}
      </p>
      <form>
        <fieldset>
          <legend>
            Please provide current fuel price:
          </legend>
          <Input
            type={'number'}
            value={fuelPrice}
            step={0.01}
            min={0}
            setValue={setFuelPrice}
          />
        </fieldset>
        <fieldset>
          <legend>
            Select your currency:
          </legend>
          <Select
            options={currencyOptions}
            value={currency}
            setValue={setCurrency}
          />
        </fieldset>
      </form>
    </>
  );
};

export default Calculation;
