import SearchForm from "../../components/SearchForm";
import { Location } from "../../interfaces";

interface HomeProps {
  origin: Location | undefined,
  setOrigin: Function,
  destination: Location | undefined,
  setDestination: Function
}

const Home = ({ origin, setOrigin, destination, setDestination }: HomeProps) => (
  <>
    <SearchForm
      label="From:"
      placeholder="Start point"
      result={origin}
      setResult={setOrigin}
    />
    <SearchForm
      label="To:"
      placeholder="Finish point"
      result={destination}
      setResult={setDestination}
    />
  </>
);

export default Home;