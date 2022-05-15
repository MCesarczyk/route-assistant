import SearchForm from "../../components/SearchForm";

interface homeProps {
  setOrigin: Function,
  setDestination: Function
}

const Home = ({ setOrigin, setDestination }: homeProps) => (
  <>
    <SearchForm
      label="From:"
      placeholder="Start point"
      setResult={setOrigin}
    />
    <SearchForm
      label="To:"
      placeholder="Finish point"
      setResult={setDestination}
    />
  </>
);

export default Home;